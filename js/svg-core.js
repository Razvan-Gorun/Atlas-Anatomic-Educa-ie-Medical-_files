// ===== SVG CORE HELPERS =====
function addToSvg(svg, tag, attrs, sys, title, name) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));

  const sysCls = sys === 'muscle' ? 'b-muscle' :
                 sys === 'ligament' ? 'b-lig' :
                 sys === 'dental' ? 'b-dental' : 'b-skel';

  el.setAttribute('class', `bone-el ${sysCls} ${!layers[sys] ? 'layer-off' : ''}`);

  const tip = document.getElementById('tip');

  el.addEventListener('mouseenter', (e) => {
    tip.textContent = title;
    tip.style.display = 'block';
  });
  el.addEventListener('mousemove', (e) => {
    tip.style.left = (e.clientX + 12) + 'px';
    tip.style.top = (e.clientY - 28) + 'px';
  });
  el.addEventListener('mouseleave', () => tip.style.display = 'none');
  el.addEventListener('click', () => {
    document.querySelectorAll('.bone-el').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
    if (anatomyDB[name]) {
      loadSubject(name, null);
      if (currentRPTab === 'info') renderInfo(name, anatomyDB[name]);
    }
  });

  svg.appendChild(el);
  return el;
}

function E(svg, cx, cy, rx, ry, sys, title, name) {
  return addToSvg(svg, 'ellipse', { cx, cy, rx, ry }, sys, title, name);
}

function R(svg, x, y, w, h, rx, sys, title, name) {
  return addToSvg(svg, 'rect', { x, y, width: w, height: h, rx }, sys, title, name);
}

function P(svg, d, sys, title, name) {
  return addToSvg(svg, 'path', { d, fill: 'none', 'stroke-width': '2.5', 'stroke-linecap': 'round' }, sys, title, name);
}

function C(svg, cx, cy, r, title) {
  const circ = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circ.setAttribute('cx', cx);
  circ.setAttribute('cy', cy);
  circ.setAttribute('r', r);
  circ.setAttribute('fill', '#6a7a8e');
  circ.setAttribute('stroke', 'none');
  circ.setAttribute('class', 'bone-el');
  const tip = document.getElementById('tip');
  circ.addEventListener('mouseenter', (e) => {
    tip.textContent = title;
    tip.style.display = 'block';
  });
  circ.addEventListener('mousemove', (e) => {
    tip.style.left = (e.clientX + 12) + 'px';
    tip.style.top = (e.clientY - 28) + 'px';
  });
  circ.addEventListener('mouseleave', () => tip.style.display = 'none');
  svg.appendChild(circ);
}
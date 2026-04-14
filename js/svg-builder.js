let currentView = 'anterior';

function buildSVG(view) {
  currentView = view;
  const container = document.getElementById('skel-container');
  const existingSvg = container.querySelector('svg');
  if (existingSvg) existingSvg.remove();

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 260 850');
  svg.style.cssText = 'width: 260px; height: 850px; overflow: visible; display: block; margin: 0 auto;';

  if (layers.skeleton) drawSkeleton(svg, view);
  if (layers.muscle) drawMuscles(svg, view);
  if (layers.ligament) drawLigaments(svg, view);
  if (layers.dental) drawDental(svg, view);

  container.appendChild(svg);
}

document.addEventListener('mouseleave', () => document.getElementById('tip').style.display = 'none');
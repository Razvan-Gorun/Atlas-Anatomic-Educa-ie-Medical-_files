function drawDental(svg, view) {
  if (view !== 'anterior') return;

  const sys = 'dental';
  const scale = 1.8;
  const offsetY = 40;

  function sX(x) { return 130 + (x - 130) * scale; }
  function sY(y) { return offsetY + y * scale; }
  function sW(w) { return w * scale; }
  function sH(h) { return h * scale; }
  function sRX(r) { return r * scale; }

  // Arcada superioară
  R(svg, sX(118), sY(56), sW(8), sH(10), sRX(2), sys, 'Incisiv central superior drept (11)', 'Dinte 11 – Incisiv central superior drept');
  R(svg, sX(134), sY(56), sW(8), sH(10), sRX(2), sys, 'Incisiv central superior stâng (21)', 'Dinte 21 – Incisiv central superior stâng');
  R(svg, sX(108), sY(58), sW(7), sH(9), sRX(2), sys, 'Incisiv lateral superior drept (12)', 'Dinte 12 – Incisiv lateral superior drept');
  R(svg, sX(145), sY(58), sW(7), sH(9), sRX(2), sys, 'Incisiv lateral superior stâng (22)', 'Dinte 22 – Incisiv lateral superior stâng');

  const caninSupDr = `100,60 107,60 105,72 100,72`.split(' ').map(pt => `${sX(pt.split(',')[0])},${sY(pt.split(',')[1])}`).join(' ');
  addToSvg(svg, 'polygon', { points: caninSupDr, fill: 'var(--dental-fill)', stroke: 'var(--dental-stroke)', 'stroke-width': '0.8' }, sys, 'Canin superior drept (13)', 'Dinte 13 – Canin superior drept');
  const caninSupSt = `153,60 160,60 160,72 155,72`.split(' ').map(pt => `${sX(pt.split(',')[0])},${sY(pt.split(',')[1])}`).join(' ');
  addToSvg(svg, 'polygon', { points: caninSupSt, fill: 'var(--dental-fill)', stroke: 'var(--dental-stroke)', 'stroke-width': '0.8' }, sys, 'Canin superior stâng (23)', 'Dinte 23 – Canin superior stâng');

  R(svg, sX(88), sY(62), sW(9), sH(8), sRX(3), sys, 'Premolar 1 superior drept (14)', 'Dinte 14 – Primul premolar superior drept');
  R(svg, sX(78), sY(64), sW(9), sH(8), sRX(3), sys, 'Premolar 2 superior drept (15)', 'Dinte 15 – Al doilea premolar superior drept');
  R(svg, sX(163), sY(62), sW(9), sH(8), sRX(3), sys, 'Premolar 1 superior stâng (24)', 'Dinte 24 – Primul premolar superior stâng');
  R(svg, sX(173), sY(64), sW(9), sH(8), sRX(3), sys, 'Premolar 2 superior stâng (25)', 'Dinte 25 – Al doilea premolar superior stâng');

  R(svg, sX(66), sY(66), sW(10), sH(8), sRX(4), sys, 'Molar 1 superior drept (16)', 'Dinte 16 – Primul molar superior drept');
  R(svg, sX(55), sY(68), sW(10), sH(8), sRX(4), sys, 'Molar 2 superior drept (17)', 'Dinte 17 – Al doilea molar superior drept');
  R(svg, sX(45), sY(70), sW(8), sH(7), sRX(3), sys, 'Molar 3 superior drept (18) - minte', 'Dinte 18 – Molar de minte superior drept');
  R(svg, sX(184), sY(66), sW(10), sH(8), sRX(4), sys, 'Molar 1 superior stâng (26)', 'Dinte 26 – Primul molar superior stâng');
  R(svg, sX(195), sY(68), sW(10), sH(8), sRX(4), sys, 'Molar 2 superior stâng (27)', 'Dinte 27 – Al doilea molar superior stâng');
  R(svg, sX(207), sY(70), sW(8), sH(7), sRX(3), sys, 'Molar 3 superior stâng (28) - minte', 'Dinte 28 – Molar de minte superior stâng');

  addToSvg(svg, 'path', { d: `M${sX(42)},${sY(74)} Q${sX(130)},${sY(86)} ${sX(218)},${sY(74)}`, fill: 'none', stroke: 'var(--dental-stroke)', 'stroke-width': '1.5' }, sys, 'Maxilar superior', 'Maxilar');

  // Arcada inferioară
  R(svg, sX(118), sY(82), sW(8), sH(10), sRX(2), sys, 'Incisiv central inferior stâng (31)', 'Dinte 31 – Incisiv central inferior stâng');
  R(svg, sX(134), sY(82), sW(8), sH(10), sRX(2), sys, 'Incisiv central inferior drept (41)', 'Dinte 41 – Incisiv central inferior drept');
  R(svg, sX(108), sY(84), sW(7), sH(9), sRX(2), sys, 'Incisiv lateral inferior stâng (32)', 'Dinte 32 – Incisiv lateral inferior stâng');
  R(svg, sX(145), sY(84), sW(7), sH(9), sRX(2), sys, 'Incisiv lateral inferior drept (42)', 'Dinte 42 – Incisiv lateral inferior drept');

  const caninInfSt = `100,86 107,86 105,98 100,98`.split(' ').map(pt => `${sX(pt.split(',')[0])},${sY(pt.split(',')[1])}`).join(' ');
  addToSvg(svg, 'polygon', { points: caninInfSt, fill: 'var(--dental-fill)', stroke: 'var(--dental-stroke)', 'stroke-width': '0.8' }, sys, 'Canin inferior stâng (33)', 'Dinte 33 – Canin inferior stâng');
  const caninInfDr = `153,86 160,86 160,98 155,98`.split(' ').map(pt => `${sX(pt.split(',')[0])},${sY(pt.split(',')[1])}`).join(' ');
  addToSvg(svg, 'polygon', { points: caninInfDr, fill: 'var(--dental-fill)', stroke: 'var(--dental-stroke)', 'stroke-width': '0.8' }, sys, 'Canin inferior drept (43)', 'Dinte 43 – Canin inferior drept');

  R(svg, sX(88), sY(88), sW(9), sH(8), sRX(3), sys, 'Premolar 1 inferior stâng (34)', 'Dinte 34 – Primul premolar inferior stâng');
  R(svg, sX(78), sY(90), sW(9), sH(8), sRX(3), sys, 'Premolar 2 inferior stâng (35)', 'Dinte 35 – Al doilea premolar inferior stâng');
  R(svg, sX(163), sY(88), sW(9), sH(8), sRX(3), sys, 'Premolar 1 inferior drept (44)', 'Dinte 44 – Primul premolar inferior drept');
  R(svg, sX(173), sY(90), sW(9), sH(8), sRX(3), sys, 'Premolar 2 inferior drept (45)', 'Dinte 45 – Al doilea premolar inferior drept');

  R(svg, sX(66), sY(92), sW(10), sH(8), sRX(4), sys, 'Molar 1 inferior stâng (36)', 'Dinte 36 – Primul molar inferior stâng');
  R(svg, sX(55), sY(94), sW(10), sH(8), sRX(4), sys, 'Molar 2 inferior stâng (37)', 'Dinte 37 – Al doilea molar inferior stâng');
  R(svg, sX(45), sY(96), sW(8), sH(7), sRX(3), sys, 'Molar 3 inferior stâng (38) - minte', 'Dinte 38 – Molar de minte inferior stâng');
  R(svg, sX(184), sY(92), sW(10), sH(8), sRX(4), sys, 'Molar 1 inferior drept (46)', 'Dinte 46 – Primul molar inferior drept');
  R(svg, sX(195), sY(94), sW(10), sH(8), sRX(4), sys, 'Molar 2 inferior drept (47)', 'Dinte 47 – Al doilea molar inferior drept');
  R(svg, sX(207), sY(96), sW(8), sH(7), sRX(3), sys, 'Molar 3 inferior drept (48) - minte', 'Dinte 48 – Molar de minte inferior drept');

  addToSvg(svg, 'path', { d: `M${sX(42)},${sY(100)} Q${sX(130)},${sY(112)} ${sX(218)},${sY(100)}`, fill: 'none', stroke: 'var(--dental-stroke)', 'stroke-width': '1.5' }, sys, 'Mandibulă', 'Mandibulă');

  // Etichete
  const labels = [
    [45,65,'18'], [55,63,'17'], [66,61,'16'], [78,59,'15'], [88,57,'14'], [100,55,'13'], [108,53,'12'], [118,51,'11'],
    [134,51,'21'], [145,53,'22'], [153,55,'23'], [163,57,'24'], [173,59,'25'], [184,61,'26'], [195,63,'27'], [207,65,'28'],
    [45,91,'48'], [55,89,'47'], [66,87,'46'], [78,85,'45'], [88,83,'44'], [100,81,'43'], [108,79,'42'], [118,77,'41'],
    [134,77,'31'], [145,79,'32'], [153,81,'33'], [163,83,'34'], [173,85,'35'], [184,87,'36'], [195,89,'37'], [207,91,'38']
  ];
  labels.forEach(([x, y, text]) => {
    const textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    textEl.setAttribute('x', sX(x) + sW(4));
    textEl.setAttribute('y', sY(y) - 2);
    textEl.setAttribute('fill', 'var(--accent2)');
    textEl.setAttribute('font-size', '9');
    textEl.setAttribute('font-family', 'DM Mono, monospace');
    textEl.setAttribute('text-anchor', 'middle');
    textEl.textContent = text;
    textEl.style.pointerEvents = 'none';
    svg.appendChild(textEl);
  });
}
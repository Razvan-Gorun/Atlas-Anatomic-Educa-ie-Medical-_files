function drawMuscles(svg, view) {
  if (view !== 'anterior') return;

  // Deltoid
  addToSvg(svg, 'path', { d: 'M78,106 Q62,120 56,142 Q60,154 72,148 Q82,136 86,120 Q90,108 78,106Z' }, 'muscle', 'Deltoid stâng', 'Mușchi deltoid');
  addToSvg(svg, 'path', { d: 'M182,106 Q198,120 204,142 Q200,154 188,148 Q178,136 174,120 Q170,108 182,106Z' }, 'muscle', 'Deltoid drept', 'Mușchi deltoid');
  // Pectoral mare
  addToSvg(svg, 'path', { d: 'M82,110 Q74,130 74,152 Q84,160 118,156 L118,110Z' }, 'muscle', 'Pectoral mare stâng', 'Mușchi pectoral mare');
  addToSvg(svg, 'path', { d: 'M178,110 Q186,130 186,152 Q176,160 142,156 L142,110Z' }, 'muscle', 'Pectoral mare drept', 'Mușchi pectoral mare');
  // Biceps
  R(svg, 52, 120, 16, 50, 6, 'muscle', 'Biceps brahial stâng', 'Mușchi biceps brahial');
  R(svg, 192, 120, 16, 50, 6, 'muscle', 'Biceps brahial drept', 'Mușchi biceps brahial');
  // Drept abdominal
  R(svg, 118, 280, 10, 60, 3, 'muscle', 'Drept abdominal', 'Mușchi drept abdominal');
  R(svg, 132, 280, 10, 60, 3, 'muscle', 'Drept abdominal', 'Mușchi drept abdominal');
  // Cvadriceps
  R(svg, 93, 430, 24, 80, 8, 'muscle', 'Cvadriceps femural stâng', 'Mușchi cvadriceps femural');
  R(svg, 143, 430, 24, 80, 8, 'muscle', 'Cvadriceps femural drept', 'Mușchi cvadriceps femural');
  // Gastrocnemian
  addToSvg(svg, 'path', { d: 'M90,534 Q82,552 84,580 Q90,590 102,586 Q110,578 108,554 Q108,540 118,532Z' }, 'muscle', 'Gastrocnemian stâng', 'Mușchi gastrocnemian și solear');
  addToSvg(svg, 'path', { d: 'M170,534 Q178,552 176,580 Q170,590 158,586 Q150,578 152,554 Q152,540 142,532Z' }, 'muscle', 'Gastrocnemian drept', 'Mușchi gastrocnemian și solear');
  // Trapez
  addToSvg(svg, 'path', { d: 'M100,100 Q130,92 160,100 Q164,110 158,116 Q130,112 102,116 Q96,110 100,100Z' }, 'muscle', 'Trapez', 'Mușchi trapez');
}
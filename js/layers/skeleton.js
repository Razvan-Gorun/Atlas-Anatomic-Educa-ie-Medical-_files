function drawSkeleton(svg, view) {
  if (view !== 'anterior') return;

  // Craniu
  E(svg, 130, 30, 36, 34, 'skeleton', 'Craniu', 'Craniu – os frontal, parietal, temporal, occipital');
  E(svg, 110, 35, 10, 8, 'skeleton', 'Orbită stângă', 'Craniu – os frontal, parietal, temporal, occipital');
  E(svg, 150, 35, 10, 8, 'skeleton', 'Orbită dreaptă', 'Craniu – os frontal, parietal, temporal, occipital');
  addToSvg(svg, 'path', { d: 'M100,56 Q130,78 160,56 Q158,68 144,74 Q130,80 116,74 Q102,68 100,56Z' }, 'skeleton', 'Mandibulă', 'Mandibulă și oase faciale');
  
  // Coloană cervicală
  for (let i = 0; i < 7; i++) {
    const y = 90 + i * 10;
    const w = i === 0 ? 20 : (i === 6 ? 22 : 18);
    R(svg, 130 - w/2, y, w, 8, 3, 'skeleton', `C${i+1}`, 'Vertebre cervicale C1-C7');
  }

  // Clavicule și omoplați
  P(svg, 'M118,100 Q98,94 80,102', 'skeleton', 'Claviculă stângă', 'Claviculă și omoplat');
  P(svg, 'M142,100 Q162,94 180,102', 'skeleton', 'Claviculă dreaptă', 'Claviculă și omoplat');
  addToSvg(svg, 'path', { d: 'M78,106 Q68,114 66,130 Q68,142 80,146 Q88,140 86,124Z' }, 'skeleton', 'Omoplat stâng', 'Claviculă și omoplat');
  addToSvg(svg, 'path', { d: 'M182,106 Q192,114 194,130 Q192,142 180,146 Q172,140 174,124Z' }, 'skeleton', 'Omoplat drept', 'Claviculă și omoplat');

  // Stern și coaste
  R(svg, 120, 108, 20, 120, 5, 'skeleton', 'Stern', 'Cutia toracică – coaste și stern');
  [118,132,146,158,168,176,182].forEach((y, i) => {
    const x2 = 70 + i*2, y2 = y + 8 + i*2;
    P(svg, `M118,${y} Q${x2-5},${y+4} ${x2},${y2}`, 'skeleton', `Coasta ${i+1} stg`, 'Cutia toracică – coaste și stern');
    P(svg, `M142,${y} Q${260-x2+5},${y+4} ${260-x2},${y2}`, 'skeleton', `Coasta ${i+1} dr`, 'Cutia toracică – coaste și stern');
  });

  // Coloană toracală și lombară
  for (let i = 0; i < 12; i++) R(svg, 122, 170 + i*9, 16, 7, 2, 'skeleton', `T${i+1}`, 'Vertebre toracice T1-T12');
  for (let i = 0; i < 5; i++)  R(svg, 120, 278 + i*14, 20, 10, 3, 'skeleton', `L${i+1}`, 'Vertebre lombare L1-L5');

  // Pelvis
  addToSvg(svg, 'path', { d: 'M104,330 Q84,336 74,354 Q66,372 78,386 Q92,396 114,388 L120,362 L118,330Z' }, 'skeleton', 'Os iliac stâng', 'Bazinul osos – ilion, ischion, pubis');
  addToSvg(svg, 'path', { d: 'M156,330 Q176,336 186,354 Q194,372 182,386 Q168,396 146,388 L140,362 L142,330Z' }, 'skeleton', 'Os iliac drept', 'Bazinul osos – ilion, ischion, pubis');
  addToSvg(svg, 'path', { d: 'M114,388 Q130,398 146,388 Q146,402 130,408 Q114,402 114,388Z' }, 'skeleton', 'Simfiză pubiană', 'Bazinul osos – ilion, ischion, pubis');
  addToSvg(svg, 'path', { d: 'M118,348 Q130,360 142,348 L138,374 Q130,380 122,374Z' }, 'skeleton', 'Sacru', 'Sacru și coccis');

  // Membre superioare
  R(svg, 52, 106, 16, 90, 6, 'skeleton', 'Humerus stâng', 'Humerus – os al brațului');
  R(svg, 192, 106, 16, 90, 6, 'skeleton', 'Humerus drept', 'Humerus – os al brațului');
  R(svg, 46, 200, 9, 75, 4, 'skeleton', 'Radius stâng', 'Radius și ulnă – oasele antebrațului');
  R(svg, 58, 200, 9, 75, 4, 'skeleton', 'Ulnă stângă', 'Radius și ulnă – oasele antebrațului');
  R(svg, 195, 200, 9, 75, 4, 'skeleton', 'Radius drept', 'Radius și ulnă – oasele antebrațului');
  R(svg, 207, 200, 9, 75, 4, 'skeleton', 'Ulnă dreaptă', 'Radius și ulnă – oasele antebrațului');

  // Carpiene
  R(svg, 38, 278, 32, 14, 4, 'skeleton', 'Oase carpiene stg', 'Oase carpiene (8 oase ale încheieturii)');
  R(svg, 190, 278, 32, 14, 4, 'skeleton', 'Oase carpiene dr', 'Oase carpiene (8 oase ale încheieturii)');

  // Mâna stângă
  const mcLeft = [[33,294,8,40], [42,294,8,46], [51,294,8,46], [60,294,8,40], [69,293,7,36]];
  mcLeft.forEach(([x,y,w,h], i) => {
    R(svg, x, y, w, h-14, 3, 'skeleton', `MC${i+1} stg`, 'Metacarpiene și falange (oasele mâinii)');
    R(svg, x+1, y+h-12, w-2, 10, 3, 'skeleton', `F.prox ${i+1} stg`, 'Metacarpiene și falange (oasele mâinii)');
    if (i > 0) {
      R(svg, x+1, y+h, w-2, 8, 3, 'skeleton', `F.mid ${i+1} stg`, 'Metacarpiene și falange (oasele mâinii)');
      R(svg, x+1, y+h+10, w-2, 6, 3, 'skeleton', `F.dist ${i+1} stg`, 'Metacarpiene și falange (oasele mâinii)');
    } else {
      R(svg, x+1, y+h-2, w-2, 8, 3, 'skeleton', 'F.dist police stg', 'Metacarpiene și falange (oasele mâinii)');
    }
  });

  // Mâna dreaptă
  const mcRight = [[185,294,8,40], [194,294,8,46], [203,294,8,46], [212,294,8,40], [221,293,7,36]];
  mcRight.forEach(([x,y,w,h], i) => {
    R(svg, x, y, w, h-14, 3, 'skeleton', `MC${i+1} dr`, 'Metacarpiene și falange (oasele mâinii)');
    R(svg, x+1, y+h-12, w-2, 10, 3, 'skeleton', `F.prox ${i+1} dr`, 'Metacarpiene și falange (oasele mâinii)');
    if (i > 0) {
      R(svg, x+1, y+h, w-2, 8, 3, 'skeleton', `F.mid ${i+1} dr`, 'Metacarpiene și falange (oasele mâinii)');
      R(svg, x+1, y+h+10, w-2, 6, 3, 'skeleton', `F.dist ${i+1} dr`, 'Metacarpiene și falange (oasele mâinii)');
    } else {
      R(svg, x+1, y+h-2, w-2, 8, 3, 'skeleton', 'F.dist police dr', 'Metacarpiene și falange (oasele mâinii)');
    }
  });

  // Membre inferioare
  R(svg, 96, 400, 18, 120, 8, 'skeleton', 'Femur stâng', 'Femur – cel mai lung os al corpului');
  R(svg, 146, 400, 18, 120, 8, 'skeleton', 'Femur drept', 'Femur – cel mai lung os al corpului');
  E(svg, 105, 522, 10, 9, 'skeleton', 'Rotulă stângă', 'Rotulă, tibie și peroneu');
  E(svg, 155, 522, 10, 9, 'skeleton', 'Rotulă dreaptă', 'Rotulă, tibie și peroneu');
  R(svg, 93, 534, 12, 110, 5, 'skeleton', 'Tibie stângă', 'Rotulă, tibie și peroneu');
  R(svg, 108, 536, 7, 106, 4, 'skeleton', 'Peroneu stâng', 'Rotulă, tibie și peroneu');
  R(svg, 145, 534, 12, 110, 5, 'skeleton', 'Tibie dreaptă', 'Rotulă, tibie și peroneu');
  R(svg, 160, 536, 7, 106, 4, 'skeleton', 'Peroneu drept', 'Rotulă, tibie și peroneu');

  // Tarsiene
  R(svg, 82, 646, 40, 15, 5, 'skeleton', 'Tarsiene stg', 'Oase tarsiene, metatarsiene și falange picior');
  R(svg, 138, 646, 40, 15, 5, 'skeleton', 'Tarsiene dr', 'Oase tarsiene, metatarsiene și falange picior');

  // Picior stâng
  const mtLeft = [[78,662,6,28], [85,661,6,32], [92,661,6,32], [99,661,6,28], [106,662,6,24]];
  mtLeft.forEach(([x,y,w,h], i) => {
    R(svg, x, y, w, h-12, 3, 'skeleton', `MT${i+1} stg`, 'Oase tarsiene, metatarsiene și falange picior');
    R(svg, x+1, y+h-10, w-2, 8, 3, 'skeleton', `F.prox ${i+1} stg`, 'Oase tarsiene, metatarsiene și falange picior');
  });

  // Picior drept
  const mtRight = [[134,662,6,24], [141,661,6,28], [148,661,6,32], [155,661,6,32], [162,662,6,28]];
  mtRight.forEach(([x,y,w,h], i) => {
    R(svg, x, y, w, h-12, 3, 'skeleton', `MT${i+1} dr`, 'Oase tarsiene, metatarsiene și falange picior');
    R(svg, x+1, y+h-10, w-2, 8, 3, 'skeleton', `F.prox ${i+1} dr`, 'Oase tarsiene, metatarsiene și falange picior');
  });

  // Articulații
  C(svg, 60, 196, 5, 'Articulația cotului stâng');
  C(svg, 200, 196, 5, 'Articulația cotului drept');
  C(svg, 54, 106, 6, 'Articulația umărului stâng');
  C(svg, 206, 106, 6, 'Articulația umărului drept');
  C(svg, 105, 400, 7, 'Articulația șoldului stâng');
  C(svg, 155, 400, 7, 'Articulația șoldului drept');
  C(svg, 105, 522, 6, 'Articulația genunchiului stâng');
  C(svg, 155, 522, 6, 'Articulația genunchiului drept');
  C(svg, 99, 646, 5, 'Articulația gleznei stângi');
  C(svg, 161, 646, 5, 'Articulația gleznei drepte');
  C(svg, 54, 278, 4, 'Articulația pumnului stâng');
  C(svg, 206, 278, 4, 'Articulația pumnului drept');
}
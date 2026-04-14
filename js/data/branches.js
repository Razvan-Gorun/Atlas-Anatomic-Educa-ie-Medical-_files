// ===== BRANCHES =====
const branches = [
  {icon:'🦴',name:'Osteologie',color:'#3d8bff',count:'206 oase',subs:[
    {name:'Craniu – os frontal, parietal, temporal, occipital',lv:'Fundament'},
    {name:'Mandibulă și oase faciale',lv:'Fundament'},
    {name:'Vertebre cervicale C1-C7',lv:'Mediu'},
    {name:'Vertebre toracice T1-T12',lv:'Mediu'},
    {name:'Vertebre lombare L1-L5',lv:'Mediu'},
    {name:'Sacru și coccis',lv:'Mediu'},
    {name:'Cutia toracică – coaste și stern',lv:'Fundament'},
    {name:'Claviculă și omoplat',lv:'Fundament'},
    {name:'Humerus – os al brațului',lv:'Mediu'},
    {name:'Radius și ulnă – oasele antebrațului',lv:'Mediu'},
    {name:'Oase carpiene (8 oase ale încheieturii)',lv:'Avansat'},
    {name:'Metacarpiene și falange (oasele mâinii)',lv:'Avansat'},
    {name:'Bazinul osos – ilion, ischion, pubis',lv:'Mediu'},
    {name:'Femur – cel mai lung os al corpului',lv:'Mediu'},
    {name:'Rotulă, tibie și peroneu',lv:'Mediu'},
    {name:'Oase tarsiene, metatarsiene și falange picior',lv:'Avansat'},
  ]},
  {icon:'💪',name:'Miologie',color:'#ff6b6b',count:'640 mușchi',subs:[
    {name:'Mușchi deltoid',lv:'Fundament'},
    {name:'Mușchi pectoral mare',lv:'Fundament'},
    {name:'Mușchi biceps brahial',lv:'Fundament'},
    {name:'Mușchi cvadriceps femural',lv:'Mediu'},
    {name:'Mușchi gastrocnemian și solear',lv:'Mediu'},
    {name:'Mușchi drept abdominal',lv:'Mediu'},
    {name:'Mușchi trapez',lv:'Avansat'},
  ]},
  {icon:'🔗',name:'Artrologie',color:'#f5c842',count:'360 articulații',subs:[
    {name:'Ligamente genunchi – LCA, LCP, LCM, LCL',lv:'Mediu'},
    {name:'Ligamente gleznă – deltoid și lateral',lv:'Mediu'},
    {name:'Articulația șoldului – ligamente capsulare',lv:'Avansat'},
    {name:'Articulația umărului – ligamente',lv:'Avansat'},
    {name:'Articulația temporo-mandibulară (ATM)',lv:'Avansat'},
  ]},
  {icon:'🦷',name:'Stomatologie',color:'#00d4aa',count:'32 dinți',subs:[
    {name:'Dentiție – incisivi și canini',lv:'Fundament'},
    {name:'Premolari și molari',lv:'Fundament'},
    {name:'Parodonțiu și gingie',lv:'Mediu'},
  ]},
];

// Combinăm toate datele într-un singur obiect pentru acces ușor
const anatomyDB = {
  ...skeletonData,
  ...musclesData,
  ...ligamentsData,
  ...dentalData
};
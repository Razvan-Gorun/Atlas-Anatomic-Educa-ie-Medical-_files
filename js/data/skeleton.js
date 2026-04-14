// ===== OSTEOLOGIE =====
const skeletonData = {
  'Craniu – os frontal, parietal, temporal, occipital':{
    sys:'skeleton',
    def:'Craniul este format din 8 oase plate sudate prin suturi. Protejează creierul și formează cavitățile orbitare.',
    keys:['Suturi: coronară, sagitală, lambdoidă','Fontanele: anterioară (18-24 luni)','Os temporal: adăpostește urechea medie'],
    memo:'8 oase: frontal, 2 parietale, 2 temporale, occipital, sfenoid, etmoid.'
  },
  'Mandibulă și oase faciale':{
    sys:'skeleton',
    def:'Mandibula – singurul os mobil al feței. Maxila, zigomatice, nazale, lacrimale, palatine.',
    keys:['ATM – articulație temporo-mandibulară','Foramen mentonier – nerv V3','Sinus maxilar – cel mai mare sinus'],
    memo:'14 oase faciale; mandibula = osul maxilarului inferior.'
  },
  'Vertebre cervicale C1-C7':{
    sys:'skeleton',
    def:'7 vertebre: C1 Atlas (fără corp), C2 Axis (odontoidă), C7 proeminens.',
    keys:['C1: susține craniul','C2: rotația capului','Foramen transversar pentru artera vertebrală'],
    memo:'C7 este vertebra palpabilă la baza gâtului.'
  },
  'Vertebre toracice T1-T12':{
    sys:'skeleton',
    def:'12 vertebre cu fațete pentru coaste. Formează cifoza toracică.',
    keys:['Articulații costovertebrale','Canal vertebral circular','Cifoza normală 20-45°'],
    memo:'T4 – mamelon, T7 – xifoid, T10 – ombilic.'
  },
  'Vertebre lombare L1-L5':{
    sys:'skeleton',
    def:'Cele mai mari vertebre, suportă greutatea. Lordoza lombară.',
    keys:['Corp vertebral reniform','L4-L5: hernie disc frecventă','Coada de cal de la L1 în jos'],
    memo:'L4 se palpează la nivelul crestelor iliace.'
  },
  'Sacru și coccis':{
    sys:'skeleton',
    def:'5 vertebre sacrale fuzionate + 3-5 coccigiene.',
    keys:['Promontoriu – reper obstetrical','Foramine sacrate – nervi S1-S4','Articulația sacroiliacă'],
    memo:'Hiatul sacrat – anestezie caudală.'
  },
  'Cutia toracică – coaste și stern':{
    sys:'skeleton',
    def:'12 perechi coaste + stern (manubriu, corp, xifoid).',
    keys:['Coaste 1-7 adevărate, 8-10 false, 11-12 flotante','Unghiul Louis – T4-T5','Coastele protejează inima și plămânii'],
    memo:'Unghiul subcostal normal < 90°.'
  },
  'Claviculă și omoplat':{
    sys:'skeleton',
    def:'Centura scapulară: clavicula + scapula.',
    keys:['Clavicula – primul os osificat','Scapula între T2-T7','Cavitatea glenoidă + cap humeral = umăr'],
    memo:'Fractura de claviculă – cea mai frecventă la copii.'
  },
  'Humerus – os al brațului':{
    sys:'skeleton',
    def:'Osul brațului, articulat cu scapula și radius/ulnă.',
    keys:['Cap humeral – 1/3 sferă','Șanț spiral – nerv radial','Epicondili: lateral (extensori), medial (flexori)'],
    memo:'Fractură 1/3 medie → paralizie radială (wrist drop).'
  },
  'Radius și ulnă – oasele antebrațului':{
    sys:'skeleton',
    def:'Radius lateral, ulnă medial. Permit pronația/supinația.',
    keys:['Radius se rotește în jurul ulnei','Procesul stiloid radial coboară mai jos','Fractura Colles – radius distal'],
    memo:'Membrana interosoasă unește radiusul și ulna.'
  },
  'Oase carpiene (8 oase ale încheieturii)':{
    sys:'skeleton',
    def:'Scafoid, semilunar, piramidal, pisiform; trapez, trapezoid, capitat, croșet.',
    keys:['Scafoid – cel mai frecvent fracturat','Tunel carpian – nerv median','Pisiform – os sesamoid'],
    memo:'Mnemo: "Some Lovers Try Positions That They Can\'t Handle".'
  },
  'Metacarpiene și falange (oasele mâinii)':{
    sys:'skeleton',
    def:'5 metacarpiene + 14 falange.',
    keys:['Police – 2 falange; degete 2-5 – 3 falange','Articulații MCF și IF','Fractura Boxer – colul MC V'],
    memo:'Falange: proximală, mijlocie, distală.'
  },
  'Bazinul osos – ilion, ischion, pubis':{
    sys:'skeleton',
    def:'2 oase coxale + sacru + coccis.',
    keys:['Acetabul – articulație șold','Linia terminală – bazin mare vs mic','Diferențe sex: unghi subpubian >90° la femei'],
    memo:'Pelvisul feminin – mai larg, adaptat nașterii.'
  },
  'Femur – cel mai lung os al corpului':{
    sys:'skeleton',
    def:'Cel mai lung și rezistent os. Articulat cu acetabulul și tibia.',
    keys:['Cap femural – vascularizație fragilă','Unghi cervicodiafizar 126°','Linea aspera – inserții musculare'],
    memo:'Fractura de col femural – frecventă la vârstnici.'
  },
  'Rotulă, tibie și peroneu':{
    sys:'skeleton',
    def:'Rotula – os sesamoid; tibia – portantă medial; peroneu – lateral.',
    keys:['Rotula în tendonul cvadriceps','Platou tibial – meniscuri','Maleole – stabilitate gleznă'],
    memo:'Peroneul nu participă la genunchi, dar da la gleznă.'
  },
  'Oase tarsiene, metatarsiene și falange picior':{
    sys:'skeleton',
    def:'7 tarsiene, 5 metatarsiene, 14 falange.',
    keys:['Talus – articulație gleznă','Calcaneu – tendon Achile','Arcuri plantare – suport greutate'],
    memo:'Fasciită plantară – durere sub calcaneu.'
  }
};
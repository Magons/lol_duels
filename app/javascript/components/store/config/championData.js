export default {
 id: 266,
 key: "Aatrox",
 name: "Aatrox",
 title: "the Darkin Blade",
 image: {full: "Aatrox.png", sprite: "champion0.png", group: "champion", x: 0, y: 0, w: 48, h: 48},
 skins:
  [{id: 266000, name: "default", num: 0},
   {id: 266001, name: "Justicar Aatrox", num: 1},
   {id: 266002, name: "Mecha Aatrox", num: 2},
   {id: 266003, name: "Sea Hunter Aatrox", num: 3}],
 lore:
  "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's seemingly living blade drinks in their blood, empowering him and fueling his brutal, elegant campaign of slaughter.<br><br>The earliest tale of Aatrox is as old as recorded history. It tells of a war between two great factions remembered only as the Protectorate and the Magelords. Over time, the Magelords won a series of crushing victories, leaving them on the brink of obliterating their sworn enemy forever. On the day of their final confrontation, the Protectorate army found themselves outnumbered, exhausted, and poorly equipped. They braced for inevitable defeat.<br><br>Just when all hope seemed lost, Aatrox appeared among the ranks of the Protectorate. With but a few words, he urged the soldiers to fight to the last before throwing himself into battle. His presence inspired the desperate warriors. At first, they could only watch in awe as this unknown hero cleaved through their enemies, his body and blade moving in unison as if one being. Soon, the warriors found themselves imbued with a potent thirst for battle. They followed Aatrox into the fray, each fighting with the furious strength of ten until they had won a most unlikely victory.<br><br>Aatrox vanished after that battle, but the Protectorate army's newfound fury did not. Their surprising triumph led to many more until they were able to finally return home victorious. Their countrymen hailed them as heroes, but though they had saved their entire civilization from destruction, darkness lingered in the mind of each warrior. Something within them had changed. Over time, their memories of battle faded, only to be replaced with a grim revelation their acts of heroism were, in fact, brutal atrocities committed by their own hands.<br><br>Tales like these appear among the myths of many cultures. If they are all to be believed, Aatrox's presence has changed the course of some of the most important wars in history. Though these stories remember him as a savior in dark times, Aatrox's true legacy may be a world filled with conflict and strife.<br><br>''Some fight for honor, some fight for glory. It matters only that you fight.''<br>-- Aatrox",
 blurb:
  "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's seemingly...",
 allytips:
  ["Being Hellbent contributes a significant amount of power in a fight, so avoid engaging with an empty Blood Well.",
   "Building Life Steal or small amounts of defense can be very potent on Aatrox, giving him more time to get the most out of being Hellbent.",
   "Massacre is great at turning the tide of a battle. Make sure to use it at the right moment to maximize its benefits."],
 enemytips:
  ["Aatrox is much more powerful while Hellbent, so be cautious fighting him if he's able to fill his Blood Well.",
   "When Aatrox casts Dark Flight towards your location, avoid being knocked up by moving away from the center of impact.",
   "Aatrox is reliant on basic attacks for most of his damage and survivability, reducing his attack speed by purchasing Randuin's Omen or Frozen Heart can help reduce both of those components greatly."],
 tags: ["Fighter", "Tank"],
 partype: "Blood Well",
 info: {attack: 8, defense: 4, magic: 3, difficulty: 4},
 stats:
  {armor: 24.384,
   armorperlevel: 3.8,
   attackdamage: 60.376,
   attackdamageperlevel: 3.2,
   attackrange: 150.0,
   attackspeedoffset: -0.04,
   attackspeedperlevel: 3.0,
   crit: 0.0,
   critperlevel: 0.0,
   hp: 580.0,
   hpperlevel: 85.0,
   hpregen: 6.59,
   hpregenperlevel: 0.5,
   movespeed: 345.0,
   mp: 100.0,
   mpperlevel: 0.0,
   mpregen: 0.0,
   mpregenperlevel: 0.0,
   spellblock: 32.1,
   spellblockperlevel: 1.25},
 spells:
  [{name: "Dark Flight",
    description: "Aatrox takes flight and slams down at a targeted location, dealing damage and knocking up enemies at the center of impact.",
    sanitizedDescription: "Aatrox takes flight and slams down at a targeted location, dealing damage and knocking up enemies at the center of impact.",
    tooltip:
     "Aatrox takes flight and slams down at target location, dealing {{ e1 }}<span class=\"colorF88017\"> (+{{ a1 }})</span> physical damage and knocking up enemies at the center of impact for {{ e4 }} second.<br><br>Aatrox fills up 20% of the Blood Well upon cast.",
    sanitizedTooltip:
     "Aatrox takes flight and slams down at target location, dealing {{ e1 }} (+{{ a1 }}) physical damage and knocking up enemies at the center of impact for {{ e4 }} second. Aatrox fills up 20% of the Blood Well upon cast.",
    leveltip: {label: ["Damage", "Cooldown"], effect: ["{{ e1 }} -> {{ e1NL }}", "{{ cooldown }} -> {{ cooldownNL }}"]},
    image: {full: "AatroxQ.png", sprite: "spell0.png", group: "spell", x: 336, y: 48, w: 48, h: 48},
    resource: "No Cost",
    maxrank: 5,
    cost: [0, 0, 0, 0, 0],
    costType: "No Cost",
    costBurn: "0",
    cooldown: [13.0, 12.5, 12.0, 11.5, 11.0],
    cooldownBurn: "13/12.5/12/11.5/11",
    effect:
     [null,
      [10.0, 35.0, 60.0, 95.0, 120.0],
      [310.0, 310.0, 310.0, 310.0, 310.0],
      [190.0, 190.0, 190.0, 190.0, 190.0],
      [1.0, 1.0, 1.0, 1.0, 1.0],
      [0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0]],
    effectBurn: ["", "10/35/60/95/120", "310", "190", "1", "0", "0", "0", "0", "0", "0"],
    vars: [{key: "a1", link: "attackdamage", coeff: [1.1]}],
    range: [25000, 25000, 25000, 25000, 25000],
    rangeBurn: "25000",
    key: "AatroxQ"},
   {name: "Blood Thirst / Blood Price",
    description:
     "While toggled on Aatrox deals bonus damage and fills a portion of his Blood Well every third subsequent attack. While toggled off Aatrox restores Health every third subsequent attack.",
    sanitizedDescription:
     "While toggled on Aatrox deals bonus damage and fills a portion of his Blood Well every third subsequent attack. While toggled off Aatrox restores Health every third subsequent attack.",
    tooltip:
     "<span class=\"colorFF9900\">Toggle Off</span><span class=\"colore60000\"> Blood Thirst </span>Every third attack, Aatrox restores {{ e3 }} <span class=\"colorCC3300\">(+{{ f1*100 }}% Missing Health)</span> Health.<br><br><span class=\"colorFF9900\">Toggle On</span><span class=\"color9900ff\"> Blood Price </span>Every third attack, Aatrox deals {{ e2 }}<span class=\"colorF88017\"> (+{{ a2 }})</span> bonus physical damage and fills up 20% of the Blood Well.",
    sanitizedTooltip:
     "Toggle Off Blood Thirst Every third attack, Aatrox restores {{ e3 }} (+{{ f1*100 }}% Missing Health) Health. Toggle On Blood Price Every third attack, Aatrox deals {{ e2 }} (+{{ a2 }}) bonus physical damage and fills up 20% of the Blood Well.",
    leveltip: {label: ["Heal", "Damage"], effect: ["{{ e3 }} -> {{ e3NL }}", "{{ e2 }} -> {{ e2NL }}"]},
    image: {full: "AatroxW.png", sprite: "spell0.png", group: "spell", x: 384, y: 48, w: 48, h: 48},
    resource: "No Cost",
    maxrank: 5,
    cost: [0, 0, 0, 0, 0],
    costType: "No Cost",
    costBurn: "0",
    cooldown: [0.5, 0.5, 0.5, 0.5, 0.5],
    cooldownBurn: "0.5",
    effect:
     [null,
      [200.0, 200.0, 200.0, 200.0, 200.0],
      [45.0, 80.0, 115.0, 150.0, 185.0],
      [30.0, 45.0, 60.0, 75.0, 90.0],
      [50.0, 50.0, 50.0, 50.0, 50.0],
      [50.0, 50.0, 50.0, 50.0, 50.0],
      [0.5, 0.5, 0.5, 0.5, 0.5],
      [0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0]],
    effectBurn: ["", "200", "45/80/115/150/185", "30/45/60/75/90", "50", "50", "0.5", "0", "0", "0", "0"],
    vars: [{key: "a2", link: "bonusattackdamage", coeff: [0.75]}],
    range: [1, 1, 1, 1, 1],
    rangeBurn: "1",
    key: "AatroxW"},
   {name: "Blades of Torment",
    description: "Aatrox unleashes the power of his blade, dealing damage to enemies hit and slowing them.",
    sanitizedDescription: "Aatrox unleashes the power of his blade, dealing damage to enemies hit and slowing them.",
    tooltip:
     "Aatrox unleashes the power of his blade, dealing {{ e1 }} <span class=\"colorF88017\">(+{{ a2 }})</span> physical damage to enemies hit and slowing them by {{ e2 }}% for {{ e3 }} seconds.<br><br>Aatrox fills up 20% of the Blood Well upon cast.",
    sanitizedTooltip:
     "Aatrox unleashes the power of his blade, dealing {{ e1 }} (+{{ a2 }}) physical damage to enemies hit and slowing them by {{ e2 }}% for {{ e3 }} seconds. Aatrox fills up 20% of the Blood Well upon cast.",
    leveltip: {label: ["Damage", "Slow", "Cooldown"], effect: ["{{ e1 }} -> {{ e1NL }}", "{{ e2 }}% -> {{ e2NL }}%", "{{ cooldown }} -> {{ cooldownNL }}"]},
    image: {full: "AatroxE.png", sprite: "spell0.png", group: "spell", x: 432, y: 48, w: 48, h: 48},
    resource: "{{ e4 }} Health",
    maxrank: 5,
    cost: [0, 0, 0, 0, 0],
    costType: " Health",
    costBurn: "0",
    cooldown: [12.0, 11.0, 10.0, 9.0, 8.0],
    cooldownBurn: "12/11/10/9/8",
    effect:
     [null,
      [70.0, 110.0, 150.0, 190.0, 230.0],
      [30.0, 35.0, 40.0, 45.0, 50.0],
      [2.0, 2.0, 2.0, 2.0, 2.0],
      [30.0, 30.0, 30.0, 30.0, 30.0],
      [0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0]],
    effectBurn: ["", "70/110/150/190/230", "30/35/40/45/50", "2", "30", "0", "0", "0", "0", "0", "0"],
    vars: [{key: "a2", link: "bonusattackdamage", coeff: [0.7]}],
    range: [1000, 1000, 1000, 1000, 1000],
    rangeBurn: "1000",
    key: "AatroxE"},
   {name: "Massacre",
    description:
     "Aatrox draws in the blood of his foes, damaging all nearby enemy champions around him and gaining increased Attack Speed and bonus Attack Range for a short duration.",
    sanitizedDescription:
     "Aatrox draws in the blood of his foes, damaging all nearby enemy champions around him and gaining increased Attack Speed and bonus Attack Range for a short duration.",
    tooltip:
     "Aatrox draws in the blood of his foes, dealing {{ e2 }} <span class=\"color99FF99\">(+{{ a1 }})</span> magic damage to nearby enemy champions, filling up 20% of the Blood Well for each hit.<br><br>Aatrox gains {{ e3 }}% attack speed and {{ e5 }} attack range for {{ e8 }} seconds upon cast.",
    sanitizedTooltip:
     "Aatrox draws in the blood of his foes, dealing {{ e2 }} (+{{ a1 }}) magic damage to nearby enemy champions, filling up 20% of the Blood Well for each hit. Aatrox gains {{ e3 }}% attack speed and {{ e5 }} attack range for {{ e8 }} seconds upon cast.",
    leveltip: {label: ["Damage", "Attack Speed", "Cooldown"], effect: ["{{ e2 }} -> {{ e2NL }}", "{{ e3 }}% -> {{ e3NL }}%", "{{ cooldown }} -> {{ cooldownNL }}"]},
    image: {full: "AatroxR.png", sprite: "spell0.png", group: "spell", x: 0, y: 96, w: 48, h: 48},
    resource: "No Cost",
    maxrank: 3,
    cost: [0, 0, 0],
    costType: "No Cost",
    costBurn: "0",
    cooldown: [100.0, 85.0, 70.0],
    cooldownBurn: "100/85/70",
    effect:
     [null,
      [12.0, 12.0, 12.0],
      [200.0, 300.0, 400.0],
      [40.0, 50.0, 60.0],
      [10.0, 10.0, 10.0],
      [175.0, 175.0, 175.0],
      [50.0, 65.0, 80.0],
      [20.0, 20.0, 20.0],
      [12.0, 12.0, 12.0],
      [0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0]],
    effectBurn: ["", "12", "200/300/400", "40/50/60", "10", "175", "50/65/80", "20", "12", "0", "0"],
    vars: [{key: "a1", link: "spelldamage", coeff: [1.0]}],
    range: [550, 550, 550],
    rangeBurn: "550",
    key: "AatroxR"}],
 passive:
  {name: "Blood Well",
   description:
    "Aatrox fills up his Blood Well through his abilities. When filled, Aatrox becomes Hellbent for as long as he stays in combat with champions or monsters, granting him attack damage, attack speed, and the ability to survive fatal damage.",
   sanitizedDescription:
    "Aatrox fills up his Blood Well through his abilities. When filled, Aatrox becomes Hellbent for as long as he stays in combat with champions or monsters, granting him attack damage, attack speed, and the ability to survive fatal damage.",
   image: {full: "Aatrox_Passive.png", sprite: "passive0.png", group: "passive", x: 0, y: 0, w: 48, h: 48}},
 recommended:
  [{champion: "Aatrox",
    title: "AatroxARAM",
    type: "riot",
    map: "HA",
    mode: "ARAM",
    blocks:
     [{type: "starting", recMath: false, items: [{id: 2051, count: 1}, {id: 1001, count: 1}, {id: 2003, count: 3}]},
      {type: "essential", recMath: false, items: [{id: 3074, count: 1}, {id: 3742, count: 1}, {id: 3047, count: 1}]},
      {type: "offensive", recMath: false, items: [{id: 3072, count: 1}, {id: 3812, count: 1}, {id: 3046, count: 1}]},
      {type: "defensive", recMath: false, items: [{id: 3143, count: 1}, {id: 3065, count: 1}, {id: 3156, count: 1}]},
      {type: "consumables", recMath: false, items: [{id: 2003, count: 1}, {id: 2140, count: 1}]}]},
   {champion: "Aatrox",
    title: "AatroxCS",
    type: "riot",
    map: "CS",
    mode: "ODIN",
    blocks:
     [{type: "starting", recMath: false, items: [{id: 1055, count: 1}, {id: 2003, count: 1}, {id: 3340, count: 1}]},
      {type: "early", recMath: false, items: [{id: 1001, count: 1}, {id: 3077, count: 1}, {id: 1053, count: 1}]},
      {type: "essential", recMath: false, items: [{id: 3047, count: 1}, {id: 3153, count: 1}, {id: 3812, count: 1}]},
      {type: "offensive", recMath: false, items: [{id: 3078, count: 1}, {id: 3074, count: 1}, {id: 3071, count: 1}]},
      {type: "defensive", recMath: false, items: [{id: 3143, count: 1}, {id: 3156, count: 1}, {id: 3065, count: 1}]},
      {type: "consumables", recMath: false, items: [{id: 2003, count: 1}, {id: 2055, count: 1}, {id: 2140, count: 1}]}]},
   {champion: "Aatrox",
    title: "AatroxFIRSTBLOOD",
    type: "riot",
    map: "HA",
    mode: "FIRSTBLOOD",
    blocks:
     [{type: "starting", recMath: false, items: [{id: 1055, count: 1}, {id: 2003, count: 1}, {id: 3340, count: 1}]},
      {type: "early", recMath: false, items: [{id: 1001, count: 1}, {id: 3077, count: 1}, {id: 1053, count: 1}]},
      {type: "essential", recMath: false, items: [{id: 3047, count: 1}, {id: 3153, count: 1}, {id: 3812, count: 1}]},
      {type: "offensive", recMath: false, items: [{id: 3078, count: 1}, {id: 3074, count: 1}, {id: 3071, count: 1}]},
      {type: "defensive", recMath: false, items: [{id: 3143, count: 1}, {id: 3156, count: 1}, {id: 3065, count: 1}]},
      {type: "startingjungle", recMath: false, items: [{id: 1041, count: 1}, {id: 2031, count: 1}, {id: 3340, count: 1}]},
      {type: "earlyjungle", recMath: false, items: [{id: 1001, count: 1}, {id: 3706, count: 1}, {id: 1043, count: 1}]},
      {type: "essentialjungle", recMath: false, items: [{id: 3047, count: 1}, {id: 1416, count: 1}, {id: 3153, count: 1}]},
      {type: "offensive", recMath: false, items: [{id: 3074, count: 1}, {id: 3812, count: 1}, {id: 3071, count: 1}]},
      {type: "defensive", recMath: false, items: [{id: 3065, count: 1}, {id: 3156, count: 1}, {id: 3143, count: 1}]},
      {type: "consumables", recMath: false, items: [{id: 2003, count: 1}, {id: 2140, count: 1}]}]},
   {champion: "Aatrox",
    title: "AatroxKINGPORO",
    type: "riot",
    map: "HA",
    mode: "KINGPORO",
    blocks:
     [{type: "KingPoroSnax", recMath: false, items: [{id: 3680, count: 1}, {id: 3681, count: 1}, {id: 3682, count: 1}, {id: 3683, count: 1}]},
      {type: "starting", recMath: false, items: [{id: 2051, count: 1}, {id: 1001, count: 1}, {id: 2031, count: 1}]},
      {type: "essential", recMath: false, items: [{id: 3074, count: 1}, {id: 3742, count: 1}, {id: 3047, count: 1}]},
      {type: "offensive", recMath: false, items: [{id: 3072, count: 1}, {id: 3812, count: 1}, {id: 3046, count: 1}]},
      {type: "defensive", recMath: false, items: [{id: 3143, count: 1}, {id: 3065, count: 1}, {id: 3156, count: 1}]},
      {type: "consumables", recMath: false, items: [{id: 2003, count: 1}, {id: 2140, count: 1}]}]},
   {champion: "Aatrox",
    title: "AatroxSIEGE",
    type: "riot",
    map: "SR",
    mode: "SIEGE",
    blocks:
     [{type: "siegeOffense", recMath: false, items: [{id: 3631, count: 1}, {id: 3641, count: 1}, {id: 3647, count: 1}, {id: 3635, count: 1}, {id: 3642, count: 1}]},
      {type: "siegeDefense", recMath: false, items: [{id: 3634, count: 1}, {id: 3640, count: 1}, {id: 3643, count: 1}, {id: 3636, count: 1}, {id: 3642, count: 1}]},
      {type: "essential", recMath: false, items: [{id: 3047, count: 1}, {id: 3153, count: 1}, {id: 3812, count: 1}]},
      {type: "offensive", recMath: false, items: [{id: 3078, count: 1}, {id: 3074, count: 1}, {id: 3071, count: 1}]},
      {type: "defensive", recMath: false, items: [{id: 3143, count: 1}, {id: 3156, count: 1}, {id: 3065, count: 1}]}]},
   {champion: "Aatrox",
    title: "AatroxSR",
    type: "riot",
    map: "SR",
    mode: "CLASSIC",
    blocks:
     [{type: "starting", recMath: false, items: [{id: 1055, count: 1}, {id: 2003, count: 1}, {id: 3340, count: 1}]},
      {type: "startingjungle", recMath: false, items: [{id: 1041, count: 1}, {id: 2031, count: 1}, {id: 3340, count: 1}]},
      {type: "early", recMath: false, items: [{id: 1001, count: 1}, {id: 3077, count: 1}, {id: 1053, count: 1}]},
      {type: "earlyjungle", recMath: false, items: [{id: 1001, count: 1}, {id: 3706, count: 1}, {id: 1043, count: 1}]},
      {type: "essential", recMath: false, items: [{id: 3047, count: 1}, {id: 3153, count: 1}, {id: 3812, count: 1}]},
      {type: "essentialjungle", recMath: false, items: [{id: 3047, count: 1}, {id: 1416, count: 1}, {id: 3153, count: 1}]},
      {type: "offensive", recMath: false, items: [{id: 3078, count: 1}, {id: 3074, count: 1}, {id: 3071, count: 1}]},
      {type: "defensive", recMath: false, items: [{id: 3143, count: 1}, {id: 3156, count: 1}, {id: 3065, count: 1}]},
      {type: "offensive", recMath: false, items: [{id: 3074, count: 1}, {id: 3812, count: 1}, {id: 3071, count: 1}]},
      {type: "defensive", recMath: false, items: [{id: 3065, count: 1}, {id: 3156, count: 1}, {id: 3143, count: 1}]},
      {type: "consumables", recMath: false, items: [{id: 2003, count: 1}, {id: 2055, count: 1}, {id: 2140, count: 1}]}]},
   {champion: "Aatrox",
    title: "AatroxTT",
    type: "riot",
    map: "TT",
    mode: "CLASSIC",
    blocks:
     [{type: "starting", recMath: false, items: [{id: 1001, count: 1}, {id: 1055, count: 1}, {id: 2003, count: 2}]},
      {type: "startingjungle", recMath: false, items: [{id: 1041, count: 1}, {id: 1039, count: 1}, {id: 2003, count: 3}]},
      {type: "essential", recMath: false, items: [{id: 3047, count: 1}, {id: 3153, count: 1}, {id: 3071, count: 1}]},
      {type: "offensive", recMath: false, items: [{id: 3142, count: 1}, {id: 3074, count: 1}, {id: 3072, count: 1}]},
      {type: "defensive", recMath: false, items: [{id: 3065, count: 1}, {id: 3156, count: 1}, {id: 3143, count: 1}]},
      {type: "consumables", recMath: false, items: [{id: 2003, count: 1}, {id: 2140, count: 1}]}]},
   {champion: "Aatrox",
    title: "Beginner",
    type: "riot",
    map: "SR",
    mode: "INTRO",
    blocks:
     [{type: "beginner_starter", recMath: false, items: [{id: 1054, count: 1}]},
      {type: "beginner_starter", recMath: false, items: [{id: 1054, count: 1}, {id: 2003, count: 1}]},
      {type: "beginner_advanced", recMath: true, items: [{id: 1036, count: 1}, {id: 1053, count: 1}]},
      {type: "beginner_movementspeed", recMath: true, items: [{id: 1001, count: 1}, {id: 1029, count: 1}, {id: 3047, count: 1}]},
      {type: "beginner_legendaryitem", recMath: true, items: [{id: 1053, count: 1}, {id: 1038, count: 1}, {id: 3072, count: 1}]},
      {type: "beginner_morelegendaryitems", recMath: false, items: [{id: 3068, count: 1}, {id: 3031, count: 1}, {id: 3046, count: 1}]}]}]}
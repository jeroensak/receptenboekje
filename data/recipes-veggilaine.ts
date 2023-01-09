export interface Recipe {
  slug: string;
  title: string;
  creator: string;
  image: string;
  feeds: number;
  ingredients: (string | [string] | [number, string])[][];
  description: string;
  link: string;
}

export const recipesVeggilaine: Recipe[] = [
  {
    slug: "veggilaine-bibimbap",
    title: "Bibimbap",
    creator: "Veggilaine",
    image: "/images/veggilaine-bibimbap.jpeg",
    feeds: 1,
    ingredients: [
      [
        [75, "g rijst (restjes werken top)"],
        ["verse spinazie"],
        [0.5, "courgette"],
        [2, "el sesamolie"],
        [125, "g stevige tofu"],
        ["vegan kimchi"],
        [1, "ei"],
        ["gerapste wortel"],
        ["zout of sojasaus"],
      ],
      [
        "bibimbap saus",
        [1, "el sojasaus"],
        [1, "el sesamolie"],
        [1, "el gochujang"],
        [1, "el agave siroop"],
      ],
    ],
    description: `Bak de spinazie kort in de sesamolie zodat het zijn bite behoudt. Bak hierna de courgette in dezelfde pan, ook met wat sesamolie. Voeg aan beide ook zout toe. Gebruik je verse tofu? Frituur deze dan eerst even in blokjes in wat neutrale olie en bak hierna kort door in de sojasaus, gochujang, agave/maple syrup en sesamolie! Serveer de rijst met alle groenten, een gebakken eitje, de saus en mixen maar! 🥄 Eet smakelijk!`,
    link: "https://www.instagram.com/reel/CimUTZoqsk2",
  },
  {
    slug: "veggilaine-pita-alla-norma",
    title: "Pita alla norma",
    creator: "Veggilaine",
    image: "/images/pita-alla-norma.jpeg",
    feeds: 2,
    ingredients: [
      [
        [4, "(versgebakken) pitabroodjes or naan flappen"],
        ["blikje gepelde (cherry) tomaten"],
        ["hand vol kleine tomaatjes"],
        [3, "teentjes knoflook"],
        ["extra virgine olijfolie"],
        ["zout + peper"],
        [1, "aubergine"],
        [1, "tl chilivlokken"],
        ["feta"],
        ["kappertjes"],
        ["pecorino of parmagiano (gerapst)"],
        ["verse basilicum en/of peterselie"],
        ["pijnboompitten"],
      ],
    ],
    description: `Verhit een paar el olijfolie in een pan. Snijd de aubergine in blokjes en meng deze met wat zout. Bak de blokjes in de olijfolie tot goudbruin en laat ze hierna uitlekken of wat keukenpapier. Verwarm ondertussen nog een el olijfolie en bak hier kort de fijngehakte knoflook in. Voeg ook de tomaatjes en het blikje gepelde tomaat toe met wat peper, zout en de chilivlokken en kook dit in tot een dikkere tomatensaus. Bestrijk de pita met een paar el saus en beleg deze vervolgens met de aubergine, feta, geraspte pecorino en de verse kruiden. Eet smakelijk! 💛`,
    link: "https://www.instagram.com/p/Cf3-Cy_qV0M",
  },
  {
    slug: "veggilaine-paratha-oesterzwam-avocadospread",
    title: "Paratha met oesterzwam en avocadospread",
    creator: "Veggilaine",
    image: "/images/indiase-paratha.jpeg",
    feeds: 2,
    ingredients: [
      [
        ["paratha's uit de diepvries"],
        [300, "g oesterzwammen"],
        [1, "prei"],
        [1, "el kerrie (masala)"],
        [1, "el donkere sojasaus"],
        ["verse granaatappel"],
      ],
      [
        "Avocadospread",
        [160, "g diepvries doperweten"],
        [1, "rijpe avocado"],
        [0.5, "el kerrie (masala)"],
        [0.5, "tl cayennepeper"],
        [1, "el limoensap"],
        ["zout naar smaak"],
      ],
      [
        "Limoen-peterselie dressing",
        [1, "teentje knoflook"],
        [15, "g verse peterselie"],
        [3, "el (plantaardige) créme fraîche"],
        [1.5, "el limoensap"],
        [0.5, "tl zout"],
      ],
    ],
    description: `De paratha bak je in een pan op hoog vuur aan beide zijden. Geen olie nodig. Puffy paratha = succes. Verhit hierna olie in een pan en scheur de oesterzwam in hapklare stukjes. Bak de oesterzwam voor 3-4 minuten en voeg vervolgens de fijngesneden en gewassen prei toe. Bak voor 4 min en haal de pan van het vuur. Voeg nu de soja en kerrie toe en roer goed door. Serveer de paratha met doperwt-spread, de oesterzwam en top het af met de dressing en granaatappel!
    Avocadospread: Kook de doperwten kort en prak deze samen met de rest van de ingrediënten tot een geheel.
    Dressing: Voor het maken van de dressing gebruikte ik een keukenmachine. Geen blender? Snijd de koriander en knoflook dan heel fijn voor het mengen.
    `,
    link: "https://www.instagram.com/reel/CeiCl_UKyMk",
  },
  {
    slug: "veggilaine-citroenpasta-courgette",
    title: "Citroenpasta met gekarameliseerde courgette",
    creator: "Veggilaine",
    image: "/images/citroenpasta-courgette.jpg",
    feeds: 2,
    ingredients: [
      [
        [250, "g pasta"],
        [1, "grote courgette"],
        [1.5, "el roomboter"],
        [6, "teentjes knoflook"],
        [3, "sjalotjes"],
        ["zout en peper"],
        [30, "g gerapste parmagiano of vegan parmezaan"],
        [1, "tl chilivlokken"],
        [0.5, "bio citroen (sap)"],
        [1, "bio citroen (raps)"],
        [1, "kopje water waarin de pasta heeft gekookt"],
        ["verse basilicum"],
        ["pistachenoten"],
        ["semi-gedroogde tomaatjes"],
        ["extra parmagiano"],
      ],
    ],
    description: `Kook de pasta en bewaar voor je deze afgiet een kopje van het pastawater. Snijd de sjalotjes fijn en bak deze in de roomboter tot ze glazig zijn. Voeg de knoflook toe en bak 2 minuten. Rasp ondertussen de courgette met een grove rasp of keukenmachine en voeg ook dit toe aan de pan. Bak het geheel tot alle vocht is verdampt. Voeg vervolgens de parmagiano, citroensap, rasp, chilivlokken en het pastawater toe en roer goed door. Laat het geheel op laag vuur sudderen voor 8-10 minuten en voeg eventueel nog wat boter of water toe. Meng vervolgens de pasta met de gebakken courgette en serveer dit met verse basilicum, parmagiano, pistachenoten en wat semi gedroogde zontomaatjes. Eet smakelijk! 🌞`,
    link: "https://www.instagram.com/reel/CgPVSsZKPpE/",
  },
];

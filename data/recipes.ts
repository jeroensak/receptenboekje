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

export const recipes: Recipe[] = [
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
        [1, "blikje gepelde (cherry) tomaten"],
        [1, "hand vol kleine tomaatjes"],
        [3, "teentjes knoflook"],
        ["extra virgine olijfolie"],
        ["zout + peper"],
        [1, "aubergine"],
        [1, "tl chilivlokken"],
        [125, "g feta"],
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
        ["of"],
        [160, "g shoarma"],
        [1, "prei"],
        [0.5, "el kerrie (of kerrie masala of helft helft)"],
        [1, "el donkere sojasaus"],
        ["verse granaatappel"],
      ],
      [
        "Avocadospread",
        [160, "g diepvries doperweten"],
        [1, "rijpe avocado"],
        [1, "tl kerrie"],
        [0.5, "tl cayennepeper"],
        [1, "el limoensap"],
        ["zout naar smaak"],
      ],
      [
        "Limoen-peterselie dressing",
        [1, "tiny teentje knoflook"],
        [7.5, "g verse peterselie (de blaadjes van een half pakje)"],
        [3, "el (plantaardige) créme fraîche"],
        [1.5, "el limoensap"],
        [0.5, "tl zout"],
      ],
    ],
    description: `De paratha bak je in een pan op hoog vuur aan beide zijden. Geen olie nodig. Puffy paratha = succes. Verhit hierna olie in een pan en scheur de oesterzwam in hapklare stukjes. Bak de oesterzwam voor 3-4 minuten en voeg vervolgens de fijngesneden en gewassen prei toe. Bak voor 4 min en haal de pan van het vuur. Voeg nu de soja en kerrie toe en roer goed door. Serveer de paratha met doperwt-spread, de oesterzwam en top het af met de dressing en granaatappel!
    Avocadospread: Kook de doperwten kort en prak deze samen met de rest van de ingrediënten tot een geheel.
    Dressing: Voor het maken van de dressing gebruikte ik een keukenmachine. Geen blender? Snijd de peterselie en knoflook dan heel fijn voor het mengen.
    `,
    link: "https://www.instagram.com/reel/CeiCl_UKyMk",
  },
  {
    slug: "pinchofyum-buffalo-cauliflower-tacos-avocado-crema",
    title: "Buffalo Cauliflower Tacos with Avocado Crema",
    creator: "pinch of yum",
    image: "/images/buffalo-cauliflower-tacos.jpeg",
    feeds: 4,
    ingredients: [
      [
        [1, "cup flour"],
        [1, "cup milk"],
        [1 / 4, "teaspoon each garlic powder, salt, and pepper"],
        [1, "head cauliflower"],
        [1 / 2, "cup hot sauce (I used Frank's brand)"],
        ["shredded cabbage or slaw"],
        ["chopped fresh cilantro"],
        ["tortillas"],
      ],
      [
        "Avocado crema",
        [2, "avocados"],
        [1, "clove garlic"],
        [1 / 4, "cup sour cream (yogurt would work, too)"],
        [1 / 4, "cup water"],
        [1 / 2, "teaspoon salt"],
        ["squeeze of lemon or lime"],
      ],
    ],
    description: `Batter the cauliflower: Preheat oven to 450f (230c) degrees. Whisk flour, milk, salt, pepper, and garlic powder. Dip cauliflower pieces in the batter and let excess drip off. Place on parchment-lined baking sheet. Bake on an upper rack for 15-20 minutes until lightly crisped and browned.
    Spice the cauliflower: Gently toss the baked cauliflower in a bowl with the hot sauce. Return to pan. Bake for another 5-10 minutes.
    Avocado Crema: Mix all ingredients in a food processor or blender until smooth.
    Slaw: Toss the slaw with some of the avocado crema until it's nice and creamy.
    Tacos: Fill each tortilla with slaw, cauliflower, a drizzle of avocado crema, and cilantro. Perfection!
    `,
    link: "https://pinchofyum.com/buffalo-cauliflower-tacos-avocado-crema",
  },
  {
    slug: "feastingathome-lo-mein",
    title: "Veggie Lo Mein noodles",
    creator: "feasting at home",
    image: "/images/lo-mein.jpg",
    feeds: 4,
    ingredients: [
      [
        [2, "cups mushrooms"],
        [1, "cup shredded cabbage"],
        [1, "cup carrots"],
        [1, "cup snow peas"],
        [0.5, "bell pepper"],
        [0.5, "onion"],
        ["in spring, try asparagus"],
        ["any other vegetable you feel like chopping up or want to use up"],
        ["crispy tofu"],
      ],
      [
        "Lo Mein Sauce",
        [3, "el soy sauce"],
        [2, "tl sesame oil"],
        [2, "el Chinese Cooking Wine or Mirin"],
        [1, "tl maple syrup, honey or sugar"],
        [0.5, "tl sriracha"],
        [1 / 8, "tl white pepper"],
        [1, "el optional oyster sauce"],
      ],
    ],
    description: `Step One: Whisk together the Lo Mein Sauce.
    Step Two: Cook the noodles!
    Step Three: Bring everything near the stove and begin by stirfrying the veggies.
    Step Four: Once the veggies are tender, yet crisp, add the noodles.
    Step Five: Pour in the flavorful Lo Mein Sauce and toss and stir, for two minutes! If adding tofu or meat, add it in now ( you will have already cooked it- see recipe notes).
    Step Six: Serve immediately! Divide among bowls and top with green onions.
    `,
    link: "https://www.feastingathome.com/lo-mein/",
  },
  {
    slug: "veggilaine-plaattaart",
    title: "Plaattaart (prei, pompoen, spruitjes, feta)",
    creator: "Veggilaine",
    image: "/images/veggilaine-plaattaart.jpeg",
    feeds: 2,
    ingredients: [
      [
        [1, "rol bladerdeeg"],
        [1, "prei"],
        [200, "g geschoonde spruitjes"],
        [0.25, "flespompoen"],
        [2.5, "el extra vierge olijfolie"],
        [2, "el honing"],
        [1, "teen knoflook"],
        [3, "el (vegan) crème fraîche"],
        [2, "el grove mosterd"],
        [1, "el kerriepoeder"],
        [1, "tl kaneel"],
        ["peper en zout"],
        [150, "g feta"],
        ["balsamico crema"],
        [50, "g pecannoten"],
        [1, "el plantaardige melk"],
      ],
    ],
    description: `Verwarm de oven voor op 200 graden. Bedek een bakplaat met bakpapier en laat hier de bladerdeeg op ontdooien. Meng ondertussen de crème fraîche met de fijngehakte knoflook + wat peper en zout. Bestrijk hier het bladerdeeg mee behalve de randen. Snijd de pompoen in dunne plakjes met een mandoline en kook deze kort (5 minuten). Laat afkoelen en bedek de plaattaart vervolgens met de plakjes pompoen. Besprenkel met kaneel en wat olijfolie. Snijd vervolgens de prei fijn en de spruitjes door de helft. Was beide goed met koud water. Meng de prei en spruiten met de mosterd, olijfolie, kerrie en wat peper en zout. Verdeel over de plaattaart. Verbrokkel tot slot de feta en pecannoten over de taart. Drizzle tot slot de honing over de taart en bestrijk de rand met de plantaardige melk. Bak voor 30-35 minuten. Top af met balsamico crema. Eet smakelijk!`,
    link: "https://www.instagram.com/p/Ck6GRE2KuID",
  },
  {
    slug: "damndelicious-greek-quesadillas",
    title: "Griekse Quesadillas",
    creator: "Damn Delicious",
    image: "/images/greek-quesadillas.jpeg",
    feeds: 4,
    ingredients: [
      [
        [8, "grote tortillas"],
        [400, "g spinazie"],
        [0.5, "cup zon gedroogde tomaten"],
        [0.5, "cup kalamata olijven"],
        [1, "cup mozzarella"],
        [1, "cup feta"],
        [1, "el verse dille"],
      ],
      [
        "Tzatziki saus",
        [1, "cup griekse yoghurt"],
        [1, "komkommer"],
        [2, "teentjes knoflook"],
        [1, "el verse dille"],
        [1, "el citroensap"],
        [1, "tl citroenraps"],
        ["zout en peper"],
        [2, "el olijfolie"],
        [1, "tl verse munt (optioneel)"],
      ],
    ],
    description: `
      Maak de saus. Snijdt de komkommer, knoflook, dille en munt fijn. Meng met de overige ingredienten en zet koud.

      Vul en vouw de quesadillas en bak ze in de oven of pan tot de kaas gesmolten is.
    `,
    link: "https://damndelicious.net/2016/07/23/greek-quesadillas/",
  },
  {
    slug: "veggilaine-ultieme-pita-recept",
    title: "Ultieme Pita Recept",
    creator: "Veggilaine",
    image: "/images/ultieme-pita-recept.jpeg",
    feeds: 3,
    ingredients: [
      [
        "Voor 6 stuks",
        [500, "g bloem"],
        [7, "g gedroogde gist"],
        [1, "el agave siroop of honing"],
        [300, "ml lauwwarm water"],
        [10, "g zout"],
        [15, "g olijfolie"],
        ["extra olijfolie voor bakken"],
      ],
    ],
    description: `
    Meng de gist met het water en de agave. Meng de bloem, zout en olie, giet hier het water met gist bij en kneed het geheel tot een (licht plakkerig) deeg.
    Laat het deeg minstens een uur tot drie uur rusten in een diepe kom op kamertemperatuur afgedekt met folie of een schone theedoek. Het moet minstens in grootte zijn verdubbeld! Doe wat olijfolie op je werkblad voor je het deeg in zes gelijke stukken verdeeld.
    Kneed elk deegbolletje met wat olijfolie tot een plat broodje. Verhit een pan op heet vuur en bak het broodje ongeveer 2-3 minuten aan beide kanten. Dek de versgebakken broodjes af met een theedoek om ze warm te houden.
    `,
    link: "https://www.instagram.com/p/CoRrbeSKHFC/",
  },
];

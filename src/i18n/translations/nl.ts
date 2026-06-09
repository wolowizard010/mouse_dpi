import type { TranslationSchema } from '../types';

export const nl: TranslationSchema = {
  metadata: {
    title: "Muis DPI Analyseren — Nauwkeurige DPI Test Tool",
    description: "Meet uw muis DPI met precisie. Gratis online Muis DPI Analyse tool met schermkalibratie en realtime berekening.",
  },
  nav: {
    home: "Home",
    dpiAnalyzer: "DPI-analysator",
    screenRuler: "Schermliniaal",
    howItWorks: "Hoe het werkt",
    testDpi: "DPI Testen",
    logo: "Mijn Muis-DPI",
  },
  footer: {
    tagline: "Nauwkeurige muis DPI-meting, direct in uw browser.",
    tools: "Tools",
    resources: "Bronnen",
    company: "Bedrijf",
    about: "Over ons",
    contact: "Contact",
    privacy: "Privacybeleid",
    terms: "Algemene voorwaarden",
    copyright: "Mijn Muis-DPI. Gratis & open-source.",
  },
  index: {
    heroTitle: "Meet uw muis-DPI met precisie.",
    heroSubtitle: "Nauwkeurige DPI-meting voor ruwe muisinput. Kalibreer uw scherm, test uw muis en verifieer uw instellingen.",
    testYourDpi: "Test uw DPI",
    screenRuler: "Schermliniaal",
    about: "Over ons",
    contact: "Contact",
    terms: "Voorwaarden",
    privacy: "Privacy",
    stepsTitle: "Stappen",
    stepsSubtitle: "Drie stappen naar nauwkeurige DPI.",
    step1Title: "Kalibreren",
    step1Desc: "Gebruik onze schermliniaal om uw scherm te kalibreren. Voer uw monitorformaat en resolutie in voor een nauwkeurige PPI.",
    step2Title: "Afstand instellen",
    step2Desc: "Kies een doelafstand in inches of centimeters. Plaats uw muis bij het startpunt.",
    step3Title: "Meten",
    step3Desc: "Klik op het testgebied, verplaats uw muis de doelafstand en laat los. Uw DPI wordt direct berekend.",
    articleTitle1: "Wat is Muis-DPI?",
    articleContent1: "Muis-DPI (Dots Per Inch) is een standaard voor het meten van de optische gevoeligheid van een computermuis. Het bepaalt hoe ver de cursor op uw scherm beweegt in relatie tot de fysieke afstand die u uw muis op uw bureau beweegt. Een hogere DPI betekent dat de cursor meer beweegt bij minder fysieke beweging, wat ideaal is voor snelle games of 4K-schermen. Een lagere DPI biedt meer precisie, wat handig is voor grafisch ontwerp en tactische shooters.",
    articleTitle2: "Waarom een DPI-controle uitvoeren?",
    articleContent2: "Veel gebruikers vragen zich af wat hun echte DPI is, vooral bij een nieuwe muis of als de cursor vreemd aanvoelt. Fabrikanten adverteren vaak met hoge DPI-waarden, maar de echte DPI kan afwijken door instellingen of versnelling. Onze test meet de daadwerkelijke hardwaregevoeligheid.",
    articleTitle3: "Hoe werkt onze analysator?",
    articleContent3: "Onze online analysator meet uw hardware direct via de browser zonder software-installatie. U kalibreert het scherm om de exacte PPI te bepalen, stelt de doelafstand in, en we meten de pure beweging via moderne browser-APIs.",
    articleTitle4: "De ultieme DPI-tester",
    articleContent4: "In tegenstelling tot eenvoudige tools die alleen de cursorsnelheid schatten, biedt onze tool een gedetailleerde wiskundige berekening op basis van de werkelijk afgelegde afstand ten opzichte van de pixelbeweging op uw scherm.",
    articleTitle5: "Uw instellingen optimaliseren",
    articleContent5: "Als uw DPI te hoog is, mist u precisie. Het verlagen van de hardware-DPI en dit compenseren met de gevoeligheid in de game geeft vaak een soepeler gevoel. Gamers stemmen hun DPI hiermee af op al hun spellen voor een consistent spiergeheugen.",
    faqTitle: "Veelgestelde Vragen",
    faq: [
      {
        question: "Hoe controleer ik de muis-DPI?",
        answer: "U kunt de DPI controleren in de software van de fabrikant (zoals Logitech G HUB, Razer Synapse). Of gebruik onze online analysator om de fysieke beweging te testen."
      },
      {
        question: "Wat is muis-DPI?",
        answer: "DPI (Dots Per Inch) meet hoeveel pixels uw cursor op het scherm beweegt voor elke inch dat uw muis fysiek op uw bureau verschuift."
      },
      {
        question: "Hoe nauwkeurig is deze test?",
        answer: "Onze tool gebruikt de Pointer Lock API om de ruwe hardwaregegevens te registreren zonder de versnelling van het besturingssysteem, met een foutmarge van slechts 1-3%."
      },
      {
        question: "Waarom verschilt mijn gemeten DPI van de ingestelde DPI?",
        answer: "Dit kan komen door actieve muisversnelling in Windows/macOS, software-interpolatie van de muis, of een kleine afwijking bij het meten van de afstand."
      },
      {
        question: "Wat is de Pointer Lock API?",
        answer: "Dit is een browserfunctie die de cursor vergrendelt en ruwe bewegingsgegevens levert, zodat de cursor niet stopt aan de randen van het scherm."
      },
      {
        question: "Moet ik muisversnelling uitschakelen?",
        answer: "Ja, voor de meest nauwkeurige meting. In Windows: schakel 'Precisie van de aanwijzer verbeteren' uit. Op macOS kunt u een tool als LinearMouse gebruiken."
      },
      {
        question: "Hoe werkt schermkalibratie?",
        answer: "Onze tool berekent de werkelijke PPI. U kunt een creditcard aanpassen aan de lijn of uw schermformaat en resolutie handmatig invoeren."
      },
      {
        question: "Welke DPI moet ik gebruiken voor gaming?",
        answer: "De meeste FPS-spelers gebruiken 400-800 DPI voor preciezer richten. MOBA-spelers gebruiken vaak 800-1600 DPI. Voor algemeen gebruik is 800-1600 DPI comfortabel."
      },
      {
        question: "Kan ik DPI testen op een laptop-touchpad?",
        answer: "Technisch wel, maar dit is niet nuttig omdat touchpads geen DPI-sensoren hebben in de traditionele zin van het woord."
      },
      {
        question: "Waarom zou ik mijn DPI testen?",
        answer: "Om te controleren of de fabrieksinstellingen kloppen en om te zorgen dat u met de exacte gevoeligheid speelt die u verwacht."
      },
      {
        question: "Is deze tool gratis?",
        answer: "Ja, volledig gratis. Geen downloads, registraties of advertenties. Direct te gebruiken."
      }
    ],
    ctaTitle: "Klaar om uw DPI te testen?",
    ctaSubtitle: "Gratis, nauwkeurig en duurt minder dan 30 seconden.",
    ctaBtn: "Start DPI Test"
  },
  about: {
    metaTitle: "Over ons — Mijn Muis-DPI",
    metaDesc: "Leer meer over Mijn Muis-DPI, een gratis open-source tool voor het nauwkeurig meten van uw muis-DPI via de Pointer Lock API.",
    title: "Over deze tool.",
    desc1: "Mijn Muis-DPI is een gratis en open-source webtool die uw muis-DPI nauwkeurig meet via moderne browser-APIs zonder tracking of downloads.",
    whyTitle: "Waarom we dit hebben gemaakt.",
    whyDesc1: "De meeste online tests volgen simpelweg de cursorpositie, wat onnauwkeurig is door versnelling en schermranden. Wij wilden een betrouwbare oplossing bieden.",
    whyDesc2: "Onze tool leest de ruwe sensorgegevens via de Pointer Lock API en combineert dit met schermkalibratie voor de meest accurate meting in de browser.",
    privacyTitle: "Privacy.",
    privacyDesc: "Deze tool draait volledig in uw browser. Er worden geen gegevens naar een server gestuurd. Uw kalibratie wordt lokaal opgeslagen.",
    browserTitle: "Browserondersteuning.",
    browserDesc: "De test vereist de Pointer Lock API, die in alle moderne browsers wordt ondersteund:",
    btn: "Probeer de DPI-analysator"
  },
  contact: {
    metaTitle: "Contact - Mijn Muis-DPI",
    metaDesc: "Neem contact op met Mijn Muis-DPI voor vragen of feedback.",
    title: "Contact.",
    desc: "We horen graag van u! Als u vragen, feedback of hulp nodig heeft met de tools, stuur ons dan een bericht via het onderstaande formulier.",
    nameLabel: "Uw naam",
    namePlaceholder: "Jan de Vries",
    emailLabel: "E-mailadres",
    emailPlaceholder: "jan@example.com",
    messageLabel: "Bericht",
    messagePlaceholder: "Hoe kunnen we u helpen?",
    submitBtn: "Bericht verzenden",
    emailText: "E-mail:",
    successMessage: "Bericht succesvol verzonden!"
  },
  dpiAnalyzer: {
    metaTitle: "DPI-analysator — Test uw muis-DPI nauwkeurig | Schermliniaal",
    metaDesc: "Test de DPI van uw muis direct met onze nauwkeurige analysator via de Pointer Lock API. Realtime berekening en testhistorie.",
    title: "DPI-analysator.",
    subtitle: "Klik op het testgebied, beweeg uw muis de doelafstand en uw DPI wordt direct berekend.",
    tipsTitle: "Tips",
    tipsSubtitle: "Voor de meest nauwkeurige resultaten.",
    tip1Title: "Muisversnelling uitschakelen",
    tip1Desc: "Schakel 'Precisie van de aanwijzer verbeteren' in Windows uit of zet versnelling in uw muissoftware uit.",
    tip2Title: "Gebruik een vlakke ondergrond",
    tip2Desc: "Plaats uw muis op een vlakke muismat of bureau. Ongelijke oppervlakken kunnen de tracking beïnvloeden.",
    tip3Title: "Test meerdere keren",
    tip3Desc: "Doe 3 tot 5 tests en vergelijk ze in de geschiedenis. Consistente resultaten tonen een nauwkeurige meting aan.",
    tip4Title: "Kalibreer uw scherm",
    tip4Desc: "Als u de schermliniaal gebruikt, kalibreer deze dan eerst voor de juiste fysieke afstandsreferentie."
  },
  screenRuler: {
    metaTitle: "Schermliniaal — Meten in CM en Inches | DPI-analysator",
    metaDesc: "Gratis online schermliniaal. Meet nauwkeurig in centimeters en inches na kalibratie van uw monitor. Geen fysieke liniaal nodig.",
    title: "Schermliniaal.",
    subtitle: "Een nauwkeurige liniaal op uw scherm. Voer uw schermgegevens in voor exacte metingen in de echte wereld.",
    aboutTitle: "Schermkalibratie",
    aboutDesc: "Voer de diagonaal van uw monitor in (bijv. 27\") en de resolutie (bijv. 2560x1440). Hiermee bepalen we de PPI zodat de liniaal klopt."
  },
  howItWorks: {
    metaTitle: "Hoe muis-DPI meting werkt | DPI-analysator",
    metaDesc: "Ontdek hoe muis-DPI wordt gemeten en waarom onze methode met de Pointer Lock API nauwkeurige resultaten oplevert.",
    title: "Hoe DPI-meting werkt.",
    subtitle: "Inzicht in muis-DPI, onze meetmethode en waarom onze aanpak betrouwbaar is.",
    q1Title: "Wat is muis-DPI?",
    q1Desc: "DPI staat voor Dots Per Inch. Het geeft aan hoeveel pixels de cursor op het scherm beweegt voor elke inch die de muis fysiek verschuift. Een muis op 800 DPI beweegt de cursor 800 pixels per inch.",
    exampleTitle: "Voorbeeld",
    exampleDesc: "Bij 800 DPI beweegt 2 inch fysieke beweging de cursor 1600 pixels. Bij 1600 DPI is dit 3200 pixels.",
    q2Title: "DPI vs Gevoeligheid.",
    q2Desc: "DPI is hardwarematig (sensor). Gevoeligheid is softwarematig (besturingssysteem of game). Ze werken samen:",
    tableAspect: "Aspect",
    tableDpi: "DPI",
    tableSens: "Gevoeligheid",
    tableRowType: "Type",
    tableRowTypeDpi: "Hardware (sensor)",
    tableRowTypeSens: "Software (OS/game)",
    tableRowRes: "Resolutie",
    tableRowResDpi: "Meer datapunten",
    tableRowResSens: "Vermenigvuldigt bestaande data",
    tableRowPrec: "Precisie",
    tableRowPrecDpi: "Hoger = nauwkeuriger",
    tableRowPrecSens: "Hoger = minder nauwkeurig (pixel skipping)",
    tableRowQual: "Kwaliteit",
    tableRowQualDpi: "Ruwe sensorgegevens",
    tableRowQualSens: "Kan haperingen veroorzaken",
    tableFooter: "Voor de beste nauwkeurigheid gebruikt u een hogere hardware-DPI in combinatie met een lagere in-game gevoeligheid.",
    q3Title: "Hoe we DPI meten.",
    q3Desc: "Onze tool leest de bewegingsgegevens direct uit de hardware zonder OS-verwerking:",
    step1Title: "Kalibreer uw scherm",
    step1Desc: "Voer het schermformaat in zodat de tool weet hoeveel pixels overeenkomen met een fysieke inch.",
    step2Title: "Stel de afstand in",
    step2Desc: "Kies hoe ver u de muis gaat bewegen (5 inch is aangeraden). Gebruik de liniaal.",
    step3Title: "Beweeg en meet",
    step3Desc: "Klik, beweeg de muis de doelafstand, en klik nogmaals. De DPI wordt direct getoond.",
    q4Title: "Waarom de Pointer Lock API?",
    q4Desc: "Traditionele tests die de cursorpositie volgen, hebben nadelen:",
    q4Bullet1: "Schermranden: de cursor stopt aan de randen waardoor metingen mislukken",
    q4Bullet2: "Muisversnelling: vervormt de meting afhankelijk van de snelheid",
    q4Bullet3: "Afrondingsfouten: verliest decimale precisie bij pixelberekening",
    q4Bullet4: "Venstergrenzen: beperkt de maximale bewegingsruimte",
    q4Desc2: "De Pointer Lock API lost dit op door de cursor te verbergen en alleen de pure deltas van de sensor te registreren.",
    q4Important: "Belangrijk",
    q4ImportantDesc: "Schakel muisversnelling uit in Windows voor de meest betrouwbare meting.",
    q5Title: "Veelvoorkomende DPI-instellingen.",
    tableColDpi: "DPI",
    tableColUse: "Toepassing",
    tableColCommon: "Gebruikt door",
    q5Row1Use: "Competitieve shooters",
    q5Row1Common: "CS2 / Valorant professionals",
    q5Row2Use: "FPS-games / Algemeen gebruik",
    q5Row2Common: "Meest populaire DPI",
    q5Row3Use: "Gamen / Werk op hoge resolutie",
    q5Row3Common: "Hoge resolutie schermen",
    q5Row4Use: "Grafisch ontwerp / Multi-monitor",
    q5Row4Common: "4K+ schermen",
    ctaBtn: "Test uw DPI nu",
    sidebarTitle: "Op deze pagina",
    sidebarLink1: "Wat is DPI?",
    sidebarLink2: "DPI vs Gevoeligheid",
    sidebarLink3: "Hoe we meten",
    sidebarLink4: "Waarom Pointer Lock?",
    sidebarLink5: "Veelvoorkomende DPI",
    sidebarCtaTitle: "Klaar?",
    sidebarCtaDesc: "Gebruik onze gratis en snelle analysator.",
    sidebarCtaBtn: "Open DPI-analysator"
  },
  privacy: {
    metaTitle: "Privacybeleid - Mijn Muis-DPI",
    metaDesc: "Privacybeleid voor Mijn Muis-DPI.",
    title: "Privacybeleid.",
    lastUpdated: "Laatst bijgewerkt",
    sections: [
      {
        title: "1. Inleiding",
        content: "Welkom bij Mijn Muis-DPI. We respecteren uw privacy en beschermen uw persoonlijke gegevens."
      },
      {
        title: "2. Gegevensverzameling",
        content: "Onze tools werken lokaal in uw browser. We sturen geen muisgegevens naar onze servers."
      },
      {
        title: "3. Cookies",
        content: "We kunnen lokale opslag gebruiken om uw schermkalibratie te onthouden."
      },
      {
        title: "4. Diensten van derden",
        content: "We gebruiken geen tracking cookies of advertentiescripts van derden."
      },
      {
        title: "5. Gegevens bewaren",
        content: "Aangezien we geen gegevens verzamelen, slaan we niets op. U kunt alles wissen door uw browsergeschiedenis te legen."
      },
      {
        title: "6. Kinderen",
        content: "Onze site is geschikt voor alle leeftijden en verzamelt geen gegevens van minderjarigen."
      },
      {
        title: "7. Wijzigingen",
        content: "We kunnen dit beleid bijwerken door de nieuwe versie op deze pagina te plaatsen."
      },
      {
        title: "8. Contact",
        content: "Neem bij vragen contact met ons op via jasdeep97.dev@gmail.com."
      }
    ]
  },
  terms: {
    metaTitle: "Algemene voorwaarden - Mijn Muis-DPI",
    metaDesc: "Algemene voorwaarden voor Mijn Muis-DPI.",
    title: "Algemene voorwaarden.",
    lastUpdated: "Laatst bijgewerkt",
    sections: [
      {
        title: "1. Acceptatie",
        content: "Door deze website te gebruiken, stemt u in met deze voorwaarden."
      },
      {
        title: "2. Gebruikslicentie",
        content: "U mag de tools gebruiken voor persoonlijk, niet-commercieel gebruik."
      },
      {
        title: "3. Disclaimer",
        content: "De tools op de site worden geleverd 'as is' zonder enige vorm van garantie."
      },
      {
        title: "4. Beperkingen",
        content: "Wij zijn niet aansprakelijk voor schade die voortvloeit uit het gebruik van de website."
      },
      {
        title: "5. Nauwkeurigheid",
        content: "We streven naar precisie, maar sluiten afwijkingen door hardwarebeperkingen of kalibratiefouten niet uit."
      },
      {
        title: "6. Links",
        content: "We zijn niet verantwoordelijk voor de inhoud van externe websites die naar ons linken."
      },
      {
        title: "7. Wijzigingen",
        content: "We kunnen deze voorwaarden op elk moment zonder voorafgaande kennisgeving wijzigen."
      },
      {
        title: "8. Wetgeving",
        content: "Deze voorwaarden worden beheerst door en geïnterpreteerd in overeenstemming met de wetten van uw lokale rechtsgebied."
      }
    ]
  },
  dpiToolStrings: {
    settings: "Instellingen",
    targetDistance: "Doelafstand",
    inch: "inch",
    cm: "cm",
    configuredDpi: "Ingestelde DPI",
    configuredDpiPlaceholder: "bijv. 800",
    useVirtualRuler: "Gebruik virtuele liniaal voor meting",
    screenCalibration: "Schermkalibratie",
    calibrateScreen: "Scherm kalibreren",
    notCalibrated: "Niet kalibreerd",
    calibrated: "Gekalibreerd",
    axis: "As",
    horizontal: "Horizontaal",
    vertical: "Verticaal",
    reset: "Reset",
    howToTest: "Hoe te testen",
    testStep1: "Stel uw doelafstand in",
    testStep2: "Klik in het gebied om de cursor te vergrendelen",
    testStep3: "Beweeg uw muis de ingestelde afstand",
    testStep4: "Klik nogmaals om de meting te voltooien",
    clickToStart: "Klik om meting te starten",
    cursorLockedDesc: "Cursor wordt verborgen voor nauwkeurige registratie",
    pixelsMoved: "Pixels bewogen",
    moveMouseRight: "Beweeg de muis naar rechts →",
    moveMouseLeft: "Beweeg de muis naar links ←",
    moveMouseDown: "Beweeg de muis naar beneden ↓",
    moveMouseUp: "Beweeg de muis naar boven ↑",
    pixelsLabel: "PIXELS",
    distanceLabel: "AFSTAND",
    dpiLabel: "DPI",
    statusLabel: "STATUS",
    statusReady: "Bereid",
    statusMeasuring: "Meten...",
    statusSuccess: "Succes",
    statusReset: "Reset",
    results: "Resultaten",
    measuredDpi: "Gemeten DPI",
    configured: "Ingesteld",
    measured: "Gemeten",
    vs: "vs",
    diffPerfect: "De DPI komt perfect overeen!",
    diffOff: "DPI wijkt {diff}% af ({desc})",
    detailPixels: "Pixels bewogen",
    detailDistance: "Doelafstand",
    detailAxis: "Gebruikte as",
    testHistory: "Geschiedenis",
    noTests: "Nog geen tests. Klik in het raster om te beginnen.",
    calibrateModalTitle: "Virtuele liniaal kalibreren",
    calibrateModalDesc: "Voer uw schermgrootte en resolutie in voor exacte centimeters op het scherm.",
    presets: "Presets",
    manualEntry: "Handmatige invoer",
    selectMonitor: "Selecteer monitor",
    screenDiagonal: "Schermdiagonaal (inches)",
    resolution: "Resolutie",
    applyCalibration: "Kalibratie toepassen",
    fillAllFieldsError: "Vul alle verplichte velden in."
  },
  rulerToolStrings: {
    calibration: "Kalibratie",
    enterSpecs: "Voer schermgegevens in om de liniaal te schalen.",
    presets: "Presets",
    manual: "Handmatig",
    selectMonitor: "Selecteer monitor",
    screenDiagonal: "Schermdiagonaal (inches)",
    resolution: "Resolutie",
    calibrateBtn: "Kalibreren",
    rulerUnit: "Eenheid",
    cm: "cm",
    inch: "inch",
    notCalibrated: "Niet gekalibreerd",
    calibrated: "Gekalibreerd",
    rulerHint: "Kalibreer voor schaal 1:1 in de echte wereld",
    rulerLabelCm: "Centimeters",
    rulerLabelInches: "Inches",
    fillAllFieldsError: "Vul alle verplichte velden in."
  }
};

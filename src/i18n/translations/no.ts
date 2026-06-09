import type { TranslationSchema } from '../types';

export const no: TranslationSchema = {
  metadata: {
    title: "Mus DPI Analyse — Nøyaktig DPI-testverktøy",
    description: "Mål din mus' DPI med presisjon. Gratis online Mouse DPI-analyseverktøy med skjermkalibrering og sanntidsberegning.",
  },
  nav: {
    home: "Hjem",
    dpiAnalyzer: "DPI-analysator",
    screenRuler: "Skjermlinjal",
    howItWorks: "Hvordan det fungerer",
    testDpi: "Test DPI",
    logo: "Min Mus DPI",
  },
  footer: {
    tagline: "Presis mus DPI-måling direkte i nettleseren din.",
    tools: "Verktøy",
    resources: "Ressurser",
    company: "Bedrift",
    about: "Om oss",
    contact: "Kontakt",
    privacy: "Personvernerklæring",
    terms: "Brukervilkår",
    copyright: "Min Mus DPI. Gratis & open-source.",
  },
  index: {
    heroTitle: "Mål din mus' DPI med presisjon.",
    heroSubtitle: "Presis DPI-måling for rå musinndata. Kalibrer skjermen, test musen og verifiser innstillingene dine.",
    testYourDpi: "Test din DPI",
    screenRuler: "Skjermlinjal",
    about: "Om oss",
    contact: "Kontakt",
    terms: "Vilkår",
    privacy: "Personvern",
    stepsTitle: "Trinn",
    stepsSubtitle: "Tre trinn til nøyaktig DPI.",
    step1Title: "Kalibrer",
    step1Desc: "Bruk skjermlinjalen vår til å kalibrere skjermen. Angi skjermdiagonal og oppløsning for nøyaktig PPI.",
    step2Title: "Velg avstand",
    step2Desc: "Velg en målavstand i tommer eller centimeter. Plasser musen ved startmarkeringen.",
    step3Title: "Mål",
    step3Desc: "Klikk på testområdet, flytt musen målavstanden og slipp. Din DPI beregnes umiddelbart.",
    articleTitle1: "Hva er Mus DPI?",
    articleContent1: "Mus DPI (Dots Per Inch) måler hvor mange piksler musepekeren beveger seg på skjermen for hver tomme musen beveger seg på skrivebordet. Høyere DPI gjør at pekeren beveger seg lenger med mindre fysisk bevegelse, noe som passer for spill eller høyoppløselige skjermer. Lavere DPI gir høyere presisjon, noe som er ideelt for fotoredigering eller presisjonssikting i FPS-spill.",
    articleTitle2: "Hvorfor sjekke DPI?",
    articleContent2: "Mange vil gjerne verifisere sin mus' faktiske maskinvarefølsomhet, ettersom produsenter kan markedsføre feilaktige tall eller operativsystemets akselerasjon påvirker resultatet. Vårt verktøy måler din sanne maskinvare-DPI.",
    articleTitle3: "Hvordan fungerer vår analysator?",
    articleContent3: "Vår analysator fungerer helt i nettleseren uten krav om programvareinstallasjon. Kalibrer skjermen for å beregne PPI, still inn målavstanden, og mål den rå bevegelsen direkte via Pointer Lock API.",
    articleTitle4: "Den ultimate DPI-testeren",
    articleContent4: "Vår tester beregner den fysiske bevegelsen i forhold til piksler på skjermen og gir en detaljert matematisk analyse snarere enn en enkel gjetning.",
    articleTitle5: "Optimer innstillingene dine",
    articleContent5: "Å ha for høy DPI kan gjøre siktingen ustabil. Å redusere DPI på musen og kompensere med lavere følsomhet i spillet gir en mykere kontroll. FPS-spillere bruker vår tester til å matche muskelminnet i alle spill.",
    faqTitle: "Ofte stilte spørsmål",
    faq: [
      {
        question: "Hvordan sjekker man musens DPI?",
        answer: "Du kan sjekke i produsentens programvare (Logitech G HUB, Razer Synapse etc.) eller bruke vår onlineanalysator til å måle bevegelsen fysisk."
      },
      {
        question: "Hva er musens DPI?",
        answer: "DPI (Dots Per Inch) angir hvor mange piksler pekeren flytter seg på skjermen per tomme musen flyttes på bordet."
      },
      {
        question: "Hvor nøyaktig er denne DPI-testen?",
        answer: "Verktøyet vårt bruker Pointer Lock API til å lese rå bevegelsesdata direkte fra musen. Dette forhindrer OS-akselerasjon og gir en nøyaktighet på 1-3 %."
      },
      {
        question: "Hvorfor skiller min målte DPI seg fra den innstilte?",
        answer: "Det kan skyldes at musakselerasjon er aktivert i operativsystemet, programvareinterpolering i musen, eller små målefeil ved flytting av musen."
      },
      {
        question: "Hva er Pointer Lock API?",
        answer: "Det er en nettleserfunksjon som låser musens peker og leser bevegelsesforskjeller (deltaX, deltaY) i stedet for absolutt posisjon, noe som forhindrer at pekeren treffer skjermkantene."
      },
      {
        question: "Må jeg deaktivere musakselerasjon?",
        answer: "Ja, for best mulig nøyaktighet. I Windows: gå til Musinnstillinger → Deaktiver 'Forbedre pekerpresisjon'. På macOS kan du bruke LinearMouse."
      },
      {
        question: "Hvordan fungerer skjermkalibrering?",
        answer: "Verktøyet beregner skjermens PPI. Du kan justere linjen mot et fysisk kredittkort eller angi skjermens diagonal og oppløsning."
      },
      {
        question: "Hvilken DPI skal jeg bruke til spill?",
        answer: "Mange FPS-profesjonelle bruker 400-800 DPI med lav følsomhet i spillet. MOBA-spillere bruker ofte 800-1600 DPI. Til hverdags på en 1080p-skjerm er 800-1600 DPI passelig."
      },
      {
        question: "Kan jeg teste på en bærbar datamaskins styreflate?",
        answer: "Nei, styreflater fungerer ikke med tradisjonell optisk DPI-måling på samme måte som en separat mus."
      },
      {
        question: "Hvorfor bør jeg teste min DPI?",
        answer: "Mus kan noen ganger ha feil DPI sammenlignet med det som er lovet. Testen verifiserer sensorens sanne følsomhet."
      },
      {
        question: "Er dette verktøyet gratis?",
        answer: "Ja, helt gratis. Ingen nedlastinger, registreringer eller annonser. Åpne siden og begynn å teste."
      }
    ],
    ctaTitle: "Klar til å teste din DPI?",
    ctaSubtitle: "Gratis, presis og tar under 30 sekunder.",
    ctaBtn: "Start DPI-test"
  },
  about: {
    metaTitle: "Om oss — Min Mus DPI",
    metaDesc: "Lær mer om Min Mus DPI, et gratis og open-source verktøy for nøyaktig DPI-måling med Pointer Lock API.",
    title: "Om dette verktøyet.",
    desc1: "Min Mus DPI is et gratis webverktøy med åpen kildekode for å måle musens sanne maskinvarefølsomhet uten lagring av brukerdata.",
    whyTitle: "Hvorfor vi bygde dette.",
    whyDesc1: "De fleste online-tester sporer bare pekerens posisjon på skjermen, noe som forstyrres av skjermkanter og akselerasjon. Vi ville tilby et pålitelig og profesjonelt alternativ.",
    whyDesc2: "Ved å lese sensorens bevegelse via Pointer Lock API og kalibrere piksler mot skjermstørrelsen får vi ekstremt korrekte måleverdier.",
    privacyTitle: "Personvern.",
    privacyDesc: "Alt kjører lokalt i nettleseren din. Ingen data sendes til servere. Innstillingene dine lagres i nettleserens localStorage.",
    browserTitle: "Støtte for nettlesere.",
    browserDesc: "Testen krever Pointer Lock API, noe som understøttes av alle moderne nettlesere:",
    btn: "Test DPI-analysatoren"
  },
  contact: {
    metaTitle: "Kontakt - Min Mus DPI",
    metaDesc: "Kontakt Min Mus DPI for spørsmål eller synspunkter.",
    title: "Kontakt oss.",
    desc: "Vi vil veldig gjerne høre fra deg! Hvis du har spørsmål, tilbakemeldinger eller problemer med verktøyene, kan du sende en melding via skjemaet nedenfor.",
    nameLabel: "Ditt navn",
    namePlaceholder: "Sven Svensson",
    emailLabel: "E-postadresse",
    emailPlaceholder: "sven@example.com",
    messageLabel: "Melding",
    messagePlaceholder: "Hvordan kan vi hjelpe deg?",
    submitBtn: "Send melding",
    emailText: "E-post:",
    successMessage: "Meldingen er sendt!"
  },
  dpiAnalyzer: {
    metaTitle: "DPI-analysator — Mål din mus' DPI nøyaktig | Skjermlinjal",
    metaDesc: "Mål din mus' DPI med vår presise analysator. Bruker Pointer Lock API. Sanntidsberegning med testhistorikk.",
    title: "DPI-analysator.",
    subtitle: "Klikk på testområdet, flytt musen målafstanden og les DPI av i sanntid.",
    tipsTitle: "Tips",
    tipsSubtitle: "Hvordan få nøyaktige resultater.",
    tip1Title: "Deaktiver musakselerasjon",
    tip1Desc: "Slå av 'Forbedre pekerpresisjon' i Windows-innstillinger, eller deaktiver akselerasjon i musesoftwaren.",
    tip2Title: "Bruk et flatt underlag",
    tip2Desc: "Placer musen på en flat musematte. Ujevnheter på skrivebordet kan forstyrre sporingen.",
    tip3Title: "Test flere ganger",
    tip3Desc: "Gjør 3-5 tester og sammenlign i historikken. Ensartede resultater tyder på en korrekt måling.",
    tip4Title: "Kalibrer skjermen",
    tip4Desc: "Hvis du bruker linjalen, må du kalibrere den med din monitors diagonal og oppløsning for det riktige målet."
  },
  screenRuler: {
    metaTitle: "Skjermlinjal — Mål i CM og Tommer | DPI-analysator",
    metaDesc: "Gratis online skjermlinjal. Mål presist i centimeter og tommer etter kalibrering av skærmens PPI. Ingen fysisk linjal nødvendig.",
    title: "Skjermlinjal.",
    subtitle: "En presis linjal på skjermen. Angi dine skjermspesifikasjoner for korrekte fysiske mål.",
    aboutTitle: "Skjermkalibrering",
    aboutDesc: "Fyll ut skjermdiagonalen (f.eks. 27\") og dens oppløsning (f.eks. 2560x1440). Da beregner vi den riktige PPI, slik at linjalen passer med virkeligheten."
  },
  howItWorks: {
    metaTitle: "Hvordan DPI-måling fungerer | DPI-analysator",
    metaDesc: "Lær hvordan musens DPI måles, og hvorfor vår metode med Pointer Lock API gir sanne og presise resultater.",
    title: "Hvordan DPI-måling fungerer.",
    subtitle: "Forståelse av musens DPI, hvordan vi beregner følsomheten, og hvorfor vår metode er pålitelig.",
    q1Title: "Hva er musens DPI?",
    q1Desc: "DPI står for Dots Per Inch (punkter per tomme). Det måler hvor mange piksler markøren beveger seg på skjermen per tomme musen flyttes fysisk. En mus på 800 DPI flytter markøren 800 piksler per tomme.",
    exampleTitle: "Eksempel",
    exampleDesc: "Ved 800 DPI flytter 2 tommer musbevegelse markøren 1600 piksler. Ved 1600 DPI flytter samme bevegelse markøren 3200 piksler.",
    q2Title: "DPI vs Følsomhet.",
    q2Desc: "DPI innstilles i maskinvaren (sensoren). Følsomhet er en programvaremultiplikator i operativsystemet eller spillet. De samvirker:",
    tableAspect: "Aspekt",
    tableDpi: "DPI",
    tableSens: "Følsomhet",
    tableRowType: "Type",
    tableRowTypeDpi: "Maskinvare (sensor)",
    tableRowTypeSens: "Programvare (OS/spill)",
    tableRowRes: "Oppløsning",
    tableRowResDpi: "Flere datapunkter",
    tableRowResSens: "Multipliserer eksisterende data",
    tableRowPrec: "Presisjon",
    tableRowPrecDpi: "Høyere = mer presis",
    tableRowPrecSens: "Høyere = dårligere presisjon (hopper over piksler)",
    tableRowQual: "Kvalitet",
    tableRowQualDpi: "Rå sensordata",
    tableRowQualSens: "Kan gi hakkete bevegelser",
    tableFooter: "For best presisjon anbefales en høy maskinvare-DPI og lav følsomhet i programmet eller spillet.",
    q3Title: "Hvordan vi måler DPI.",
    q3Desc: "Verktøyet vårt leser rå bevegelsesdata direkte fra maskinvaren og unngår OS-behandling:",
    step1Title: "Kalibrer skjermen",
    step1Desc: "Fyll ut skjermdiagonalen slik at systemet kan beregne skjermens PPI.",
    step2Title: "Innstill avstanden",
    step2Desc: "Velg målafstand (5 tommer er godt som standard). Bruk den virtuelle linjalen.",
    step3Title: "Flytt og mål",
    step3Desc: "Klikk på området, flytt musen avstanden, klikk igjen. Verktøyet beregner din DPI med en gang.",
    q4Title: "Hvorfor Pointer Lock API?",
    q4Desc: "Vanlige onlinetester som følger pekeren har mangler:",
    q4Bullet1: "Skjermkanter: pekeren stoppes ved kanten, noe som ødelegger målingen",
    q4Bullet2: "Akselerasjon: endrer pekerens hastighet avhengig av hvor raskt du beveger hånden",
    q4Bullet3: "Avrunding: mister desimalpresisjon i beregningen",
    q4Bullet4: "Vindusbegrensning: begrenser hvor langt du kan flytte musen",
    q4Desc2: "Pointer Lock API låser pekeren og leser utelukkende endringer direkte fra mussensoren uten begrensning.",
    q4Important: "Viktig",
    q4ImportantDesc: "For korrekte måleverdier må du deaktivere musakselerasjon i Windows pekerinnstillinger.",
    q5Title: "Vanlige DPI-verdier.",
    tableColDpi: "DPI",
    tableColUse: "Bruksområde",
    tableColCommon: "Vanlig hos",
    q5Row1Use: "FPS-spill",
    q5Row1Common: "CS2 / Valorant-proffer",
    q5Row2Use: "Skytespill / Alminnelig bruk",
    q5Row2Common: "Mest populære DPI",
    q5Row3Use: "Spill / Kontorarbeid",
    q5Row3Common: "Höyoppløselige skærmer",
    q5Row4Use: "Grafisk design / Multiskjerm",
    q5Row4Common: "4K-skjermer og oppover",
    ctaBtn: "Mål din DPI nå",
    sidebarTitle: "På denne side",
    sidebarLink1: "Hva er DPI?",
    sidebarLink2: "DPI vs Følsomhet",
    sidebarLink3: "Hvordan vi måler",
    sidebarLink4: "Hvorfor Pointer Lock?",
    sidebarLink5: "Vanlige DPI-verdier",
    sidebarCtaTitle: "Klar?",
    sidebarCtaDesc: "Test vår gratis analysator nå.",
    sidebarCtaBtn: "Åpne Analysator"
  },
  privacy: {
    metaTitle: "Personvernerklæring - Min Mus DPI",
    metaDesc: "Personvernerklæring for Min Mus DPI.",
    title: "Personvernerklæring.",
    lastUpdated: "Senest oppdatert",
    sections: [
      {
        title: "1. Introduksjon",
        content: "Velkommen til Min Mus DPI. Vi verner om ditt personvern og beskytter innstillingene dine."
      },
      {
        title: "2. Datainnsamling",
        content: "Verktøyene våre kjører lokalt i nettleseren din. Vi samler ikke inn eller sender musedata til servere."
      },
      {
        title: "3. Cookies",
        content: "Vi bruker nettleserens localStorage til å lagre din skjermkalibrering."
      },
      {
        title: "4. Tredjepartstjenester",
        content: "Vi bruker ikke sporingscookies eller reklameskripter fra tredjepart."
      },
      {
        title: "5. Datalagring",
        content: "Siden vi ikke samler inn data, lagrer vi ingenting. Du kan slette din historikk ved å tømme nettleserens cache."
      },
      {
        title: "6. Barns personvern",
        content: "Sitet er sikkert for alle aldre og lagrer ikke data fra mindreårige."
      },
      {
        title: "7. Endringer i policyen",
        content: "Vi kan oppdatere denne policyen og offentliggjør i så fall endringene her."
      },
      {
        title: "8. Kontakt",
        content: "Kontakt oss ved spørsmål på jasdeep97.dev@gmail.com."
      }
    ]
  },
  terms: {
    metaTitle: "Brukervilkår - Min Mus DPI",
    metaDesc: "Brukervilkår for Min Mus DPI.",
    title: "Brukervilkår.",
    lastUpdated: "Senest oppdatert",
    sections: [
      {
        title: "1. Godkjennelse",
        content: "Ved å bruke denne sajt godkjenner du disse brukervilkårene."
      },
      {
        title: "2. Lisens",
        content: "Det er tillatt å bruke verktøyene til privat, ikke-kommersiell bruk."
      },
      {
        title: "3. Ansvarsfraskrivelse",
        content: "Verktøyene leveres i foreliggende stand uten noen garantier om uavbrutt funksjon."
      },
      {
        title: "4. Begrensning av ansvar",
        content: "Vi svarer ikke for skader som oppstår som følge av bruk eller manglende evne til å bruke sajten."
      },
      {
        title: "5. Nøyaktighet",
        content: "Vi tilstreber presisjon, men svarer ikke for små måleafvik ved manuell flytting."
      },
      {
        title: "6. Eksterne lenker",
        content: "Vi kontrollerer ikke innholdet på nettsteder som vi lenker til."
      },
      {
        title: "7. Endringer i villkår",
        content: "Vi forbeholder oss retten til å endre disse villkårene uten varsel."
      },
      {
        title: "8. Lovvalg",
        content: "Eventuelle tvister reguleres i samsvar med lovgivningen i ditt land."
      }
    ]
  },
  dpiToolStrings: {
    settings: "Innstillinger",
    targetDistance: "Målafstand",
    inch: "tomme",
    cm: "cm",
    configuredDpi: "Instilt DPI",
    configuredDpiPlaceholder: "t.ex. 800",
    useVirtualRuler: "Bruk skjermlinjal til måling",
    screenCalibration: "Skjermkalibrering",
    calibrateScreen: "Kalibrer skjermen",
    notCalibrated: "Ikke kalibrert",
    calibrated: "Kalibrert",
    axis: "Akse",
    horizontal: "Horisontal",
    vertical: "Vertikal",
    reset: "Nullstill",
    howToTest: "Hvordan man tester",
    testStep1: "Velg målavstand",
    testStep2: "Klikk på overflaten for å låse pekeren",
    testStep3: "Flytt musen det valgte avstanden",
    testStep4: "Klikk igjen for å avslutte",
    clickToStart: "Klikk for å starte målingen",
    cursorLockedDesc: "Musepekeren dölges for å måle sensoren direkte",
    pixelsMoved: "Piksler flyttet",
    moveMouseRight: "Flytt musen til høyre →",
    moveMouseLeft: "Flytt musen til venstre ←",
    moveMouseDown: "Flytt musen nedover ↓",
    moveMouseUp: "Flytt musen oppover ↑",
    pixelsLabel: "PIKSLER",
    distanceLabel: "AVSTAND",
    dpiLabel: "DPI",
    statusLabel: "STATUS",
    statusReady: "Klar",
    statusMeasuring: "Måler...",
    statusSuccess: "Suksess",
    statusReset: "Nullstilt",
    results: "Resultater",
    measuredDpi: "Uppmätt DPI",
    configured: "Innstilt",
    measured: "Målt",
    vs: "vs",
    diffPerfect: "DPI passer perfekt!",
    diffOff: "DPI adskiller seg med {diff}% ({desc})",
    detailPixels: "Piksler flyttet",
    detailDistance: "Målafstand",
    detailAxis: "Anvendt akse",
    testHistory: "Historikk",
    noTests: "Ingen lagrede tester. Klikk på overflaten for å begynne.",
    calibrateModalTitle: "Kalibrer virtuell linjal",
    calibrateModalDesc: "Udfyld skærmstørrelse og opløsning for eksakte centimetermål på glasset.",
    presets: "Presets",
    manualEntry: "Manuell inntasting",
    selectMonitor: "Velg skjerm",
    screenDiagonal: "Skjermdiagonal (tommer)",
    resolution: "Oppløsning",
    applyCalibration: "Lagre kalibrering",
    fillAllFieldsError: "Vennligst fyll ut alle felt."
  },
  rulerToolStrings: {
    calibration: "Kalibrering",
    enterSpecs: "Indtast skærmdiagonal og opløsning for at kalibrere linealen.",
    presets: "Presets",
    manual: "Manuell",
    selectMonitor: "Velg skjerm",
    screenDiagonal: "Skjermdiagonal (tommer)",
    resolution: "Oppløsning",
    calibrateBtn: "Kalibrer",
    rulerUnit: "Mål",
    cm: "cm",
    inch: "tomme",
    notCalibrated: "Ikke kalibrert",
    calibrated: "Kalibrert",
    rulerHint: "Kalibrer for eksakt skala 1:1 på skjermen",
    rulerLabelCm: "Centimeter",
    rulerLabelInches: "Tommer",
    fillAllFieldsError: "Vennligst fyll ut alle felt."
  }
};

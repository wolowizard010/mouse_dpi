import type { TranslationSchema } from '../types';

export const da: TranslationSchema = {
  metadata: {
    title: "Mus DPI Analyse — Præcist DPI Testværktøj",
    description: "Mål din mus' DPI med præcision. Gratis online Mouse DPI-analyseværktøj med skærmkalibrering og realtidsberegning.",
  },
  nav: {
    home: "Hjem",
    dpiAnalyzer: "DPI-analysator",
    screenRuler: "Skærmlineal",
    howItWorks: "Sådan fungerer det",
    testDpi: "Test DPI",
    logo: "Min Mus DPI",
  },
  footer: {
    tagline: "Præcis mus DPI-måling direkte i din browser.",
    tools: "Værktøjer",
    resources: "Ressourcer",
    company: "Virksomhed",
    about: "Om os",
    contact: "Kontakt",
    privacy: "Privatlivspolitik",
    terms: "Brugervilkår",
    copyright: "Min Mus DPI. Gratis & open-source.",
  },
  index: {
    heroTitle: "Mål din mus' DPI med præcision.",
    heroSubtitle: "Præcis DPI-måling til rå musetilførsel. Kalibrer din skærm, test din mus og bekræft dine indstillinger.",
    testYourDpi: "Test din DPI",
    screenRuler: "Skærmlineal",
    about: "Om os",
    contact: "Kontakt",
    terms: "Vilkår",
    privacy: "Privatliv",
    stepsTitle: "Trin",
    stepsSubtitle: "Tre trin til præcis DPI.",
    step1Title: "Kalibrer",
    step1Desc: "Brug vores skærmlineal til at kalibrere din skærm. Indtast skærmdiagonal og opløsning for præcis PPI.",
    step2Title: "Vælg afstand",
    step2Desc: "Vælg en målafstand i tommer eller centimeter. Placer musen ved startmarkeringen.",
    step3Title: "Mål",
    step3Desc: "Klik på testområdet, flyt musen målafstanden og slip. Din DPI beregnes med det samme.",
    articleTitle1: "Hvad er Mus DPI?",
    articleContent1: "Mus DPI (Dots Per Inch) måler, hvor mange pixels musemarkøren bevæger sig på skærmen for hver tomme, musen bevæger sig på skrivebordet. Højere DPI gør, at markøren bevæger sig længere med mindre fysisk bevægelse, hvilket er velegnet til spil eller højopløselige skærme. Lavere DPI giver højere præcision, hvilket er ideelt til fotoredigering eller præcisionssigte i FPS-spil.",
    articleTitle2: "Hvorfor kontrollere DPI?",
    articleContent2: "Mange vil gerne verificere deres mus' faktiske hardwarefølsomhed, da producenter kan markedsføre forkerte tal, eller operativsystemets acceleration påvirker resultatet. Vores værktøj måler din sande hardware-DPI.",
    articleTitle3: "Hvordan fungerer vores analysator?",
    articleContent3: "Vores analysator fungerer helt i browseren uden krav om softwareinstallation. Kalibrer din skærm for at beregne PPI, indstil målafstanden, og mål den rå bevægelse direkte via Pointer Lock API.",
    articleTitle4: "Den ultimative DPI-tester",
    articleContent4: "Vores tester beregner den fysiske bevægelse i forhold til pixels på skærmen og giver en detaljeret matematisk analyse snarere end et simpelt gæt.",
    articleTitle5: "Optimer dine indstillinger",
    articleContent5: "At have for høj DPI kan gøre sigtet rystende. At reducere DPI på musen og kompensere med lavere følsomhed i spillet giver en blødere kontrol. FPS-spillere bruger vores tester til at matche muskelhukommelsen i alle spil.",
    faqTitle: "Ofte stillede spørgsmål",
    faq: [
      {
        question: "Hvordan kontrollerer man musens DPI?",
        answer: "Du kan tjekke i producentens software (Logitech G HUB, Razer Synapse osv.) eller bruge vores onlineanalysator til at måle bevægelsen fysisk."
      },
      {
        question: "Hvad er musens DPI?",
        answer: "DPI (Dots Per Inch) angiver, hvor mange pixels markøren flytter sig på skærmen pr. tomme, musen flyttes på bordet."
      },
      {
        question: "Hvor præcist er denne DPI-test?",
        answer: "Vores værktøj bruger Pointer Lock API til at læse rå bevægelsesdata direkte fra musen. Dette forhindrer OS-acceleration og giver en nøjagtighed på 1-3%."
      },
      {
        question: "Hvorfor adskiller min målte DPI sig fra den indstillede?",
        answer: "Det kan skyldes, at musacceleration er aktiveret i operativsystemet, mjukvareinterpolering i musen, eller små målefejl ved flytning af musen."
      },
      {
        question: "Hvad er Pointer Lock API?",
        answer: "Det er en browserfunktion, der låser musens markør og læser bevægelsesforskelle (deltaX, deltaY) i stedet for absolut position, hvilket forhindrer, at markøren rammer skærmens kanter."
      },
      {
        question: "Skal jeg deaktivere musacceleration?",
        answer: "Ja, for bedst mulig nøjagtighed. I Windows: gå til Musindstillinger → Deaktiver 'Forbedr markørens præcision'. På macOS kan du bruge LinearMouse."
      },
      {
        question: "Hvordan fungerer skærmkalibrering?",
        answer: "Værktøjet beregner din skærms PPI. Du kan justere linjen mod et fysisk kreditkort eller angive skærmens diagonal og opløsning."
      },
      {
        question: "Hvilken DPI skal jeg bruge til spil?",
        answer: "Mange FPS-professionelle bruger 400-800 DPI med lav følsomhed i spillet. MOBA-spillere bruger ofte 800-1600 DPI. Til hverdag på en 1080p skærm er 800-1600 DPI passende."
      },
      {
        question: "Kan jeg teste på en bærbar computers touchpad?",
        answer: "Nej, touchpads og styreplader fungerer ikke med traditionel optisk DPI-måling på samme måde som en separat mus."
      },
      {
        question: "Hvorfor skal jeg teste min DPI?",
        answer: "Mus kan undertiden have forkert DPI sammenlignet med det lovede. Testen verificerer sensorens sande følsomhed."
      },
      {
        question: "Er dette værktøj gratis?",
        answer: "Ja, helt gratis. Ingen downloads, registreringer eller annoncer. Åbn siden og begynd at teste."
      }
    ],
    ctaTitle: "Klar til at teste din DPI?",
    ctaSubtitle: "Gratis, præcis og tager under 30 sekunder.",
    ctaBtn: "Start DPI-test"
  },
  about: {
    metaTitle: "Om os — Min Mus DPI",
    metaDesc: "Lær mere om Min Mus DPI, et gratis og open-source værktøj til exakt DPI-måling med Pointer Lock API.",
    title: "Om dette værktøj.",
    desc1: "Min Mus DPI er et gratis webværktøj med åben kildekode til at måle musens sande hardwarefølsomhed uden lagring af brugerdata.",
    whyTitle: "Hvorfor vi byggede dette.",
    whyDesc1: "De fleste online-tester sporer bare markørens position på skærmen, hvilket forstyrres af skærmkanter og acceleration. Vi ville tilbyde et pålideligt og professionelt alternativ.",
    whyDesc2: "Ved at læse sensorens bevægelse via Pointer Lock API og kalibrere pixels mod skærmstørrelsen får vi ekstremt korrekte måleværdier.",
    privacyTitle: "Privatliv.",
    privacyDesc: "Alt kører lokalt i din browser. Ingen data sendes til servere. Dine indstillinger gemmes i browserens localStorage.",
    browserTitle: "Støtte til browsere.",
    browserDesc: "Testen kræver Pointer Lock API, hvilket understøttes af alle moderne browsere:",
    btn: "Test DPI-analysatoren"
  },
  contact: {
    metaTitle: "Kontakt - Min Mus DPI",
    metaDesc: "Kontakt Min Mus DPI for spørgsmål eller synspunkter.",
    title: "Kontakt os.",
    desc: "Vi vil meget gerne høre fra dig! Hvis du har spørgsmål, feedback eller problemer med værktøjerne, kan du sende en besked via formularen nedenfor.",
    nameLabel: "Dit navn",
    namePlaceholder: "Sven Svensson",
    emailLabel: "E-postadresse",
    emailPlaceholder: "sven@example.com",
    messageLabel: "Meddelelse",
    messagePlaceholder: "Hvordan kan vi hjælpe dig?",
    submitBtn: "Send meddelelse",
    emailText: "E-post:",
    successMessage: "Meddelelsen er blevet sendt!"
  },
  dpiAnalyzer: {
    metaTitle: "DPI-analysator — Mål din mus' DPI præcist | Skærmlineal",
    metaDesc: "Mål din mus' DPI med vores præcise analysator. Bruger Pointer Lock API. Realtidsberegning med testhistorik.",
    title: "DPI-analysator.",
    subtitle: "Klik på testområdet, flyt musen målafstanden og læs DPI af i realtid.",
    tipsTitle: "Tips",
    tipsSubtitle: "Sådan får du præcise resultater.",
    tip1Title: "Deaktiver musacceleration",
    tip1Desc: "Sluk for 'Forbedr markørens præcision' i Windows-indstillinger, eller deaktiver acceleration i musesoftwaren.",
    tip2Title: "Brug et fladt underlag",
    tip2Desc: "Placer musen på en flad musemåtte. Ujævnheder på skrivebordet kan forstyrre sporingen.",
    tip3Title: "Test flere gange",
    tip3Desc: "Lav 3-5 tests og sammenlign i historikken. Ensartede resultater tyder på en korrekt måling.",
    tip4Title: "Kalibrer din skærm",
    tip4Desc: "Hvis du bruger linealen, skal du kalibrere den med din monitors diagonal og opløsning for det rigtige mål."
  },
  screenRuler: {
    metaTitle: "Skærmlineal — Mål i CM og Tommer | DPI-analysator",
    metaDesc: "Gratis online skærmlineal. Mål præcist i centimeter og tommer efter kalibrering af skærmens PPI. Ingen fysisk lineal nødvendig.",
    title: "Skærmlineal.",
    subtitle: "En præcis lineal på skærmen. Indtast dine skærmspecifikationer for korrekte fysiske mål.",
    aboutTitle: "Skærmkalibrering",
    aboutDesc: "Udfyld skærmdiagonalen (f.eks. 27\") og dens opløsning (f.eks. 2560x1440). Så beregner vi den rigtige PPI, så linealen passer med virkeligheden."
  },
  howItWorks: {
    metaTitle: "Hvordan DPI-måling fungerer | DPI-analysator",
    metaDesc: "Lær, hvordan musens DPI måles, og hvorfor vores metode med Pointer Lock API giver sande og præcise resultater.",
    title: "Hvordan DPI-måling fungerer.",
    subtitle: "Forståelse af musens DPI, hvordan vi beregner følsomheden, og hvorfor vores metode er pålidelig.",
    q1Title: "Hvad er musens DPI?",
    q1Desc: "DPI står for Dots Per Inch (punkter pr. tomme). Det måler, hvor mange pixels markøren bevæger sig på skærmen pr. tomme, musen flyttes fysisk. En mus på 800 DPI flytter markøren 800 pixels pr. tomme.",
    exampleTitle: "Eksempel",
    exampleDesc: "Ved 800 DPI flytter 2 tommer musrobevægelse markøren 1600 pixels. Ved 1600 DPI flytter samme bevægelse markøren 3200 pixels.",
    q2Title: "DPI vs Følsomhed.",
    q2Desc: "DPI indstilles i hardwaren (sensoren). Følsomhed er en softwaremultiplikator i operativsystemet eller spillet. De samvirker:",
    tableAspect: "Aspekt",
    tableDpi: "DPI",
    tableSens: "Følsomhed",
    tableRowType: "Type",
    tableRowTypeDpi: "Hardware (sensor)",
    tableRowTypeSens: "Software (OS/spil)",
    tableRowRes: "Opløsning",
    tableRowResDpi: "Flere datapunkter",
    tableRowResSens: "Multiplicerer eksisterende data",
    tableRowPrec: "Præcision",
    tableRowPrecDpi: "Højere = mere præcis",
    tableRowPrecSens: "Højere = dårligere præcision (springer pixels over)",
    tableRowQual: "Kvalitet",
    tableRowQualDpi: "Rå sensordata",
    tableRowQualSens: "Kan give hakkende bevægelser",
    tableFooter: "For bedst præcision anbefales en høj hardware-DPI og lav følsomhed i programmet eller spillet.",
    q3Title: "Hvordan vi måler DPI.",
    q3Desc: "Vores værktøj læser rå bevægelsesdata direkte fra hardwaren og undgår OS-behandling:",
    step1Title: "Kalibrer din skærm",
    step1Desc: "Fyld skærmdiagonalen ud, så systemet kan beregne skærmens PPI.",
    step2Title: "Indstil afstanden",
    step2Desc: "Vælg målafstand (5 tommer er godt som standard). Brug den virtuelle lineal.",
    step3Title: "Flyt and mät",
    step3Desc: "Klik på området, flyt musen afstanden, klik igen. Værktøjet beregner din DPI med det samme.",
    q4Title: "Hvorfor Pointer Lock API?",
    q4Desc: "Almindelige onlinetests, der følger markøren, har mangler:",
    q4Bullet1: "Skærmkanter: markøren stoppes ved kanten, hvilket ødelægger målingen",
    q4Bullet2: "Acceleration: ændrer markørens hastighed afhængigt af, hvor hurtigt du bevæger hånden",
    q4Bullet3: "Afrunding: mister decimalpræcision i beregningen",
    q4Bullet4: "Vinduesbegrænsning: begrænser, hvor langt du kan flytte musen",
    q4Desc2: "Pointer Lock API låser markøren og læser udelukkende ændringer direkte fra muse-sensoren uden begrænsning.",
    q4Important: "Vigtigt",
    q4ImportantDesc: "For korrekte måleværdier skal du deaktivere musacceleration i Windows pegeindstillinger.",
    q5Title: "Almindelige DPI-værdier.",
    tableColDpi: "DPI",
    tableColUse: "Anvendelsesområde",
    tableColCommon: "Almindeligt hos",
    q5Row1Use: "FPS-spil",
    q5Row1Common: "CS2 / Valorant-proffer",
    q5Row2Use: "Skydespil / Almindelig brug",
    q5Row2Common: "Mest populære DPI",
    q5Row3Use: "Spil / Kontorarbejde",
    q5Row3Common: "Højopløselige skærmer",
    q5Row4Use: "Grafisk design / Multiskærm",
    q5Row4Common: "4K-skærmer og opefter",
    ctaBtn: "Mål din DPI nu",
    sidebarTitle: "På denne side",
    sidebarLink1: "Hvad er DPI?",
    sidebarLink2: "DPI vs Følsomhed",
    sidebarLink3: "Hvordan vi måler",
    sidebarLink4: "Hvorfor Pointer Lock?",
    sidebarLink5: "Almindelige DPI-værdier",
    sidebarCtaTitle: "Klar?",
    sidebarCtaDesc: "Test vores gratis analysator nu.",
    sidebarCtaBtn: "Åbn Analysator"
  },
  privacy: {
    metaTitle: "Privatlivspolitik - Min Mus DPI",
    metaDesc: "Privatlivspolitik for Min Mus DPI.",
    title: "Privatlivspolitik.",
    lastUpdated: "Senest opdateret",
    sections: [
      {
        title: "1. Introduktion",
        content: "Velkommen til Min Mus DPI. Vi værner om dit privatliv og beskytter dine indstillinger."
      },
      {
        title: "2. Dataindsamling",
        content: "Vores værktøjer kører lokalt i din browser. Vi indsamler eller sender ikke musedata til servere."
      },
      {
        title: "3. Cookies",
        content: "Vi bruger browserens localStorage til at gemme din skærmkalibrering."
      },
      {
        title: "4. Tredjepartstjenester",
        content: "Vi bruger ikke sporingscookies eller reklameskripter fra tredjepart."
      },
      {
        title: "5. Datalagring",
        content: "Da vi ikke indsamler data, gemmer vi ingenting. Du kan rydde din historik ved at tømme browsercachen."
      },
      {
        title: "6. Børns privatliv",
        content: "Sitet er sikkert for alle aldre og gemmer ikke data fra mindreårige."
      },
      {
        title: "7. Ændringer i politikken",
        content: "Vi kan opdatere denne politik og offentliggør i så fald ændringerne her."
      },
      {
        title: "8. Kontakt",
        content: "Kontakt os ved spørgsmål på jasdeep97.dev@gmail.com."
      }
    ]
  },
  terms: {
    metaTitle: "Brugervilkår - Min Mus DPI",
    metaDesc: "Brugervilkår for Min Mus DPI.",
    title: "Brugervilkår.",
    lastUpdated: "Senest opdateret",
    sections: [
      {
        title: "1. Godkendelse",
        content: "Ved at bruge denne sajt godkender du disse brugervilkår."
      },
      {
        title: "2. Licens",
        content: "Det er tilladt at bruge værktøjerne til privat, ikke-kommerciel brug."
      },
      {
        title: "3. Ansvarsfraskrivelse",
        content: "Værktøjerne leveres i foreliggende stand uden nogen garantier om uafbrudt funktion."
      },
      {
        title: "4. Begrænsning af ansvar",
        content: "Vi svarer ikke for skader, der opstår som følge af brug eller manglende evne til at bruge sajten."
      },
      {
        title: "5. Nøjagtighed",
        content: "Vi stræber efter præcision, men svarer ikke for små måleafvigelser ved manuelt træk."
      },
      {
        title: "6. Eksterne links",
        content: "Vi kontrollerer ikke indholdet på websteder, som vi linker til."
      },
      {
        title: "7. Ændringer i vilkår",
        content: "Vi forbeholder os ret til at ændre disse vilkår uden varsel."
      },
      {
        title: "8. Lovvalg",
        content: "Eventuelle tvister reguleres i overensstemmelse med lovgivningen i dit land."
      }
    ]
  },
  dpiToolStrings: {
    settings: "Indstillinger",
    targetDistance: "Målafstand",
    inch: "tomme",
    cm: "cm",
    configuredDpi: "Indstillet DPI",
    configuredDpiPlaceholder: "t.ex. 800",
    useVirtualRuler: "Brug skærmlineal til måling",
    screenCalibration: "Skærmkalibrering",
    calibrateScreen: "Kalibrer skærmen",
    notCalibrated: "Ej kalibreret",
    calibrated: "Kalibreret",
    axis: "Akse",
    horizontal: "Horisontal",
    vertical: "Vertikal",
    reset: "Nulstil",
    howToTest: "Hvordan man tester",
    testStep1: "Vælg målafstand",
    testStep2: "Klik på overfladen for at låse markøren",
    testStep3: "Flyt musen det valgte afsted",
    testStep4: "Klik igen for at afslutte",
    clickToStart: "Klik for at starte målingen",
    cursorLockedDesc: "Musemarkøren dækkes for at måle sensoren direkte",
    pixelsMoved: "Pixler flyttet",
    moveMouseRight: "Flyt musen til højre →",
    moveMouseLeft: "Flyt musen til venstre ←",
    moveMouseDown: "Flyt musen nedad ↓",
    moveMouseUp: "Flyt musen opad ↑",
    pixelsLabel: "PIXLER",
    distanceLabel: "AFSTAND",
    dpiLabel: "DPI",
    statusLabel: "STATUS",
    statusReady: "Klar",
    statusMeasuring: "Måler...",
    statusSuccess: "Succes",
    statusReset: "Nulstillet",
    results: "Resultater",
    measuredDpi: "Uppmätt DPI",
    configured: "Indstillet",
    measured: "Målt",
    vs: "vs",
    diffPerfect: "DPI passer perfekt!",
    diffOff: "DPI adskiller sig med {diff}% ({desc})",
    detailPixels: "Pixler flyttet",
    detailDistance: "Målafstand",
    detailAxis: "Anvendt akse",
    testHistory: "Historik",
    noTests: "Ingen gemte tester. Klik på overfladen for at begynde.",
    calibrateModalTitle: "Kalibrer virtuell lineal",
    calibrateModalDesc: "Udfyld skærmstørrelse og opløsning for eksakte centimetermål på glasset.",
    presets: "Presets",
    manualEntry: "Manuel indtastning",
    selectMonitor: "Vælg skærm",
    screenDiagonal: "Skærmdiagonal (tommer)",
    resolution: "Opløsning",
    applyCalibration: "Gem kalibrering",
    fillAllFieldsError: "Venligst udfyld alle felter."
  },
  rulerToolStrings: {
    calibration: "Kalibrering",
    enterSpecs: "Indtast skærmdiagonal og opløsning for at kalibrere linealen.",
    presets: "Presets",
    manual: "Manuel",
    selectMonitor: "Vælg skærm",
    screenDiagonal: "Skærmdiagonal (tommer)",
    resolution: "Opløsning",
    calibrateBtn: "Kalibrer",
    rulerUnit: "Mål",
    cm: "cm",
    inch: "tomme",
    notCalibrated: "Ej kalibreret",
    calibrated: "Kalibreret",
    rulerHint: "Kalibrer for eksakt skala 1:1 på skærmen",
    rulerLabelCm: "Centimeter",
    rulerLabelInches: "Tommer",
    fillAllFieldsError: "Venligst udfyld alle felter."
  }
};

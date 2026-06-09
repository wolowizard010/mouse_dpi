import type { TranslationSchema } from '../types';

export const sv: TranslationSchema = {
  metadata: {
    title: "Möss DPI Analys — Exakt DPI-testverktyg",
    description: "Mät din muss DPI med precision. Gratis online Mouse DPI-analysverktyg med skärmkalibrering och realtidsberäkning.",
  },
  nav: {
    home: "Hem",
    dpiAnalyzer: "DPI-analysator",
    screenRuler: "Skärmlinjal",
    howItWorks: "Hur det fungerar",
    testDpi: "Testa DPI",
    logo: "Min Mus DPI",
  },
  footer: {
    tagline: "Exakt muss DPI-mätning direkt i din webbläsare.",
    tools: "Verktyg",
    resources: "Resurser",
    company: "Företag",
    about: "Om oss",
    contact: "Kontakt",
    privacy: "Integritetspolicy",
    terms: "Användarvillkor",
    copyright: "Min Mus DPI. Gratis & open-source.",
  },
  index: {
    heroTitle: "Mät din muss DPI med precision.",
    heroSubtitle: "Exakt DPI-mätning för rå musinmatning. Kalibrera din skärm, testa din mus och verifiera dina inställningar.",
    testYourDpi: "Testa din DPI",
    screenRuler: "Skärmlinjal",
    about: "Om oss",
    contact: "Kontakt",
    terms: "Villkor",
    privacy: "Integritet",
    stepsTitle: "Steg",
    stepsSubtitle: "Tre steg till exakt DPI.",
    step1Title: "Kalibrera",
    step1Desc: "Använd vår skärmlinjal för att kalibrera din skärm. Ange skärmdiagonal och upplösning för exakt PPI.",
    step2Title: "Välj avstånd",
    step2Desc: "Välj ett målavstånd i tum eller centimeter. Placera musen vid startmarkeringen.",
    step3Title: "Mät",
    step3Desc: "Klicka på testområdet, flytta musen målavståndet och släpp. Din DPI beräknas omedelbart.",
    articleTitle1: "Vad är Mus DPI?",
    articleContent1: "Möss DPI (Dots Per Inch) mäter hur många pixlar muspekaren rör sig på skärmen för varje tum som musen rör sig på skrivbordet. Högre DPI gör att pekaren rör sig längre med mindre fysisk rörelse, vilket passar för spel eller högupplösta skärmar. Lägre DPI ger högre precision, vilket är perfekt för fotoredigering eller precisionssikten i FPS-spel.",
    articleTitle2: "Varför kontrollera DPI?",
    articleContent2: "Många vill verifiera sin muss faktiska hårdvaruempfindlighet, då tillverkare kan marknadsföra felaktiga siffror eller så påverkar operativsystemets acceleration resultatet. Vårt verktyg mäter din sanna hårdvaru-DPI.",
    articleTitle3: "Hur fungerar vår analysator?",
    articleContent3: "Vår analysator fungerar helt i webbläsaren utan krav på programvaruinstallation. Kalibrera din skärm för att räkna ut PPI, ställ in målavståndet, och mät den råa rörelsen direkt via Pointer Lock API.",
    articleTitle4: "Den ultimata DPI-testaren",
    articleContent4: "Vår testare beräknar den fysiska rörelsen i förhållande till pixlarna på skärmen och ger en detaljerad matematisk analys snarare än en enkel gissning.",
    articleTitle5: "Optimera dina inställningar",
    articleContent5: "Att ha för hög DPI kan göra siktet skakigt. Att minska DPI på musen och kompensera med lägre känslighet i spelet ger en mjukare kontroll. FPS-spelare använder vår testare för att matcha musminnet i alla spel.",
    faqTitle: "Vanliga frågor",
    faq: [
      {
        question: "Hur kontrollerar man musens DPI?",
        answer: "Du kan kolla i tillverkarens programvara (Logitech G HUB, Razer Synapse etc.) eller använda vår onlineanalysator för att mäta rörelsen fysiskt."
      },
      {
        question: "Vad är musens DPI?",
        answer: "DPI (Dots Per Inch) anger hur många pixlar pekaren flyttar sig på skärmen per tum som musen flyttas på bordet."
      },
      {
        question: "Hur exakt är detta DPI-test?",
        answer: "Vårt verktyg använder Pointer Lock API för att läsa rå rörelsedata direkt från musen. Detta förhindrar OS-acceleration och ger en noggrannhet på 1-3%."
      },
      {
        question: "Varför skiljer sig min uppmätta DPI från den inställda?",
        answer: "Det kan bero på att musacceleration är aktiverad i operativsystemet, mjukvaruinterpolering i musen, eller små mätfel vid flyttning av musen."
      },
      {
        question: "Vad är Pointer Lock API?",
        answer: "Det är en webbläsarfunktion som låser muspekaren och läser rörelseskillnader (deltaX, deltaY) istället för absolut position, vilket förhindrar att pekaren krockar med skärmens kanter."
      },
      {
        question: "Måste jag inaktivera musacceleration?",
        answer: "Ja, för bästa möjliga noggrannhet. I Windows: gå till Musinställningar → Inaktivera 'Precision för pekar'. På macOS kan du använda LinearMouse."
      },
      {
        question: "Hur fungerar skärmkalibrering?",
        answer: "Verktyget räknar ut din skärms PPI. Du kan justera linjen mot ett fysiskt kreditkort eller ange skärmens diagonal och upplösning."
      },
      {
        question: "Vilken DPI bör jag använda för spel?",
        answer: "Många FPS-proffs använder 400-800 DPI med låg känslighet i spelet. MOBA-spelare använder ofta 800-1600 DPI. För vardagligt bruk på 1080p är 800-1600 DPI lagom."
      },
      {
        question: "Kan jag testa på en laptop-pekskärm?",
        answer: "Nej, pekskärmar och styrplattor fungerar inte med traditionell optisk DPI-mätning på samma sätt som en separat mus."
      },
      {
        question: "Varför bör jag testa min DPI?",
        answer: "Möss kan ibland ha felaktig DPI jämfört med vad som utlovats. Att testa verifierar sensorns sanna känslighet."
      },
      {
        question: "Är detta verktyg gratis?",
        answer: "Ja, helt gratis. Inga nedladdningar, registreringar eller annonser. Öppna sidan och börja testa."
      }
    ],
    ctaTitle: "Redo att testa din DPI?",
    ctaSubtitle: "Gratis, exakt och tar under 30 sekunder.",
    ctaBtn: "Starta DPI-test"
  },
  about: {
    metaTitle: "Om oss — Min Mus DPI",
    metaDesc: "Lär dig mer om Min Mus DPI, ett gratis och open-source verktyg för exakt DPI-mätning med Pointer Lock API.",
    title: "Om detta verktyg.",
    desc1: "Min Mus DPI är ett gratis webbverktyg med öppen källkod för att mäta musens sanna hårdvarukänslighet utan lagring av användardata.",
    whyTitle: "Varför vi byggde detta.",
    whyDesc1: "De flesta online-tester spårar bara pekarens position på skärmen, vilket störs av skärmkanter och acceleration. Vi ville erbjuda ett pålitligt och professionellt alternativ.",
    whyDesc2: "Genom att läsa sensorns rörelse via Pointer Lock API och kalibrera pixlarna mot skärmstorleken får vi fram extremt korrekta mätvärden.",
    privacyTitle: "Integritet.",
    privacyDesc: "Allt körs lokalt i din webbläsare. Ingen data skickas till servrar. Dina inställningar sparas i webbläsarens localStorage.",
    browserTitle: "Stöd för webbläsare.",
    browserDesc: "Testet kräver Pointer Lock API, vilket stöds av alla moderna webbläsare:",
    btn: "Testa DPI-analysatorn"
  },
  contact: {
    metaTitle: "Kontakt - Min Mus DPI",
    metaDesc: "Kontakta Min Mus DPI för frågor eller synpunkter.",
    title: "Kontakta oss.",
    desc: "Vi vill gärna höra från dig! Om du har frågor, feedback eller problem med verktygen, skicka ett meddelande via formuläret nedan.",
    nameLabel: "Ditt namn",
    namePlaceholder: "Sven Svensson",
    emailLabel: "E-postadress",
    emailPlaceholder: "sven@example.com",
    messageLabel: "Meddelande",
    messagePlaceholder: "Hur kan vi hjälpa dig?",
    submitBtn: "Skicka meddelande",
    emailText: "E-post:",
    successMessage: "Meddelandet har skickats!"
  },
  dpiAnalyzer: {
    metaTitle: "DPI-analysator — Mät din mus DPI exakt | Skärmlinjal",
    metaDesc: "Mät din mus DPI med vår exakta analysator. Använder Pointer Lock API. Realtidsberäkning med testhistorik.",
    title: "DPI-analysator.",
    subtitle: "Klicka på testområdet, flytta musen målavståndet och läs av DPI i realtid.",
    tipsTitle: "Tips",
    tipsSubtitle: "Hur man får exakta resultat.",
    tip1Title: "Inaktivera musacceleration",
    tip1Desc: "Stäng av 'Precision för pekar' i Windows inställningar eller inaktivera acceleration i musprogramvaran.",
    tip2Title: "Använd ett platt underlag",
    tip2Desc: "Placera musen på en platt musmatta. Ojämnheter på skrivbordet kan störa spårningen.",
    tip3Title: "Testa flera gånger",
    tip3Desc: "Gör 3-5 tester och jämför i historiken. Likartade resultat tyder på en korrekt mätning.",
    tip4Title: "Kalibrera din skärm",
    tip4Desc: "Om du använder linjalen, kalibrera den med din bildskärms diagonal och upplösning för rätt mått."
  },
  screenRuler: {
    metaTitle: "Skärmlinjal — Mät i CM och Tum | DPI-analysator",
    metaDesc: "Gratis online skärmlinjal. Mät exakt i centimeter och tum efter kalibrering av skärmens PPI. Ingen fysisk linjal behövs.",
    title: "Skärmlinjal.",
    subtitle: "En exakt linjal på skärmen. Ange dina skärmspecifikationer för korrekta fysiska mått.",
    aboutTitle: "Skärmkalibrering",
    aboutDesc: "Fyll i skärmdiagonalen (t.ex. 27\") och dess upplösning (t.ex. 2560x1440). Då räknar vi ut rätt PPI så att linjalen stämmer med verkligheten."
  },
  howItWorks: {
    metaTitle: "Hur DPI-mätning fungerar | DPI-analysator",
    metaDesc: "Lär dig hur musens DPI mäts och varför vår metod med Pointer Lock API ger sanna och exakta resultat.",
    title: "Hur DPI-mätning fungerar.",
    subtitle: "Förståelse för musens DPI, hur vi räknar ut känsligheten och varför vår metod är pålitlig.",
    q1Title: "Vad är musens DPI?",
    q1Desc: "DPI står för Dots Per Inch (punkter per tum). Det mäter hur många pixlar pekaren rör sig på skärmen per tum som musen flyttas fysiskt. En mus på 800 DPI flyttar pekaren 800 pixlar per tum.",
    exampleTitle: "Exempel",
    exampleDesc: "Vid 800 DPI flyttar 2 tums musrörelse pekaren 1600 pixlar. Vid 1600 DPI flyttar samma rörelse pekaren 3200 pixlar.",
    q2Title: "DPI vs Känslighet.",
    q2Desc: "DPI ställs in i hårdvaran (sensorn). Känslighet är en mjukvarumultiplikator i operativsystemet eller spelet. De samverkar:",
    tableAspect: "Aspekt",
    tableDpi: "DPI",
    tableSens: "Känslighet",
    tableRowType: "Typ",
    tableRowTypeDpi: "Hårdvara (sensor)",
    tableRowTypeSens: "Mjukvara (OS/spel)",
    tableRowRes: "Upplösning",
    tableRowResDpi: "Fler datapunkter",
    tableRowResSens: "Multiplicerar befintlig data",
    tableRowPrec: "Precision",
    tableRowPrecDpi: "Högre = mer exakt",
    tableRowPrecSens: "Högre = sämre precision (hoppar över pixlar)",
    tableRowQual: "Kvalitet",
    tableRowQualDpi: "Råa sensordata",
    tableRowQualSens: "Kan ge hackiga rörelser",
    tableFooter: "För bäst precision rekommenderas en hög hårdvaru-DPI och låg känslighet i programmet eller spelet.",
    q3Title: "Hur vi mäter DPI.",
    q3Desc: "Vårt verktyg läser råa rörelsedata direkt från hårdvaran och undviker OS-processing:",
    step1Title: "Kalibrera din skärm",
    step1Desc: "Fyll i skärmdiagonalen så att systemet kan beräkna skärmens PPI.",
    step2Title: "Ställ in avståndet",
    step2Desc: "Välj målavstånd (5 tum är bra som standard). Använd den virtuella linjalen.",
    step3Title: "Flytta och mät",
    step3Desc: "Klicka på området, flytta musen avståndet, klicka igen. Verktyget beräknar din DPI direkt.",
    q4Title: "Varför Pointer Lock API?",
    q4Desc: "Vanliga onlinetester som följer pekaren har brister:",
    q4Bullet1: "Skärmkanter: pekaren stoppas vid kanten vilket sabbar mätningen",
    q4Bullet2: "Acceleration: ändrar pekarens hastighet beroende på hur snabbt du rör handen",
    q4Bullet3: "Avrundning: tappar decimalnoggrannhet i beräkningen",
    q4Bullet4: "Fönsterbegränsning: begränsar hur långt du kan flytta musen",
    q4Desc2: "Pointer Lock API låser pekaren och läser enbart av förändringar direkt från mussensorn utan begränsning.",
    q4Important: "Viktigt",
    q4ImportantDesc: "För korrekta mätvärden bör du inaktivera musacceleration i Windows pekarinställningar.",
    q5Title: "Vanliga DPI-värden.",
    tableColDpi: "DPI",
    tableColUse: "Användningsområde",
    tableColCommon: "Vanligt hos",
    q5Row1Use: "FPS-spel",
    q5Row1Common: "CS2 / Valorant-proffs",
    q5Row2Use: "Skjutspel / Allmänt bruk",
    q5Row2Common: "Mest populära DPI",
    q5Row3Use: "Spel / Kontorsarbete",
    q5Row3Common: "Högupplösta skärmar",
    q5Row4Use: "Grafisk formgivning / Multiskärm",
    q5Row4Common: "4K-skärmar och uppåt",
    ctaBtn: "Mät din DPI nu",
    sidebarTitle: "På denna sida",
    sidebarLink1: "Vad är DPI?",
    sidebarLink2: "DPI vs Känslighet",
    sidebarLink3: "Hur vi mäter",
    sidebarLink4: "Varför Pointer Lock?",
    sidebarLink5: "Vanliga DPI-värden",
    sidebarCtaTitle: "Redo?",
    sidebarCtaDesc: "Testa vår kostnadsfria analysator nu.",
    sidebarCtaBtn: "Öppna Analysator"
  },
  privacy: {
    metaTitle: "Integritetspolicy - Min Mus DPI",
    metaDesc: "Integritetspolicy för Min Mus DPI.",
    title: "Integritetspolicy.",
    lastUpdated: "Senast uppdaterad",
    sections: [
      {
        title: "1. Introduktion",
        content: "Välkommen till Min Mus DPI. Vi värnar om din integritet och skyddar dina inställningar."
      },
      {
        title: "2. Datainsamling",
        content: "Våra verktyg körs lokalt i din webbläsare. Vi samlar inte in eller skickar musdata till servrar."
      },
      {
        title: "3. Cookies",
        content: "Vi använder webbläsarens localStorage för att spara din skärmkalibrering."
      },
      {
        title: "4. Tredjepartstjänster",
        content: "Vi använder inte spårningscookies eller reklamskript från tredje part."
      },
      {
        title: "5. Datalagring",
        content: "Eftersom vi inte samlar in data lagrar vi ingenting. Du kan rensa din historik genom att tömma webbläsarcachen."
      },
      {
        title: "6. Barns integritet",
        content: "Sajten är säker för alla åldrar och sparar inte data från underåriga."
      },
      {
        title: "7. Ändringar i policyn",
        content: "Vi kan uppdatera denna policy och publicerar i så fall ändringarna här."
      },
      {
        title: "8. Kontakt",
        content: "Kontakta oss vid frågor på jasdeep97.dev@gmail.com."
      }
    ]
  },
  terms: {
    metaTitle: "Användarvillkor - Min Mus DPI",
    metaDesc: "Användarvillkor för Min Mus DPI.",
    title: "Användarvillkor.",
    lastUpdated: "Senast uppdaterad",
    sections: [
      {
        title: "1. Godkännande",
        content: "Genom att använda denna sajt godkänner du dessa användarvillkor."
      },
      {
        title: "2. Licens",
        content: "Det är tillåtet att använda verktygen för privat, icke-kommersiellt bruk."
      },
      {
        title: "3. Friskrivning",
        content: "Verktygen tillhandahålls i befintligt skick utan några garantier om oavbruten funktion."
      },
      {
        title: "4. Begränsning av ansvar",
        content: "Vi ansvarar inte för skador som uppstår till följd av användning eller oförmåga att använda sajten."
      },
      {
        title: "5. Noggrannhet",
        content: "Vi strävar efter precision, men ansvarar inte för små mätavvikelser vid manuellt drag."
      },
      {
        title: "6. Externa länkar",
        content: "Vi kontrollerar inte innehållet på webbplatser som vi länkar till."
      },
      {
        title: "7. Ändringar i villkor",
        content: "Vi förbehåller oss rätten att ändra dessa villkor utan förvarning."
      },
      {
        title: "8. Tillämplig lag",
        content: "Eventuella tvister regleras i enlighet med lagstiftningen i ditt land."
      }
    ]
  },
  dpiToolStrings: {
    settings: "Inställningar",
    targetDistance: "Målavstånd",
    inch: "tum",
    cm: "cm",
    configuredDpi: "Inställd DPI",
    configuredDpiPlaceholder: "t.ex. 800",
    useVirtualRuler: "Använd skärmlinjal för mätning",
    screenCalibration: "Skärmkalibrering",
    calibrateScreen: "Kalibrera skärmen",
    notCalibrated: "Ej kalibrerad",
    calibrated: "Kalibrerad",
    axis: "Axel",
    horizontal: "Horisontell",
    vertical: "Vertikal",
    reset: "Återställ",
    howToTest: "Hur man testar",
    testStep1: "Välj målavstånd",
    testStep2: "Klicka på ytan för att låsa pekaren",
    testStep3: "Flytta musen det valda avståndet",
    testStep4: "Klicka igen för att slutföra",
    clickToStart: "Klicka för att starta mätningen",
    cursorLockedDesc: "Muspekaren döljs för att mäta sensorn direkt",
    pixelsMoved: "Pixlar flyttade",
    moveMouseRight: "Flytta musen åt höger →",
    moveMouseLeft: "Flytta musen åt vänster ←",
    moveMouseDown: "Flytta musen nedåt ↓",
    moveMouseUp: "Flytta musen uppåt ↑",
    pixelsLabel: "PIXLAR",
    distanceLabel: "AVSTÅND",
    dpiLabel: "DPI",
    statusLabel: "STATUS",
    statusReady: "Redo",
    statusMeasuring: "Mäter...",
    statusSuccess: "Klart",
    statusReset: "Återställd",
    results: "Resultat",
    measuredDpi: "Uppmätt DPI",
    configured: "Inställd",
    measured: "Uppmätt",
    vs: "vs",
    diffPerfect: "DPI stämmer perfekt!",
    diffOff: "DPI skiljer sig med {diff}% ({desc})",
    detailPixels: "Pixlar flyttade",
    detailDistance: "Målavstånd",
    detailAxis: "Använd axel",
    testHistory: "Historik",
    noTests: "Inga sparade tester. Klicka på ytan för att börja.",
    calibrateModalTitle: "Kalibrera virtuell linjal",
    calibrateModalDesc: "Fyll i skärmstorlek och upplösning för exakta centimetermått på glaset.",
    presets: "Presets",
    manualEntry: "Manuell inmatning",
    selectMonitor: "Välj skärm",
    screenDiagonal: "Skärmdiagonal (tum)",
    resolution: "Upplösning",
    applyCalibration: "Spara kalibrering",
    fillAllFieldsError: "Vänligen fyll i alla fält."
  },
  rulerToolStrings: {
    calibration: "Kalibrering",
    enterSpecs: "Ange skärmdiagonal och upplösning för att kalibrera linjalen.",
    presets: "Presets",
    manual: "Manuell",
    selectMonitor: "Välj skärm",
    screenDiagonal: "Skärmdiagonal (tum)",
    resolution: "Upplösning",
    calibrateBtn: "Kalibrera",
    rulerUnit: "Mått",
    cm: "cm",
    inch: "tum",
    notCalibrated: "Ej kalibrerad",
    calibrated: "Kalibrerad",
    rulerHint: "Kalibrera för exakt skala 1:1 på skärmen",
    rulerLabelCm: "Centimeter",
    rulerLabelInches: "Tum",
    fillAllFieldsError: "Vänligen fyll i alla fält."
  }
};

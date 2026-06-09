import type { TranslationSchema } from '../types';

export const it: TranslationSchema = {
  metadata: {
    title: "Analizzatore DPI Mouse — Strumento di Test DPI Preciso",
    description: "Misura il DPI del tuo mouse con precisione. Strumento online gratuito per l'analisi del DPI con calibrazione dello schermo e calcolo in tempo reale.",
  },
  nav: {
    home: "Home",
    dpiAnalyzer: "Analizzatore DPI",
    screenRuler: "Righello Schermo",
    howItWorks: "Come funziona",
    testDpi: "Test DPI",
    logo: "Mio DPI Mouse",
  },
  footer: {
    tagline: "Misurazione precisa del DPI del mouse, direttamente nel tuo browser.",
    tools: "Strumenti",
    resources: "Risorse",
    company: "Società",
    about: "Informazioni",
    contact: "Contatti",
    privacy: "Informativa sulla Privacy",
    terms: "Termini e Condizioni",
    copyright: "Mio DPI Mouse. Gratuito e open-source.",
  },
  index: {
    heroTitle: "Misura il DPI del tuo mouse con precisione.",
    heroSubtitle: "Misurazione precisa del DPI per l'input puro del mouse. Calibra lo schermo, testa il mouse e verifica le impostazioni.",
    testYourDpi: "Testa il tuo DPI",
    screenRuler: "Righello Schermo",
    about: "Informazioni",
    contact: "Contatti",
    terms: "Termini",
    privacy: "Privacy",
    stepsTitle: "Passaggi",
    stepsSubtitle: "Tre passaggi per un DPI preciso.",
    step1Title: "Calibra",
    step1Desc: "Usa il righello sullo schermo per calibrare il display. Inserisci la diagonale e la risoluzione del monitor per un PPI preciso.",
    step2Title: "Imposta distanza",
    step2Desc: "Scegli una distanza target in pollici o centimetri. Posiziona il mouse sul segno di partenza.",
    step3Title: "Misura",
    step3Desc: "Fai clic sull'area di test, sposta il mouse per la distanza target e rilascia. Il DPI viene calcolato all'istante.",
    articleTitle1: "Cos'è il DPI del mouse?",
    articleContent1: "Il DPI (Dots Per Inch o punti per pollice) è uno standard per misurare la sensibilità ottica di un mouse. Determina la distanza percorsa dal cursore sullo schermo rispetto allo spostamento fisico sul tavolo. Un DPI elevato sposta il cursore molto più lontano con meno movimento della mano, ideale per schermi ad alta risoluzione o giochi veloci. Un DPI basso offre una precisione estrema per grafici e giocatori di sparatutto tattici.",
    articleTitle2: "Perché fare un controllo DPI?",
    articleContent2: "Molti utenti si chiedono quale sia il DPI reale del proprio mouse. I produttori dichiarano sensibilità elevatissime, ma i valori reali possono cambiare a causa di driver, software del mouse o accelerazione di sistema. Il nostro analizzatore mostra il DPI effettivo.",
    articleTitle3: "Come funziona il nostro analizzatore?",
    articleContent3: "Il nostro analizzatore funziona interamente nel browser senza installare software. Calcoli il PPI reale dello schermo inserendo diagonale e risoluzione, quindi esegui il movimento misurando i dati puri provenienti dall'hardware tramite Pointer Lock.",
    articleTitle4: "Il test DPI definitivo",
    articleContent4: "Rispetto a test rudimentali che tracciano solo la velocità del cursore, il nostro sistema analizza matematicamente lo spostamento reale confrontandolo con i pixel per calcolare la sensibilità reale.",
    articleTitle5: "Ottimizzare la configurazione",
    articleContent5: "Se la precisione manca perché il DPI è troppo alto, abbassare il valore hardware compensando con la sensibilità interna del gioco può migliorare il controllo. I pro gamer uniformano il DPI su tutti i giochi per preservare la memoria muscolare.",
    faqTitle: "Domande Frequenti",
    faq: [
      {
        question: "Come verificare il DPI del mouse?",
        answer: "Puoi controllarlo nel software del produttore (Logitech G HUB, Razer Synapse, etc.) o usare il nostro test online per misurarlo fisicamente rispetto allo schermo."
      },
      {
        question: "Cos'è il DPI del mouse?",
        answer: "È la quantità di pixel di cui si muove il cursore sullo schermo per ogni pollice di spostamento fisico del mouse sulla scrivania."
      },
      {
        question: "Quanto è preciso questo test?",
        answer: "Molto preciso. Sfruttando l'API Pointer Lock raccogliamo i dati hardware puri aggirando l'accelerazione del sistema, con errore dell'1-3%."
      },
      {
        question: "Perché il DPI misurato differisce da quello impostato?",
        answer: "Può dipendere dall'accelerazione di sistema attiva, da interpolazioni software della casa produttrice o da imprecisioni nella misura della distanza fisica."
      },
      {
        question: "Cos'è l'API Pointer Lock?",
        answer: "È una tecnologia del browser che nasconde e blocca il cursore per raccogliere gli spostamenti raw dall'hardware senza che il puntatore urti i bordi dello schermo."
      },
      {
        question: "Devo disattivare l'accelerazione del mouse?",
        answer: "Sì, per avere misurazioni precise. Su Windows, deseleziona 'Aumenta precisione puntatore' nelle proprietà del mouse. Su macOS, usa LinearMouse."
      },
      {
        question: "Come calibrare lo schermo?",
        answer: "Inserendo diagonale in pollici e risoluzione nativa del monitor. Questo ci permette di ricavare il PPI esatto e disegnare il righello."
      },
      {
        question: "Quale DPI usare per giocare?",
        answer: "Nei giochi sparatutto i pro preferiscono 400 o 800 DPI. Per l'ufficio su schermi standard, 800-1600 DPI è il valore più comune ed equilibrato."
      },
      {
        question: "Posso misurare il DPI sul trackpad?",
        answer: "Tecnicamente sì, ma i risultati non sono rilevanti perché i trackpad non hanno un sensore DPI nel senso tradizionale del termine."
      },
      {
        question: "Perché dovrei testare il DPI?",
        answer: "Perché spesso i valori dichiarati non corrispondono a quelli effettivi e testarli permette di configurare la propria sensibilità in modo scientifico."
      },
      {
        question: "Questo strumento è gratuito?",
        answer: "Sì, totalmente gratuito, senza download, senza registrazioni e senza pubblicità."
      }
    ],
    ctaTitle: "Pronto a testare il tuo DPI?",
    ctaSubtitle: "Gratuito, preciso e richiede meno di 30 secondi.",
    ctaBtn: "Inizia il Test DPI"
  },
  about: {
    metaTitle: "Informazioni — Mio DPI Mouse",
    metaDesc: "Scopri come funziona Mio DPI Mouse, uno strumento open source gratuito per misurare con precisione il DPI del mouse.",
    title: "Informazioni sullo strumento.",
    desc1: "Mio DPI Mouse è uno strumento web open-source per analizzare la sensibilità del mouse in modo nativo e sicuro, senza installare programmi.",
    whyTitle: "Perché l'abbiamo creato.",
    whyDesc1: "La maggior parte dei test online traccia la posizione del puntatore, che è influenzata da accelerazioni e bordi. Volevamo un test affidabile e privo di alterazioni.",
    whyDesc2: "Leggiamo direttamente i dati raw del sensore tramite Pointer Lock e scaliamo i pixel con la calibrazione reale dello schermo per il massimo della precisione.",
    privacyTitle: "Privacy.",
    privacyDesc: "Gira localmente sul tuo computer. Non inviamo dati a server. I parametri si salvano solo nella memoria locale del tuo browser.",
    browserTitle: "Supporto browser.",
    browserDesc: "Il test richiede Pointer Lock API, supportata da tutti i principali browser moderni:",
    btn: "Prova l'Analizzatore"
  },
  contact: {
    metaTitle: "Contattaci - Mio DPI Mouse",
    metaDesc: "Contatta il team di Mio DPI Mouse per commenti o domande.",
    title: "Contattaci.",
    desc: "Ci farebbe molto piacere ricevere la tua opinione! Se hai riscontrato problemi o vuoi darci un suggerimento, scrivici compilando il modulo sottostante.",
    nameLabel: "Tuo Nome",
    namePlaceholder: "Mario Rossi",
    emailLabel: "Indirizzo Email",
    emailPlaceholder: "mario@example.com",
    messageLabel: "Messaggio",
    messagePlaceholder: "Come possiamo aiutarti?",
    submitBtn: "Invia Messaggio",
    emailText: "Email:",
    successMessage: "Messaggio inviato con successo!"
  },
  dpiAnalyzer: {
    metaTitle: "Analizzatore di DPI — Testa il tuo DPI | Analizzatore di DPI",
    metaDesc: "Testa subito il DPI del tuo mouse. Utilizza l'API Pointer Lock. Calcolo in tempo reale e storico dei test.",
    title: "Analizzatore di DPI.",
    subtitle: "Fai clic nell'area di test, sposta il mouse sulla distanza target e visualizza il DPI in tempo reale.",
    tipsTitle: "Consigli",
    tipsSubtitle: "Ottenere misure accurate.",
    tip1Title: "Disattiva accelerazione",
    tip1Desc: "Disabilita 'Aumenta precisione puntatore' su Windows o togli l'accelerazione nel programma del mouse per escludere modifiche software.",
    tip2Title: "Usa un piano regolare",
    tip2Desc: "Appoggia il mouse su un tappetino liscio per evitare che il sensore perda la traccia per micro-irregolarità.",
    tip3Title: "Ripeti il test",
    tip3Desc: "Fai 3-5 prove e controlla lo storico. Risultati stabili indicano che stai misurando in modo corretto.",
    tip4Title: "Calibra la scala",
    tip4Desc: "Se usi la regola a schermo, calibrala inserendo diagonale e risoluzione per far corrispondere i pixel ai centimetri reali."
  },
  screenRuler: {
    metaTitle: "Righello a Schermo — Misurare in CM e Pollici | Analizzatore di DPI",
    metaDesc: "Righello virtuale calibrato. Misura con precisione in centimetri e pollici grazie ai parametri del monitor. Senza bisogno di righelli fisici.",
    title: "Righello Schermo.",
    subtitle: "Un righello esatto sullo schermo. Imposta i dati del monitor per visualizzare le misure in scala 1:1 reale.",
    aboutTitle: "Calibrazione schermo",
    aboutDesc: "Fornisci la diagonale del monitor (es: 27\") e la risoluzione (es: 2560x1440). Questo calcola il PPI esatto per adattare il disegno del righello."
  },
  howItWorks: {
    metaTitle: "Come funziona la misura del DPI | Analizzatore di DPI",
    metaDesc: "Scopri come si misura il DPI del mouse, il suo significato, e perché l'approccio con l'API Pointer Lock assicura un test reale.",
    title: "Come funziona la misura del DPI.",
    subtitle: "Capire il DPI del mouse, il modo in cui lo calcoliamo e perché è così accurato.",
    q1Title: "Cos'è il DPI del mouse?",
    q1Desc: "Significa punti per pollice. Misura quanti pixel si muove il cursore sullo schermo per ogni pollice di movimento fisico. Un mouse a 800 DPI sposterà il cursore di 800 pixel per ogni pollice di corsa.",
    exampleTitle: "Esempio",
    exampleDesc: "A 800 DPI, spostando il mouse di 2 pollici il cursore si muove di 1600 pixel. A 1600 DPI, lo stesso spostamento muoverà il cursore di 3200 pixel.",
    q2Title: "DPI vs Sensibilità.",
    q2Desc: "Il DPI è legato all'hardware (sensore del mouse). La sensibilità è software (moltiplicatore di sistema o del gioco). Lavorano insieme:",
    tableAspect: "Caratteristica",
    tableDpi: "DPI",
    tableSens: "Sensibilità",
    tableRowType: "Tipo",
    tableRowTypeDpi: "Hardware (sensore)",
    tableRowTypeSens: "Software (OS/gioco)",
    tableRowRes: "Risoluzione",
    tableRowResDpi: "Più punti letti",
    tableRowResSens: "Moltiplica i dati esistenti",
    tableRowPrec: "Precisione",
    tableRowPrecDpi: "Più alto = più preciso",
    tableRowPrecSens: "Più alto = meno preciso (salta i pixel)",
    tableRowQual: "Qualità",
    tableRowQualDpi: "Dati nativi sensore",
    tableRowQualSens: "Può causare pixel skipping",
    tableFooter: "Per avere la miglior precisione, imposta un DPI hardware alto e riduci la sensibilità software nel gioco.",
    q3Title: "Come misuriamo il DPI.",
    q3Desc: "Catturiamo gli spostamenti fisici raw scavalcando l'elaborazione del sistema operativo che falserebbe il risultato:",
    step1Title: "Calibra lo schermo",
    step1Desc: "Imposta le dimensioni fisiche del monitor per far capire al sistema la corrispondenza pixel-distanza.",
    step2Title: "Scegli la distanza",
    step2Desc: "Seleziona la misura del test (5 pollici è ideale). Usa il righello a schermo.",
    step3Title: "Muovi e calcola",
    step3Desc: "Clicca, muovi il mouse e rilascia. Lo strumento elabora i dati hardware e calcola il DPI reale.",
    q4Title: "Perché l'API Pointer Lock?",
    q4Desc: "I classici test basati sulla posizione del puntatore falliscono perché:",
    q4Bullet1: "Il cursore si ferma al bordo dello schermo perdendo i dati in eccesso",
    q4Bullet2: "L'accelerazione di sistema altera la velocità in base al movimento",
    q4Bullet3: "Gli arrotondamenti fanno perdere precisione decimale",
    q4Bullet4: "La finestra del browser limita la corsa massima",
    q4Desc2: "Pointer Lock blocca il cursore ed estrae i dati puri dal sensore senza alcun limite spaziale.",
    q4Important: "Importante",
    q4ImportantDesc: "Disattiva sempre l'opzione 'Aumenta precisione puntatore' nelle proprietà del mouse su Windows prima di eseguire il test.",
    q5Title: "Impostazioni DPI comuni.",
    tableColDpi: "DPI",
    tableColUse: "Destinazione d'uso",
    tableColCommon: "Scelta da",
    q5Row1Use: "FPS Competitivo",
    q5Row1Common: "Pro player CS2 / Valorant",
    q5Row2Use: "Giochi FPS / Uso generico",
    q5Row2Common: "Il valore più diffuso",
    q5Row3Use: "Gaming bilanciato / Lavoro",
    q5Row3Common: "Schermi ad alta risoluzione",
    q5Row4Use: "Design / Multi-monitor",
    q5Row4Common: "Display 4K+",
    ctaBtn: "Testa il tuo DPI ora",
    sidebarTitle: "In questa pagina",
    sidebarLink1: "Cos'è il DPI?",
    sidebarLink2: "DPI vs Sensibilità",
    sidebarLink3: "Come misuriamo",
    sidebarLink4: "Perché Pointer Lock?",
    sidebarLink5: "Valori diffusi",
    sidebarCtaTitle: "Pronto?",
    sidebarCtaDesc: "Usa il nostro analizzatore rapido e preciso.",
    sidebarCtaBtn: "Apri Analizzatore"
  },
  privacy: {
    metaTitle: "Informativa sulla Privacy - Mio DPI Mouse",
    metaDesc: "Informativa sulla Privacy per Mio DPI Mouse.",
    title: "Informativa sulla Privacy.",
    lastUpdated: "Ultimo aggiornamento",
    sections: [
      {
        title: "1. Introduzione",
        content: "Benvenuto su Mio DPI Mouse. Rispettiamo la tua privacy e proteggiamo i tuoi dati."
      },
      {
        title: "2. Dati raccolti",
        content: "Tutti i calcoli avvengono in locale sul browser. Nessun dato di movimento del mouse viene inviato a server esterni."
      },
      {
        title: "3. Cookie",
        content: "Possiamo utilizzare la memoria locale del browser per salvare le calibrazioni dello schermo."
      },
      {
        title: "4. Servizi di terze parti",
        content: "Non usiamo script pubblicitari traccianti o cookie di profilazione terzi."
      },
      {
        title: "5. Conservazione dei dati",
        content: "Non memorizziamo dati utente nei nostri sistemi. I dati di calibrazione si possono rimuovere svuotando la cache."
      },
      {
        title: "6. Minorenni",
        content: "Il sito è sicuro per tutti e non raccoglie dati personali di minori di 13 anni."
      },
      {
        title: "7. Aggiornamenti",
        content: "La presente informativa potrebbe subire variazioni che verranno inserite in questa pagina."
      },
      {
        title: "8. Contatti",
        content: "Per qualsiasi chiarimento scrivici a jasdeep97.dev@gmail.com."
      }
    ]
  },
  terms: {
    metaTitle: "Termini e Condizioni - Mio DPI Mouse",
    metaDesc: "Termini e Condizioni di Mio DPI Mouse.",
    title: "Termini e Condizioni.",
    lastUpdated: "Ultimo aggiornamento",
    sections: [
      {
        title: "1. Accettazione",
        content: "Utilizzando questo sito accetti di rispettare le condizioni qui riportate."
      },
      {
        title: "2. Licenza",
        content: "È consentito l'uso delle utility per scopi personali, informativi e non commerciali."
      },
      {
        title: "3. Clausola di esclusione",
        content: "Lo strumento viene fornito 'così com'è' senza alcuna garanzia implicita di funzionamento continuativo."
      },
      {
        title: "4. Limitazioni",
        content: "Non saremo responsabili di eventuali disservizi o danni causati dall'utilizzo del sito."
      },
      {
        title: "5. Accuratezza",
        content: "Cerchiamo di essere precisi, ma decliniamo responsabilità per errori causati da calibrazioni scorrette."
      },
      {
        title: "6. Link esterni",
        content: "Non siamo responsabili dei contenuti o delle politiche dei siti web di terze parti linkati."
      },
      {
        title: "7. Variazioni",
        content: "Ci riserviamo il diritto di modificare questi termini in qualsiasi momento e senza preavviso."
      },
      {
        title: "8. Legge applicabile",
        content: "Eventuali controversie saranno regolate secondo le leggi della tua giurisdizione locale."
      }
    ]
  },
  dpiToolStrings: {
    settings: "Impostazioni",
    targetDistance: "Distanza target",
    inch: "pollice",
    cm: "cm",
    configuredDpi: "DPI configurato",
    configuredDpiPlaceholder: "es: 800",
    useVirtualRuler: "Usa il righello virtuale per misurare",
    screenCalibration: "Calibrazione Schermo",
    calibrateScreen: "Calibra Schermo",
    notCalibrated: "Non calibrato",
    calibrated: "Calibrato",
    axis: "Asse",
    horizontal: "Orizzontale",
    vertical: "Verticale",
    reset: "Azzera",
    howToTest: "Come testare",
    testStep1: "Imposta la distanza di prova",
    testStep2: "Clicca nell'area per bloccare il cursore",
    testStep3: "Muovi il mouse per la distanza scelta",
    testStep4: "Clicca di nuovo per completare",
    clickToStart: "Clicca per avviare la misura",
    cursorLockedDesc: "Il cursore si nasconderà per non influire sulla precisione",
    pixelsMoved: "Pixel percorsi",
    moveMouseRight: "Muovi il mouse a destra →",
    moveMouseLeft: "Muovi il mouse a sinistra ←",
    moveMouseDown: "Muovi il mouse in basso ↓",
    moveMouseUp: "Muovi il mouse in alto ↑",
    pixelsLabel: "PIXEL",
    distanceLabel: "DISTANZA",
    dpiLabel: "DPI",
    statusLabel: "STATO",
    statusReady: "Pronto",
    statusMeasuring: "Misura...",
    statusSuccess: "Completato",
    statusReset: "Azzerato",
    results: "Risultati",
    measuredDpi: "DPI misurato",
    configured: "Configurato",
    measured: "Misurato",
    vs: "vs",
    diffPerfect: "Il DPI corrisponde perfettamente !",
    diffOff: "DPI scostato del {diff}% ({desc})",
    detailPixels: "Pixel percorsi",
    detailDistance: "Distanza target",
    detailAxis: "Asse utilizzato",
    testHistory: "Storico Test",
    noTests: "Nessun test registrato. Clicca nella griglia per iniziare.",
    calibrateModalTitle: "Calibra Righello Virtuale",
    calibrateModalDesc: "Configura i dettagli dello schermo per avere centimetri reali visualizzati sul vetro.",
    presets: "Scelte rapide",
    manualEntry: "Manuale",
    selectMonitor: "Seleziona Monitor",
    screenDiagonal: "Diagonale schermo (pollici)",
    resolution: "Risoluzione",
    applyCalibration: "Salva Calibrazione",
    fillAllFieldsError: "Completa i campi obbligatori per procedere."
  },
  rulerToolStrings: {
    calibration: "Calibrazione",
    enterSpecs: "Fornisci le specifiche del monitor per scalare il righello.",
    presets: "Scelte rapide",
    manual: "Manuale",
    selectMonitor: "Seleziona Monitor",
    screenDiagonal: "Diagonale schermo (pollici)",
    resolution: "Risoluzione",
    calibrateBtn: "Calibra",
    rulerUnit: "Unità",
    cm: "cm",
    inch: "pollice",
    notCalibrated: "Non calibrato",
    calibrated: "Calibrato",
    rulerHint: "Usa la calibrazione per avere misure in scala 1:1 reale",
    rulerLabelCm: "Centimetri",
    rulerLabelInches: "Pollici",
    fillAllFieldsError: "Completa i campi obbligatori per procedere."
  }
};

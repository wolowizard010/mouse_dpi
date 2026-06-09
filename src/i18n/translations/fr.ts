import type { TranslationSchema } from '../types';

export const fr: TranslationSchema = {
  metadata: {
    title: "Analyse DPI Souris — Test de DPI précis",
    description: "Mesurez le DPI de votre souris avec précision. Outil d'analyse DPI en ligne gratuit avec étalonnage de l'écran et calcul en temps réel.",
  },
  nav: {
    home: "Accueil",
    dpiAnalyzer: "Analyseur DPI",
    screenRuler: "Règle d'écran",
    howItWorks: "Comment ça marche",
    testDpi: "Tester le DPI",
    logo: "Mon DPI de Souris",
  },
  footer: {
    tagline: "Mesure précise du DPI de la souris, directement dans votre navigateur.",
    tools: "Outils",
    resources: "Ressources",
    company: "Société",
    about: "À propos",
    contact: "Contact",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    copyright: "Mon DPI de Souris. Gratuit & Open-Source.",
  },
  index: {
    heroTitle: "Mesurez le DPI de votre souris avec précision.",
    heroSubtitle: "Mesure DPI précise pour les entrées brutes de la souris. Étalonnez votre écran, testez votre souris et vérifiez vos paramètres.",
    testYourDpi: "Tester votre DPI",
    screenRuler: "Règle d'écran",
    about: "À propos",
    contact: "Contact",
    terms: "Conditions",
    privacy: "Confidentialité",
    stepsTitle: "Étapes",
    stepsSubtitle: "Trois étapes pour un DPI précis.",
    step1Title: "Étalonner",
    step1Desc: "Utilisez notre règle à l'écran pour étalonner votre affichage. Saisissez la taille diagonale et la résolution de votre moniteur pour obtenir un PPI précis.",
    step2Title: "Définir la distance",
    step2Desc: "Choisissez une distance cible en pouces ou en centimètres. Placez votre souris sur le repère de départ.",
    step3Title: "Mesurer",
    step3Desc: "Cliquez sur la zone de test, déplacez votre souris sur la distance cible et relâchez. Votre DPI est calculé instantanément.",
    articleTitle1: "Qu'est-ce que le DPI de la souris ?",
    articleContent1: "Le DPI (Dots Per Inch ou points par pouce) est un standard utilisé pour mesurer la sensibilité optique d'une souris d'ordinateur. Essentiellement, il détermine la distance parcourue par le curseur sur votre écran par rapport à la distance physique de déplacement de votre souris sur votre bureau ou tapis de souris. Un DPI plus élevé signifie que le curseur se déplacera plus loin avec moins de mouvements physiques, ce qui est idéal pour les jeux rapides, les configurations multi-écrans ou les grands écrans haute résolution (4K ou 8K). Inversement, un DPI inférieur offre une précision beaucoup plus fine, très appréciée par les graphistes ou les joueurs de jeux de tir tactiques. Comprendre vos paramètres est crucial, c'est pourquoi un test de DPI fiable vous aide à optimiser votre configuration pour de meilleures performances.",
    articleTitle2: "Pourquoi faire un test de DPI ?",
    articleContent2: "De nombreux utilisateurs se demandent souvent quel est le DPI réel de leur souris, surtout après l'achat d'une nouvelle souris gaming ou lors d'un changement d'ordinateur. Les fabricants annoncent souvent des valeurs très élevées, mais le DPI réel peut différer en raison des paramètres logiciels, des pilotes ou des configurations système. Faire un test de DPI précis avec un outil dédié vous permet de connaître la sensibilité matérielle réelle de votre dispositif pour ajuster vos paramètres en jeu ou système en toute confiance.",
    articleTitle3: "Comment fonctionne notre analyseur ?",
    articleContent3: "Notre analyseur en ligne est conçu pour vous offrir des résultats extrêmement précis sans installation de logiciel. Vous commencez par étalonner votre écran en saisissant sa diagonale et sa résolution afin de calculer le PPI exact. Ensuite, vous définissez une distance physique cible. En déplaçant votre souris sur cette distance, notre outil utilise les API modernes du navigateur pour capturer les mouvements bruts du matériel, en évitant toute accélération logicielle du système d'exploitation.",
    articleTitle4: "L'analyseur DPI ultime",
    articleContent4: "Contrairement aux outils rudimentaires qui estiment votre sensibilité sur la base de la vitesse du curseur, notre système propose une analyse mathématique détaillée basée sur la distance physique réelle parcourue comparée aux pixels à l'écran. C'est l'outil idéal pour obtenir une mesure scientifique et fiable en quelques secondes.",
    articleTitle5: "Optimiser vos paramètres après le test",
    articleContent5: "Une fois votre DPI mesuré, vous pouvez prendre des décisions éclairées. Si votre sensibilité est trop élevée, vous risquez de manquer de précision. Diminuer le DPI matériel tout en ajustant la sensibilité en jeu offre souvent un meilleur contrôle. Les joueurs professionnels utilisent fréquemment notre testeur pour uniformiser leur sensibilité sur différents jeux afin de préserver leur mémoire musculaire.",
    faqTitle: "Foire Aux Questions",
    faq: [
      {
        question: "Comment vérifier le DPI de la souris ?",
        answer: "Vous pouvez vérifier le DPI de votre souris à l'aide du logiciel dédié du fabricant (comme Logitech G HUB, Razer Synapse ou Corsair iCUE). Sinon, utilisez notre analyseur en ligne pour mesurer physiquement le déplacement par rapport aux pixels affichés."
      },
      {
        question: "Qu'est-ce que le DPI de la souris ?",
        answer: "Le DPI (Dots Per Inch) mesure le nombre de pixels parcourus par le curseur à l'écran pour chaque pouce de déplacement physique de la souris sur le bureau."
      },
      {
        question: "Quelle est la précision de ce test ?",
        answer: "Notre outil utilise l'API Pointer Lock pour capturer les données brutes, en contournant l'accélération système. Si l'accélération est désactivée dans vos paramètres, la précision est de l'ordre de 1 à 3 % par rapport au DPI réel."
      },
      {
        question: "Pourquoi mon DPI mesuré diffère-t-il du DPI configuré ?",
        answer: "Plusieurs facteurs l'expliquent : l'accélération système est active, le logiciel applique une interpolation logicielle, ou la mesure de distance physique était légèrement imprécise."
      },
      {
        question: "Qu'est-ce que l'API Pointer Lock ?",
        answer: "Il s'agit d'une fonctionnalité du navigateur qui verrouille le curseur et fournit les deltas de mouvement brut, permettant de s'affranchir des limites physiques de l'écran."
      },
      {
        question: "Faut-il désactiver l'accélération de la souris ?",
        answer: "Oui, pour une précision maximale. Sur Windows: décochez 'Améliorer la précision du pointeur' dans les options de la souris. Sur macOS, utilisez un utilitaire comme LinearMouse."
      },
      {
        question: "Comment fonctionne l'étalonnage de l'écran ?",
        answer: "Il calcule le PPI (Pixels Per Inch) de votre écran en faisant correspondre une ligne à l'écran à un objet standard (comme une carte bancaire) ou en saisissant les dimensions physiques et la résolution du moniteur."
      },
      {
        question: "Quel DPI utiliser pour le gaming ?",
        answer: "La plupart des joueurs FPS compétitifs utilisent 400 à 800 DPI pour viser précisément. Les joueurs MOBA préfèrent 800 à 1600 DPI. Pour la bureautique standard, 800 à 1600 DPI convient très bien."
      },
      {
        question: "Puis-je tester le DPI sur un pavé tactile ?",
        answer: "Techniquement oui, mais les résultats n'auront pas de sens car les pavés tactiles n'utilisent pas de capteurs DPI comme les souris traditionnelles."
      },
      {
        question: "Pourquoi devrais-je tester mon DPI ?",
        answer: "Les spécifications d'usine ne sont pas toujours exactes. Tester votre DPI permet de vérifier la sortie réelle de votre capteur et d'optimiser votre sensibilité."
      },
      {
        question: "Cet outil est-il gratuit ?",
        answer: "Oui, entièrement gratuit, sans inscription, sans téléchargement et sans publicité."
      }
    ],
    ctaTitle: "Prêt à tester votre DPI ?",
    ctaSubtitle: "Gratuit, précis et prend moins de 30 secondes.",
    ctaBtn: "Démarrer le test"
  },
  about: {
    metaTitle: "À propos — Mon DPI de Souris",
    metaDesc: "Découvrez Mon DPI de Souris, un outil open-source gratuit pour mesurer précisément le DPI de votre souris à l'aide de l'API Pointer Lock.",
    title: "À propos de cet outil.",
    desc1: "Mon DPI de Souris est un outil web gratuit et open-source permettant de mesurer précisément le DPI de votre souris. Sans inscription ni pistage.",
    whyTitle: "Pourquoi avoir créé cet outil ?",
    whyDesc1: "La plupart des testeurs de DPI suivent le curseur à l'écran, ce qui est imprécis à cause de l'accélération du système et des bords de l'écran. Nous voulions une meilleure solution.",
    whyDesc2: "Notre outil utilise l'API Pointer Lock pour lire les mouvements bruts directement du capteur. Combiné à un étalonnage d'écran, cela garantit la meilleure précision possible dans le navigateur.",
    privacyTitle: "Confidentialité.",
    privacyDesc: "Cet outil fonctionne entièrement en local dans votre navigateur. Aucune donnée n'est envoyée à un serveur. Vos paramètres sont stockés localement.",
    browserTitle: "Compatibilité navigateur.",
    browserDesc: "L'analyseur requiert l'API Pointer Lock, prise en charge par tous les navigateurs modernes :",
    btn: "Essayer l'analyseur"
  },
  contact: {
    metaTitle: "Contactez-nous - Mon DPI de Souris",
    metaDesc: "Contactez l'équipe de Mon DPI de Souris pour toute question ou suggestion.",
    title: "Contactez-nous.",
    desc: "Nous serions ravis de vous lire ! Pour toute question, suggestion ou problème technique, n'hésitez pas à nous envoyer un message.",
    nameLabel: "Votre nom",
    namePlaceholder: "Jean Dupont",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "jean@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Comment pouvons-nous vous aider ?",
    submitBtn: "Envoyer le message",
    emailText: "E-mail :",
    successMessage: "Message envoyé avec succès !"
  },
  dpiAnalyzer: {
    metaTitle: "Analyseur de DPI — Mesurez le DPI de votre souris avec précision",
    metaDesc: "Mesurez instantanément le DPI de votre souris. Utilise l'API Pointer Lock. Calcul en temps réel et historique des mesures.",
    title: "Analyseur de DPI.",
    subtitle: "Cliquez dans la zone, déplacez votre souris sur la distance cible, et le DPI est calculé en temps réel.",
    tipsTitle: "Conseils",
    tipsSubtitle: "Obtenir des mesures précises.",
    tip1Title: "Désactiver l'accélération",
    tip1Desc: "Désactivez l'option 'Améliorer la précision du pointeur' dans Windows ou l'accélération dans votre logiciel de souris pour des résultats optimaux.",
    tip2Title: "Utiliser une surface plane",
    tip2Desc: "Utilisez un tapis de souris propre et plat pour éviter les sauts de capteur.",
    tip3Title: "Tester plusieurs fois",
    tip3Desc: "Effectuez 3 à 5 tests consécutifs et comparez les résultats dans l'historique pour vous assurer de la régularité.",
    tip4Title: "Étalonner l'écran",
    tip4Desc: "Si vous utilisez la règle virtuelle, renseignez la taille physique de votre écran pour que la distance affichée soit exacte."
  },
  screenRuler: {
    metaTitle: "Règle d'écran — Mesurer en CM et Pouces | Analyseur de DPI",
    metaDesc: "Règle graduée en ligne gratuite. Mesurez précisément en centimètres et pouces grâce à l'étalonnage de l'écran. Pas besoin de règle physique.",
    title: "Règle d'écran.",
    subtitle: "Une règle à l'écran extrêmement précise. Renseignez les spécifications de votre écran pour afficher des mesures réelles.",
    aboutTitle: "Étalonnage d'écran",
    aboutDesc: "Saisissez la diagonale (ex: 27\") et la résolution native (ex: 2560×1440). Nous calculons ainsi le PPI exact pour adapter l'affichage de la règle."
  },
  howItWorks: {
    metaTitle: "Comment fonctionne la mesure de DPI | Analyseur de DPI",
    metaDesc: "Découvrez comment le DPI d'une souris est mesuré, sa définition, et pourquoi notre approche par API Pointer Lock garantit un résultat précis.",
    title: "Comment fonctionne la mesure de DPI.",
    subtitle: "Comprendre le DPI, sa mesure, et notre méthodologie pour un résultat optimal.",
    q1Title: "Qu'est-ce que le DPI de la souris ?",
    q1Desc: "Le DPI signifie Dots Per Inch (points par pouce). Il représente la quantité de pixels parcourus à l'écran pour chaque pouce de déplacement physique de votre souris. Une souris réglée sur 800 DPI déplace le curseur de 800 pixels pour un pouce de mouvement.",
    exampleTitle: "Exemple",
    exampleDesc: "À 800 DPI, déplacer la souris de 2 pouces vers la droite déplace le curseur de 1600 pixels. À 1600 DPI, le même déplacement physique déplace le curseur de 3200 pixels.",
    q2Title: "DPI vs Sensibilité.",
    q2Desc: "Le DPI est un paramètre matériel de votre capteur. La sensibilité est un multiplicateur logiciel appliqué par le système ou le jeu. Ils interagissent ensemble :",
    tableAspect: "Aspect",
    tableDpi: "DPI",
    tableSens: "Sensibilité",
    tableRowType: "Type",
    tableRowTypeDpi: "Matériel (capteur)",
    tableRowTypeSens: "Logiciel (Système/Jeu)",
    tableRowRes: "Résolution",
    tableRowResDpi: "Plus de points capturés",
    tableRowResSens: "Multiplie les points existants",
    tableRowPrec: "Précision",
    tableRowPrecDpi: "Élevé = plus précis",
    tableRowPrecSens: "Élevé = sauts de pixel possibles",
    tableRowQual: "Qualité",
    tableRowQualDpi: "Données natives",
    tableRowQualSens: "Peut dégrader la précision",
    tableFooter: "Pour une précision maximale, il est préférable de privilégier un DPI matériel élevé avec une sensibilité logicielle basse en jeu.",
    q3Title: "Notre méthode de mesure.",
    q3Desc: "Notre outil lit les deltas de déplacement matériel via le navigateur pour éviter les distorsions logicielles du système d'exploitation :",
    step1Title: "Étalonner l'écran",
    step1Desc: "Renseignez la diagonale pour connaître le nombre de pixels par pouce de votre affichage.",
    step2Title: "Définir la distance",
    step2Desc: "Choisissez la distance physique de test (5 pouces est conseillé). Utilisez la règle virtuelle comme repère.",
    step3Title: "Déplacer et mesurer",
    step3Desc: "Cliquez, déplacez la souris sur la distance voulue, et cliquez à nouveau. Le calcul est instantané.",
    q4Title: "Pourquoi l'API Pointer Lock ?",
    q4Desc: "Les testeurs classiques suivent le curseur à l'écran, ce qui pose plusieurs problèmes :",
    q4Bullet1: "Butée aux bords de l'écran qui bloque la capture des mouvements",
    q4Bullet2: "Accélération du système qui modifie les rapports de distance",
    q4Bullet3: "Arrondis de pixels entiers qui perdent les fractions",
    q4Bullet4: "Taille de la fenêtre qui limite le mouvement de test",
    q4Desc2: "L'API Pointer Lock verrouille le curseur et lit directement les deltas du matériel, éliminant tous ces biais.",
    q4Important: "Important",
    q4ImportantDesc: "Pour des résultats parfaits, désactivez l'accélération système ('Améliorer la précision du pointeur' sous Windows).",
    q5Title: "Configurations DPI courantes.",
    tableColDpi: "DPI",
    tableColUse: "Utilisation",
    tableColCommon: "Utilisé par",
    q5Row1Use: "FPS Compétitif",
    q5Row1Common: "Joueurs pro CS2 / Valorant",
    q5Row2Use: "FPS / Utilisation générale",
    q5Row2Common: "Le plus populaire",
    q5Row3Use: "Gaming & Bureautique",
    q5Row3Common: "Écrans haute définition",
    q5Row4Use: "Graphisme & Multi-écrans",
    q5Row4Common: "Écrans 4K+",
    ctaBtn: "Tester mon DPI maintenant",
    sidebarTitle: "Sur cette page",
    sidebarLink1: "Qu'est-ce que le DPI ?",
    sidebarLink2: "DPI vs Sensibilité",
    sidebarLink3: "Comment nous mesurons",
    sidebarLink4: "Pourquoi Pointer Lock ?",
    sidebarLink5: "Valeurs courantes",
    sidebarCtaTitle: "Prêt ?",
    sidebarCtaDesc: "Essayez notre analyseur en ligne gratuit et rapide.",
    sidebarCtaBtn: "Ouvrir l'analyseur"
  },
  privacy: {
    metaTitle: "Politique de confidentialité - Mon DPI de Souris",
    metaDesc: "Politique de confidentialité de Mon DPI de Souris.",
    title: "Politique de confidentialité.",
    lastUpdated: "Dernière mise à jour",
    sections: [
      {
        title: "1. Introduction",
        content: "Bienvenue sur Mon DPI de Souris. Nous respectons votre vie privée et protégeons vos données."
      },
      {
        title: "2. Données collectées",
        content: "Nos outils fonctionnent entièrement côté client dans votre navigateur. Aucune donnée de mouvement ou information personnelle n'est envoyée à nos serveurs."
      },
      {
        title: "3. Cookies",
        content: "Nous pouvons utiliser des cookies ou le stockage local pour mémoriser vos étalonnages d'écran."
      },
      {
        title: "4. Services tiers",
        content: "Nous n'utilisons pas de services tiers intrusifs ni de scripts de pistage publicitaires."
      },
      {
        title: "5. Conservation des données",
        content: "Les données étant locales, elles restent sur votre ordinateur et peuvent être effacées à tout moment en vidant le cache."
      },
      {
        title: "6. Enfants",
        content: "Nos services conviennent à tous les publics et ne collectent pas d'informations sur les mineurs."
      },
      {
        title: "7. Modifications",
        content: "Nous pouvons mettre à jour cette politique. Les changements seront publiés sur cette page."
      },
      {
        title: "8. Contact",
        content: "Pour toute question, contactez-nous à jasdeep97.dev@gmail.com."
      }
    ]
  },
  terms: {
    metaTitle: "Conditions d'utilisation - Mon DPI de Souris",
    metaDesc: "Conditions d'utilisation de Mon DPI de Souris.",
    title: "Conditions d'utilisation.",
    lastUpdated: "Dernière mise à jour",
    sections: [
      {
        title: "1. Acceptation",
        content: "En accédant à Mon DPI de Souris, vous acceptez de vous conformer à ces conditions d'utilisation."
      },
      {
        title: "2. Licence d'utilisation",
        content: "L'usage des outils est destiné à un but personnel et non commercial."
      },
      {
        title: "3. Exclusion",
        content: "Les outils sont fournis 'en l'état' sans garantie quant à leur fonctionnement ininterrompu."
      },
      {
        title: "4. Limites",
        content: "Nous ne saurions être tenus responsables de dommages résultant de l'utilisation de nos outils."
      },
      {
        title: "5. Exactitude",
        content: "Bien que nous visions la plus grande précision, des erreurs matérielles ou d'étalonnage peuvent survenir."
      },
      {
        title: "6. Liens",
        content: "Nous ne contrôlons pas les sites externes liés et déclinons toute responsabilité à leur sujet."
      },
      {
        title: "7. Modifications",
        content: "Ces conditions peuvent être révisées à tout moment sans préavis."
      },
      {
        title: "8. Loi applicable",
        content: "Tout litige sera régi par les lois de votre juridiction locale."
      }
    ]
  },
  dpiToolStrings: {
    settings: "Paramètres",
    targetDistance: "Distance cible",
    inch: "pouce",
    cm: "cm",
    configuredDpi: "DPI configuré",
    configuredDpiPlaceholder: "ex: 800",
    useVirtualRuler: "Utiliser la règle virtuelle pour mesurer",
    screenCalibration: "Étalonnage écran",
    calibrateScreen: "Étalonner l'écran",
    notCalibrated: "Non étalonné",
    calibrated: "Étalonné",
    axis: "Axe",
    horizontal: "Horizontal",
    vertical: "Vertical",
    reset: "Réinitialiser",
    howToTest: "Comment tester",
    testStep1: "Définissez votre distance cible",
    testStep2: "Cliquez dans la zone pour verrouiller le curseur",
    testStep3: "Déplacez votre souris sur la distance définie",
    testStep4: "Cliquez de nouveau pour finir",
    clickToStart: "Cliquez pour commencer à mesurer",
    cursorLockedDesc: "Le curseur sera masqué pour un suivi précis",
    pixelsMoved: "Pixels parcourus",
    moveMouseRight: "Déplacez la souris vers la droite →",
    moveMouseLeft: "Déplacez la souris vers la gauche ←",
    moveMouseDown: "Déplacez la souris vers le bas ↓",
    moveMouseUp: "Déplacez la souris vers le haut ↑",
    pixelsLabel: "PIXELS",
    distanceLabel: "DISTANCE",
    dpiLabel: "DPI",
    statusLabel: "STATUT",
    statusReady: "Prêt",
    statusMeasuring: "Mesure...",
    statusSuccess: "Succès",
    statusReset: "Réinitialisé",
    results: "Résultats",
    measuredDpi: "DPI mesuré",
    configured: "Configuré",
    measured: "Mesuré",
    vs: "vs",
    diffPerfect: "Le DPI correspond parfaitement !",
    diffOff: "DPI décalé de {diff}% ({desc})",
    detailPixels: "Pixels parcourus",
    detailDistance: "Distance cible",
    detailAxis: "Axe de mesure",
    testHistory: "Historique",
    noTests: "Aucun test effectué. Cliquez dans la zone pour commencer.",
    calibrateModalTitle: "Étalonner la règle virtuelle",
    calibrateModalDesc: "Saisissez la taille et la résolution de votre moniteur pour obtenir des centimètres réels à l'écran.",
    presets: "Préréglages",
    manualEntry: "Saisie manuelle",
    selectMonitor: "Sélectionner un moniteur",
    screenDiagonal: "Diagonale de l'écran (pouces)",
    resolution: "Résolution",
    applyCalibration: "Appliquer l'étalonnage",
    fillAllFieldsError: "Veuillez remplir correctement tous les champs."
  },
  rulerToolStrings: {
    calibration: "Étalonnage",
    enterSpecs: "Renseignez les spécifications de votre écran pour des mesures réelles.",
    presets: "Préréglages",
    manual: "Manuel",
    selectMonitor: "Sélectionner un moniteur",
    screenDiagonal: "Diagonale de l'écran (pouces)",
    resolution: "Résolution",
    calibrateBtn: "Étalonner",
    rulerUnit: "Unité",
    cm: "cm",
    inch: "pouce",
    notCalibrated: "Non étalonné",
    calibrated: "Étalonné",
    rulerHint: "Utilisez l'étalonnage pour des mesures physiques réelles",
    rulerLabelCm: "Centimètres",
    rulerLabelInches: "Pouces",
    fillAllFieldsError: "Veuillez remplir correctement tous les champs."
  }
};

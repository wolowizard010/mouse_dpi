import type { TranslationSchema } from '../types';

export const fi: TranslationSchema = {
  metadata: {
    title: "Hiiren DPI-analyysi — Tarkka DPI-testityökalu",
    description: "Mittaa hiiresi DPI tarkasti. Ilmainen online hiiren DPI-analyysityökalu näytön kalibroinnilla ja reaaliaikaisella laskennalla.",
  },
  nav: {
    home: "Koti",
    dpiAnalyzer: "DPI-analysaattori",
    screenRuler: "Näyttöviivain",
    howItWorks: "Kuinka se toimii",
    testDpi: "Testaa DPI",
    logo: "Hiireni DPI",
  },
  footer: {
    tagline: "Tarkka hiiren DPI-mittaus suoraan selaimessasi.",
    tools: "Työkalut",
    resources: "Resurssit",
    company: "Yritys",
    about: "Tietoa meistä",
    contact: "Ota yhteyttä",
    privacy: "Tietosuojaseloste",
    terms: "Käyttöehdot",
    copyright: "Hiireni DPI. Ilmainen & avoin lähdekoodi.",
  },
  index: {
    heroTitle: "Mittaa hiiresi DPI tarkasti.",
    heroSubtitle: "Tarkka DPI-mittaus hiiren raakadatan lukemiseen. Kalibroi näyttösi, testaa hiiresi ja tarkista asetuksesi.",
    testYourDpi: "Testaa DPI-arvosi",
    screenRuler: "Näyttöviivain",
    about: "Tietoa meistä",
    contact: "Ota yhteyttä",
    terms: "Ehdot",
    privacy: "Tietosuoja",
    stepsTitle: "Vaiheet",
    stepsSubtitle: "Kolme vaihetta tarkkaan DPI-mittaukseen.",
    step1Title: "Kalibroi",
    step1Desc: "Käytä näyttöviivaintamme näytön kalibrointiin. Syötä näyttösi diagonaali ja resoluutio saadaksesi tarkan PPI-arvon.",
    step2Title: "Aseta etäisyys",
    step2Desc: "Valitse kohde-etäisyys tuumina tai senttimetreinä. Aseta hiiri aloitusmerkin kohdalle.",
    step3Title: "Mittaa",
    step3Desc: "Napsauta testialuetta, siirrä hiirtä kohde-etäisyyden verran ja vapauta. DPI-arvosi lasketaan välittömästi.",
    articleTitle1: "Mikä on hiiren DPI?",
    articleContent1: "Hiiren DPI (Dots Per Inch) mittaa, kuinka monta pikseliä hiiren osoitin liikkuu näytöllä jokaista hiiren fyysisesti pöydällä liikkumaa tuumaa kohden. Suurempi DPI tarkoittaa, että osoitin liikkuu enemmän pienemmällä fyysisellä liikkeellä, mikä sopii nopeaan pelaamiseen tai korkearesoluutioisille näytöille. Pienempi DPI tarjoaa paljon tarkemman hallinnan, mikä on ihanteellista kuvankäsittelyyn tai FPS-pelien tähtäykseen.",
    articleTitle2: "Miksi testata DPI?",
    articleContent2: "Monet haluavat varmistaa hiirensä todellisen laitteistotason herkkyyden, sillä valmistajat saattavat ilmoittaa virheellisiä arvoja tai käyttöjärjestelmän kiihdytys vääristää tuloksia. Työkalumme mittaa hiiren sannan laitteistotason DPI-arvon.",
    articleTitle3: "Miten analysaattorimme toimii?",
    articleContent3: "Analysaattorimme toimii kokonaan selaimessa ilman erillistä ohjelmistoasennusta. Kalibroimalla näytön selvität sen PPI-arvon, asetat kohde-etäisyyden ja mittaat hiiren raakaliikkeen Pointer Lock API -liittymän avulla.",
    articleTitle4: "Ultimaattinen DPI-testi",
    articleContent4: "Testityökalumme mittaa fyysisen liikkeen suhteessa näytön pikseleihin ja tarjoaa matemaattisesti tarkan tuloksen yksinkertaisen arvion sijaan.",
    articleTitle5: "Asetustesi optimointi",
    articleContent5: "Liian suuri DPI voi tehdä tähtäyksestä epävakaata. Hiiren DPI:n pienentäminen ja pelinsisäisen herkkyyden säätäminen luo usein tasaisemman tuntuman. Pelaajat käyttävät testiä lihasmuistin säilyttämiseen eri peleissä.",
    faqTitle: "Usein kysytyt kysymykset",
    faq: [
      {
        question: "Miten voin tarkistaa hiiren DPI-arvon?",
        answer: "Voit tarkistaa laitteen asetukset valmistajan omasta ohjelmistosta (kuten Logitech G HUB) tai mitata sen fyysisen liikkeen online-työkalullamme."
      },
      {
        question: "Mikä on hiiren DPI?",
        answer: "DPI (Dots Per Inch) kertoo, kuinka monta pikseliä kohdistin liikkuu näytöllä, kun hiirtä liikutetaan pöydällä fyysisesti yhden tuuman verran."
      },
      {
        question: "Kuinka tarkka tämä testi on?",
        answer: "Työkalumme käyttää Pointer Lock API -rajapintaa lukemaan hiiren liikkeet suoraan ilman käyttöjärjestelmän kiihdytystä. Tarkkuus on noin 1–3 % todellisesta laitteiston DPI-arvosta."
      },
      {
        question: "Miksi mitattu DPI eroaa hiiren nimellisarvosta?",
        answer: "Erot voivat johtua käyttöjärjestelmän hiiren kiihdytyksestä, valmistajan ohjelmallisesta DPI-suodatuksesta tai pienestä virheestä fyysisen matkan mittauksessa."
      },
      {
        question: "Mikä on Pointer Lock API?",
        answer: "Se on selaintoiminto, joka lukitsee kohdistimen paikalleen ja lukee liikkeen raakakoordinaatteja (deltaX, deltaY) sen sijaan, että se seuraisi kohdistimen sijaintia näytön rajojen sisällä."
      },
      {
        question: "Pitääkö hiiren kiihdytys poistaa käytöstä?",
        answer: "Kyllä, parhaiden tulosten saamiseksi. Windowsissa: poista valinta kohdasta 'Paranna osoittimen tarkkuutta' hiiren lisäasetuksista. macOS-järjestelmässä voit käyttää LinearMouse-työkalua."
      },
      {
        question: "Miten näytön kalibrointi toimii?",
        answer: "Työkalu laskee näyttösi PPI-arvon. Voit joko sovittaa luottokortin näytön viivalle tai antaa näytön diagonaalikoon tuumina ja resoluution manuaalisesti."
      },
      {
        question: "Mikä DPI-arvo on paras pelaamiseen?",
        answer: "Useimmat FPS-ammuntapelien pelaajat käyttävät 400-800 DPI -arvoa matalalla pelinsisäisellä herkkyydellä. MOBA- ja RTS-pelaajat käyttävät usein 800-1600 DPI:tä. Toimistokäyttöön 800-1600 DPI on sopiva."
      },
      {
        question: "Voinko testata DPI:tä kannettavan kosketuslevyllä?",
        answer: "Teknisesti kyllä, mutta tulos ei ole merkityksellinen, sillä kosketuslevyillä ei ole perinteistä hiirisensorin DPI-arvoa."
      },
      {
        question: "Miksi minun pitäisi testata hiireni DPI?",
        answer: "Hiiren ilmoitetut arvot eivät aina vastaa todellisuutta. Testaamalla varmistat laitteen todellisen herkkyyden."
      },
      {
        question: "Onko tämä työkalu ilmainen?",
        answer: "Kyllä, täysin ilmainen. Ei latauksia, ei kirjautumisia eikä mainoksia. Avaa sivu ja aloita mittaus."
      }
    ],
    ctaTitle: "Valmis testaamaan hiireni DPI-arvon?",
    ctaSubtitle: "Ilmainen, tarkka ja kestää alle 30 sekuntia.",
    ctaBtn: "Aloita DPI-testi"
  },
  about: {
    metaTitle: "Tietoa meistä — Hiireni DPI",
    metaDesc: "Lue lisää Hiireni DPI -työkalusta, joka on ilmainen ja avoimen lähdekoodin ratkaisu tarkkaan DPI-mittaukseen selaimessa.",
    title: "Tietoa tästä työkalusta.",
    desc1: "Hiireni DPI on ilmainen ja avoimen lähdekoodin selaintyökalu, joka mittaa hiiren todellisen laitteistotason herkkyyden turvallisesti ilman käyttäjätietojen keräämistä.",
    whyTitle: "Miksi rakensimme tämän.",
    whyDesc1: "Suurin osa netin testeistä seuraa vain kohdistimen liikettä näytöllä, mikä vääristyy näytön reunojen ja käyttöjärjestelmän kiihdytyksen takia. Halusimme tarjota luotettavan vaihtoehdon.",
    whyDesc2: "Lukemalla liikkeet suoraan Pointer Lock API -liittymän kautta ja kalibroimalla pikselit suhteessa näytön fyysiseen kokoon, saavutamme erittäin tarkan mittaustuloksen.",
    privacyTitle: "Tietosuoja.",
    privacyDesc: "Työkalu toimii täysin paikallisesti selaimessasi. Mitään tietoja ei lähetetä palvelimille. Kalibrointiasetuksesi tallennetaan vain selaimesi localStorage-muistiin.",
    browserTitle: "Selainyhteensopivuus.",
    browserDesc: "Mittaustapa vaatii Pointer Lock API -rajapinnan, jota kaikki nykyaikaiset selaimet tukevat:",
    btn: "Kokeile analysaattoria"
  },
  contact: {
    metaTitle: "Ota yhteyttä - Hiireni DPI",
    metaDesc: "Ota yhteyttä Hiireni DPI -tiimiin kysymyksissä tai palautteessa.",
    title: "Ota yhteyttä.",
    desc: "Kuulisimme mielellämme mielipiteesi! Jos sinulla on kysyttävää, palautetta tai ongelmia työkalujen kanssa, lähetä meille viesti alla olevalla lomakkeella.",
    nameLabel: "Nimesi",
    namePlaceholder: "Matti Meikäläinen",
    emailLabel: "Sähköpostiosoite",
    emailPlaceholder: "matti@example.com",
    messageLabel: "Viesti",
    messagePlaceholder: "Miten voimme auttaa sinua?",
    submitBtn: "Lähetä viesti",
    emailText: "Sähköposti:",
    successMessage: "Viesti lähetetty onnistuneesti!"
  },
  dpiAnalyzer: {
    metaTitle: "DPI-analysaattori — Mittaa hiiren DPI-arvo tarkasti | Näyttöviivain",
    metaDesc: "Mittaa hiiri-DPI tarkasti online-analysaattorillamme. Käyttää Pointer Lock API -liittymää. Reaaliaikainen tulos ja historia.",
    title: "DPI-analysaattori.",
    subtitle: "Napsauta testialuetta, siirrä hiirtä kohde-etäisyyden verran ja lue DPI-arvo reaaliajassa.",
    tipsTitle: "Vinkkejä",
    tipsSubtitle: "Tarkkojen tulosten saavuttaminen.",
    tip1Title: "Poista hiiren kiihdytys käytöstä",
    tip1Desc: "Ota 'Paranna osoittimen tarkkuutta' pois käytöstä Windowsin asetuksista tai poista kiihdytys hiiren omasta ohjelmistosta.",
    tip2Title: "Käytä tasaista alustaa",
    tip2Desc: "Aseta hiiri tasaiselle hiirimatolle. Epätasainen pöytäpinta voi häiritä sensorin lukutarkkuutta.",
    tip3Title: "Testaa useita kertoja",
    tip3Desc: "Tee 3–5 testiä ja vertaa niitä historiasta. Toistuvat samanlaiset tulokset osoittavat onnistuneen mittauksen.",
    tip4Title: "Kalibroi näyttösi",
    tip4Desc: "Jos käytät näyttöviivainta apuna, kalibroi se monitorisi koon ja resoluution mukaan tarkan etäisyyden varmistamiseksi."
  },
  screenRuler: {
    metaTitle: "Näyttöviivain — Mittaa senttimetreinä ja tuumina | DPI-analysaattori",
    metaDesc: "Ilmainen näyttöviivain näytön kalibroinnilla. Mittaa tarkasti senttimetreinä ja tuumina näytön PPI-asetuksen mukaan. Ei tarvetta fyysiselle viivaimelle.",
    title: "Näyttöviivain.",
    subtitle: "Tarkka viivain näytölläsi. Syötä näytön tiedot kalibroidaksesi oikeat mittasuhteet.",
    aboutTitle: "Näytön kalibrointi",
    aboutDesc: "Anna monitorisi koko tuumina (esim. 27\") ja sen resoluutio (esim. 2560x1440). Laskemme tämän perusteella tarkan PPI-arvon viivaimen asteikkoa varten."
  },
  howItWorks: {
    metaTitle: "Miten hiiren DPI-mittaus toimii | DPI-analysaattori",
    metaDesc: "Lue, miten hiiren DPI mitataan ja miksi käyttämämme Pointer Lock API -menetelmä tarjoaa luotettavat ja tarkat tulokset.",
    title: "Kuinka DPI-mittaus toimii.",
    subtitle: "Tietoa hiiren DPI-arvosta, mittaustavastamme ja menetelmän tarkkuudesta.",
    q1Title: "Mikä on hiiren DPI?",
    q1Desc: "DPI on lyhenne sanoista Dots Per Inch (pisteitä tuumaa kohden). Se mittaa, kuinka monta pikseliä osoitin liikkuu näytöllä yhtä hiiren fyysisesti liikkumaa tuumaa kohden. Hiiri arvolla 800 DPI siirtää osoitinta 800 pikseliä tuumaa kohden.",
    exampleTitle: "Esimerkki",
    exampleDesc: "Arvolla 800 DPI kahden tuuman hiiren liike siirtää kohdistinta 1600 pikseliä. Arvolla 1600 DPI vastaava liike siirtää kohdistinta 3200 pikseliä.",
    q2Title: "DPI vs Herkkyys.",
    q2Desc: "DPI on hiiren laitteiston (sensorin) ominaisuus. Herkkyys puolestaan on käyttöjärjestelmän tai pelin ohjelmallinen kerroin. Ne toimivat yhdessä:",
    tableAspect: "Ominaisuus",
    tableDpi: "DPI",
    tableSens: "Herkkyys",
    tableRowType: "Tyyppi",
    tableRowTypeDpi: "Laitteisto (sensori)",
    tableRowTypeSens: "Ohjelmisto (OS/peli)",
    tableRowRes: "Tarkkuus",
    tableRowResDpi: "Enemmän näytepisteitä",
    tableRowResSens: "Moninkertaistaa olemassa olevaa dataa",
    tableRowPrec: "Tarkkuus",
    tableRowPrecDpi: "Korkeampi = tarkempi",
    tableRowPrecSens: "Korkeampi = huonompi tarkkuus (hyppii pikseleitä)",
    tableRowQual: "Laatu",
    tableRowQualDpi: "Raaka sensoridata",
    tableRowQualSens: "Voi aiheuttaa nykimistä",
    tableFooter: "Parhaan tarkkuuden saavuttamiseksi on suositeltavaa käyttää korkeaa laitteisto-DPI-arvoa ja matalaa pelinsisäistä herkkyyttä.",
    q3Title: "Kuinka mittaamme DPI:n.",
    q3Desc: "Työkalumme lukee hiiren liikkeet suoraan laitteistosta ilman käyttöjärjestelmän käsittelyä:",
    step1Title: "Kalibroi näyttösi",
    step1Desc: "Anna näytön koko, jotta järjestelmä voi laskea näytön PPI-arvon.",
    step2Title: "Aseta kohde-etäisyys",
    step2Desc: "Valitse testietäisyys (5 tuumaa on suositeltava kohde). Käytä apuna näyttöviivainta.",
    step3Title: "Liikuta ja mittaa",
    step3Desc: "Napsauta aluetta, siirrä hiirtä kohde-etäisyyden verran ja napsauta uudelleen. Työkalu laskee DPI-arvon heti.",
    q4Title: "Miksi Pointer Lock API?",
    q4Desc: "Perinteiset kohdistimen seuraamiseen perustuvat nettitestit epäonnistuvat monista syistä:",
    q4Bullet1: "Näytön reunat: kohdistin pysähtyy näytön reunaan, jolloin loppuliike jää mittaamatta",
    q4Bullet2: "Kiihdytys: muuttaa kohdistimen nopeutta sen mukaan, kuinka nopeasti liikutat kättäsi",
    q4Bullet3: "Pyöristysvirheet: pikseleitä pyöristetään laskennassa, jolloin tarkkuus heikkenee",
    q4Bullet4: "Ikkunan rajat: selainikkunan koko rajoittaa käytettävissä olevaa testietäisyyttä",
    q4Desc2: "Pointer Lock API ratkaisee nämä lukitsemalla kohdistimen ja lukemalla pelkät liikedeltat suoraan sensorista ilman rajoja.",
    q4Important: "Tärkeää",
    q4ImportantDesc: "Jotta mittaukset ovat tarkkoja, varmista, että poistat hiiren kiihdytyksen käytöstä Windowsin asetuksista.",
    q5Title: "Yleiset DPI-arvot.",
    tableColDpi: "DPI",
    tableColUse: "Käyttökohde",
    tableColCommon: "Käyttäjäryhmä",
    q5Row1Use: "FPS-pelit",
    q5Row1Common: "CS2 / Valorant-ammattilaiset",
    q5Row2Use: "Ammuntapelit / Yleiskäyttö",
    q5Row2Common: "Suosituin DPI-asetus",
    q5Row3Use: "Pelaaminen / Toimistotyö",
    q5Row3Common: "Korkean resoluution näytöt",
    q5Row4Use: "Graafinen suunnittelu / Moninäyttö",
    q5Row4Common: "4K-näytöt ja suuremmat",
    ctaBtn: "Mittaa DPI nyt",
    sidebarTitle: "Tällä sivulla",
    sidebarLink1: "Mikä on DPI?",
    sidebarLink2: "DPI vs Herkkyys",
    sidebarLink3: "Kuinka mittaamme",
    sidebarLink4: "Pointer Lockin hyödyt",
    sidebarLink5: "Yleisimmät arvot",
    sidebarCtaTitle: "Valmis?",
    sidebarCtaDesc: "Testaa ilmaisella online-analysaattorillamme.",
    sidebarCtaBtn: "Avaa analysaattori"
  },
  privacy: {
    metaTitle: "Tietosuojaseloste - Hiireni DPI",
    metaDesc: "Tietosuojaseloste Hiireni DPI -palvelulle.",
    title: "Tietosuojaseloste.",
    lastUpdated: "Viimeksi päivitetty",
    sections: [
      {
        title: "1. Johdanto",
        content: "Tervetuloa Hiireni DPI -palveluun. Kunnioitamme yksityisyyttäsi ja suojaamme asetuksesi."
      },
      {
        title: "2. Tiedon kerääminen",
        content: "Työkalumme toimivat täysin paikallisesti selaimessasi. Emme kerää tai lähetä hiiren liiketietoja palvelimillemme."
      },
      {
        title: "3. Evästeet",
        content: "Saatamme käyttää selaimesi localStorage-muistia näytön kalibroinnin tallentamiseen."
      },
      {
        title: "4. Kolmannen osapuolen palvelut",
        content: "Emme käytä seurantatyökaluja tai mainoskumppaneiden evästeitä."
      },
      {
        title: "5. Tietojen säilytys",
        content: "Koska emme kerää tietoja, emme myöskään tallenna mitään. Voit poistaa kalibroinnin tyhjentämällä selaimesi historian."
      },
      {
        title: "6. Lasten tietosuoja",
        content: "Sivusto on turvallinen kaikille ikäryhmille eikä se tallenna alaikäisten henkilötietoja."
      },
      {
        title: "7. Muutokset tietosuojaselosteeseen",
        content: "Saatamme päivittää tätä tietosuojaselostetta. Muutokset julkaistaan tällä sivulla."
      },
      {
        title: "8. Yhteystiedot",
        content: "Jos sinulla on kysyttävää, lähetä sähköpostia osoitteeseen jasdeep97.dev@gmail.com."
      }
    ]
  },
  terms: {
    metaTitle: "Käyttöehdot - Hiireni DPI",
    metaDesc: "Käyttöehdot Hiireni DPI -palvelulle.",
    title: "Käyttöehdot.",
    lastUpdated: "Viimeksi päivitetty",
    sections: [
      {
        title: "1. Hyväksyminen",
        content: "Käyttämällä tätä sivustoa hyväksyt nämä käyttöehdot."
      },
      {
        title: "2. Käyttölisenssi",
        content: "Työkaluja saa käyttää vain henkilökohtaiseen, ei-kaupalliseen tarkoitukseen."
      },
      {
        title: "3. Vastuuvapauslauseke",
        content: "Työkalut tarjotaan sellaisenaan ilman mitään takuita jatkuvasta toiminnasta."
      },
      {
        title: "4. Vastuunrajoitus",
        content: "Emme vastaa vahingoista, jotka aiheutuvat sivuston käytöstä tai sen käytön estymisestä."
      },
      {
        title: "5. Tarkkuus",
        content: "Pyrimme tarkkuuteen, mutta emme vastaa käsin suoritetun mittauksen pienistä poikkeamista."
      },
      {
        title: "6. Ulkoiset linkit",
        content: "Emme hallitse niiden verkkosivustojen sisältöä, joihin linkitämme."
      },
      {
        title: "7. Muutokset käyttöehtoihin",
        content: "Pidätämme oikeuden muuttaa näitä käyttöehtoja milloin tahansa ilman ennakkoilmoitusta."
      },
      {
        title: "8. Sovellettava laki",
        content: "Mahdolliset erimielisyydet ratkaistaan asuinmaasi lainsäädännön mukaisesti."
      }
    ]
  },
  dpiToolStrings: {
    settings: "Asetukset",
    targetDistance: "Kohde-etäisyys",
    inch: "tuuma",
    cm: "cm",
    configuredDpi: "Asetettu DPI",
    configuredDpiPlaceholder: "esim. 800",
    useVirtualRuler: "Käytä näyttöviivainta mittauksessa",
    screenCalibration: "Näytön kalibrointi",
    calibrateScreen: "Kalibroi näyttö",
    notCalibrated: "Ei kalibroitu",
    calibrated: "Kalibroitu",
    axis: "Akseli",
    horizontal: "Vaakasuuntainen",
    vertical: "Pystysuuntainen",
    reset: "Nollaa",
    howToTest: "Kuinka testata",
    testStep1: "Aseta kohde-etäisyys",
    testStep2: "Napsauta aluetta lukitaksesi kohdistimen",
    testStep3: "Siirrä hiirtä valitun etäisyyden verran",
    testStep4: "Napsauta uudelleen lopettaaksesi",
    clickToStart: "Napsauta aloittaaksesi mittauksen",
    cursorLockedDesc: "Kohdistin piilotetaan raakadata-sensorin lukemiseksi",
    pixelsMoved: "Pikseleitä liikutettu",
    moveMouseRight: "Liikuta hiirtä oikealle →",
    moveMouseLeft: "Liikuta hiirtä vasemmalle ←",
    moveMouseDown: "Liikuta hiirtä alaspäin ↓",
    moveMouseUp: "Liikuta hiirtä ylöspäin ↑",
    pixelsLabel: "PIKSELIT",
    distanceLabel: "ETÄISYYS",
    dpiLabel: "DPI",
    statusLabel: "TILA",
    statusReady: "Valmis",
    statusMeasuring: "Mitataan...",
    statusSuccess: "Valmis",
    statusReset: "Nollattu",
    results: "Tulokset",
    measuredDpi: "Mitattu DPI",
    configured: "Asetettu",
    measured: "Mitattu",
    vs: "vs",
    diffPerfect: "DPI vastaa täydellisesti!",
    diffOff: "DPI eroaa {diff}% ({desc})",
    detailPixels: "Pikseleitä liikutettu",
    detailDistance: "Kohde-etäisyys",
    detailAxis: "Käytetty akseli",
    testHistory: "Historia",
    noTests: "Ei tallennettuja testejä. Aloita napsauttamalla aluetta.",
    calibrateModalTitle: "Kalibroi näyttöviivain",
    calibrateModalDesc: "Syötä näytön koko ja resoluutio tarkkojen senttimetrimittojen saamiseksi ruudulle.",
    presets: "Valmiit asetukset",
    manualEntry: "Manuaalinen syöttö",
    selectMonitor: "Valitse näyttö",
    screenDiagonal: "Näytön diagonaali (tuumaa)",
    resolution: "Resoluutio",
    applyCalibration: "Tallenna kalibrointi",
    fillAllFieldsError: "Täytä kaikki vaaditut kentät."
  },
  rulerToolStrings: {
    calibration: "Kalibrointi",
    enterSpecs: "Syötä näytön koko ja resoluutio viivaimen kalibroimiseksi.",
    presets: "Valmiit asetukset",
    manual: "Manuaalinen",
    selectMonitor: "Valitse näyttö",
    screenDiagonal: "Näytön diagonaali (tuumaa)",
    resolution: "Resoluutio",
    calibrateBtn: "Kalibroi",
    rulerUnit: "Mitta-asteikko",
    cm: "cm",
    inch: "tuuma",
    notCalibrated: "Ei kalibroitu",
    calibrated: "Kalibroitu",
    rulerHint: "Kalibroi saadaksesi tarkan 1:1 mittakaavan näytölle",
    rulerLabelCm: "Senttimetrit",
    rulerLabelInches: "Tuumat",
    fillAllFieldsError: "Täytä kaikki vaaditut kentät."
  }
};

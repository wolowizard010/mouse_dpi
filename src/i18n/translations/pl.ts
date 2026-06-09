import type { TranslationSchema } from '../types';

export const pl: TranslationSchema = {
  metadata: {
    title: "Analizator DPI Myszy — Dokładne Narzędzie do Testowania DPI",
    description: "Zmierz DPI swojej myszy z precyzją. Darmowe internetowe narzędzie do analizy DPI myszy z kalibracją ekranu i kalkulatorem w czasie rzeczywistym.",
  },
  nav: {
    home: "Główna",
    dpiAnalyzer: "Analizator DPI",
    screenRuler: "Linijka Ekranowa",
    howItWorks: "Jak to działa",
    testDpi: "Testuj DPI",
    logo: "Mój DPI Myszy",
  },
  footer: {
    tagline: "Precyzyjny pomiar DPI myszy bezpośrednio w Twojej przeglądarce.",
    tools: "Narzędzia",
    resources: "Zasoby",
    company: "Firma",
    about: "O nas",
    contact: "Kontakt",
    privacy: "Polityka prywatności",
    terms: "Warunki korzystania",
    copyright: "Mój DPI Myszy. Darmowe i open-source.",
  },
  index: {
    heroTitle: "Zmierz precyzyjnie DPI swojej myszy.",
    heroSubtitle: "Dokładny pomiar DPI dla surowych danych wejściowych z myszy. Skalibruj swój ekran, przetestuj mysz i zweryfikuj ustawienia.",
    testYourDpi: "Przetestuj DPI",
    screenRuler: "Linijka ekranowa",
    about: "O nas",
    contact: "Kontakt",
    terms: "Warunki",
    privacy: "Prywatność",
    stepsTitle: "Kroki",
    stepsSubtitle: "Trzy kroki do dokładnego pomiaru DPI.",
    step1Title: "Skalibruj",
    step1Desc: "Skorzystaj z naszej linijki ekranowej, aby skalibrować wyświetlacz. Podaj przekątną ekranu i rozdzielczość monitora, aby uzyskać dokładny PPI.",
    step2Title: "Ustaw odległość",
    step2Desc: "Wybierz docelową odległość w calach lub centymetrach. Umieść mysz na pozycji startowej.",
    step3Title: "Zmierz",
    step3Desc: "Kliknij obszar testowy, przesuń mysz o docelową odległość i puść przycisk. Twoje DPI zostanie natychmiast obliczone.",
    articleTitle1: "Co to jest DPI myszy?",
    articleContent1: "DPI (Dots Per Inch) to standard pomiaru czułości optycznej myszy komputerowej. Określa, jak daleko przesunie się kursor na ekranie w stosunku do fizycznej odległości przesunięcia myszy po biurku. Wyższe DPI oznacza większy ruch kursora przy mniejszym ruchu ręki, idealne do szybkich gier lub monitorów 4K. Niższe DPI oferuje znacznie większą precyzję, pożądaną w projektowaniu graficznym czy strzelankach taktycznych.",
    articleTitle2: "Dlaczego warto sprawdzić DPI?",
    articleContent2: "Wielu użytkowników zastanawia się, jakie jest rzeczywiste DPI ich myszy. Producenci deklarują wysokie wartości, ale w praktyce mogą się one różnić przez ustawienia systemowe, akcelerację czy oprogramowanie. Nasz test pozwala zmierzyć realną czułość sprzętu.",
    articleTitle3: "Jak działa nasz analizator?",
    articleContent3: "Nasz analizator online działa w przeglądarce bez instalowania czegokolwiek. Kalibrujesz ekran podając rozmiar i rozdzielczość, by wyznaczyć PPI, po czym przesunięcie myszy jest przechwytywane jako surowy sygnał sprzętowy dzięki przeglądarkowym API.",
    articleTitle4: "Najlepszy tester DPI myszy",
    articleContent4: "W przeciwieństwie do uproszczonych narzędzi szacujących czułość na podstawie szybkości kursora, nasz system wykonuje dokładne obliczenia porównujące odległość fizyczną z ruchem pikseli na ekranie.",
    articleTitle5: "Optymalizacja ustawień po teście",
    articleContent5: "Jeśli DPI jest zbyt wysokie, możesz mieć problem z precyzją. Zmniejszenie DPI w myszy i skompensowanie go niższą czułością w grze zapewnia większą stabilność. Gracze e-sportowi dostosowują DPI w ten sposób, by zachować pamięć mięśniową.",
    faqTitle: "Często Zadawane Pytania",
    faq: [
      {
        question: "Jak sprawdzić DPI myszy?",
        answer: "Możesz to sprawdzić w oprogramowaniu producenta myszy (np. Logitech G HUB) lub użyć naszego analizatora online do fizycznego pomiaru czułości."
      },
      {
        question: "Co to jest DPI myszy?",
        answer: "DPI (punkty na cal) to miara liczby pikseli, o jaką przesunie się kursor na ekranie przy przesunięciu myszy na biurku o jeden cal."
      },
      {
        question: "Jak dokładny jest ten test?",
        answer: "Narzędzie korzysta z Pointer Lock API, pobierając dane surowe bezpośrednio z myszy, co omija akcelerację systemową. Dokładność wynosi 1-3%."
      },
      {
        question: "Dlaczego moje zmierzone DPI różni się od ustawionego?",
        answer: "Może to być spowodowane włączoną akceleracją w systemie operacyjnym, interpolacją oprogramowania myszy lub drobnym błędem podczas fizycznego mierzenia odległości."
      },
      {
        question: "Co to jest Pointer Lock API?",
        answer: "To funkcja przeglądarki, która blokuje kursor w jednym miejscu i dostarcza surowe zmiany ruchu (deltaX, deltaY), co zapobiega zatrzymywaniu się kursora na krawędzi ekranu."
      },
      {
        question: "Czy muszę wyłączyć akcelerację myszy?",
        answer: "Tak, dla najlepszych wyników. W Windows odznacz 'Zwiększ precyzję wskaźnika' w opcjach myszy. Na macOS użyj programu LinearMouse."
      },
      {
        question: "Jak działa kalibracja ekranu?",
        answer: "Oblicza rzeczywistą wartość PPI ekranu. Możesz dopasować kartę płatniczą do linii lub wprowadzić przekątną ekranu oraz rozdzielczość natywną."
      },
      {
        question: "Jakie DPI wybrać do gier?",
        answer: "W grach FPS gracze wolą 400-800 DPI do dokładnego celowania. Gracze MOBA i RTS używają 800-1600 DPI. Do pracy biurowej najwygodniejsze jest 800-1600 DPI."
      },
      {
        question: "Czy mogę przetestować DPI na touchpadzie?",
        answer: "Technicznie tak, ale wyniki nie mają sensu, ponieważ panele dotykowe w laptopach nie posiadają tradycyjnego czujnika DPI."
      },
      {
        question: "Dlaczego warto przetestować DPI?",
        answer: "Ustawienia fabryczne bywają niedokładne. Test pozwala upewnić się, że mysz działa z dokładnie taką czułością, jakiej oczekujesz."
      },
      {
        question: "Czy to narzędzie jest darmowe?",
        answer: "Tak, całkowicie darmowe. Bez instalacji, bez rejestracji, bez reklam. Wystarczy wejść i zacząć test."
      }
    ],
    ctaTitle: "Gotowy na przetestowanie DPI?",
    ctaSubtitle: "Darmowe, dokładne i zajmuje mniej niż 30 sekund.",
    ctaBtn: "Uruchom Test DPI"
  },
  about: {
    metaTitle: "O nas — Mój DPI Myszy",
    metaDesc: "Dowiedz się więcej o Mój DPI Myszy, darmowym narzędziu open-source do precyzyjnego pomiaru DPI za pomocą Pointer Lock API.",
    title: "O tym narzędziu.",
    desc1: "Mój DPI Myszy to darmowe narzędzie webowe open-source, które precyzyjnie mierzy DPI za pomocą nowoczesnych API przeglądarkowych, dbając o Twoją prywatność.",
    whyTitle: "Dlaczego je stworzyliśmy.",
    whyDesc1: "Większość testerów w sieci śledzi kursor na ekranie, co fałszuje wyniki przez akcelerację systemową i krawędzie ekranu. Chcieliśmy stworzyć coś lepszego.",
    whyDesc2: "Nasz tester pobiera surowe informacje z czujnika za pomocą Pointer Lock API i dopasowuje je do fizycznej skali ekranu po kalibracji, dając najwyższą dokładność.",
    privacyTitle: "Prywatność.",
    privacyDesc: "Działa w 100% lokalnie w przeglądarce. Nie przesyłamy danych na serwery. Konfiguracja kalibracji jest zapisywana lokalnie w pamięci przeglądarki.",
    browserTitle: "Obsługiwane przeglądarki.",
    browserDesc: "Test wymaga Pointer Lock API, które jest wspierane we wszystkich nowoczesnych przeglądarkach:",
    btn: "Wypróbuj Analizator"
  },
  contact: {
    metaTitle: "Kontakt - Mój DPI Myszy",
    metaDesc: "Skontaktuj się z zespołem Mój DPI Myszy w celu przesłania pytań lub uwag.",
    title: "Napisz do nas.",
    desc: "Chętnie poznamy Twoją opinię! Jeśli masz pytania, sugestie lub napotkałeś problem, skorzystaj z poniższego formularza, aby się z nami skontaktować.",
    nameLabel: "Twoje imię",
    namePlaceholder: "Jan Kowalski",
    emailLabel: "Adres e-mail",
    emailPlaceholder: "jan@example.com",
    messageLabel: "Wiadomość",
    messagePlaceholder: "W czym możemy pomóc?",
    submitBtn: "Wyślij wiadomość",
    emailText: "E-mail:",
    successMessage: "Wiadomość została wysłana pomyślnie!"
  },
  dpiAnalyzer: {
    metaTitle: "Analizator DPI — Zmierz precyzyjnie czułość swojej myszy",
    metaDesc: "Zmierz DPI myszy w mgnieniu oka. Korzysta z Pointer Lock API. Obliczenia w czasie rzeczywistym i historia testów.",
    title: "Analizator DPI.",
    subtitle: "Kliknij w obszar, przesuń mysz o docelową odległość i odczytaj DPI na bieżąco.",
    tipsTitle: "Porady",
    tipsSubtitle: "Jak uzyskać poprawny wynik.",
    tip1Title: "Wyłącz akcelerację",
    tip1Desc: "Wyłącz opcję 'Zwiększ precyzję wskaźnika' w panelu sterowania Windows lub w ustawieniach programu dedykowanego do myszki.",
    tip2Title: "Użyj gładkiej powierzchni",
    tip2Desc: "Połóż podkładkę. Nierówności blatu mogą spowodować, że czujnik błędnie odczyta przesunięcie.",
    tip3Title: "Powtórz test kilka razy",
    tip3Desc: "Zrób od 3 do 5 pomiarów i porównaj. Spójne wyniki w historii oznaczają, że test przebiegł prawidłowo.",
    tip4Title: "Skalibruj linijkę",
    tip4Desc: "Jeśli korzystasz z linijki na ekranie, skalibruj ją za pomocą wymiarów monitora, by odległości były wyświetlane w skali 1:1."
  },
  screenRuler: {
    metaTitle: "Linijka na Ekranie — Pomiar w CM i Calach | Analizator DPI",
    metaDesc: "Skalibrowana linijka internetowa. Mierz dokładnie w centymetrach i calach dzięki parametrom ekranu. Bez fizycznej linijki.",
    title: "Linijka Ekranowa.",
    subtitle: "Dokładna linijka na wyświetlaczu. Skonfiguruj parametry monitora, by linijka odzwierciedlała wymiary rzeczywiste.",
    aboutTitle: "Kalibracja ekranu",
    aboutDesc: "Wprowadź przekątną ekranu (np. 27 cali) i natywną rozdzielczość (np. 2560x1440). Na tej podstawie wyliczymy PPI, dopasowując podziałkę linijki."
  },
  howItWorks: {
    metaTitle: "Jak działa pomiar DPI myszy | Analizator DPI",
    metaDesc: "Dowiedz się, jak mierzona jest czułość myszy, czym jest DPI i dlaczego oparcie testu o Pointer Lock API gwarantuje poprawność.",
    title: "Jak działa pomiar DPI.",
    subtitle: "Zrozumienie DPI myszy, naszej metody pomiarowej i przyczyn jej wysokiej precyzji.",
    q1Title: "Co to jest DPI myszy?",
    q1Desc: "DPI to skrót od Dots Per Inch (punkty na cal). Mówi o tym, o ile pikseli przesunie się kursor na ekranie po przesunięciu myszy o cal na biurku. Mysz z 800 DPI przesunie kursor o 800 pikseli na każdy cal ruchu.",
    exampleTitle: "Przykład",
    exampleDesc: "Przy 800 DPI przesunięcie o 2 cale daje ruch kursora o 1600 pikseli. Przy 1600 DPI ten sam fizyczny ruch o 2 cale przesunie kursor o 3200 pikseli.",
    q2Title: "DPI vs Czułość.",
    q2Desc: "DPI to cecha sprzętowa (czujnika myszy). Czułość to mnożnik programowy (systemu lub gry). Działają razem:",
    tableAspect: "Aspekt",
    tableDpi: "DPI",
    tableSens: "Czułość",
    tableRowType: "Typ",
    tableRowTypeDpi: "Sprzęt (czujnik)",
    tableRowTypeSens: "Oprogramowanie (OS/gra)",
    tableRowRes: "Rozdzielczość",
    tableRowResDpi: "Więcej punktów odczytu",
    tableRowResSens: "Mnoży istniejące odczyty",
    tableRowPrec: "Precyzja",
    tableRowPrecDpi: "Większe = dokładniejsze",
    tableRowPrecSens: "Większe = gubienie pikseli",
    tableRowQual: "Jakość",
    tableRowQualDpi: "Natywne dane z czujnika",
    tableRowQualSens: "Może powodować przeskoki",
    tableFooter: "Dla najlepszej precyzji zaleca się korzystanie z wyższego DPI czujnika i niższej czułości ustawionej w grze.",
    q3Title: "Jak mierzymy DPI.",
    q3Desc: "Narzędzie odczytuje surowy sygnał z czujnika, pomijając modyfikacje wprowadzane przez system operacyjny:",
    step1Title: "Skalibruj ekran",
    step1Desc: "Wprowadź rozmiar ekranu, by system wiedział, ile pikseli przypada na cal fizyczny.",
    step2Title: "Wybierz odległość",
    step2Desc: "Ustal, na jaki dystans przesuniesz mysz (5 cali jest optymalne). Użyj linijki jako odniesienia.",
    step3Title: "Wykonaj ruch",
    step3Desc: "Kliknij, przesuń mysz na ustaloną odległość i kliknij ponownie. DPI wyliczy się automatycznie.",
    q4Title: "Dlaczego Pointer Lock API?",
    q4Desc: "Zwykłe testy śledzące ruch kursora zawodzą z kilku przyczyn:",
    q4Bullet1: "Krawędzie ekranu: kursor zatrzymuje się na brzegu i ruch przestaje być naliczany",
    q4Bullet2: "Akceleracja: zniekształca wynik w zależności od tego, jak szybko przesuniesz rękę",
    q4Bullet3: "Zaokrąglanie pikseli: gubi wartości ułamkowe przy przeliczaniu",
    q4Bullet4: "Rozmiar okna: ogranicza maksymalną odległość ruchu",
    q4Desc2: "Pointer Lock API blokuje i ukrywa kursor, przekazując wyłącznie czyste zmiany delty czujnika, bez ograniczeń.",
    q4Important: "Ważne",
    q4ImportantDesc: "Aby pomiary były dokładne, wyłącz akcelerację myszy w systemie Windows (odznacz 'Zwiększ precyzję wskaźnika').",
    q5Title: "Popularne wartości DPI.",
    tableColDpi: "DPI",
    tableColUse: "Zastosowanie",
    tableColCommon: "Używane przez",
    q5Row1Use: "E-sport (strzelanki FPS)",
    q5Row1Common: "Profesjonaliści CS2 / Valorant",
    q5Row2Use: "Gry FPS / Ogólne użycie",
    q5Row2Common: "Najpopularniejszy standard",
    q5Row3Use: "Gry / Praca w wysokiej rozdzielczości",
    q5Row3Common: "Ekrany o dużej rozdzielczości",
    q5Row4Use: "Projektowanie / Multi-monitor",
    q5Row4Common: "Monitory 4K i większe",
    ctaBtn: "Przetestuj DPI teraz",
    sidebarTitle: "Na tej stronie",
    sidebarLink1: "Czym jest DPI?",
    sidebarLink2: "DPI vs Czułość",
    sidebarLink3: "Jak mierzymy",
    sidebarLink4: "Dlaczego Pointer Lock?",
    sidebarLink5: "Popularne wartości",
    sidebarCtaTitle: "Chcesz sprawdzić?",
    sidebarCtaDesc: "Uruchom darmowy analizator internetowy.",
    sidebarCtaBtn: "Otwórz Analizator"
  },
  privacy: {
    metaTitle: "Polityka prywatności - Mój DPI Myszy",
    metaDesc: "Polityka prywatności dla Mój DPI Myszy.",
    title: "Polityka prywatności.",
    lastUpdated: "Ostatnia aktualizacja",
    sections: [
      {
        title: "1. Wprowadzenie",
        content: "Witaj w Mój DPI Myszy. Szanujemy Twoją prywatność i chronimy Twoje dane."
      },
      {
        title: "2. Zbierane dane",
        content: "Narzędzie działa całkowicie lokalnie w przeglądarce. Żadne dane o ruchu myszy nie trafiają na serwery zewnętrzne."
      },
      {
        title: "3. Pliki cookie",
        content: "Możemy korzystać z pamięci lokalnej do zapisywania Twojej kalibracji ekranu."
      },
      {
        title: "4. Podmioty trzecie",
        content: "Nie stosujemy skryptów śledzących ani ciasteczek profilujących firm trzecich."
      },
      {
        title: "5. Przechowywanie",
        content: "Nie przechowujemy Twoich danych. Kalibracje znajdują się wyłącznie w Twojej przeglądarce."
      },
      {
        title: "6. Dzieci",
        content: "Strona jest bezpieczna dla wszystkich i nie gromadzi danych od osób nieletnich."
      },
      {
        title: "7. Zmiany polityki",
        content: "Możemy zaktualizować te zapisy, publikując nową wersję na tej stronie."
      },
      {
        title: "8. Kontakt",
        content: "W razie pytań napisz do nas na adres jasdeep97.dev@gmail.com."
      }
    ]
  },
  terms: {
    metaTitle: "Warunki korzystania - Mój DPI Myszy",
    metaDesc: "Warunki korzystania z Mój DPI Myszy.",
    title: "Warunki korzystania.",
    lastUpdated: "Ostatnia aktualizacja",
    sections: [
      {
        title: "1. Akceptacja warunków",
        content: "Korzystając z tej strony, wyrażasz zgodę na postanowienia niniejszego regulaminu."
      },
      {
        title: "2. Licencja",
        content: "Zezwala się na korzystanie z narzędzi do celów osobistych, informacyjnych i niekomercyjnych."
      },
      {
        title: "3. Wyłączenie odpowiedzialności",
        content: "Narzędzie udostępniane jest w stanie takim, w jakim się znajduje, bez jakichkolwiek gwarancji."
      },
      {
        title: "4. Ograniczenia",
        content: "Nie odpowiadamy za żadne szkody powstałe w wyniku korzystania bądź niemożności korzystania z serwisu."
      },
      {
        title: "5. Dokładność",
        content: "Dokładamy starań, by pomiary były precyzyjne, lecz nie odpowiadamy za błędy wynikające ze złej kalibracji."
      },
      {
        title: "6. Odnośniki",
        content: "Nie kontrolujemy stron zewnętrznych, do których linkujemy, i nie odpowiadamy za ich treści."
      },
      {
        title: "7. Modyfikacje",
        content: "Możemy zmienić ten regulamin w dowolnym momencie bez informowania o tym użytkowników."
      },
      {
        title: "8. Prawo właściwe",
        content: "Wszelkie spory będą rozpatrywane zgodnie z prawem obowiązującym w Twoim kraju."
      }
    ]
  },
  dpiToolStrings: {
    settings: "Ustawienia",
    targetDistance: "Docelowa odległość",
    inch: "cal",
    cm: "cm",
    configuredDpi: "Ustawione DPI",
    configuredDpiPlaceholder: "np. 800",
    useVirtualRuler: "Użyj wirtualnej linijki do pomiaru",
    screenCalibration: "Kalibracja ekranu",
    calibrateScreen: "Skalibruj ekran",
    notCalibrated: "Nieskalibrowany",
    calibrated: "Skalibrowany",
    axis: "Oś",
    horizontal: "Pozioma",
    vertical: "Pionowa",
    reset: "Resetuj",
    howToTest: "Jak zmierzyć",
    testStep1: "Ustal dystans testu",
    testStep2: "Kliknij w obszar, by zablokować kursor",
    testStep3: "Przesuń mysz o wybrany dystans",
    testStep4: "Kliknij ponownie, aby zakończyć",
    clickToStart: "Kliknij, aby rozpocząć pomiar",
    cursorLockedDesc: "Kursor zostanie ukryty dla dokładnego zliczania",
    pixelsMoved: "Przesunięte piksele",
    moveMouseRight: "Przesuń mysz w prawo →",
    moveMouseLeft: "Przesuń mysz w lewo ←",
    moveMouseDown: "Przesuń mysz w dół ↓",
    moveMouseUp: "Przesuń mysz w górę ↑",
    pixelsLabel: "PIKSELE",
    distanceLabel: "DYSTANS",
    dpiLabel: "DPI",
    statusLabel: "STATUS",
    statusReady: "Gotowy",
    statusMeasuring: "Mierzenie...",
    statusSuccess: "Sukces",
    statusReset: "Zresetowany",
    results: "Wyniki",
    measuredDpi: "Zmierzone DPI",
    configured: "Ustawione",
    measured: "Zmierzone",
    vs: "vs",
    diffPerfect: "Wartości DPI pokrywają się idealnie!",
    diffOff: "Różnica wynosi {diff}% ({desc})",
    detailPixels: "Przesunięte piksele",
    detailDistance: "Docelowa odległość",
    detailAxis: "Wybrana oś",
    testHistory: "Historia Testów",
    noTests: "Brak testów. Kliknij w obszar pomiarowy, aby zacząć.",
    calibrateModalTitle: "Kalibracja Wirtualnej Linijki",
    calibrateModalDesc: "Wprowadź dane monitora, aby dopasować podziałkę do centymetrów w świecie rzeczywistym.",
    presets: "Gotowe ustawienia",
    manualEntry: "Ręcznie",
    selectMonitor: "Wybierz monitor",
    screenDiagonal: "Przekątna ekranu (cale)",
    resolution: "Rozdzielczość",
    applyCalibration: "Zastosuj kalibrację",
    fillAllFieldsError: "Wypełnij poprawnie wszystkie pola."
  },
  rulerToolStrings: {
    calibration: "Kalibracja",
    enterSpecs: "Podaj parametry ekranu, by dopasować skalę linijki.",
    presets: "Szablony",
    manual: "Ręcznie",
    selectMonitor: "Wybierz monitor",
    screenDiagonal: "Przekątna ekranu (cale)",
    resolution: "Rozdzielczość",
    calibrateBtn: "Kalibruj",
    rulerUnit: "Jednostka",
    cm: "cm",
    inch: "cal",
    notCalibrated: "Nieskalibrowany",
    calibrated: "Skalibrowany",
    rulerHint: "Skalibruj, aby uzyskać dokładny wymiar 1:1 na ekranie",
    rulerLabelCm: "Centymetry",
    rulerLabelInches: "Cale",
    fillAllFieldsError: "Wypełnij poprawnie wszystkie pola."
  }
};

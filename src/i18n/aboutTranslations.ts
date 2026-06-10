export interface AboutTranslations {
  calibrationTitle: string;
  calibrationDesc: string;
  useCasesTitle: string;
  useCasesDesc: string;
}

const translations: Record<string, AboutTranslations> = {
  en: {
    calibrationTitle: "Display calibration.",
    calibrationDesc: "To measure DPI (Dots Per Inch) accurately, the tool needs to calculate physical distance. Since computers only understand pixels, we use screen calibration to translate pixels to real-world inches. By entering your screen resolution and diagonal size, we compute your screen's precise Pixels Per Inch (PPI). This enables the virtual ruler to align perfectly with the physical world.",
    useCasesTitle: "Who is this for?",
    useCasesDesc: "Our tools are built for competitive gamers who need to match sensitivities across different titles to protect muscle memory, graphic designers needing precise cursor control, and tech enthusiasts verifying manufacturer hardware specifications."
  },
  de: {
    calibrationTitle: "Bildschirmkalibrierung.",
    calibrationDesc: "Um die DPI (Dots Per Inch) genau zu messen, muss das Tool die physische Distanz berechnen. Da Computer nur Pixel verstehen, nutzen wir die Bildschirmkalibrierung, um Pixel in reale Zoll umzurechnen. Durch Eingabe Ihrer Bildschirmauflösung und Diagonale berechnen wir die genauen Pixel pro Zoll (PPI) Ihres Bildschirms. Dadurch lässt sich das virtuelle Lineal perfekt auf die reale Welt abstimmen.",
    useCasesTitle: "Für wen ist das?",
    useCasesDesc: "Unsere Tools wurden für kompetitive Gamer entwickelt, die ihre Empfindlichkeiten über verschiedene Spiele hinweg anpassen müssen, um ihr Muskelgedächtnis zu bewahren, für Grafikdesigner, die eine präzise Cursorsteuerung benötigen, und für Technik-Enthusiasten, die die Hardware-Spezifikationen der Hersteller überprüfen möchten."
  },
  fr: {
    calibrationTitle: "Calibrage de l'écran.",
    calibrationDesc: "Pour mesurer précisément les DPI (points par pouce), l'outil doit calculer la distance physique. Les ordinateurs ne comprenant que les pixels, nous utilisons le calibrage de l'écran pour convertir les pixels en pouces réels. En saisissant la résolution et la taille diagonale de votre écran, nous calculons son nombre exact de pixels par pouce (PPI). Cela permet à la règle virtuelle de s'aligner parfaitement avec le monde physique.",
    useCasesTitle: "À qui s'adresse cet outil ?",
    useCasesDesc: "Nos outils sont conçus pour les joueurs compétitifs qui ont besoin d'harmoniser leur sensibilité d'un jeu à l'autre afin de préserver leur mémoire musculaire, les graphistes exigeant un contrôle précis du curseur, et les passionnés de technologie souhaitant vérifier les spécifications matérielles des fabricants."
  },
  es: {
    calibrationTitle: "Calibración de pantalla.",
    calibrationDesc: "Para medir el DPI (puntos por pulgada) de forma precisa, la herramienta necesita calcular la distancia física. Como las computadoras solo entienden píxeles, usamos la calibración de pantalla para traducir píxeles a pulgadas reales. Al ingresar la resolución y el tamaño diagonal de su pantalla, calculamos los píxeles por pulgada (PPI) exactos. Esto permite que la regla virtual se alinee perfectamente con el mundo físico.",
    useCasesTitle: "¿Para quién es esto?",
    useCasesDesc: "Nuestras herramientas están diseñadas para jugadores competitivos que necesitan hacer coincidir sus sensibilidades en diferentes juegos para proteger la memoria muscular, diseñadores gráficos que requieren un control preciso del cursor y entusiastas de la tecnología que verifican las especificaciones de hardware de los fabricantes."
  },
  it: {
    calibrationTitle: "Calibrazione dello schermo.",
    calibrationDesc: "Per misurare con precisione i DPI (punti per pollice), lo strumento deve calcolare la distanza fisica. Poiché i computer comprendono solo i pixel, utilizziamo la calibrazione dello schermo per tradurre i pixel in pollici reali. Inserendo la risoluzione dello schermo e la dimensione diagonale, calcoliamo i pixel per pollice (PPI) esatti del tuo schermo. Ciò consente al righello virtuale di allinearsi perfettamente con il mondo fisico.",
    useCasesTitle: "A chi è rivolto?",
    useCasesDesc: "I nostri strumenti sono pensati per i giocatori competitivi che hanno bisogno di uniformare la sensibilità tra diversi giochi per preservare la memoria muscolare, i designer grafici che richiedono un controllo preciso del cursore e gli appassionati di tecnologia che verificano le specifiche hardware dei produttori."
  },
  nl: {
    calibrationTitle: "Schermkalibratie.",
    calibrationDesc: "Om DPI (Dots Per Inch) nauwkeurig te meten, moet de tool de fysieke afstand berekenen. Omdat computers alleen pixels begrijpen, gebruiken we schermkalibratie om pixels te vertalen naar echte inches. Door uw schermresolutie en diagonale grootte in te voeren, berekenen we de exacte Pixels Per Inch (PPI) van uw scherm. Hierdoor sluit de virtuele liniaal perfect aan op de fysieke wereld.",
    useCasesTitle: "Voor wie is dit?",
    useCasesDesc: "Onze tools zijn gebouwd voor competitieve gamers die hun gevoeligheid over verschillende games moeten afstemmen om hun spiergeheugen te beschermen, grafisch ontwerpers die nauwkeurige cursorbesturing nodig hebben, en tech-liefhebbers die de hardwarespecificaties van de fabrikant willen verifiëren."
  },
  pl: {
    calibrationTitle: "Kalibracja ekranu.",
    calibrationDesc: "Aby dokładnie zmierzyć DPI (punkty na cal), narzędzie musi obliczyć fizyczną odległość. Ponieważ komputery rozumieją tylko piksele, używamy kalibracji ekranu, aby przełożyć piksele na rzeczywiste cale. Wprowadzając rozdzielczość ekranu i przekątną, obliczamy dokładną liczbę pikseli na cal (PPI) Twojego ekranu. Pozwala to wirtualnej linijce idealnie dopasować się do świata fizycznego.",
    useCasesTitle: "Dla kogo to jest?",
    useCasesDesc: "Nasze narzędzia są stworzone dla graczy rywalizujących, którzy muszą dopasować czułość w różnych grach, aby chronić pamięć mięśniową, projektantów graficznych wymagających precyzyjnej kontroli kursora oraz entuzjastów technologii weryfikujących specyfikacje sprzętowe producentów."
  },
  pt: {
    calibrationTitle: "Calibração de tela.",
    calibrationDesc: "Para medir o DPI (pontos por polegada) com precisão, a ferramenta precisa calcular a distância física. Como os computadores entendem apenas pixels, usamos a calibração de tela para traduzir pixels em polegadas reais. Ao inserir a resolução e o tamanho diagonal da tela, calculamos os pixels por polegada (PPI) exatos da sua tela. Isso permite que a régua virtual se alinhe perfeitamente com o mundo físico.",
    useCasesTitle: "Para quem é isso?",
    useCasesDesc: "Nuestras ferramentas foram criadas para gamers competitivos que precisam alinhar sensibilidades em diferentes jogos para proteger a memória muscular, designers gráficos que necessitam de controle preciso do cursor e entusiastas de tecnologia que desejam verificar as especificações de hardware dos fabricantes."
  },
  ru: {
    calibrationTitle: "Калибровка экрана.",
    calibrationDesc: "Для точного измерения DPI (точек на дюйм) инструменту необходимо рассчитать физическое расстояние. Поскольку компьютеры понимают только пиксели, мы используем калибровку экрана для перевода пикселей в реальные дюймы. Введя разрешение вашего экрана и размер диагонали, мы вычисляем точное количество пикселей на дюйм (PPI) вашего экрана. Это позволяет виртуальной линейке идеально соответствовать физическому миру.",
    useCasesTitle: "Для кого это?",
    useCasesDesc: "Наши инструменты созданы для профессиональных геймеров, которым необходимо сопоставлять чувствительность в разных играх для сохранения мышечной памяти, графических дизайнеров, которым требуется точное управление курсором, и технических энтузиастов, проверяющих заявленные производителем характеристики оборудования."
  },
  zh: {
    calibrationTitle: "屏幕校准。",
    calibrationDesc: "为了精确测量 DPI（每英寸点数），本工具需要计算物理距离。由于计算机只识别像素，我们使用屏幕校准将像素转化为现实中的英寸。通过输入您的屏幕分辨率和对角线尺寸，我们计算出屏幕的精确每英寸像素数（PPI）。这使得虚拟直尺能与现实世界完美对应。",
    useCasesTitle: "本工具适合谁？",
    useCasesDesc: "我们的工具专为需要在不同游戏中匹配灵敏度以保护肌肉记忆的竞技玩家、需要精确控制光标的平面设计师，以及验证制造商硬件规格的科技爱好者而设计。"
  },
  sv: {
    calibrationTitle: "Skärmkalibrering.",
    calibrationDesc: "För att mäta DPI (Dots Per Inch) noggrant måste verktyget beräkna fysiskt avstånd. Eftersom datorer bara förstår pixlar använder vi skärmkalibrering för att översätta pixlar till verkliga tum. Genom att ange din skärmupplösning och diagonala storlek beräknar vi skärmens exakta pixlar per tum (PPI). Detta gör att den virtuella linjalen matchar den fysiska världen perfekt.",
    useCasesTitle: "Vem är detta för?",
    useCasesDesc: "Våra verktyg är byggda för tävlingsinriktade spelare som behöver matcha känslighet mellan olika spel för att skydda muskelminnet, grafiska formgivare som kräver exakt markörkontroll och teknikentusiaster som vill verifiera tillverkarens hårdvaruspecifikationer."
  },
  da: {
    calibrationTitle: "Skærmkalibrering.",
    calibrationDesc: "For at måle DPI (Dots Per Inch) nøjagtigt skal værktøjet beregne fysisk afstand. Da computere kun forstår pixels, bruger vi skærmkalibrering til at oversætte pixels til rigtige tommer. Ved at indtaste din skærmopløsning og diagonale størrelse beregner vi skærmens nøjagtige Pixels Per Inch (PPI). Dette gør at den virtuelle lineal passer perfekt med den fysiske verden.",
    useCasesTitle: "Hvem er dette til?",
    useCasesDesc: "Vores værktøjer er bygget til konkurrencespillere, der har brug for at matche følsomhed på tværs af forskellige spil for at beskytte muskelhukommelsen, grafiske designere, der har brug for præcis markørkontrol, og teknologientusiaster, der verificerer producentens hardwarespecifikationer."
  },
  no: {
    calibrationTitle: "Skjermkalibrering.",
    calibrationDesc: "For å måle DPI (Dots Per Inch) nøyaktig må verktøyet beregne fysisk avstand. Siden datamaskiner bare forstår piksler, bruker vi skjermkalibrering til å oversette piksler til ekte tommer. Ved å skrive inn skjermoppløsning og diagonal størrelse beregner vi skjermens nøyaktige Pixels Per Inch (PPI). Dette gjør at den virtuelle linjalen samsvarer perfekt med den fysiske verden.",
    useCasesTitle: "Hvem er dette for?",
    useCasesDesc: "Våre verktøy er utviklet for konkurransespillere som må matche følsomhet på tvers av ulike spill for å beskytte muskelminnet, grafiske designere som trenger presis markørkontrol, og teknologientusiaster som vil verifisere produsentens maskinvarespesifikasjoner."
  },
  fi: {
    calibrationTitle: "Näytön kalibrointi.",
    calibrationDesc: "Mitatakseen DPI-arvon (Dots Per Inch) tarkasti, työkalun on laskettava fyysinen etäisyys. Koska tietokoneet ymmärtävät vain pikseleitä, käytämme näytön kalibrointia pikseleiden muuntamiseksi todellisiksi tuumiksi. Syöttämällä näytön resoluution ja diagonaalikoon laskemme näytön tarkan PPI-arvon (Pixels Per Inch). Tämän ansiosta virtuaalinen viivain täsmää täydellisesti fyysisen maailman kanssa.",
    useCasesTitle: "Kenelle tämä on tarkoitettu?",
    useCasesDesc: "Työkalumme on suunniteltu kilpapelaajille, joiden on täsmättävä herkkyydet eri pelien välillä lihasmuistin suojelemiseksi, graafisille suunnittelijoille, jotka tarvitsevat tarkan osoittimen hallinnan, sekä tekniikan harrastajille, jotka haluavat vahvistaa valmistajan laitteistotiedot."
  }
};

export function getAboutTranslations(lang: string | undefined): AboutTranslations {
  const locale = lang && lang in translations ? lang : 'en';
  return translations[locale];
}

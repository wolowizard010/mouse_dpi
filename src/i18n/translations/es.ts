import type { TranslationSchema } from '../types';

export const es: TranslationSchema = {
  metadata: {
    title: "Analizar DPI Ratón — Herramienta de Prueba de DPI Precisa",
    description: "Mide el DPI de tu ratón con precisión. Herramienta gratuita en línea para analizar el DPI con calibración de pantalla y cálculo en tiempo real.",
  },
  nav: {
    home: "Inicio",
    dpiAnalyzer: "Analizador de DPI",
    screenRuler: "Regla de Pantalla",
    howItWorks: "Cómo funciona",
    testDpi: "Probar DPI",
    logo: "Mi DPI de Ratón",
  },
  footer: {
    tagline: "Medición precisa del DPI del ratón, directamente en tu navegador.",
    tools: "Herramientas",
    resources: "Recursos",
    company: "Compañía",
    about: "Acerca de",
    contact: "Contacto",
    privacy: "Política de Privacidad",
    terms: "Términos y Condiciones",
    copyright: "Mi DPI de Ratón. Gratis y de código abierto.",
  },
  index: {
    heroTitle: "Mide el DPI de tu ratón con precisión.",
    heroSubtitle: "Medición precisa de DPI para entrada directa del ratón. Calibra tu pantalla, prueba tu ratón y verifica tu configuración.",
    testYourDpi: "Prueba tu DPI",
    screenRuler: "Regla de Pantalla",
    about: "Acerca de",
    contact: "Contacto",
    terms: "Términos",
    privacy: "Privacidad",
    stepsTitle: "Pasos",
    stepsSubtitle: "Tres pasos para un DPI preciso.",
    step1Title: "Calibrar",
    step1Desc: "Usa nuestra regla en pantalla para calibrar tu monitor. Introduce la diagonal y resolución para obtener un PPI preciso.",
    step2Title: "Definir distancia",
    step2Desc: "Elige una distancia objetivo en pulgadas o centímetros. Coloca el ratón en la marca de inicio.",
    step3Title: "Medir",
    step3Desc: "Haz clic en el área de prueba, mueve el ratón la distancia objetivo y suéltalo. Tu DPI se calcula al instante.",
    articleTitle1: "¿Qué es el DPI del ratón?",
    articleContent1: "El DPI (Dots Per Inch o puntos por pulgada) mide la sensibilidad óptica de un ratón. Determina cuánto se mueve el cursor en pantalla en relación con la distancia física que desplazas el ratón sobre tu escritorio. Un DPI alto hace que el cursor se mueva más con menos desplazamiento físico, ideal para monitores 4K o videojuegos rápidos. Un DPI bajo ofrece mucha más precisión, muy buscado por diseñadores gráficos o jugadores de disparos tácticos.",
    articleTitle2: "¿Por qué verificar el DPI?",
    articleContent2: "Muchos usuarios se preguntan cuál es su DPI real, especialmente al comprar un ratón gaming o notar que el cursor se mueve de forma extraña. Los fabricantes anuncian altos niveles de DPI, pero la configuración real puede diferir debido al software o la aceleración del sistema. Probarlo te permite ajustar tu configuración con total seguridad.",
    articleTitle3: "¿Cómo funciona nuestro analizador?",
    articleContent3: "Nuestro analizador en línea mide tu hardware de forma intuitiva sin instalar ningún programa. Calibras la pantalla con el tamaño y la resolución para hallar los píxeles por pulgada reales, y tras mover la distancia objetivo, se captura la señal pura del hardware mediante APIs del navegador.",
    articleTitle4: "El analizador de DPI definitivo",
    articleContent4: "A diferencia de herramientas sencillas que solo calculan la velocidad del cursor, nuestro sistema realiza cálculos matemáticos rigurosos comparando el movimiento físico y la trayectoria en píxeles para darte un valor real.",
    articleTitle5: "Optimizar tu configuración tras el test",
    articleContent5: "Si tu DPI es demasiado alto, te costará apuntar con precisión. Bajar el DPI físico y compensarlo en la sensibilidad del juego suele mejorar tu puntería. Los jugadores competitivos igualan su sensibilidad en todos sus juegos para mantener su memoria muscular intacta.",
    faqTitle: "Preguntas Frecuentes",
    faq: [
      {
        question: "¿Cómo saber el DPI de mi ratón?",
        answer: "Puedes mirarlo en el programa de tu ratón (Logitech G HUB, Razer Synapse, etc.) o usar nuestro analizador web para medir la distancia real en relación a los píxeles en pantalla."
      },
      {
        question: "¿Qué es el DPI del ratón?",
        answer: "Es la cantidad de píxeles que recorre el cursor en la pantalla por cada pulgada de movimiento físico de la mano."
      },
      {
        question: "¿Es precisa esta prueba?",
        answer: "Sí, usa la API Pointer Lock que extrae los datos puros sin que influya la aceleración del sistema operativo, con un margen de error del 1 al 3%."
      },
      {
        question: "¿Por qué difieren el DPI medido y el configurado?",
        answer: "Puede deberse a que la aceleración del sistema está activa, a una interpolación por software del ratón, o a una leve desviación al medir la distancia física."
      },
      {
        question: "¿Qué es la API Pointer Lock?",
        answer: "Es una función del navegador que bloquea el cursor dentro de la pantalla para reportar movimientos puros sin que el cursor se salga del marco."
      },
      {
        question: "¿Debo desactivar la aceleración del ratón?",
        answer: "Sí, para mayor precisión. En Windows, desmarca 'Mejorar la precisión del puntero' en los ajustes del ratón. En Mac, usa un programa como LinearMouse."
      },
      {
        question: "¿Cómo se calibra la pantalla?",
        answer: "Introduciendo el tamaño en pulgadas y la resolución nativa de tu pantalla, lo que permite hallar el PPI exacto y dibujar una regla real."
      },
      {
        question: "¿Qué DPI es mejor para jugar?",
        answer: "Los jugadores profesionales de shooters suelen usar 400 u 800 DPI. Para tareas de oficina en monitores normales, entre 800 y 1600 DPI es lo más cómodo."
      },
      {
        question: "¿Puedo probar el DPI en un trackpad?",
        answer: "No de forma útil, ya que los paneles táctiles de los portátiles no operan con valores de sensibilidad DPI como los sensores de los ratones ópticos."
      },
      {
        question: "¿Por qué debería probar mi DPI?",
        answer: "Para verificar si las especificaciones del fabricante son correctas y asegurarte de tener la precisión real que necesitas."
      },
      {
        question: "¿Esta herramienta es gratuita?",
        answer: "Sí, es completamente gratis, sin descargas, sin anuncios y sin necesidad de registrarse."
      }
    ],
    ctaTitle: "¿Listo para probar tu DPI?",
    ctaSubtitle: "Gratuito, preciso y tarda menos de 30 segundos.",
    ctaBtn: "Iniciar Prueba de DPI"
  },
  about: {
    metaTitle: "Acerca de — Mi DPI de Ratón",
    metaDesc: "Descubre más sobre Mi DPI de Ratón, una herramienta en línea gratuita y de código abierto para medir con precisión el DPI de tu ratón.",
    title: "Sobre esta herramienta.",
    desc1: "Mi DPI de Ratón es una utilidad web gratuita y abierta que mide la sensibilidad real de tu ratón sin guardar datos ni rastrearte.",
    whyTitle: "¿Por qué la creamos?",
    whyDesc1: "La mayoría de test en línea miden mal porque se ven afectados por la aceleración del sistema operativo y los bordes de la pantalla. Buscábamos una medición profesional.",
    whyDesc2: "Esta herramienta lee directamente la señal del hardware y usa calibración para ajustarse a las pulgadas reales, ofreciendo la máxima precisión posible.",
    privacyTitle: "Privacidad.",
    privacyDesc: "Funciona al 100% de manera local. Ningún dato sale de tu ordenador. Los ajustes solo se guardan en el almacenamiento local de tu navegador.",
    browserTitle: "Compatibilidad.",
    browserDesc: "Requiere Pointer Lock API, disponible en todos los navegadores modernos:",
    btn: "Probar el Analizador"
  },
  contact: {
    metaTitle: "Contacto - Mi DPI de Ratón",
    metaDesc: "Contacta con el equipo de Mi DPI de Ratón para consultas o sugerencias.",
    title: "Contáctanos.",
    desc: "¡Nos encantará escucharte! Si tienes dudas, comentarios o has encontrado algún fallo, rellena el formulario de abajo para ponerte en contacto.",
    nameLabel: "Tu Nombre",
    namePlaceholder: "Juan Pérez",
    emailLabel: "Correo Electrónico",
    emailPlaceholder: "juan@example.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "¿En qué podemos ayudarte?",
    submitBtn: "Enviar Mensaje",
    emailText: "Correo:",
    successMessage: "¡Mensaje enviado correctamente!"
  },
  dpiAnalyzer: {
    metaTitle: "Analizador de DPI — Prueba tu DPI con Precisión | Analizador de DPI",
    metaDesc: "Mide el DPI de tu ratón de inmediato. Utiliza la API Pointer Lock. Cálculos en tiempo real e historial de resultados.",
    title: "Analizador de DPI.",
    subtitle: "Haz clic en el área, mueve el ratón la distancia objetivo y el DPI se calculará en tiempo real.",
    tipsTitle: "Consejos",
    tipsSubtitle: "Cómo obtener medidas exactas.",
    tip1Title: "Desactiva la aceleración",
    tip1Desc: "Desactiva 'Mejorar precisión del puntero' en Windows o desactiva la aceleración en el panel de control de tu marca de ratón.",
    tip2Title: "Usa una superficie uniforme",
    tip2Desc: "Utiliza una alfombrilla plana. Las irregularidades del escritorio pueden alterar la lectura del sensor.",
    tip3Title: "Realiza varias pruebas",
    tip3Desc: "Haz entre 3 y 5 pruebas y compara. Si los resultados son consistentes, la medición es correcta.",
    tip4Title: "Calibra la regla",
    tip4Desc: "Si mides con la regla web, introduce el tamaño y resolución de tu pantalla para ajustar las distancias a la realidad."
  },
  screenRuler: {
    metaTitle: "Regla en Pantalla — Medir en CM y Pulgadas | Analizador de DPI",
    metaDesc: "Regla web calibrada. Mide de forma exacta en centímetros y pulgadas usando los ajustes de tu monitor. Sin necesitar regla física.",
    title: "Regla de Pantalla.",
    subtitle: "Una regla web exacta. Configura los datos de tu monitor para mostrar medidas físicas reales.",
    aboutTitle: "Calibración de pantalla",
    aboutDesc: "Escribe la diagonal de tu monitor (ej: 27\") y su resolución nativa (ej: 2560x1440). Con esto obtenemos el PPI para adaptar la escala de la regla."
  },
  howItWorks: {
    metaTitle: "Cómo funciona la medición de DPI | Analizador de DPI",
    metaDesc: "Aprende cómo se mide la sensibilidad de un ratón, qué significa el DPI y por qué nuestro método con Pointer Lock da resultados perfectos.",
    title: "Cómo funciona la medición de DPI.",
    subtitle: "Entiende el DPI de tu ratón, cómo lo calculamos y por qué es tan preciso.",
    q1Title: "¿Qué es el DPI del ratón?",
    q1Desc: "Significa puntos por pulgada. Mide cuántos píxeles recorre el cursor en pantalla por cada pulgada de movimiento físico de la mano. Un ratón a 800 DPI moverá el cursor 800 píxeles por cada pulgada física.",
    exampleTitle: "Ejemplo",
    exampleDesc: "A 800 DPI, mover el ratón 2 pulgadas a la derecha mueve el cursor 1600 píxeles. A 1600 DPI, el mismo movimiento de 2 pulgadas lo desplazará 3200 píxeles.",
    q2Title: "DPI vs Sensibilidad.",
    q2Desc: "El DPI es de hardware (el sensor). La sensibilidad es de software (el sistema o el juego). Trabajan juntos:",
    tableAspect: "Aspecto",
    tableDpi: "DPI",
    tableSens: "Sensibilidad",
    tableRowType: "Tipo",
    tableRowTypeDpi: "Hardware (sensor)",
    tableRowTypeSens: "Software (sistema/juego)",
    tableRowRes: "Resolución",
    tableRowResDpi: "Más puntos de lectura",
    tableRowResSens: "Multiplica los datos existentes",
    tableRowPrec: "Precisión",
    tableRowPrecDpi: "Mayor = más preciso",
    tableRowPrecSens: "Mayor = menos preciso (salto píxeles)",
    tableRowQual: "Calidad",
    tableRowQualDpi: "Señal pura del sensor",
    tableRowQualSens: "Puede omitir píxeles",
    tableFooter: "Para la mejor precisión, usa un DPI de hardware alto y una sensibilidad en el juego baja.",
    q3Title: "Cómo medimos el DPI.",
    q3Desc: "Nuestra herramienta lee los datos puros sin pasar por el procesado del sistema operativo que podría alterar la medición:",
    step1Title: "Calibra la pantalla",
    step1Desc: "Introduce las pulgadas para que el sistema asocie los píxeles a las medidas físicas.",
    step2Title: "Elige la distancia",
    step2Desc: "Elige cuánto moverás el ratón (5 pulgadas es una buena medida). Usa la regla en pantalla.",
    step3Title: "Mueve y calcula",
    step3Desc: "Haz clic, mueve el ratón la distancia y haz clic de nuevo. El cálculo es instantáneo.",
    q4Title: "¿Por qué usar Pointer Lock?",
    q4Desc: "Las pruebas habituales que siguen al cursor fallan por varias razones:",
    q4Bullet1: "Bordes de pantalla: el cursor choca y no lee más movimiento",
    q4Bullet2: "Aceleración: altera las proporciones en función de la velocidad",
    q4Bullet3: "Redondeos: pierde precisión al redondear decimales",
    q4Bullet4: "Ventana del navegador: limita el recorrido máximo",
    q4Desc2: "Pointer Lock oculta y bloquea el cursor, reportando solo los deltas del sensor sin ningún límite.",
    q4Important: "Importante",
    q4ImportantDesc: "Para resultados perfectos, desactiva la aceleración del ratón en tu panel de control de Windows ('Mejorar la precisión del puntero').",
    q5Title: "Ajustes de DPI comunes.",
    tableColDpi: "DPI",
    tableColUse: "Uso recomendado",
    tableColCommon: "Habitual en",
    q5Row1Use: "Shooters Competitivos",
    q5Row1Common: "Profesionales de CS2 / Valorant",
    q5Row2Use: "Juegos FPS / Uso general",
    q5Row2Common: "El más popular",
    q5Row3Use: "Gaming equilibrado / Oficina",
    q5Row3Common: "Pantallas de alta resolución",
    q5Row4Use: "Diseño gráfico / Multitarea",
    q5Row4Common: "Monitores 4K+",
    ctaBtn: "Probar mi DPI ahora",
    sidebarTitle: "En esta página",
    sidebarLink1: "¿Qué es el DPI?",
    sidebarLink2: "DPI vs Sensibilidad",
    sidebarLink3: "Cómo medimos",
    sidebarLink4: "¿Por qué Pointer Lock?",
    sidebarLink5: "Valores habituales",
    sidebarCtaTitle: "¿Listo para medir?",
    sidebarCtaDesc: "Usa nuestro analizador web rápido y preciso.",
    sidebarCtaBtn: "Abrir Analizador"
  },
  privacy: {
    metaTitle: "Política de Privacidad - Mi DPI de Ratón",
    metaDesc: "Política de Privacidad de Mi DPI de Ratón.",
    title: "Política de Privacidad.",
    lastUpdated: "Última actualización",
    sections: [
      {
        title: "1. Introducción",
        content: "Bienvenido a Mi DPI de Ratón. Respetamos tu privacidad y protegemos tu información."
      },
      {
        title: "2. Información recogida",
        content: "Nuestros análisis se ejecutan en local. No guardamos ni enviamos datos del ratón a ningún servidor."
      },
      {
        title: "3. Cookies",
        content: "Podemos usar almacenamiento local para recordar tus ajustes de calibración."
      },
      {
        title: "4. Servicios externos",
        content: "No empleamos scripts publicitarios de seguimiento ni cookies de terceros."
      },
      {
        title: "5. Conservación",
        content: "Al no recopilar datos, no los almacenamos. Tus calibraciones residen solo en tu navegador."
      },
      {
        title: "6. Menores",
        content: "Nuestro sitio es apto para todas las edades y no recopila datos de menores."
      },
      {
        title: "7. Cambios",
        content: "Podemos actualizar esta política publicando la nueva versión aquí."
      },
      {
        title: "8. Contacto",
        content: "Escríbenos para cualquier duda a jasdeep97.dev@gmail.com."
      }
    ]
  },
  terms: {
    metaTitle: "Términos y Condiciones - Mi DPI de Ratón",
    metaDesc: "Términos y Condiciones de Mi DPI de Ratón.",
    title: "Términos y Condiciones.",
    lastUpdated: "Última actualización",
    sections: [
      {
        title: "1. Aceptación",
        content: "Al usar esta web, aceptas cumplir con los términos detallados en este documento."
      },
      {
        title: "2. Licencia de uso",
        content: "Se permite usar las herramientas para uso personal y de entretenimiento, no comercial."
      },
      {
        title: "3. Descargo",
        content: "La herramienta se ofrece 'tal cual', no garantizamos que funcione siempre de forma ininterrumpida."
      },
      {
        title: "4. Limitaciones",
        content: "No nos responsabilizamos de ningún daño derivado del uso o la imposibilidad de uso de la web."
      },
      {
        title: "5. Precisión",
        content: "Buscamos la máxima precisión, pero pueden haber pequeños desfases por descalibraciones físicas."
      },
      {
        title: "6. Enlaces",
        content: "No controlamos los sitios web externos enlazados ni nos responsabilizamos de su contenido."
      },
      {
        title: "7. Revisiones",
        content: "Podemos revisar estos términos en cualquier momento sin previo aviso."
      },
      {
        title: "8. Legislación",
        content: "Cualquier reclamación se regirá por las leyes de tu jurisdicción local."
      }
    ]
  },
  dpiToolStrings: {
    settings: "Ajustes",
    targetDistance: "Distancia objetivo",
    inch: "pulgada",
    cm: "cm",
    configuredDpi: "DPI configurado",
    configuredDpiPlaceholder: "ej: 800",
    useVirtualRuler: "Usar regla virtual para medir",
    screenCalibration: "Calibración",
    calibrateScreen: "Calibrar pantalla",
    notCalibrated: "Sin calibrar",
    calibrated: "Calibrado",
    axis: "Eje",
    horizontal: "Horizontal",
    vertical: "Vertical",
    reset: "Reiniciar",
    howToTest: "Cómo medir",
    testStep1: "Ajusta la distancia de prueba",
    testStep2: "Haz clic para capturar el cursor",
    testStep3: "Mueve el ratón la distancia fijada",
    testStep4: "Haz clic otra vez para concluir",
    clickToStart: "Haz clic para iniciar la prueba",
    cursorLockedDesc: "El puntero se ocultará para medir sin interferencias",
    pixelsMoved: "Píxeles recorridos",
    moveMouseRight: "Mueve el ratón a la derecha →",
    moveMouseLeft: "Mueve el ratón a la izquierda ←",
    moveMouseDown: "Mueve el ratón hacia abajo ↓",
    moveMouseUp: "Mueve el ratón hacia arriba ↑",
    pixelsLabel: "PÍXELES",
    distanceLabel: "DISTANCIA",
    dpiLabel: "DPI",
    statusLabel: "ESTADO",
    statusReady: "Listo",
    statusMeasuring: "Midiendo...",
    statusSuccess: "Conseguido",
    statusReset: "Reiniciado",
    results: "Resultados",
    measuredDpi: "DPI medido",
    configured: "Configurado",
    measured: "Medido",
    vs: "vs",
    diffPerfect: "¡El DPI coincide a la perfección!",
    diffOff: "DPI desviado un {diff}% ({desc})",
    detailPixels: "Píxeles recorridos",
    detailDistance: "Distancia objetivo",
    detailAxis: "Eje utilizado",
    testHistory: "Historial",
    noTests: "Aún no hay mediciones. Haz clic en la cuadrícula para empezar.",
    calibrateModalTitle: "Calibrar regla virtual",
    calibrateModalDesc: "Ajusta los datos del monitor para mostrar una escala física real sobre el cristal.",
    presets: "Ajustes rápidos",
    manualEntry: "Manual",
    selectMonitor: "Seleccionar monitor",
    screenDiagonal: "Diagonal de pantalla (pulgadas)",
    resolution: "Resolución",
    applyCalibration: "Guardar calibración",
    fillAllFieldsError: "Por favor, completa los campos obligatorios."
  },
  rulerToolStrings: {
    calibration: "Calibración",
    enterSpecs: "Especifica los detalles del monitor para escalar la regla.",
    presets: "Ajustes rápidos",
    manual: "Manual",
    selectMonitor: "Seleccionar monitor",
    screenDiagonal: "Diagonal de pantalla (pulgadas)",
    resolution: "Resolución",
    calibrateBtn: "Calibrar",
    rulerUnit: "Medida",
    cm: "cm",
    inch: "pulgada",
    notCalibrated: "Sin calibrar",
    calibrated: "Calibrado",
    rulerHint: "Calibra para obtener centímetros y pulgadas reales en pantalla",
    rulerLabelCm: "Centímetros",
    rulerLabelInches: "Pulgadas",
    fillAllFieldsError: "Por favor, completa los campos obligatorios."
  }
};

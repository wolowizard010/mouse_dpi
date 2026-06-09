import type { TranslationSchema } from '../types';

export const pt: TranslationSchema = {
  metadata: {
    title: "Analisar DPI do Mouse — Ferramenta de Teste de DPI Precisa",
    description: "Meça o DPI do seu mouse com precisão. Ferramenta online gratuita para testar e analisar o DPI com calibração de tela e cálculo em tempo real.",
  },
  nav: {
    home: "Início",
    dpiAnalyzer: "Analisador de DPI",
    screenRuler: "Régua de Tela",
    howItWorks: "Como Funciona",
    testDpi: "Testar DPI",
    logo: "Meu DPI do Mouse",
  },
  footer: {
    tagline: "Medição precisa do DPI do mouse, diretamente no seu navegador.",
    tools: "Ferramentas",
    resources: "Recursos",
    company: "Empresa",
    about: "Sobre",
    contact: "Contato",
    privacy: "Política de Privacidade",
    terms: "Termos e Condições",
    copyright: "Meu DPI do Mouse. Gratuito & código aberto.",
  },
  index: {
    heroTitle: "Meça o DPI do seu mouse com precisão.",
    heroSubtitle: "Medição de DPI exata para dados brutos do mouse. Calibre sua tela, teste seu mouse e valide suas configurações.",
    testYourDpi: "Testar Seu DPI",
    screenRuler: "Régua de Tela",
    about: "Sobre",
    contact: "Contato",
    terms: "Termos",
    privacy: "Privacidade",
    stepsTitle: "Passos",
    stepsSubtitle: "Três passos para obter o seu DPI real.",
    step1Title: "Calibrar",
    step1Desc: "Use nossa régua na tela para calibrar o monitor. Digite a diagonal e a resolução para calcular o PPI correto.",
    step2Title: "Definir distância",
    step2Desc: "Escolha uma distância em polegadas ou centímetros. Posicione o mouse no ponto inicial.",
    step3Title: "Medir",
    step3Desc: "Clique na tela, deslize o mouse a distância indicada e solte. Seu DPI será calculado na hora.",
    articleTitle1: "O que é o DPI do Mouse?",
    articleContent1: "DPI (Dots Per Inch ou pontos por polegada) é o padrão usado para medir a sensibilidade óptica do sensor do mouse. Determina o quanto o cursor caminha no monitor de acordo com a distância física que você move a mão na mesa. Um DPI maior move mais o ponteiro com menor esforço físico, perfeito para telas 4K ou jogos ágeis. Um DPI menor dá muito mais precisão para retoques de imagem ou jogos de tiro tático.",
    articleTitle2: "Por que testar o DPI?",
    articleContent2: "Muitos usuários querem saber o DPI real, pois as marcas vendem números exagerados, mas configurações de driver ou aceleração do Windows podem alterar a precisão real. Medir ajuda você a regular a sensibilidade do jeito certo.",
    articleTitle3: "Como nosso analisador funciona?",
    articleContent3: "Nosso medidor roda 100% no seu navegador sem instalar nada. Você calibra o tamanho físico e resolução da tela para obter o PPI exato, e depois movemos o mouse coletando o sinal limpo do hardware usando APIs web.",
    articleTitle4: "O melhor verificador de DPI",
    articleContent4: "Diferente de testes simples baseados apenas na velocidade do cursor, nosso sistema efetua contas matemáticas relacionando a distância percorrida no mundo físico com a quantidade de pixels cruzados na tela.",
    articleTitle5: "Ajustando sua sensibilidade",
    articleContent5: "Se o seu DPI for muito alto, você perderá estabilidade nos cliques. Reduzir o DPI do mouse e compensar no ajuste interno do jogo proporciona um controle muito mais suave. Gamers ajustam isso para replicar a sensibilidade exata em todos os jogos.",
    faqTitle: "Perguntas Frequentes",
    faq: [
      {
        question: "Como saber o DPI do meu mouse?",
        answer: "Você pode conferir no software oficial do mouse (Logitech G HUB, Razer Synapse) ou medir fisicamente com nosso analisador na web."
      },
      {
        question: "O que é DPI do mouse?",
        answer: "É a quantidade de pixels que o cursor do computador anda no monitor para cada polegada de movimento físico que o mouse faz."
      },
      {
        question: "Qual a precisão desse teste?",
        answer: "Usamos a API Pointer Lock, capturando os dados diretos do sensor e neutralizando a aceleração do sistema operacional. O erro fica entre 1% e 3%."
      },
      {
        question: "Por que o DPI medido deu diferente do configurado?",
        answer: "Aceleração ativa no Windows, interpolação no software da marca do mouse ou uma pequena imprecisão na medição com a régua podem alterar o valor."
      },
      {
        question: "O que é a API Pointer Lock?",
        answer: "É um recurso do navegador que esconde o ponteiro e o prende na tela, obtendo deslocamentos puros sem que o cursor pare nos cantos do monitor."
      },
      {
        question: "Preciso desativar a aceleração do mouse?",
        answer: "Para máxima precisão, sim. No Windows, desmarque 'Aprimorar precisão do ponteiro' no painel de controle do mouse. No Mac, use o LinearMouse."
      },
      {
        question: "Como funciona a calibração?",
        answer: "Calculamos a densidade real de pixels da sua tela. Você pode esticar a linha de acordo com um cartão comum ou digitar a diagonal e resolução."
      },
      {
        question: "Qual o DPI recomendado para jogos?",
        answer: "Jogadores profissionais de FPS costumam usar 400 ou 800 DPI para mira estável. Fãs de MOBA/RTS usam 800 a 1600 DPI. Para o dia a dia, 800-1600 DPI é ideal."
      },
      {
        question: "Dá para testar em trackpad de notebook?",
        answer: "Não de forma relevante, pois trackpads operam de maneira diferente de sensores ópticos e não possuem controle de sensibilidade DPI tradicional."
      },
      {
        question: "Por que eu deveria testar o DPI?",
        answer: "Para atestar se as especificações prometidas pelo fabricante estão corretas e sincronizar sua mira com precisão matemática."
      },
      {
        question: "Esta página é gratuita?",
        answer: "Sim, 100% gratuita. Sem downloads, sem registros e livre de anúncios."
      }
    ],
    ctaTitle: "Pronto para medir seu DPI?",
    ctaSubtitle: "Gratuito, preciso e leva menos de 30 segundos.",
    ctaBtn: "Começar Teste de DPI"
  },
  about: {
    metaTitle: "Sobre — Meu DPI do Mouse",
    metaDesc: "Saiba mais sobre o Meu DPI do Mouse, uma ferramenta web gratuita e open-source para medição precisa de DPI.",
    title: "Sobre a ferramenta.",
    desc1: "Meu DPI do Mouse é uma ferramenta web gratuita e de código aberto para medir a sensibilidade do mouse em ambiente seguro, sem guardar dados.",
    whyTitle: "Por que criamos esta ferramenta.",
    whyDesc1: "A maioria dos testes online rastreia o ponteiro, o que sofre alterações devido à aceleração e às bordas da tela. Queríamos uma medição de nível profissional.",
    whyDesc2: "Lemos diretamente as deltas brutas do sensor físico via Pointer Lock, cruzando os dados com a calibração real da tela para maior exatidão.",
    privacyTitle: "Privacidade.",
    privacyDesc: "O código roda 100% local no seu navegador. Nenhuma informação é enviada a servidores. Seus ajustes salvam-se apenas no seu histórico local.",
    browserTitle: "Compatibilidade.",
    browserDesc: "O analisador precisa da Pointer Lock API, suportada por todos os navegadores modernos:",
    btn: "Experimentar o Analisador"
  },
  contact: {
    metaTitle: "Contato - Meu DPI do Mouse",
    metaDesc: "Fale com o suporte do Meu DPI do Mouse para dúvidas e sugestões.",
    title: "Fale Conosco.",
    desc: "Queremos ouvir você! Se tiver dúvidas, sugestões ou relatórios de bugs, envie sua mensagem usando o formulário abaixo.",
    nameLabel: "Seu Nome",
    namePlaceholder: "Maria Silva",
    emailLabel: "Endereço de E-mail",
    emailPlaceholder: "maria@example.com",
    messageLabel: "Mensagem",
    messagePlaceholder: "Como podemos ajudar?",
    submitBtn: "Enviar Mensagem",
    emailText: "E-mail:",
    successMessage: "Mensagem enviada com sucesso!"
  },
  dpiAnalyzer: {
    metaTitle: "Analisador de DPI — Meça o DPI do Mouse com Precisão | Meu DPI do Mouse",
    metaDesc: "Meça o DPI do seu mouse na hora. Utiliza a API Pointer Lock. Cálculos rápidos e histórico de registros.",
    title: "Analisador de DPI.",
    subtitle: "Clique no campo, desloque o mouse a distância desejada e veja o DPI em tempo real.",
    tipsTitle: "Dicas",
    tipsSubtitle: "Obtendo melhores leituras.",
    tip1Title: "Desative a aceleração",
    tip1Desc: "Desative o recurso 'Aprimorar precisão do ponteiro' no painel de controle do Windows para eliminar ajustes automáticos de velocidade.",
    tip2Title: "Use um mousepad plano",
    tip2Desc: "Superfícies ásperas ou poeira podem fazer com que o sensor óptico perca a contagem de pixels.",
    tip3Title: "Faça vários testes",
    tip3Desc: "Faça de 3 a 5 testes e compare o histórico. Medições estáveis e recorrentes mostram que você está arrastando a distância de forma correta.",
    tip4Title: "Calibre a escala",
    tip4Desc: "Caso use a régua digital, informe a diagonal e resolução para fazer os pixels combinarem com os centímetros reais."
  },
  screenRuler: {
    metaTitle: "Régua na Tela — Medição em CM e Polegadas | Meu DPI do Mouse",
    metaDesc: "Régua web calibrada. Faça medições em centímetros e polegadas usando as especificações do monitor. Sem precisar de réguas manuais.",
    title: "Régua de Tela.",
    subtitle: "Uma régua digital exata. Ajuste as informações do monitor para gerar medidas físicas precisas.",
    aboutTitle: "Calibração física",
    aboutDesc: "Digite as especificações de tamanho (ex: 27\") e resolução do monitor (ex: 2560x1440). Com isso, calculamos o PPI exato da régua."
  },
  howItWorks: {
    metaTitle: "Como a medição de DPI funciona | Meu DPI do Mouse",
    metaDesc: "Aprenda como medimos o DPI do mouse, o que é sensibilidade de hardware e por que a API Pointer Lock evita erros.",
    title: "Como a medição funciona.",
    subtitle: "Entenda o DPI do seu mouse, o cálculo por trás do teste e nossa busca por exatidão.",
    q1Title: "O que é DPI do mouse?",
    q1Desc: "DPI é a sigla para pontos por polegada. Mede quantos pixels o cursor caminha no monitor para cada polegada que a mão desloca o mouse. Um mouse em 800 DPI moverá o ponteiro 800 pixels a cada polegada física.",
    exampleTitle: "Exemplo",
    exampleDesc: "Em 800 DPI, mover o mouse por 2 polegadas move o ponteiro 1600 pixels. Em 1600 DPI, o mesmo movimento físico de 2 polegadas moverá o cursor 3200 pixels.",
    q2Title: "DPI vs Sensibilidade.",
    q2Desc: "DPI é no hardware (sensor físico). Sensibilidade é no software (multiplicador do sistema ou jogo). Eles trabalham juntos:",
    tableAspect: "Característica",
    tableDpi: "DPI",
    tableSens: "Sensibilidade",
    tableRowType: "Tipo",
    tableRowTypeDpi: "Hardware (sensor)",
    tableRowTypeSens: "Software (sistema/jogo)",
    tableRowRes: "Resolução",
    tableRowResDpi: "Mais leituras registradas",
    tableRowResSens: "Multiplica o sinal existente",
    tableRowPrec: "Precisão",
    tableRowPrecDpi: "Mais alto = mais preciso",
    tableRowPrecSens: "Mais alto = menos preciso (salta pixels)",
    tableRowQual: "Qualidade",
    tableRowQualDpi: "Sinal direto do sensor",
    tableRowQualSens: "Pode causar micro saltos",
    tableFooter: "Para maior controle e precisão, priorize um DPI físico maior e reduza a sensibilidade no jogo.",
    q3Title: "Como medimos o DPI.",
    q3Desc: "Nosso sistema captura as deltas diretas do hardware sem deixar que as correções do sistema operacional distorçam a medida:",
    step1Title: "Calibre a tela",
    step1Desc: "Configure as especificações de tela para converter pixels em distâncias físicas reais.",
    step2Title: "Defina o caminho",
    step2Desc: "Escolha o tamanho físico a deslizar (5 polegadas é o ideal). Use a régua digital.",
    step3Title: "Deslize e meça",
    step3Desc: "Clique no painel, deslize o mouse no tamanho marcado e dê outro clique. O cálculo é instantâneo.",
    q4Title: "Por que usar a API Pointer Lock?",
    q4Desc: "Testes que dependem de mover o cursor pela tela falham pelos seguintes motivos:",
    q4Bullet1: "Cantos do monitor: o cursor para nos cantos e o sistema para de contar o movimento",
    q4Bullet2: "Aceleração: altera a proporção baseando-se na velocidade do deslize",
    q4Bullet3: "Redondamento de inteiros: perde a precisão fracionária no cálculo",
    q4Bullet4: "Tamanho da janela: limita o espaço útil de medição",
    q4Desc2: "Pointer Lock prende e oculta o cursor, capturando apenas as mudanças brutas de deltas do sensor óptico.",
    q4Important: "Importante",
    q4ImportantDesc: "Para resultados reais, lembre-se de desligar a aceleração ('Aprimorar precisão do ponteiro' no painel de controle do Windows).",
    q5Title: "Ajustes de DPI comuns.",
    tableColDpi: "DPI",
    tableColUse: "Uso recomendado",
    tableColCommon: "Escolha comum de",
    q5Row1Use: "FPS Competitivo",
    q5Row1Common: "Pro players de CS2 / Valorant",
    q5Row2Use: "FPS / Uso rotineiro",
    q5Row2Common: "Mais popular do mercado",
    q5Row3Use: "Jogos rápidos / Produtividade",
    q5Row3Common: "Telas de alta resolução",
    q5Row4Use: "Edição de vídeo / Multitela",
    q5Row4Common: "Telas 4K ou superiores",
    ctaBtn: "Testar Meu DPI Agora",
    sidebarTitle: "Nesta página",
    sidebarLink1: "O que é DPI?",
    sidebarLink2: "DPI vs Sensibilidade",
    sidebarLink3: "Como medimos",
    sidebarLink4: "Por que Pointer Lock?",
    sidebarLink5: "Valores comuns",
    sidebarCtaTitle: "Quer testar?",
    sidebarCtaDesc: "Abra nosso analisador gratuito e intuitivo.",
    sidebarCtaBtn: "Abrir Analisador"
  },
  privacy: {
    metaTitle: "Política de Privacidade - Meu DPI do Mouse",
    metaDesc: "Política de Privacidade do Meu DPI do Mouse.",
    title: "Política de Privacidade.",
    lastUpdated: "Última atualização",
    sections: [
      {
        title: "1. Introdução",
        content: "Bem-vindo ao Meu DPI do Mouse. Respeitamos a sua privacidade e protegemos as suas configurações."
      },
      {
        title: "2. Coleta de informações",
        content: "Nossas ferramentas operam estritamente no seu navegador. Não coletamos nem enviamos dados para servidores."
      },
      {
        title: "3. Cookies e Ajustes",
        content: "Podemos usar o armazenamento local do navegador para manter sua calibração salva."
      },
      {
        title: "4. Serviços Externos",
        content: "Não temos scripts de publicidade ou cookies de perfil de terceiros."
      },
      {
        title: "5. Armazenamento",
        content: "Não guardamos seus registros em nenhum banco de dados. Suas calibrações ficam restritas ao seu navegador."
      },
      {
        title: "6. Menores de Idade",
        content: "Nossos testes são adequados para todos e não salvam dados pessoais de menores."
      },
      {
        title: "7. Atualizações",
        content: "Podemos atualizar os termos desta política de privacidade a qualquer momento, atualizando esta página."
      },
      {
        title: "8. Contato",
        content: "Fale conosco se tiver dúvidas pelo email jasdeep97.dev@gmail.com."
      }
    ]
  },
  terms: {
    metaTitle: "Termos e Condições - Meu DPI do Mouse",
    metaDesc: "Termini e Condizioni di Meu DPI do Mouse.",
    title: "Termos e Condições.",
    lastUpdated: "Última atualização",
    sections: [
      {
        title: "1. Aceitação",
        content: "Ao usar esta página, você concorda com as diretrizes e termos deste acordo."
      },
      {
        title: "2. Licença",
        content: "É autorizado o uso pessoal e recreativo das ferramentas da página, de forma não comercial."
      },
      {
        title: "3. Limitação de Garantias",
        content: "O serviço é disponibilizado 'no estado em que se encontra', sem garantias implícitas."
      },
      {
        title: "4. Responsabilidade",
        content: "Não nos responsabilizamos por perdas de precisão ou problemas no sensor causados pelo uso do site."
      },
      {
        title: "5. Margem de Erro",
        content: "Fazemos o máximo por exatidão, mas pequenos desvios físicos de arrasto manual podem acontecer."
      },
      {
        title: "6. Links de Terceiros",
        content: "Não controlamos páginas externas conectadas ao nosso site e não avaliamos suas políticas."
      },
      {
        title: "7. Modificações de Termos",
        content: "Nos reservamos o direito de alterar estas diretrizes sem aviso prévio."
      },
      {
        title: "8. Foro Aplicável",
        content: "Qualquer disputa será regida e interpretada de acordo com as leis do seu local de residência."
      }
    ]
  },
  dpiToolStrings: {
    settings: "Configurações",
    targetDistance: "Distância alvo",
    inch: "pol",
    cm: "cm",
    configuredDpi: "DPI configurado",
    configuredDpiPlaceholder: "ex: 800",
    useVirtualRuler: "Usar régua virtual para medir",
    screenCalibration: "Calibração física",
    calibrateScreen: "Calibrar tela",
    notCalibrated: "Não calibrado",
    calibrated: "Calibrado",
    axis: "Eixo",
    horizontal: "Horizontal",
    vertical: "Vertical",
    reset: "Resetar",
    howToTest: "Como medir",
    testStep1: "Ajuste a distância alvo",
    testStep2: "Clique no quadro para prender o cursor",
    testStep3: "Arraste o mouse no tamanho definido",
    testStep4: "Dê outro clique para terminar",
    clickToStart: "Clique para iniciar a medição",
    cursorLockedDesc: "O ponteiro será ocultado para medição limpa",
    pixelsMoved: "Pixels deslocados",
    moveMouseRight: "Mova o mouse para a direita →",
    moveMouseLeft: "Mova o mouse para a esquerda ←",
    moveMouseDown: "Mova o mouse para baixo ↓",
    moveMouseUp: "Mova o mouse para cima ↑",
    pixelsLabel: "PIXELS",
    distanceLabel: "DISTÂNCIA",
    dpiLabel: "DPI",
    statusLabel: "STATUS",
    statusReady: "Pronto",
    statusMeasuring: "Mergindo...",
    statusSuccess: "Concluído",
    statusReset: "Resetado",
    results: "Resultados",
    measuredDpi: "DPI medido",
    configured: "Configurado",
    measured: "Medido",
    vs: "vs",
    diffPerfect: "O DPI confere perfeitamente!",
    diffOff: "DPI desalinhado por {diff}% ({desc})",
    detailPixels: "Pixels deslocados",
    detailDistance: "Distância alvo",
    detailAxis: "Eixo utilizado",
    testHistory: "Histórico",
    noTests: "Nenhum teste. Clique na grade para iniciar.",
    calibrateModalTitle: "Calibrar Régua Virtual",
    calibrateModalDesc: "Configure as dimensões do monitor para que a régua mostre distâncias físicas reais.",
    presets: "Ajustes rápidos",
    manualEntry: "Manual",
    selectMonitor: "Selecionar monitor",
    screenDiagonal: "Diagonal da tela (polegadas)",
    resolution: "Resolução",
    applyCalibration: "Salvar calibração",
    fillAllFieldsError: "Por favor, preencha todos os campos obrigatórios."
  },
  rulerToolStrings: {
    calibration: "Calibração",
    enterSpecs: "Configure os dados do monitor para projetar a régua.",
    presets: "Ajustes rápidos",
    manual: "Manual",
    selectMonitor: "Selecionar monitor",
    screenDiagonal: "Diagonal da tela (polegadas)",
    resolution: "Resolução",
    calibrateBtn: "Calibrar",
    rulerUnit: "Unidade",
    cm: "cm",
    inch: "pol",
    notCalibrated: "Não calibrado",
    calibrated: "Calibrado",
    rulerHint: "Calibre para ter centímetros e polegadas reais na tela",
    rulerLabelCm: "Centímetros",
    rulerLabelInches: "Polegadas",
    fillAllFieldsError: "Por favor, preencha todos os campos obrigatórios."
  }
};

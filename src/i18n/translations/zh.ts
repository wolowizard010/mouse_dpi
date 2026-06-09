import type { TranslationSchema } from '../types';

export const zh: TranslationSchema = {
  metadata: {
    title: "鼠标 DPI 测试分析 — 精确的鼠标 DPI 检测工具",
    description: "高精度在线测量您的鼠标 DPI。免费鼠标 DPI 分析工具，支持屏幕校准和实时数据计算。",
  },
  nav: {
    home: "首页",
    dpiAnalyzer: "DPI 分析器",
    screenRuler: "屏幕尺子",
    howItWorks: "工作原理",
    testDpi: "测试 DPI",
    logo: "我的鼠标 DPI",
  },
  footer: {
    tagline: "在浏览器中直接精准测量您的鼠标 DPI。",
    tools: "在线工具",
    resources: "相关资源",
    company: "关于我们",
    about: "关于本站",
    contact: "联系我们",
    privacy: "隐私政策",
    terms: "使用条款",
    copyright: "我的鼠标 DPI. 免费且开源。",
  },
  index: {
    heroTitle: "高精度测量您的鼠标 DPI。",
    heroSubtitle: "捕获原始鼠标输入进行精确 DPI 测量。校准您的显示器，测试并验证您的鼠标设置。",
    testYourDpi: "测试您的 DPI",
    screenRuler: "屏幕尺子",
    about: "关于本站",
    contact: "联系我们",
    terms: "条款",
    privacy: "隐私",
    stepsTitle: "使用步骤",
    stepsSubtitle: "只需三步，测出精准 DPI。",
    step1Title: "校准屏幕",
    step1Desc: "使用屏幕尺子校准显示器。输入显示器尺寸和分辨率以计算精确的 PPI 比例。",
    step2Title: "设定距离",
    step2Desc: "选择目标移动距离（英寸或厘米）。将鼠标对齐至物理尺子的起始刻度。",
    step3Title: "点击测量",
    step3Desc: "点击测试区域，移动鼠标到指定的物理距离，释放点击即可立即计算出 DPI。",
    articleTitle1: "什么是鼠标 DPI？",
    articleContent1: "鼠标 DPI（Dots Per Inch，每英寸点数）是衡量鼠标光学传感器灵敏度的标准。它决定了当您在桌面上移动鼠标时，屏幕上的光标随之移动的距离比例。较高的 DPI 意味着更小的物理移动就能让光标移动很远，适合 4K 等大屏或快速竞技游戏。较低的 DPI 则提供了更精细的像素级定位，广泛应用于图像设计和射击游戏精确瞄准。",
    articleTitle2: "为什么要测试鼠标 DPI？",
    articleContent2: "许多玩家经常疑惑自己鼠标的真实 DPI 是多少。虽然厂商包装上标注了高参数，但实际上，系统内置的鼠标加速、驱动插值过滤以及分辨率转换都会使物理 DPI 发生偏离。测试您的真实 DPI，能让您在不同电脑和游戏中保持一致的手感。",
    articleTitle3: "我们的 DPI 分析器如何工作？",
    articleContent3: "我们的网页端分析器无需您安装任何插件或软件。您首先通过尺寸和分辨率校准显示器获得精确 PPI。接着设置移动的物理距离，再利用现代浏览器的 Pointer Lock API 避开系统加速，直接读取传感器传输的原始脉冲。",
    articleTitle4: "最专业的 DPI 测量工具",
    articleContent4: "市面上很多简单工具仅根据光标速度进行估算，极易产生偏差。我们使用严格的数学算法，对比物理距离与光标轨迹像素的关系，直接获取未加工的硬件 DPI。",
    articleTitle5: "测试后如何优化您的设置",
    articleContent5: "若测试后发现您的 DPI 过高，可能导致鼠标指针飘忽不定。您可以调低鼠标 DPI 并在游戏中调整灵敏度，以获得更平滑的操作感。射击类游戏职业选手通常通过此方法来统合不同游戏中的瞄准记忆。",
    faqTitle: "常见问题解答",
    faq: [
      {
        question: "如何查看鼠标 DPI？",
        answer: "您可以通过鼠标品牌自带的管理软件（如 Logitech G HUB、Razer Synapse）查看。或者使用我们的在线分析器，通过物理移动鼠标直接测算硬件 DPI。"
      },
      {
        question: "什么是鼠标 DPI？",
        answer: "DPI（每英寸点数）表示鼠标在桌面上物理移动 1 英寸，屏幕上的光标移动的像素点数。"
      },
      {
        question: "此 DPI 测试有多精准？",
        answer: "本工具利用 Pointer Lock API 采集原始物理运动数据，不受系统加速度和屏幕边界影响。关闭系统加速后，精度可达 97% 至 99%。"
      },
      {
        question: "为什么我测得的 DPI 与标称值不同？",
        answer: "主要有以下原因：1. 系统内启用了鼠标指针加速；2. 鼠标软件进行了算法插值过滤；3. 传感器硬件步进四舍五入；4. 物理滑动的距离测量有微小偏差。"
      },
      {
        question: "什么是 Pointer Lock API？",
        answer: "这是现代浏览器的一项功能，它能将光标锁定在页面内并持续输出相对移动量（deltaX/Y），解决光标移出浏览器窗口或撞上屏幕边界的问题。"
      },
      {
        question: "我需要关闭鼠标加速吗？",
        answer: "为了获得最准确的硬件测试结果，必须关闭。在 Windows 系统中，打开控制面板的鼠标设置，在指针选项中取消勾选“提高指针精确度”。在 macOS 上推荐使用 LinearMouse 工具关闭加速度。"
      },
      {
        question: "屏幕校准是如何工作的？",
        answer: "它计算您显示器物理上的 PPI（每英寸像素数）。您可以通过在屏幕上缩放线条，使其与标准信用卡（85.6mm）等长；或者直接输入屏幕对角线英寸大小和当前分辨率。"
      },
      {
        question: "玩游戏用多大 DPI 合适？",
        answer: "射击类 FPS 职业选手常用 400-800 DPI，配合低游戏内敏度以利于微调瞄准。MOBA 和 RTS 玩家多用 800-1600 DPI 以快速移屏。对于 4K 高分辨率显示器，1600-3200 DPI 会更舒适。"
      },
      {
        question: "我能在笔记本的触控板上测试吗？",
        answer: "技术上可以，但触控板并不具有传统物理鼠标的 DPI 敏感度概念，测试得出的数据没有实际参考意义。此工具专为配备光学传感器的物理外接鼠标设计。"
      },
      {
        question: "为什么我需要测试 DPI？",
        answer: "有些鼠标由于代工方案、虚标或插值等原因，实际输出与标称不符。测试能帮助您掌握自己硬件的真实反馈，保证游戏手感高度一致。"
      },
      {
        question: "这个工具是免费的吗？",
        answer: "是的，完全免费。无需下载安装，无需注册，没有任何广告打扰。打开即可测试。"
      }
    ],
    ctaTitle: "准备好测试您的 DPI 了吗？",
    ctaSubtitle: "免费、精准，耗时不到 30 秒。",
    ctaBtn: "开始 DPI 测试"
  },
  about: {
    metaTitle: "关于我们 — 我的鼠标 DPI",
    metaDesc: "了解我的鼠标 DPI，一款利用 Pointer Lock API 精准测定鼠标 DPI 的免费开源在线工具。",
    title: "关于本工具。",
    desc1: "我的鼠标 DPI 是一款免费且开源的网页端工具，借助现代浏览器 API 帮助您测试并确定鼠标真实的物理 DPI，不涉及任何后台存储与追踪。",
    whyTitle: "开发初衷。",
    whyDesc1: "市面上常见的测试工具主要依靠屏幕光标轨迹，在触及屏幕边界或受到系统加速干扰时会严重失真。我们希望能提供一套科学、未受干扰的纯硬件测量方案。",
    whyDesc2: "通过 Pointer Lock 捕获未经过操作系统的物理信号，再结合显示器像素校准，我们在网页端实现了高精度的精准数据计算。",
    privacyTitle: "隐私声明。",
    privacyDesc: "本工具 100% 运行于您的浏览器本地。我们不向任何服务器传送您的轨迹与配置。所有的校准参数仅存储于您本地浏览器的 localStorage 中。",
    browserTitle: "浏览器支持。",
    browserDesc: "测试需要 Pointer Lock API 支持，该接口已在以下主流现代浏览器中得到支持：",
    btn: "体验分析工具"
  },
  contact: {
    metaTitle: "联系我们 - 我的鼠标 DPI",
    metaDesc: "联系我的鼠标 DPI 网站作者以提交意见或建议。",
    title: "联系我们。",
    desc: "我们非常期待您的意见与反馈！如果您有任何使用问题、改进建议，或者发现了缺陷，欢迎通过下方表单联系我们。",
    nameLabel: "您的姓名",
    namePlaceholder: "张三",
    emailLabel: "邮箱地址",
    emailPlaceholder: "zhangsan@example.com",
    messageLabel: "留言内容",
    messagePlaceholder: "我们能为您提供什么帮助？",
    submitBtn: "发送留言",
    emailText: "邮箱：",
    successMessage: "留言发送成功！"
  },
  dpiAnalyzer: {
    metaTitle: "鼠标 DPI 分析器 — 精确在线测试您的鼠标灵敏度",
    metaDesc: "实时在线测试您的鼠标 DPI。利用 Pointer Lock API 捕获原始输入。实时计算并记录历史成绩。",
    title: "DPI 分析器。",
    subtitle: "点击测试区域，向指定方向移动设定的物理距离，即可在实时显示中看到 DPI 变化。",
    tipsTitle: "温馨提示",
    tipsSubtitle: "如何获得最精准的数值。",
    tip1Title: "关闭鼠标指针加速",
    tip1Desc: "在 Windows 中关闭“提高指针精确度”，或者关闭鼠标驱动软件中的“指针平滑/加速”功能，以消除干扰。",
    tip2Title: "在平整材质上测试",
    tip2Desc: "请在平整干净的鼠标垫或桌面上测试，反光材质或灰尘可能导致光学传感器丢帧。",
    tip3Title: "多次测试取均值",
    tip3Desc: "建议重复测试 3-5 次。历史列表中若多次数值非常接近，说明物理移动的操作十分精准稳定。",
    tip4Title: "预先校准显示器",
    tip4Desc: "如果您使用屏幕尺子作为移动参考，请务必预先填写显示器的实际对角线大小与当前分辨率。"
  },
  screenRuler: {
    metaTitle: "在线屏幕尺子 — 精确厘米与英寸测量 | 鼠标 DPI 分析器",
    metaDesc: "免费在线屏幕尺子。通过输入显示器尺寸或信用卡校准以呈现 1:1 物理刻度。无需随身携带钢尺。",
    title: "屏幕尺子。",
    subtitle: "高精度在线屏幕标尺。校准您的屏幕规格即可呈现与现实完全等大的物理刻度尺。",
    aboutTitle: "屏幕规格校准",
    aboutDesc: "输入显示器的对角线尺寸（例如 27 英寸）和当前系统分辨率（例如 2560x1440）。工具会据此计算出真实的 PPI，以适配刻度大小。"
  },
  howItWorks: {
    metaTitle: "鼠标 DPI 测量原理 — 鼠标 DPI 测试工具",
    metaDesc: "了解鼠标 DPI 的含义与测量机制。本篇深入介绍为什么使用 Pointer Lock API 测试网页能提供精准无误差的数据反馈。",
    title: "DPI 测试工作原理。",
    subtitle: "深入了解鼠标 DPI 含义、测算公式以及我们如何利用浏览器 API 达成精准测定。",
    q1Title: "什么是鼠标 DPI？",
    q1Desc: "DPI 即 Dots Per Inch（每英寸点数），它代表鼠标传感器每物理移动 1 英寸，会向计算机报告多少个运动单位（像素）。例如 800 DPI 的鼠标每物理滑动 1 英寸，光标就移动 800 像素。",
    exampleTitle: "示例说明",
    exampleDesc: "在 800 DPI 下，在桌面上水平移动 2 英寸，光标会在屏幕上平移 1600 像素；若提升至 1600 DPI，移动相同的 2 英寸物理距离，光标会跨越 3200 像素。",
    q2Title: "DPI 与 鼠标灵敏度的区别。",
    q2Desc: "DPI 是硬件传感器层面的读取精度，而游戏内灵敏度是系统和软件的倍率放大系数。它们共同作用：",
    tableAspect: "特性维度",
    tableDpi: "硬件 DPI",
    tableSens: "软件灵敏度",
    tableRowType: "属性分类",
    tableRowTypeDpi: "硬件层面精度（传感器）",
    tableRowTypeSens: "软件乘数（系统或游戏）",
    tableRowRes: "信息分辨率",
    tableRowResDpi: "采样点增多，捕获更多细节",
    tableRowResSens: "拉伸现有数据，容易缺失点位",
    tableRowPrec: "定位精准度",
    tableRowPrecDpi: "越高越能传达精细的操作",
    tableRowPrecSens: "越高越容易造成像素抖动和越步",
    tableRowQual: "数据质量",
    tableRowQualDpi: "未加工的硬件信号",
    tableRowQualSens: "多次运算后容易产生浮点损失",
    tableFooter: "在射击类游戏中，通常建议设置较高的鼠标物理 DPI（如 800-1600），并大幅降低游戏内的灵敏度倍率，以获得最柔顺的平移曲线。",
    q3Title: "我们是如何测量 DPI 的。",
    q3Desc: "我们的系统直接采集鼠标未加工过的物理脉冲，避免系统加速曲线对数据进行拉伸或挤压：",
    step1Title: "校准您的屏幕",
    step1Desc: "输入显示器物理规格，以便系统获知屏幕的 PPI，使页面内尺子的厘米和英寸刻度与实体皮尺等大。",
    step2Title: "划定测试距离",
    step2Desc: "决定测试中要移过的物理距离（建议 5 英寸），使用屏幕上的尺子刻度作为拖曳起止的定位点。",
    step3Title: "拖拽获取读数",
    step3Desc: "点击测试区域锁定光标，平稳移动鼠标您划定的物理距离，再次点击。算法会根据采样的像素移动除以目标物理距离得出硬件 DPI。",
    q4Title: "为什么必须采用 Pointer Lock API？",
    q4Desc: "常规的网页鼠标测试容易出现严重漂移，原因在于：",
    q4Bullet1: "屏幕边缘：光标在碰触显示器边缘时就会卡住，导致后续物理移动数据丢失",
    q4Bullet2: "系统级加速：操作系统会根据滑动速度自动加速光标，使计算手感扭曲",
    q4Bullet3: "像素舍入舍出：屏幕像素为整数点，光标移动中会丢失亚像素小数的定位精度",
    q4Bullet4: "窗口边界限制：浏览器视区范围过小限制了玩家进行大范围拉枪移动测试",
    q4Desc2: "Pointer Lock API 直接越过了这些机制。它能捕获纯硬件发出的原始相对移动数据。此时屏幕上没有光标，也就没有阻碍与修正。",
    q4Important: "重要设置",
    q4ImportantDesc: "测试前请确保 Windows 的控制面板鼠标选项里，“提高指针精确度”处于未勾选状态，这会从系统底层避免加速失真。",
    q5Title: "主流 DPI 设定参考。",
    tableColDpi: "DPI 设定",
    tableColUse: "推荐使用场景",
    tableColCommon: "典型用户群",
    q5Row1Use: "竞技类射击游戏 (FPS)",
    q5Row1Common: "CS2 / Valorant 职业选手",
    q5Row2Use: "MOBA / 常规射击与日常使用",
    q5Row2Common: "市场主流通用设定",
    q5Row3Use: "大屏游戏 / 高效日常办公",
    q5Row3Common: "2K 分辨率或多监视器用户",
    q5Row4Use: "图像设计 / 超高分跨屏导航",
    q5Row4Common: "4K 及以上高端显示器用户",
    ctaBtn: "立刻进行 DPI 测试",
    sidebarTitle: "快速跳转",
    sidebarLink1: "什么是 DPI？",
    sidebarLink2: "DPI 与灵敏度",
    sidebarLink3: "测量步骤",
    sidebarLink4: "Pointer Lock 优势",
    sidebarLink5: "推荐值参考",
    sidebarCtaTitle: "准备测试？",
    sidebarCtaDesc: "点击体验这套高精度的网页测量工具。",
    sidebarCtaBtn: "启动分析器"
  },
  privacy: {
    metaTitle: "隐私政策 - 我的鼠标 DPI",
    metaDesc: "我的鼠标 DPI 的隐私政策。",
    title: "隐私政策。",
    lastUpdated: "最近更新时间",
    sections: [
      {
        title: "1. 声明",
        content: "欢迎访问我的鼠标 DPI。我们极其尊重您的隐私安全，不以任何手段提取或截留您的隐私数据。"
      },
      {
        title: "2. 数据处理说明",
        content: "所有的核心计算和传感器采样完全发生于您的浏览器前端。我们既不会收集、也不会在服务器上记录您鼠标的任何移动轨迹。"
      },
      {
        title: "3. 存储与校准",
        content: "我们使用浏览器的本地存储（localStorage）功能来记忆您之前的屏幕校准参数，以便您下次访问时无需重复设置。"
      },
      {
        title: "4. 第三方服务说明",
        content: "本站没有嵌入任何具有侵入性的统计类插件、广告联盟代码或跟踪探针。"
      },
      {
        title: "5. 数据清除方式",
        content: "由于不经由服务器存储，所有本地的记忆选项都由您的浏览器独立控制。清空浏览器缓存与 Cookie 即可立刻重置。"
      },
      {
        title: "6. 未成年人保护",
        content: "本工具无任何诱导或成人内容，不含收集任何儿童个人敏感信息的逻辑。"
      },
      {
        title: "7. 政策变更",
        content: "我们可能会随浏览器升级或核心特性更新修订此文件，请关注此页面获取最新版本。"
      },
      {
        title: "8. 疑问咨询",
        content: "如有关于此隐私细节的疑问，欢迎联系 jasdeep97.dev@gmail.com。"
      }
    ]
  },
  terms: {
    metaTitle: "使用条款 - 我的鼠标 DPI",
    metaDesc: "我的鼠标 DPI 的使用条款。",
    title: "使用条款与服务协议。",
    lastUpdated: "最近更新时间",
    sections: [
      {
        title: "1. 接受协议条款",
        content: "当您访问或使用本站工具时，表示您已完全知晓并同意本协议书所列的各项要求。"
      },
      {
        title: "2. 许可使用范围",
        content: "用户仅被授予由于非商业个人目的在线加载并执行此测试工具的权利。"
      },
      {
        title: "3. 免责豁免条款",
        content: "此工具按“现状”交付，对于浏览器渲染差异、硬件老化导致的误差，我们不提供任何保证。"
      },
      {
        title: "4. 责任限制限制",
        content: "在法律允许的框架内，由于使用或无法使用本站服务所导致的一般、间接损失，我们不承担赔偿责任。"
      },
      {
        title: "5. 测算精确性免责",
        content: "虽然我们采用了科学的计算方式，但因测量人员手抖、所用刻度尺本身的精度偏差所带来的数据出入属正常范畴。"
      },
      {
        title: "6. 外链链接说明",
        content: "对于任何导向第三方或源自第三方的链接，我们不为其页面的实质性内容提供合规性背书。"
      },
      {
        title: "7. 条款更新机制",
        content: "我们保留根据服务拓展随时变更此用户条款的权利，且不另行通知。"
      },
      {
        title: "8. 适用管辖区域",
        content: "本协议的管辖与争议解释均应服从相关诉讼法所指的您所在地对应管辖法院。"
      }
    ]
  },
  dpiToolStrings: {
    settings: "参数设置",
    targetDistance: "目标物理距离",
    inch: "英寸",
    cm: "厘米",
    configuredDpi: "预设标称 DPI",
    configuredDpiPlaceholder: "例: 800",
    useVirtualRuler: "在页面中显示虚拟参考尺",
    screenCalibration: "屏幕校准参数",
    calibrateScreen: "校准我的屏幕",
    notCalibrated: "屏幕未校准",
    calibrated: "已成功校准",
    axis: "校准方向",
    horizontal: "水平移动 (X轴)",
    vertical: "垂直移动 (Y轴)",
    reset: "复位重置",
    howToTest: "测试方法",
    testStep1: "输入要移动的物理距离",
    testStep2: "点击测试区域以锁住指针",
    testStep3: "平移鼠标到设定的物理长度",
    testStep4: "再次点击即可完成数据计算",
    clickToStart: "点击测试区域开始测试",
    cursorLockedDesc: "点击后光标将隐藏，以便精确捕捉传感器脉冲",
    pixelsMoved: "已捕获像素移动量",
    moveMouseRight: "请向右平稳移动鼠标 →",
    moveMouseLeft: "请向左平稳移动鼠标 ←",
    moveMouseDown: "请向下平稳移动鼠标 ↓",
    moveMouseUp: "请向上平稳移动鼠标 ↑",
    pixelsLabel: "像素计数",
    distanceLabel: "滑行距离",
    dpiLabel: "计算出的 DPI",
    statusLabel: "当前状态",
    statusReady: "已就绪",
    statusMeasuring: "采样测量中",
    statusSuccess: "测试成功",
    statusReset: "已重置",
    results: "数据分析报告",
    measuredDpi: "测得的真实 DPI",
    configured: "预设 DPI",
    measured: "测量 DPI",
    vs: "对比",
    diffPerfect: "恭喜！测得的数据与您设定的 DPI 完美契合！",
    diffOff: "DPI 偏差了 {diff}% ({desc})",
    detailPixels: "累计脉冲计数",
    detailDistance: "目标物理行程",
    detailAxis: "测量移动轴向",
    testHistory: "历史测试记录",
    noTests: "历史空空如也。点击右侧大网格开始一次测试吧。",
    calibrateModalTitle: "校准虚拟尺子比例",
    calibrateModalDesc: "输入显示器的物理尺寸参数，让屏幕上的尺子厘米/英寸刻度与实体皮尺保持等大。",
    presets: "快捷规格选择",
    manualEntry: "手动指定参数",
    selectMonitor: "选择常见显示器规格",
    screenDiagonal: "屏幕对角线（英寸）",
    resolution: "屏幕分辨率",
    applyCalibration: "应用校准参数",
    fillAllFieldsError: "请确保所有必填项已正确填入。"
  },
  rulerToolStrings: {
    calibration: "规格校准",
    enterSpecs: "校准显示器参数以生成 1:1 精确尺子。",
    presets: "快捷规格选择",
    manual: "手动指定",
    selectMonitor: "选择常见规格",
    screenDiagonal: "屏幕对角线（英寸）",
    resolution: "当前分辨率",
    calibrateBtn: "执行校准",
    rulerUnit: "刻度单位",
    cm: "厘米 (cm)",
    inch: "英寸 (inch)",
    notCalibrated: "未校准",
    calibrated: "已校准",
    rulerHint: "完成校准后，屏幕刻度方可实现 1:1 实物比例",
    rulerLabelCm: "厘米标尺",
    rulerLabelInches: "英寸标尺",
    fillAllFieldsError: "请确保所有必填项已正确填入。"
  }
};

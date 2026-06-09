import type { TranslationSchema } from '../types';

export const en: TranslationSchema = {
  metadata: {
    title: "Mouse DPI Analyze — Accurate DPI Test Tool",
    description: "Measure your mouse DPI with precision. Free online Mouse DPI Analyze tool with screen calibration and real-time calculation.",
  },
  nav: {
    home: "Home",
    dpiAnalyzer: "DPI Analyzer",
    screenRuler: "Screen Ruler",
    howItWorks: "How It Works",
    testDpi: "Test DPI",
    logo: "My Mouse DPI",
  },
  footer: {
    tagline: "Precise mouse DPI measurement, right in your browser.",
    tools: "Tools",
    resources: "Resources",
    company: "Company",
    about: "About",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    copyright: "My Mouse DPI. Free & open-source.",
  },
  index: {
    heroTitle: "Measure your mouse DPI with precision.",
    heroSubtitle: "Accurate DPI measurement for raw mouse input. Calibrate your screen, test your mouse, and verify your settings.",
    testYourDpi: "Test Your DPI",
    screenRuler: "Screen Ruler",
    about: "About",
    contact: "Contact",
    terms: "Terms",
    privacy: "Privacy",
    stepsTitle: "Steps",
    stepsSubtitle: "Three steps to accurate DPI.",
    step1Title: "Calibrate",
    step1Desc: "Use our on-screen ruler to calibrate your display. Enter your monitor's diagonal size and resolution for accurate PPI.",
    step2Title: "Set distance",
    step2Desc: "Choose a target distance in inches or centimeters. Place your mouse at the starting mark.",
    step3Title: "Measure",
    step3Desc: "Click the test area, move your mouse the target distance, and release. Your DPI is calculated instantly.",
    articleTitle1: "What is Mouse DPI?",
    articleContent1: "Mouse DPI (Dots Per Inch) is a standard used to measure the optical sensitivity of a computer mouse. Essentially, it determines how far the cursor moves on your screen relative to the physical distance you move your mouse on your desk or mousepad. A higher mouse dpi means the cursor will move further with less physical movement, making it ideal for fast-paced gaming, multi-monitor setups, or large, high-resolution displays like 4K or 8K monitors. Conversely, a lower DPI offers much more granular precision, which is highly preferred by graphic designers editing photos or gamers who play tactical first-person shooters where pixel-perfect aiming is required. Understanding your current settings is absolutely crucial, which is why performing a reliable mouse dpi check can help you optimize your entire setup for peak performance and comfort.",
    articleTitle2: "Why Perform a DPI Check?",
    articleContent2: "Many users frequently wonder, \"what exactly is my mouse dpi?\" especially when they purchase a brand new gaming mouse, switch between different computers, or feel that their cursor movement is somehow off. Manufacturers often advertise incredibly high DPI capabilities on their packaging, but the actual, applied DPI might be entirely different due to conflicting software settings, driver issues, or underlying operating system configurations. To verify these manufacturer claims, you need a dependable way to accurately check mouse dpi. Using a dedicated mouse dpi checker allows you to see the real-world, functional sensitivity of your device. Whether you are a competitive esports gamer needing absolute precision to hit your shots or a professional aiming for ergonomic comfort to prevent wrist strain, an accurate mouse dpi test provides the exact, unfiltered figures you need to confidently adjust your in-game sensitivities or system-wide pointer settings.",
    articleTitle3: "How Does Our Mouse DPI Analyzer Work?",
    articleContent3: "Our comprehensive mouse dpi analyzer is specifically designed to give you the most accurate results possible without requiring any complex or intrusive software installations on your PC. The process to mouse dpi analyze your hardware is straightforward and highly intuitive. First, you calibrate your screen using our built-in tools, entering your monitor's diagonal size and resolution to determine your exact Pixels Per Inch (PPI). Then, you set a physical target distance to move your mouse—typically a few inches or centimeters. By clicking and moving your mouse across your physical desk space, our tool leverages modern browser APIs to capture the raw input data directly from the hardware. This methodology makes our mouse dpi tester exceptionally reliable because it completely bypasses artificial software acceleration and any interference from the operating system, giving you the true, raw DPI value.",
    articleTitle4: "The Ultimate Mouse DPI Tester",
    articleContent4: "Unlike rudimentary tools that merely guess your sensitivity based on cursor speed, our mouse dpi analyzer provides a detailed, mathematical breakdown of your mouse's actual performance. When you execute a mouse dpi test on our platform, you are not just getting a rough estimate; you are getting precise calculations based on physical movement versus on-screen pixel traversal. This scientific level of detail is exactly what makes our mouse dpi checker stand out from the rest. If you've ever asked yourself how to accurately and safely check mouse dpi, our web-based utility is the definitive answer. It elegantly bridges the gap between your hardware's physical capabilities and your software's applied settings.",
    articleTitle5: "Optimizing Your Setup After a Mouse DPI Check",
    articleContent5: "Once you have successfully completed your dpi check, what should you do with this newfound information? If you find that your DPI is unexpectedly high, you might struggle with precise clicking, often overshooting your targets. Lowering your DPI on the mouse itself and compensating by adjusting your in-game sensitivity can sometimes provide a much smoother, more controllable experience. On the other hand, if your DPI is too low, you might have to make large, sweeping arm movements just to navigate your desktop, which can cause severe fatigue over long sessions. Knowing your exact DPI through a rigorous mouse dpi test enables you to make informed, data-driven decisions. Competitive gamers, for instance, frequently use our mouse dpi tester to perfectly match their sensitivity across different game titles, ensuring that their carefully built muscle memory remains perfectly consistent no matter what they are playing.",
    faqTitle: "Frequently Asked Questions",
    faq: [
      {
        question: "How to check mouse dpi?",
        answer: "You can check your mouse DPI using your manufacturer's dedicated software (like Logitech G HUB, Razer Synapse, or Corsair iCUE) for exact configuration values. Alternatively, to find your true, real-world sensitivity, use our free online mouse DPI analyzer to physically measure your mouse movement against on-screen cursor travel."
      },
      {
        question: "What is mouse DPI?",
        answer: "DPI (Dots Per Inch) measures how many pixels your cursor moves on screen for every inch your mouse physically travels on your desk. A higher DPI means the cursor moves more with less physical movement."
      },
      {
        question: "How accurate is this DPI test?",
        answer: "Our tool uses the Pointer Lock API to capture raw mouse movement data directly from the hardware. This bypasses OS-level mouse acceleration and screen edge limitations. When combined with disabled mouse acceleration in your OS settings, the results are highly accurate — typically within 1-3% of the true hardware DPI."
      },
      {
        question: "Why does my measured DPI differ from my configured DPI?",
        answer: "Several factors can cause discrepancies: 1) Mouse acceleration is enabled in your OS, 2) Your mouse software is applying DPI interpolation, 3) The sensor is rounding to the nearest step, or 4) The measurement distance was slightly off. Try disabling acceleration and running multiple tests."
      },
      {
        question: "What is the Pointer Lock API?",
        answer: "The Pointer Lock API is a browser feature that locks the mouse cursor and provides raw movement deltas (movementX, movementY) instead of absolute cursor positions. This allows us to capture the exact number of pixels the mouse sensor reported, regardless of screen boundaries or OS cursor behavior."
      },
      {
        question: "Do I need to disable mouse acceleration?",
        answer: "For the most accurate results, yes. Mouse acceleration changes the cursor speed based on how fast you move the mouse, which distorts DPI measurements. On Windows: Settings → Mouse → Additional mouse options → uncheck 'Enhance pointer precision.' On macOS, use a tool like LinearMouse."
      },
      {
        question: "How does screen calibration work?",
        answer: "Our calibration tool determines your screen's actual PPI (Pixels Per Inch). You can either match a standard credit card (85.6mm) to the on-screen line, or enter your screen's diagonal size and resolution. This allows the on-screen ruler to display accurate real-world measurements."
      },
      {
        question: "What DPI should I use for gaming?",
        answer: "It depends on your game and play style. Most competitive FPS players use 400-800 DPI with low in-game sensitivity for precise aiming. MOBA and RTS players often use 800-1600 DPI. For general desktop use, 800-1600 DPI is comfortable on standard displays, while 4K monitors benefit from 1600-3200 DPI."
      },
      {
        question: "Can I test DPI on a laptop trackpad?",
        answer: "Technically yes, but the results won't be meaningful for DPI measurement since trackpads don't have a DPI setting in the traditional sense. This tool is designed for external mice with adjustable DPI sensors."
      },
      {
        question: "Why should I test my DPI?",
        answer: "Mouse DPI settings don't always match what manufacturers claim. Budget mice may use sensor interpolation (software-boosted DPI) that doesn't provide true hardware precision. Testing verifies your actual sensor output. Gamers in particular benefit from knowing their true DPI for calculating sensitivity values."
      },
      {
        question: "Is this tool free?",
        answer: "Yes, completely free. No downloads, no sign-ups, no ads. Just open the page and start testing."
      }
    ],
    ctaTitle: "Ready to test your DPI?",
    ctaSubtitle: "Free, accurate, and takes less than 30 seconds.",
    ctaBtn: "Start DPI Test"
  },
  about: {
    metaTitle: "About — My Mouse DPI",
    metaDesc: "Learn about My Mouse DPI, a free open-source tool for accurate mouse DPI measurement using the Pointer Lock API.",
    title: "About this tool.",
    desc1: "My Mouse DPI is a free, open-source web tool that accurately measures your mouse's DPI (Dots Per Inch) using modern browser APIs. No downloads, no sign-ups, no tracking.",
    whyTitle: "Why we built this.",
    whyDesc1: "Most online DPI testers track cursor position on screen, which is inherently inaccurate due to OS mouse acceleration, screen edge clipping, and sub-pixel rounding. We wanted something better.",
    whyDesc2: "Our tool uses the Pointer Lock API to capture raw mouse movement data directly from the hardware sensor. Combined with screen calibration for accurate distance reference, this approach delivers the most precise browser-based DPI measurement possible.",
    privacyTitle: "Privacy.",
    privacyDesc: "This tool runs entirely in your browser. No data is sent to any server. Your calibration settings are stored only in your browser's localStorage. We don't use cookies, analytics, or tracking scripts.",
    browserTitle: "Browser support.",
    browserDesc: "The DPI analyzer requires the Pointer Lock API, which is supported in all modern browsers:",
    btn: "Try the DPI Analyzer"
  },
  contact: {
    metaTitle: "Contact Us - My Mouse DPI",
    metaDesc: "Contact us at My Mouse DPI for any questions or feedback.",
    title: "Contact Us.",
    desc: "We'd love to hear from you! If you have any questions, feedback, or need assistance with our tools, please feel free to reach out to us using the form below.",
    nameLabel: "Your Name",
    namePlaceholder: "Jane Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "jane@example.com",
    messageLabel: "Message",
    messagePlaceholder: "How can we help you?",
    submitBtn: "Send Message",
    emailText: "Email:",
    successMessage: "Message sent successfully!"
  },
  dpiAnalyzer: {
    metaTitle: "DPI Analyzer — Test Your Mouse DPI Accurately | Mouse DPI Analyzer",
    metaDesc: "Test your mouse DPI instantly with our accurate DPI analyzer. Uses Pointer Lock API for raw mouse input. Real-time calculation with test history.",
    title: "DPI Analyzer.",
    subtitle: "Click the test area, move your mouse the target distance, and your DPI is calculated in real-time.",
    tipsTitle: "Tips",
    tipsSubtitle: "Getting accurate results.",
    tip1Title: "Disable mouse acceleration",
    tip1Desc: "Turn off 'Enhance pointer precision' in Windows settings or disable acceleration in your mouse software for the most accurate results.",
    tip2Title: "Use a flat surface",
    tip2Desc: "Place your mouse on a flat mousepad or desk surface. Uneven surfaces can cause tracking inconsistencies.",
    tip3Title: "Test multiple times",
    tip3Desc: "Run 3-5 tests and compare results using the history panel. Consistent results indicate accurate measurement.",
    tip4Title: "Calibrate your screen",
    tip4Desc: "If using the on-screen ruler, calibrate it with your monitor's screen size and resolution for the most accurate distance reference."
  },
  screenRuler: {
    metaTitle: "On-Screen Ruler — Measure in CM and Inches | Mouse DPI Analyzer",
    metaDesc: "Free on-screen ruler with screen calibration. Measure accurately in centimeters and inches using monitor specification calibration. No physical ruler needed.",
    title: "Screen Ruler.",
    subtitle: "An accurate on-screen ruler for your display. Calibrate by entering your screen specifications for precise real-world measurements.",
    aboutTitle: "Screen calibration",
    aboutDesc: "Enter your monitor's diagonal size (e.g., 27\") and its native resolution (e.g., 2560×1440). From these two values, we calculate your exact PPI — pixels per physical inch — so the ruler matches the real world."
  },
  howItWorks: {
    metaTitle: "How Mouse DPI Measurement Works | Mouse DPI Analyzer",
    metaDesc: "Learn how mouse DPI is measured, what DPI means, why it matters for gaming and productivity, and how our Pointer Lock API approach ensures accurate results.",
    title: "How DPI measurement works.",
    subtitle: "Understanding mouse DPI, how we measure it, and why our approach delivers accurate results.",
    q1Title: "What is mouse DPI?",
    q1Desc: "DPI stands for Dots Per Inch. It measures how many pixels your cursor moves on screen for every inch your mouse physically travels on your desk. A mouse set to 800 DPI moves the cursor 800 pixels for every inch of physical movement.",
    exampleTitle: "Example",
    exampleDesc: "At 800 DPI, moving your mouse 2 inches to the right moves the cursor 1,600 pixels to the right. At 1600 DPI, the same 2-inch movement moves the cursor 3,200 pixels.",
    q2Title: "DPI vs sensitivity.",
    q2Desc: "DPI is a hardware setting — it's determined by your mouse's sensor. Sensitivity is a software multiplier applied by your operating system or game. They work together:",
    tableAspect: "Aspect",
    tableDpi: "DPI",
    tableSens: "Sensitivity",
    tableRowType: "Type",
    tableRowTypeDpi: "Hardware (sensor)",
    tableRowTypeSens: "Software (OS/game)",
    tableRowRes: "Resolution",
    tableRowResDpi: "More data points",
    tableRowResSens: "Multiplies existing data",
    tableRowPrec: "Precision",
    tableRowPrecDpi: "Higher = more precise",
    tableRowPrecSens: "Higher = less precise",
    tableRowQual: "Quality",
    tableRowQualDpi: "Native sensor data",
    tableRowQualSens: "Can cause pixel skipping",
    tableFooter: "For the best accuracy, use a higher DPI with lower in-game sensitivity rather than a low DPI with high sensitivity. The sensor captures more movement data at higher DPI.",
    q3Title: "How we measure DPI.",
    q3Desc: "Our tool captures raw mouse movement data directly from your hardware using modern browser technology — bypassing any OS-level processing that could distort the result. Here's the process from your perspective:",
    step1Title: "Calibrate your screen",
    step1Desc: "Enter your screen's diagonal size so the tool knows how many physical inches correspond to your screen's pixels. This is what makes the measurement real-world accurate.",
    step2Title: "Set a target distance",
    step2Desc: "Choose how far you'll physically move your mouse — 5 inches is a good starting point. Use the on-screen ruler as your reference guide.",
    step3Title: "Move and measure",
    step3Desc: "Click the test area to begin, move your mouse the target distance, then click again to finish. The tool processes the raw movement data and calculates your DPI instantly.",
    q4Title: "Why Pointer Lock API?",
    q4Desc: "Most online DPI testers track cursor position on screen, which has several problems:",
    q4Bullet1: "Screen edge clipping: The cursor stops at screen boundaries, losing movement data",
    q4Bullet2: "OS acceleration: Most operating systems apply mouse acceleration by default, distorting results",
    q4Bullet3: "Sub-pixel rounding: Cursor positions are integers, losing fractional pixel precision",
    q4Bullet4: "Window constraints: The test area's size limits how far you can move",
    q4Desc2: "The Pointer Lock API bypasses all of these. It reports raw hardware movement deltas — the actual number of units the mouse sensor detected. The cursor is locked and invisible; only the raw data matters.",
    q4Important: "Important",
    q4ImportantDesc: "For the most accurate results, disable mouse acceleration in your OS settings. On Windows: Settings → Mouse → Additional mouse options → uncheck 'Enhance pointer precision.' On macOS, use a tool like LinearMouse or the terminal to disable acceleration.",
    q5Title: "Common DPI settings.",
    tableColDpi: "DPI",
    tableColUse: "Use Case",
    tableColCommon: "Common For",
    q5Row1Use: "Competitive FPS gaming",
    q5Row1Common: "CS2, Valorant pros",
    q5Row2Use: "FPS gaming / general use",
    q5Row2Common: "Most popular DPI",
    q5Row3Use: "Balanced gaming / work",
    q5Row3Common: "High-res displays",
    q5Row4Use: "Design / multi-monitor",
    q5Row4Common: "4K+ displays",
    ctaBtn: "Test Your DPI Now",
    sidebarTitle: "On this page",
    sidebarLink1: "What is mouse DPI?",
    sidebarLink2: "DPI vs sensitivity",
    sidebarLink3: "How we measure DPI",
    sidebarLink4: "Why Pointer Lock API?",
    sidebarLink5: "Common DPI settings",
    sidebarCtaTitle: "Ready to test?",
    sidebarCtaDesc: "Try our DPI analyzer tool. Free, instant, and accurate.",
    sidebarCtaBtn: "Open DPI Analyzer"
  },
  privacy: {
    metaTitle: "Privacy Policy - My Mouse DPI",
    metaDesc: "Privacy Policy for My Mouse DPI.",
    title: "Privacy Policy.",
    lastUpdated: "Last updated",
    sections: [
      {
        title: "1. Introduction",
        content: "Welcome to My Mouse DPI. We respect your privacy and are committed to protecting any personal data you may share with us."
      },
      {
        title: "2. Information We Collect",
        content: "Our tools, including the DPI analyzer and screen ruler, operate entirely client-side within your browser. We do not collect, store, or transmit any raw mouse movement data or personal information to our servers during your use of these core tools."
      },
      {
        title: "3. Cookies and Tracking",
        content: "We may use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
      },
      {
        title: "4. Third-Party Services",
        content: "We may employ third-party companies and individuals to facilitate our service, to provide the service on our behalf, or to assist us in analyzing how our service is used. These third parties have access to your personal data only to perform these tasks and are obligated not to disclose or use it for any other purpose."
      },
      {
        title: "5. Data Retention",
        content: "Since our services are primarily client-side, we do not actively retain user data. However, any communication data sent to our contact email is retained only for as long as is necessary for the purposes set out in this Privacy Policy."
      },
      {
        title: "6. Children's Privacy",
        content: "Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13."
      },
      {
        title: "7. Changes to this Policy",
        content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes."
      },
      {
        title: "8. Contact",
        content: "If you have any questions about this Privacy Policy, please contact us at jasdeep97.dev@gmail.com."
      }
    ]
  },
  terms: {
    metaTitle: "Terms & Conditions - My Mouse DPI",
    metaDesc: "Terms & Conditions for My Mouse DPI.",
    title: "Terms & Conditions.",
    lastUpdated: "Last updated",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: "By accessing and using My Mouse DPI, you accept and agree to be bound by the terms and provision of this agreement."
      },
      {
        title: "2. Use License",
        content: "Permission is granted to temporarily use the tools on My Mouse DPI's website for personal, non-commercial transitory viewing only."
      },
      {
        title: "3. Disclaimer",
        content: "The materials on My Mouse DPI's website are provided on an 'as is' basis. My Mouse DPI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
      },
      {
        title: "4. Limitations",
        content: "In no event shall My Mouse DPI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on My Mouse DPI's website, even if My Mouse DPI or a My Mouse DPI authorized representative has been notified orally or in writing of the possibility of such damage."
      },
      {
        title: "5. Accuracy of Materials",
        content: "The materials appearing on My Mouse DPI's website could include technical, typographical, or photographic errors. My Mouse DPI does not warrant that any of the materials on its website are accurate, complete or current. My Mouse DPI may make changes to the materials contained on its website at any time without notice. However My Mouse DPI does not make any commitment to update the materials."
      },
      {
        title: "6. Links",
        content: "My Mouse DPI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by My Mouse DPI of the site. Use of any such linked website is at the user's own risk."
      },
      {
        title: "7. Modifications",
        content: "My Mouse DPI may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service."
      },
      {
        title: "8. Governing Law",
        content: "These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
      }
    ]
  },
  dpiToolStrings: {
    settings: "Settings",
    targetDistance: "Target Distance",
    inch: "inch",
    cm: "cm",
    configuredDpi: "Configured DPI",
    configuredDpiPlaceholder: "e.g. 800",
    useVirtualRuler: "Use virtual ruler for measurement",
    screenCalibration: "Screen Calibration",
    calibrateScreen: "Calibrate Screen",
    notCalibrated: "Not calibrated",
    calibrated: "Calibrated",
    axis: "Axis",
    horizontal: "Horizontal",
    vertical: "Vertical",
    reset: "Reset",
    howToTest: "How to test",
    testStep1: "Set your target distance",
    testStep2: "Click the test area to lock cursor",
    testStep3: "Move your mouse the target distance",
    testStep4: "Click again to finish measuring",
    clickToStart: "Click to start measuring",
    cursorLockedDesc: "Cursor will be locked for accurate tracking",
    pixelsMoved: "Pixels moved",
    moveMouseRight: "Move mouse right →",
    moveMouseLeft: "Move mouse left ←",
    moveMouseDown: "Move mouse down ↓",
    moveMouseUp: "Move mouse up ↑",
    pixelsLabel: "PIXELS",
    distanceLabel: "DISTANCE",
    dpiLabel: "DPI",
    statusLabel: "STATUS",
    statusReady: "Ready",
    statusMeasuring: "Measuring",
    statusSuccess: "Success",
    statusReset: "Reset",
    results: "Results",
    measuredDpi: "Measured DPI",
    configured: "Configured",
    measured: "Measured",
    vs: "vs",
    diffPerfect: "DPI matches perfectly!",
    diffOff: "DPI is off by {diff}% ({desc})",
    detailPixels: "Pixels moved",
    detailDistance: "Target distance",
    detailAxis: "Axis",
    testHistory: "Test History",
    noTests: "No tests yet. Click the test area to begin.",
    calibrateModalTitle: "Calibrate Virtual Ruler",
    calibrateModalDesc: "We need your monitor's size and resolution to accurately display a physical ruler on your screen.",
    presets: "Presets",
    manualEntry: "Manual Entry",
    selectMonitor: "Select Monitor",
    screenDiagonal: "Screen diagonal (inches)",
    resolution: "Resolution",
    applyCalibration: "Apply Calibration",
    fillAllFieldsError: "Please ensure all fields are correctly filled."
  },
  rulerToolStrings: {
    calibration: "Calibration",
    enterSpecs: "Enter your screen specifications for accurate measurements.",
    presets: "Presets",
    manual: "Manual",
    selectMonitor: "Select Monitor",
    screenDiagonal: "Screen diagonal (inches)",
    resolution: "Resolution",
    calibrateBtn: "Calibrate",
    rulerUnit: "Ruler unit",
    cm: "cm",
    inch: "inch",
    notCalibrated: "Not calibrated",
    calibrated: "Calibrated",
    rulerHint: "Use calibration for accurate real-world measurements",
    rulerLabelCm: "Centimeters",
    rulerLabelInches: "Inches",
    fillAllFieldsError: "Please ensure all fields are correctly filled."
  }
};

# 🖱️ Modern Mouse DPI Analyzer & Screen Ruler

[![Astro](https://img.shields.io/badge/Astro-v6.4.4-BC52EE?style=flat-square&logo=astro)](https://astro.build/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.1.0-38BDF8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Node Version](https://img.shields.io/badge/Node.js-%3E%3D22.12.0-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

A premium, highly accurate, and internationalized web application designed to measure mouse DPI (Dots Per Inch) and calibrate an on-screen ruler. Built with **Astro v6**, **Tailwind CSS v4**, and the browser's **Pointer Lock API** to ensure unaccelerated, raw mouse tracking.

The application features a minimalist, stark developer-centric aesthetic inspired by Vercel’s design language (dark mode support, mesh gradients, subtle elevation, and hairline dividers) and is localized into 14 languages.

---

## ✨ Key Features

- **Pointer Lock DPI Engine**: Bypasses operating system mouse acceleration scaling to read raw hardware cursor movements (`movementX` / `movementY`).
- **Dynamic Screen Calibration**:
  - **Presets**: Ready-to-go options for common laptop screens and desktop monitors (MacBook Pro, 1080p, 1440p, 4K, Ultrawides).
  - **Manual Entry**: Calculates custom CSS PPI (Pixels Per Inch) using the monitor's diagonal size and pixel resolution.
- **On-Screen Virtual Ruler**: A canvas-based interactive ruler rendering real-world inches/centimeters perfectly to scale based on screen PPI.
- **14-Language Localization**: Full dynamic i18n routing support for English, Deutsch, Français, Español, Italiano, Nederlands, Polski, Português, Русский, 简体中文, Svenska, Dansk, Norsk, and Suomi.
- **Premium Aesthetics**: Stark near-white and dark canvas themes, atmospheric mesh gradients, Geist-inspired typography, and responsive multi-column layouts.

---

## 🛠️ Technology Stack

- **Framework**: [Astro v6.4.4](https://astro.build/) (Static Site Generation with localized routing)
- **Styling**: [Tailwind CSS v4.1.0](https://tailwindcss.com/) with `@tailwindcss/vite` configuration
- **Graphics**: HTML5 Canvas API (interactive screen ruler ticks & markers)
- **APIs**: Web Pointer Lock API (raw coordinate tracking)
- **State & Local Storage**: Native JS event binding + `localStorage` for persisting screen PPI calibration

---

## 📁 Project Structure

```text
mouse_dpi/
├── public/                  # Static assets (favicons, manifests, logos)
├── scripts/                 # Utility scripts (e.g., translation cleanup)
├── src/
│   ├── assets/              # Logos and SVG assets
│   ├── components/          # Reusable UI Components
│   │   ├── pages/           # Page template layouts delegated by router
│   │   ├── DpiTool.astro    # Core DPI measurement engine
│   │   ├── ScreenRuler.astro# Canvas ruler with calibration tools
│   │   ├── Navbar.astro     # Sticky navigation with theme toggle
│   │   └── Footer.astro     # Localized bottom navigation grid
│   ├── i18n/                # Internationalization settings
│   │   ├── translations/    # Localization JSON/dictionary files (14 locales)
│   │   ├── ui.ts            # Supported languages definition
│   │   └── utils.ts         # Translation helpers & hook providers
│   ├── layouts/
│   │   └── Layout.astro     # Primary HTML document wrapper & metadata
│   ├── pages/               # Routing
│   │   ├── [locale]/        # Localized sub-routes (e.g., /de/about)
│   │   └── *.astro          # Root routes defaulting to English
│   └── styles/
│       └── global.css       # Tailwind v4 imports, themes, & custom utilities
├── package.json             # Dependencies and build scripts
└── tsconfig.json            # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `>=22.12.0`
- **Package Manager**: npm (included with Node.js)

### Installation

1. Clone the repository and navigate to the project directory:
   ```sh
   git clone https://github.com/your-username/mouse_dpi.git
   cd mouse_dpi
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the local development server:
   ```sh
   npm run dev
   ```
   Open `http://localhost:4321` in your browser to preview the app.

4. Build the production site:
   ```sh
   npm run build
   ```
   The compiled static files will be located in the `dist/` directory.

5. Preview the production build:
   ```sh
   npm run preview
   ```

---

## 📐 How It Works (Technical Details)

### 1. Pointer Lock DPI Calculations

Standard browser mouse event coordinates (`clientX`, `clientY`) are processed by the operating system's windowing server, applying **acceleration curves** and display scaling. To measure actual hardware DPI, the DPI Tool utilizes the **Pointer Lock API**:

- Requesting Pointer Lock locks the cursor to the browser window and hides it.
- Subsequent `mousemove` events expose raw delta values (`movementX` and `movementY`).
- The user moves the mouse a physically measured distance (e.g., 5 inches).
- DPI is computed using the formula:
  $$\text{Measured DPI} = \frac{\text{Accumulated Pixels (Counts)}}{\text{Physical Target Distance (Inches)}}$$

### 2. Screen PPI & Calibration

To display a pixel-perfect virtual ruler, we must convert CSS pixels to physical measurements. This is done by computing **PPI (Pixels Per Inch)**:

- The Pythagorean theorem is used to find the screen diagonal resolution in pixels:
  $$d_{\text{pixels}} = \sqrt{w_{\text{resolution}}^2 + h_{\text{resolution}}^2}$$
- Physical PPI is calculated using the physical diagonal size:
  $$\text{PPI}_{\text{physical}} = \frac{d_{\text{pixels}}}{d_{\text{diagonal}}}$$
- Since browsers scale canvas rendering based on the device pixel ratio ($DPR$), we adjust to CSS PPI:
  $$\text{PPI}_{\text{CSS}} = \frac{\text{PPI}_{\text{physical}}}{DPR}$$
- This PPI is dispatched as a custom window event (`ppi-updated`) so that the DPI tool can automatically align virtual and physical targets.

---

## 🎨 Design System

Styled entirely with **Tailwind CSS v4** utilizing modern design variables located in [src/styles/global.css](src/styles/global.css).
- **Colors**: Contrast-heavy slate colors (`--color-ink` / `--color-canvas-soft`), accent highlight colors (Cyan, Violet, Highlight Pink), and custom dynamic CSS variables that adjust automatically to dark mode (`[data-theme="dark"]`).
- **Typography**: Paired sans-serif headline font (`Geist`/`Inter`) with a monospace code label typeface (`Geist Mono`). Font weight limit of `600` for displays.
- **Card Styling**: Thin hairline borders with Level 2/3 stacked shadow combinations, mimicking natural lighting.

---

## 🌐 Supported Languages

Translations are defined as key-value structures mapped dynamically via localized paths. Supported locale paths include:

| Language | Code | Language | Code | Language | Code |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **English** | `en` | **Polski** | `pl` | **Svenska** | `sv` |
| **Deutsch** | `de` | **Português** | `pt` | **Dansk** | `da` |
| **Français** | `fr` | **Русский** | `ru` | **Norsk** | `no` |
| **Español** | `es` | **简体中文** | `zh` | **Suomi** | `fi` |
| **Italiano** | `it` | **Nederlands**| `nl` | | |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests:
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

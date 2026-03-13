# PentaTech Consultancy Limited — Landing Page

A professional React-based landing page for PentaTech Consultancy Limited.

## 🗂 Project Structure

```
pentatech/
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Hero.jsx            # Hero section with 3D cube
│   │   ├── StatsStrip.jsx      # Animated statistics
│   │   ├── Services.jsx        # IT Services grid
│   │   ├── WhyUs.jsx           # Why PentaTech section
│   │   ├── Training.jsx        # Training & certifications
│   │   ├── CallToAction.jsx    # CTA section
│   │   ├── Footer.jsx          # Footer
│   │   └── CircuitCanvas.jsx   # Animated background canvas
│   ├── hooks/
│   │   ├── useScrollReveal.js  # Intersection Observer hook
│   │   └── useCountUp.js       # Count-up animation hook
│   ├── styles/
│   │   ├── global.css          # CSS variables, reset, base
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── stats.css
│   │   ├── services.css
│   │   ├── whyus.css
│   │   ├── training.css
│   │   ├── cta.css
│   │   ├── footer.css
│   │   └── animations.css      # Reusable keyframes & reveals
│   ├── data/
│   │   └── content.js          # All text content & data
│   ├── utils/
│   │   └── canvas.js           # Circuit canvas drawing logic
│   ├── App.jsx                 # Root component
│   └── index.js                # React entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

```bash
npm install
npm start
```

## 🛠 Tech Stack
- **React 18** — Component framework
- **Bootstrap 5** — Layout grid & utilities
- **Custom CSS** — Design system, animations, 3D effects
- **Canvas API** — Animated circuit board background

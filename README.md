# PentaTech Consultancy Limited — Corporate Website

A professional multi-page React-based website for PentaTech Consultancy Limited, featuring comprehensive IT services, training programs, blog, and company information.

## 🗂 Project Structure

```
pentatech/
├── public/
│ └── index.html # HTML entry point
├── src/
│ ├── components/
│ │ ├── Navbar.jsx # Navigation bar with router
│ │ ├── Hero.jsx # Hero section with 3D cube
│ │ ├── StatsStrip.jsx # Animated statistics
│ │ ├── Services.jsx # IT Services grid
│ │ ├── WhyUs.jsx # Why PentaTech section
│ │ ├── Training.jsx # Training & certifications
│ │ ├── CallToAction.jsx # CTA section
│ │ ├── Footer.jsx # Footer with router links
│ │ ├── CircuitCanvas.jsx # Animated background canvas
│ │ └── ScrollToTop.jsx # Scroll reset on route change
│ ├── pages/ # Multi-page routes
│ │ ├── HomePage.jsx # Landing page
│ │ ├── AboutUsPage.jsx # Company information
│ │ ├── ServicesPage.jsx # Services overview
│ │ ├── ServiceDetailPage.jsx # Individual service pages
│ │ ├── TrainingPage.jsx # Training programs overview
│ │ ├── TrainingCategoryPage.jsx # Training categories
│ │ ├── CourseDetailPage.jsx # Individual course pages
│ │ ├── WhyUsPage.jsx # Why Us detailed page
│ │ ├── PartnersPage.jsx # Technology partners
│ │ ├── ContactPage.jsx # Contact form & info
│ │ └── BlogPage.jsx # Blog listing with filters
│ ├── hooks/
│ │ ├── useScrollReveal.js # Intersection Observer hook
│ │ └── useCountUp.js # Count-up animation hook
│ ├── styles/
│ │ ├── global.css # CSS variables, reset, base
│ │ ├── animations.css # Reusable keyframes & reveals
│ │ ├── navbar.css
│ │ ├── hero.css
│ │ ├── stats.css
│ │ ├── services.css
│ │ ├── whyus.css
│ │ ├── training.css
│ │ ├── cta.css
│ │ ├── footer.css
│ │ ├── pages.css # Shared page styles
│ │ ├── about-us.css
│ │ ├── blog.css
│ │ ├── contact.css
│ │ ├── course-detail.css
│ │ ├── partners.css
│ │ ├── service-detail.css
│ │ └── training-category.css
│ ├── data/ # Content data files
│ │ ├── content.js # Main site content
│ │ ├── aboutus-content.js # About page content
│ │ ├── blog-content.js # Blog posts & categories
│ │ ├── partners-content.js # Partners information
│ │ └── services-content.js # Detailed service info
│ ├── utils/
│ │ └── canvas.js # Circuit canvas drawing logic
│ ├── App.jsx # Root with routing
│ └── index.js # React entry point
├── package.json
└── README.md

```

## 🚀 Getting Started

```bash
npm install
npm start
```

## 📦 Key Features
### Multi-Page Architecture
- 11 distinct pages with React Router
- Dynamic routes for services and courses
- SEO-friendly URLs

## Core Sections

- **Home** — Landing page with 3D cube animation
- **About Us** — Company history, mission, vision, leadership
- **Services** — 8 IT service categories with detailed pages
- **Training** — Certification programs with course details
- **Why Us** — Values and team information
- **Partners** — Technology and training partners showcase
- **Blog** — Articles with category filtering
- **Contact** — Form with validation and contact information

## Interactive Features

- Animated circuit board background (Canvas API)
- Scroll reveal animations
- Count-up statistics
- 3D rotating cube
- Mobile-responsive navigation
- Form validation
- Category filtering (Blog, Training)

## 🛠 Tech Stack

- **React 18** — Component framework with Router
- **React Router DOM 7** — Multi-page routing
- **Bootstrap 5** — Layout grid & utilities
- **Bootstrap Icons** — Icon library
- **Custom CSS** — Design system, animations, 3D effects
- **Canvas API** — Animated circuit board background
- **Intersection Observer** — Scroll animations

## Pages & Routes

| Page | Route | Description |
|-----|-----|-----|
| Home | `/` | Landing page with hero and sections |
| About Us | `/about` | Company information, leadership |
| Services | `/services` | IT services overview |
| Service Detail | `/services/:slug` | Individual service details |
| Training | `/training` | Training programs overview |
| Training Category | `/training/category/:category` | Category-based training |
| Course Detail | `/training/course/:slug` | Individual course details |
| Why Us | `/why-us` | Values and team |
| Partners | `/partners` | Technology partners |
| Contact | `/contact` | Contact form and info |
| Blog | `/blog` | Articles with filters |

## Development
- Run development server
```npm start```
- Build for production
```npm run build```
- Run tests
```npm test```


The project has evolved from a single landing page to a full-featured corporate website with comprehensive content management, multi-page navigation, and interactive features.

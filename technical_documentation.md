# Promptmed Clinic Hub - Technical Documentation

**Version:** 1.0  
**Last Updated:** 2024  
**Audience:** Developers, Tech Leads, and Engineering Teams

---

## Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Component Architecture](#component-architecture)
5. [Build & Development](#build--development)
6. [Dependency Management](#dependency-management)
7. [Styling & Design System](#styling--design-system)
8. [Performance Considerations](#performance-considerations)
9. [Deployment](#deployment)

---

## Introduction

This document provides technical details about the Promptmed Clinic Hub frontend application. It covers the technology stack, architecture, build processes, and development guidelines.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.1.1 | UI library for building component-based interfaces |
| Vite | Latest | Build tool and development server |
| TypeScript | Latest | Type-safe JavaScript development |
| Tailwind CSS | v4 | Utility-first CSS framework |
| Shadcn/UI | Latest | Accessible UI component library |
| Framer Motion | Latest | Animation library for React |
| Lucide React | Latest | Icon library |

---

## Project Structure

```
.
├── package.json              # Project dependencies and scripts
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.js        # Tailwind CSS configuration (if applicable)
├── postcss.config.js         # PostCSS configuration
├── index.html                # Entry HTML file
├── plan.md                   # Project planning documentation
├── public/                   # Static assets
│   ├── favicon.ico
│   └── gebeya.webp
└── src/
    ├── main.tsx              # Application entry point
    ├── App.tsx               # Main application component
    ├── index.css             # Global styles and Tailwind imports
    ├── vite-env.d.ts         # Vite environment type declarations
    ├── components/
    │   ├── Navbar.tsx        # Navigation bar component
    │   ├── Hero.tsx          # Hero/landing section
    │   ├── Services.tsx      # Services overview
    │   ├── Team.tsx          # Team member profiles
    │   ├── ProblemAnalysis.tsx  # Problem analysis section
    │   ├── DesignExploration.tsx  # Design prototypes
    │   ├── FinalDesign.tsx   # Final design and storyboard
    │   ├── Evaluation.tsx    # Evaluation and testing results
    │   ├── Footer.tsx        # Footer component
    │   └── ui/               # Shadcn/UI components
    ├── hooks/
    │   └── use-mobile.ts     # Mobile detection hook
    └── lib/
        └── utils.ts          # Utility functions
```

---

## Component Architecture

### Main Application (`App.tsx`)

The main application component orchestrates all sections:

```tsx
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
        <ProblemAnalysis />
        <DesignExploration />
        <FinalDesign />
        <Evaluation />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
```

### Key Components

| Component | Description | Key Features |
|-----------|-------------|--------------|
| `Navbar` | Navigation bar | Responsive, smooth scrolling to sections |
| `Hero` | Landing section | Project overview, call-to-action |
| `Services` | Services overview | Feature highlights |
| `Team` | Team profiles | Selectable individual views with email links |
| `ProblemAnalysis` | Problem analysis | Accordion-based content, paper mockups gallery |
| `DesignExploration` | Design prototypes | Tab-based prototype viewer, fullscreen lightbox |
| `FinalDesign` | Final design | Workflow storyboard, evaluation plan |
| `Evaluation` | Evaluation results | Usability scores, suggested changes |
| `Footer` | Footer | Links, copyright |

### State Management

- **Local State:** Components use `useState` for local UI state (e.g., active tabs, selected team members).
- **Animation State:** `framer-motion` handles entrance animations and transitions.
- **No Global State:** The application is currently a single-page showcase without complex state management.

---

## Build & Development

### Development Server

```bash
npm run dev
# or
bun run dev
```

Starts the Vite development server on `http://localhost:3000`.

### Build for Production

```bash
npm run build
# or
bun run build
```

Compiles TypeScript and bundles the application for production.

### Preview Production Build

```bash
npm run preview
# or
bun run preview
```

Serves the production build locally for testing.

### Type Checking

```bash
npm run typecheck
```

Runs TypeScript type checking without emitting files.

### Linting

```bash
npm run lint
```

Runs ESLint to check for code quality issues.

---

## Dependency Management

### Adding Dependencies

```bash
npm install <package-name>
# or
bun add <package-name>
```

### Updating Dependencies

```bash
npm update
# or
bun update
```

### Key Dependencies

| Package | Purpose |
|---------|---------|
| `react` | Core UI library |
| `react-dom` | React DOM rendering |
| `framer-motion` | Animations |
| `lucide-react` | Icons |
| `@radix-ui/*` | Accessible UI primitives (via Shadcn) |
| `tailwindcss` | Styling framework |
| `sonner` | Toast notifications |

---

## Styling & Design System

### Tailwind CSS Configuration

The project uses Tailwind CSS v4 with CSS-based configuration:

```css
@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... additional CSS variables */
}
```

### Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `oklch(1 0 0)` | Page background |
| `--foreground` | `oklch(0.145 0 0)` | Text color |
| `--primary` | `oklch(0.205 0 0)` | Primary actions |
| `--radius` | `0.625rem` | Border radius base |

### Dark Mode

Dark mode is supported via the `.dark` class on parent elements. CSS variables are redefined for dark theme.

---

## Performance Considerations

### Low-Bandwidth Optimization

- Images are served in WebP format for smaller file sizes.
- Lazy loading is implemented for below-the-fold content.
- Offline-first capabilities are planned for future releases.

### Animation Performance

- `framer-motion` animations use `will-change` and GPU-accelerated properties.
- Animations are disabled for users who prefer reduced motion (via `@media (prefers-reduced-motion)`).

### Bundle Size

- Vite's code splitting ensures only necessary code is loaded.
- Shadcn/UI components are tree-shaken to include only used components.

---

## Deployment

### Build Output

The production build outputs to the `dist/` directory:

```
dist/
├── assets/
│   ├── index-*.css
│   └── index-*.js
├── favicon.ico
├── gebeya.webp
└── index.html
```

### Deployment Targets

- **Static Hosting:** Deploy the `dist/` folder to any static hosting service (Vercel, Netlify, GitHub Pages).
- **Custom Server:** Serve the `dist/` folder with any web server (Nginx, Apache).

### Environment Variables

Configure environment variables in a `.env` file:

```
VITE_API_URL=https://api.promptmed.example.com
```

Access in code via `import.meta.env.VITE_API_URL`.

---

*For questions about the technical architecture, contact the Technical Lead: Dylan Chirchir (dylanchirchir@gmail.com)*
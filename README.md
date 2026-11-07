# Asian Foundries — Future Ready Website

A standalone, responsive corporate website concept for Asian Foundries Private Limited.

## Design direction

**Asian Foundries — Engineered in Castings. Designed for Tomorrow.**

The visual system uses a deep industrial navy palette, technical grid language, restrained copper accents, editorial typography, motion-led graphic elements and an interactive Three.js casting study. The brochure is treated as a factual reference, not as a website layout to reproduce.

## Included

- Eight complete routes: Overview, Company, Products, Applications, Manufacturing, Quality, Infrastructure and Contact.
- Responsive desktop, tablet and mobile navigation and layouts.
- Dedicated page content and visual treatment for every route.
- Product-family catalogue based on the six categories shown in the company brochure.
- Interactive 3D conceptual casting study with orbit, zoom, auto-rotation and exploded presentation.
- Company facility imagery and product-family imagery included locally under `public/images`.
- Contact enquiry form that prepares an email addressed to `info@asianfoundries.com`.
- Vercel SPA rewrite configuration, metadata, favicon and reduced-motion support.

## Run locally

Requirements: Node.js 20.19+ (or 22.12+) and npm.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Vercel detects Vite automatically. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`. Root directory: repository root.

## Important factual and content notes

- Company history, location, product families, ISO 9001:2015 reference, annual capacity, manufacturing area and facility figures are drawn from the seven-page Asian Foundries brochure supplied for this project.
- Capacity and process figures are brochure-stated values, not a guarantee of available capacity for any particular order.
- The brochure identifies ISO 9001:2015 certification. Certificate scope and current validity should be confirmed against the latest certificate document before publication or customer reliance.
- The 3D viewer is an illustrative conceptual casting geometry. It is not represented as a verified Asian Foundries production part, CAD model or engineering drawing.
- Product images are catalogue-family references. They do not establish dimensions, tolerances, material grades or performance specifications for individual parts.
- The contact form uses the visitor's email application (`mailto:`). It does not store submissions or send them to a server. A server-side RFQ inbox would require a separately configured email/API provider and credentials.
- External font files load from Google Fonts; the site remains usable with system fallback fonts if that service is unavailable.

## Project structure

```text
src/
  components/   Shared header, footer, section heading and 3D viewer
  pages/        Reserved for future isolated page modules
  App.jsx       All eight page routes and page content
  main.jsx      React entry point
  styles.css    Responsive visual system
public/
  images/       Included local image assets
  favicon.svg
```

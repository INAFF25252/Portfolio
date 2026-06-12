# Chen Xi He — Portfolio

A personal portfolio website showcasing creative and technical work across visual art, 3D modeling, game design, music, and entrepreneurship.

Built with Vue 3, TypeScript, and Tailwind CSS.

## Overview

This site brings together projects from different disciplines in one place — from Blender renders and Unity experiments to nonprofit work, fine art, and product design. The home page features an auto-advancing artwork slideshow, and each project has its own dedicated page with images, videos, and write-ups.

## Features

- **Home** — Hero section with rotating artwork gallery
- **Projects** — Grid of featured work with links to detail pages
- **About** — Bio, tech stack, GitHub profile, photo, and social links
- **Project pages**
  - Blender Work (`/cad`) — 3D models and renders
  - Game Design (`/unity`) — Unity and Unreal projects
  - Pet Pastel (`/pet-pastel`) — Nonprofit animal shelter art initiative
  - Art Works (`/art`) — Portfolio, logo design, and Door Painting Club
  - Music Activities (`/music`) — Performances and service-related music work
  - CuddleBox (`/cuddle-box`) — Cactus-leather goods and crafting workshops

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | [Vue 3](https://vuejs.org/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite 8](https://vite.dev/) |
| Routing | [Vue Router 4](https://router.vuejs.org/) |
| State | [Pinia](https://pinia.vuejs.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Formatting | [Prettier](https://prettier.io/) |

## Project Structure

```
Portfolio/
├── portfolio/              # Vue application
│   ├── public/images/      # Artwork, photos, and video assets
│   ├── src/
│   │   ├── App.vue         # Root layout and navigation shell
│   │   ├── Header.vue      # Site navigation
│   │   ├── Home.vue        # Landing page with slideshow
│   │   ├── Projects.vue    # Project grid
│   │   ├── About.vue       # About page
│   │   ├── CAD.vue         # Blender work
│   │   ├── Unity.vue       # Game design
│   │   ├── PetPastel.vue   # Pet Pastel nonprofit
│   │   ├── Art.vue         # Art hub
│   │   ├── Portfolio.vue   # Art portfolio gallery
│   │   ├── Logo.vue        # Logo design work
│   │   ├── DoorPaintingClub.vue
│   │   ├── Music.vue       # Music activities
│   │   ├── CuddleBox.vue   # CuddleBox business
│   │   └── main.ts         # App entry point and routes
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
└── README.md
```

## Run Locally

Follow these steps to run the site on your machine.

### 1. Install prerequisites

You need [Node.js](https://nodejs.org/) version **20.19+** or **22.12+**. npm comes with Node.js.

Check that Node is installed:

```bash
node -v
```

If the command is not found, download and install Node.js from [nodejs.org](https://nodejs.org/) first.

### 2. Clone the repository

```bash
git clone https://github.com/INAFF25252/Portfolio.git
cd Portfolio
```

### 3. Install dependencies

The Vue app lives in the `portfolio/` folder. Move into it and install packages:

```bash
cd portfolio
npm install
```

This only needs to be run once (or again after pulling dependency changes).

### 4. Start the development server

```bash
npm run dev
```

You should see output like:

```
VITE v8.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

Open **http://localhost:5173/** in your browser. The page reloads automatically when you edit files in `src/`.

To stop the server, press `Ctrl + C` in the terminal.

### 5. (Optional) Build and preview production

To test the production build locally:

```bash
npm run build
npm run preview
```

Then open the URL shown in the terminal (usually `http://localhost:4173/`).

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Serve the production build locally |
| `npm run type-check` | Run TypeScript checks only |
| `npm run format` | Format source files with Prettier |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/projects` | Projects overview |
| `/blog` | Learning journal & project write-ups |
| `/about` | About |
| `/cad` | Blender Work |
| `/unity` | Game Design |
| `/pet-pastel` | Pet Pastel |
| `/art` | Art Works hub |
| `/art/portfolio` | Art portfolio gallery |
| `/art/logo` | Logo design |
| `/art/door-painting-club` | Door Painting Club |
| `/music` | Music Activities |
| `/cuddle-box` | CuddleBox |

## Connect

- **LinkedIn:** [chen-xi-he](https://www.linkedin.com/in/chen-xi-he-7bbbb9347)
- **Instagram:** [@inaff.25252](https://www.instagram.com/inaff.25252/)
- **GitHub:** [@INAFF25252](https://github.com/INAFF25252)

## License

This project is for portfolio and personal use. All artwork, media, and project content belong to Chen Xi He unless otherwise noted.

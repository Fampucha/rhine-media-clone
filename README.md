# Rhine Media Clone

Responsive landing page created as a frontend test task based on the Rhine Media website.

The goal of the project was to recreate the structure, visual style, spacing, typography, and general user experience of the reference website as closely as possible, while keeping the code clean and component-based.

## Live Demo

<!-- Add your deployed project link here -->

## Tech Stack

* React
* Vite
* SCSS / Sass
* React Fast Marquee
* ESLint

## Features

* Responsive layout for desktop, tablet, and mobile screens
* Component-based project structure
* SCSS variables and mixins for reusable styles
* Mobile navigation menu
* Smooth reveal animations on scroll
* Partner marquee section
* Optimized production build with Vite

## Project Structure

```text
src/
  assets/
  components/
    Header/
    Hero/
    Stats/
    Verticals/
    Channels/
    Partners/
    WhyChooseUs/
    CTA/
    Footer/
  styles/
    App.scss
    _global.scss
    _mixins.scss
    _variables.scss
  App.jsx
  main.jsx
```

Each main page section is separated into its own React component with a related SCSS file.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the project locally:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

## Notes

This project was created only for test task purposes.
The layout is based on the provided reference website and was implemented manually using React and SCSS.

## Author

Created by Nastia Klochko as a frontend test task.

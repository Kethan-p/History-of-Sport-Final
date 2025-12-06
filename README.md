# Why Are There So Few Women in Formula One?

A React-based educational website exploring the history, barriers, and future of women's representation in Formula One.

## Overview

This website examines why women remain underrepresented in Formula One through four interactive sections:

1. **Brief Overview of Formula One** - Introduction to F1 and why representation matters
2. **Profiles of Past Women Drivers** - Historical timeline of the five women who have raced in F1
3. **Future Possibilities & Challenges** - Analysis of historical, financial, cultural, and physical barriers
4. **Current Initiatives & Media Representation** - Programs promoting women in F1 and media coverage analysis

## Features

- Interactive dropdown/accordion sections for easy navigation
- Responsive design optimized for all devices
- Accessible design with keyboard navigation support
- F1-inspired color palette with modern, clean aesthetics
- Brief, punchy content designed for everyday audiences

## Getting Started

### Prerequisites

- Node.js (version 20.19+ or 22.12+ recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build

Create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
src/
  components/          # React components
    - Hero.jsx         # Landing section
    - DropdownSection.jsx  # Reusable accordion component
    - Section1_Overview.jsx
    - Section2_Profiles.jsx
    - Section3_Challenges.jsx
    - Section4_Initiatives.jsx
    - Footer.jsx
  data/               # Data files
    - drivers.js      # Historical driver information
    - initiatives.js  # Current programs and media data
  App.jsx             # Main app component
  main.jsx            # Entry point
```

## Technologies

- React 19
- Vite 7
- CSS3 (with CSS Modules approach)

## Content Sources

The website draws from:
- FIA Archives
- Formula One Official Records
- Motorsport.com, The Race, Autosport
- Academic studies on gender in motorsport

## License

Created for educational purposes to raise awareness about gender representation in motorsport.

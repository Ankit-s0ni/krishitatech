# Krishita Tech - Premium Digital Agency

A high-end, award-winning style marketing agency website built with Next.js 14. This project features a modern "dark mode" aesthetic, heavy usage of Framer Motion for scroll-driven animations, and a seamless smooth scrolling experience.

## ✨ Features

- **Premium Aesthetic**: Custom dark theme with curated typography (`Outfit` for display, `Inter` for body).
- **Smooth Scrolling**: Implemented using `@studio-freight/react-lenis` for a weighty, luxurious feel.
- **Advanced Animations**:
  - **Horizontal Scroll**: Services section transforms vertical scroll into horizontal movement.
  - **Parallax Effects**: Case study details feature parallax headers and data charts.
  - **Text Reveals**: Staggered character/word reveals on load.
  - **Sticky Navigation**: "Deep Dive" services page with scroll-spy sidebar.
- **Interactive UI**:
  - **Glassmorphism Navbar**: Blurs background on scroll.
  - **Conversational Form**: Typewriter-style contact form.
  - **Team Grid**: Hover effects to toggle between professional and fun photos.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: SCSS Modules (Vanilla CSS architecture)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Scroll**: [Lenis](https://github.com/studio-freight/lenis)
- **Fonts**: Google Fonts

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/krishita-tech.git
    cd krishita-tech
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    npm run start
    ```

## 📂 Project Structure

```
/src
  /app          # Next.js App Router pages (Home, Services, Work, etc.)
  /components
    /animations # Wrappers for Smooth Scroll & Reveals
    /home       # Landing page specific sections
    /layout     # Global Navbar & Footer
    /services   # Services page components
    /work       # Portfolio grid & Case studies
    /about      # Team grid & Timeline
    /contact    # Contact form
  /styles       # Global SCSS variables & mixins
```

## 📸 Key Pages

- **Home** (`/`): The "Hook" - Hero, Horizontal Slide, Stats.
- **Services** (`/services`): The "Deep Dive" - Sticky navigation.
- **Work** (`/work`): The "Proof" - Portfolio Grid.
- **About** (`/about`): The "Vibe" - Team & Process.
- **Contact** (`/contact`): The "Conversion" - Interactive Form.

---

© 2024 Krishita Tech. All rights reserved.

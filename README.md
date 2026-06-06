# Manvi Rathore — Portfolio Website

A premium, fully-responsive portfolio for **Manvi Rathore** — Social Media Manager, Editor & Wedding Content Creator.

## ✨ Features

- **Editorial aesthetic theme** — forest green / ivory / gold palette with Cormorant Garamond + Manrope typography.
- **Real 3D background** — Three.js animated particle field + wireframe orbs that react to mouse movement and scroll.
- **3D interactions** — mouse-reactive tilt portrait, hover-lift cards, custom cursor.
- **GSAP scroll animations** — staggered text reveals, animated counters, animated skill bars.
- **Fully responsive** — tested on desktop (1440px), tablet, and mobile (390px) with a slide-in mobile menu.
- **Accessible & fast** — respects `prefers-reduced-motion`, pauses 3D when tab is hidden, lazy-loaded images.
- **No build step** — pure HTML / CSS / JS. Opens and deploys instantly.

## 📂 Structure

```
index.html        Markup & content
styles.css        Theme, layout, responsive rules
script.js         3D scene, animations, dynamic content
assets/           Portrait + work imagery
```

## ▶️ Run locally

```bash
# any static server, e.g.
python3 -m http.server 8123
# then open http://localhost:8123
```

## 🚀 Deploy (Vercel)

```bash
vercel        # preview
vercel --prod # production
```

It's a static site, so it also works on Netlify, GitHub Pages, or any static host.

## 📇 Content

Sourced from Manvi's portfolio brief — About, Services, Skills, Content Niche, Work & Collaborations, Achievements, Showcase, and Contact.

- Instagram: [@manvi_diaries_](https://instagram.com/manvi_diaries_)
- Email: manvidiaries22@gmail.com

> The **Showcase** section is built to drop in real reels, before/after edits, wedding & event shots, and BTS moments — just swap the placeholder tiles in `script.js` (`showcase` array) with images or video links.
# manviportfolio

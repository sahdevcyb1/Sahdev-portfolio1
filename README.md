# Sahdev Singh Jhala — Personal Portfolio Website

Modern, responsive, and high-performance personal portfolio built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically for a B.Tech engineering student with a strong focus on Artificial Intelligence, modern web systems, and digital productivity.

---

## 🌟 Key Highlights & Features

- **Hero / Home Section**: Bold headline (*"B.Tech Student | AI & Technology Enthusiast"*), JECRC University & Roll No (26bcon0900) indicators, animated code profile mockup, and quick CTA buttons.
- **About Me**: Student-friendly yet professional narrative, core philosophy (*"learning by building"*), interest pillars, and personal details.
- **Education Section**: Dedicated academic spotlight on B.Tech at JECRC University, Jaipur (2026 - Present) with interactive curriculum badges (DSA, OOP, AI/ML, Web Dev, DBMS, Software Engineering).
- **Skills Section**: Attractive cards for all 8 required skills (**HTML, CSS, JavaScript, Python, Artificial Intelligence, Generative AI, Web Development, Digital Productivity**) plus developer ecosystem tools (React, Vite, Tailwind CSS, Git, VS Code, Vercel).
- **Projects Showcase**: Interactive cards and deep-dive modals for:
  1. *Personal Portfolio Website*
  2. *AI Website Project*
  3. *Student Productivity Project*
- **Achievements & Activities**: Modular tabs for Certifications, Hackathons, Courses, Awards, and future achievements.
- **Contact Hub**: Professional contact cards with 1-click **Copy Email** (`sahdevsinghjhala79@gmail.com`), social profile links, and an interactive contact form.
- **Responsive UI/UX**: Mobile hamburger navigation, glassmorphism cards, glowing tech accents, and smooth scroll spy.
- **Vercel Ready**: Preconfigured `vercel.json` for instant zero-configuration deployment.

---

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Bundler & Dev Server**: Vite 6
- **Styling**: Tailwind CSS 3 with custom glassmorphism & gradients
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono (Google Fonts)

---

## 🚀 Running Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📂 Project Architecture

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx          # Glassmorphism header & mobile menu
│   │   ├── Hero.jsx            # Hero banner & interactive code card
│   │   ├── About.jsx           # Student story & quick facts
│   │   ├── Education.jsx       # JECRC University B.Tech coursework
│   │   ├── Skills.jsx          # 8 core skill cards + tools cloud
│   │   ├── Projects.jsx        # 3 featured project cards + filters
│   │   ├── ProjectModal.jsx    # Pop-up project deep dive modal
│   │   ├── Achievements.jsx    # Certifications, hackathons & awards
│   │   ├── Contact.jsx         # Direct email copy + contact form
│   │   └── Footer.jsx          # Branding, sitemap & back-to-top
│   ├── data/
│   │   └── portfolioData.js    # Centralized data file for easy updates
│   ├── App.jsx                 # Main layout & scroll tracking
│   ├── index.css               # Tailwind & custom glass utility classes
│   └── main.jsx                # React DOM entrypoint
├── index.html                  # HTML5 boilerplate & SEO metadata
├── tailwind.config.js          # Tailwind theme configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite server & build configuration
├── vercel.json                 # Vercel deployment configuration
└── package.json
```

---

## ✏️ Customizing Your Information

All portfolio text, links, and data are centralized in a single file:
👉 **`src/data/portfolioData.js`**

To update your LinkedIn, GitHub, or add upcoming hackathons and certifications, simply edit that file and your changes will reflect across the site instantly.

---

## ☁️ Deploying to Vercel

### Method 1: Via GitHub (Recommended)
1. Push this folder to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Sahdev portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com).
3. Click **"Add New Project"** and import your GitHub repository.
4. Vercel will automatically detect Vite and use `vercel.json` to deploy in seconds!

### Method 2: Via Vercel CLI
```bash
npx vercel
```
Follow the simple CLI prompts to deploy directly.

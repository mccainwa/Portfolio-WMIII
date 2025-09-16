# Portfolio - Walter McCain III

A modern, space-themed portfolio website showcasing data science and bioinformatics expertise, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite
- **Space-Themed Design**: Interactive cosmic background with shooting stars, twinkling stars, and nebula effects
- **Professional Focus**: Data Science, Bioinformatics, and Cloud & AI Automation
- **Interactive Animations**: Mouse-responsive parallax effects and floating particles
- **Accessibility**: Respects `prefers-reduced-motion` settings and WCAG compliance
- **Performance**: GPU-accelerated animations and optimized rendering

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript support

## 📁 Project Structure

```
/
├── public/
│   ├── images/
│   │   ├── projects/        # Project cover images
│   │   └── brand/           # Logos, headshots
├── src/
│   ├── app/                 # Page-level views
│   │   ├── HomeView.tsx
│   │   ├── ProjectsView.tsx
│   │   ├── ProjectDetailView.tsx
│   │   ├── AboutView.tsx
│   │   └── ContactView.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Shell.tsx
│   │   └── background/
│   │       └── MotionLayers.tsx
│   ├── styles/
│   │   ├── globals.css      # Tailwind directives
│   │   └── theme.css        # CSS vars for futuristic accents
│   ├── lib/
│   │   └── theme.ts         # Theme toggle helper
│   └── content/
│       └── projects.json    # Project data
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio-WMIII
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors & Theme

The color palette and theme variables are defined in:
- `tailwind.config.js` - Tailwind color extensions
- `src/styles/theme.css` - CSS custom properties for futuristic effects

### Content

- **Projects**: Real project data loaded from `src/content/projects.json` including:
  - Viral Amino Acid Mutation Toolkit: ML pipeline for protein mutation prediction
  - FlowFix Labs Automation Suite: AI-driven business automation
  - Bioinformatics Amino Acid Pipeline: Python and R sequence analysis
  - High-Performance ML Pipelines: HPC and cloud-optimized workflows
  - Realtor Pipeline Automation: Real estate data processing system
- **Personal Info**: Updated with real experience in data science and bioinformatics
- **Images**: Space-themed project cover images in `public/images/projects/`

### Animations

Framer Motion animations are configured in individual components. Key animation files:
- `src/components/background/MotionLayers.tsx` - Background animations
- Individual view components contain entrance animations

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The `dist/` folder will contain the production-ready files.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

Walter McCain III - Data Scientist & Bioinformatics Engineer
- Email: Param2002@outlook.com
- LinkedIn: [linkedin.com/in/waltermccainiii](https://linkedin.com/in/waltermccainiii)
- GitHub: [github.com/mccainwa](https://github.com/mccainwa)
- Location: Chicago, IL

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

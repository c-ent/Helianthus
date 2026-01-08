# Helianthus

An interactive web application based on Van Goghs "Sunflower" built with React, TypeScript, and Vite

## 🌻 Features

- **Interactive Animations**: Smooth animations powered by Framer Motion and GSAP
- **Custom Mouse Effects**: Dynamic mouse trail and cursor interactions
- **Responsive Design**: Built with Tailwind CSS
- **Type Safety**: Full TypeScript support
- **Modern Stack**: Vite and React 18

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/c-ent/Helianthus.git

# Navigate to the project directory
cd Helianthus

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 🛠️ Tech Stack

### Core
- *React 18*
- *TypeScript*
- *Vite*

### Styling
- *Tailwind CSS* 
- *PostCSS*

### Animation & Effects
- *Framer Motion*
- *GSAP*
- *React Animated Cursor*
- *Mouse Follower*

### Routing & State
- *React Router DOM*
- *React Error Boundary*
- *React Helmet Async*

## 📁 Project Structure

```
Helianthus/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, and other assets
│   │   ├── fonts/
│   │   └── images/
│   │       ├── gallery/
│   │       └── trails/
│   ├── components/      # Reusable components
│   │   ├── Loader.tsx
│   │   ├── MousetrailImages.tsx
│   │   └── Petals.tsx
│   ├── features/        # Feature-based modules
│   │   └── misc/
│   │       └── routes/
│   ├── providers/       # Context providers
│   │   └── app.tsx
│   ├── routes/          # Route configuration
│   │   ├── index.tsx
│   │   └── public.tsx
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is currently licensed for public use.

---

Built with ❤️ using React + TypeScript + Vite

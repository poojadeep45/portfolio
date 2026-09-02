# Pooja Deep - 3D Portfolio

A modern, responsive 3D portfolio website built with React.js, Three.js, and TypeScript, showcasing backend development projects with AI integration and live demo capabilities.

## 🌐 Live Demo

Portfolio URL: [portfolio-1aby.vercel.app](https://portfolio-1aby.vercel.app)

## 📝 Description

This is a personalized 3D portfolio website for Pooja Deep, a Backend Developer specializing in Java, Spring Boot, and AI-powered APIs. The portfolio features an interactive 3D hero section, smooth navigation, and showcases real-world projects with live deployment links.

### Recent Improvements

- **Enhanced Navigation**: Fixed navigation routing to work seamlessly between sections with proper URL updates and smooth scrolling
- **Live Demo Integration**: Added live demo links to project cards alongside GitHub repository links
- **Single Page Application**: Optimized routing to eliminate duplicate content and improve user experience
- **Responsive Design**: Ensured consistent behavior across all devices and screen sizes
- **Project Showcase**: Added specific backend projects with live deployments

## ✨ Technologies Used

- **React.js 18** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helpers for react-three-fiber
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **EmailJS** - Contact form functionality

## 🧰 Get Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/poojadeep45/reactjs18-3d-portfolio.git
cd reactjs18-3d-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run ts:check` | Type checking |

## 🔒 Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAIL_JS_ACCESS_TOKEN=your_access_token
```

Get these credentials from [EmailJS](https://www.emailjs.com/).

## 📂 Project Structure

```
reactjs18-3d-portfolio/
├── src/
│   ├── components/
│   │   ├── atoms/         # Reusable UI components
│   │   ├── canvas/        # Three.js 3D components
│   │   ├── layout/        # Layout components (Navbar, Loader)
│   │   └── sections/      # Page sections (Hero, About, Projects, etc.)
│   ├── constants/         # Configuration and data
│   ├── hoc/              # Higher-order components
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   └── assets/           # Images and icons
├── public/
│   └── desktop_pc/       # 3D model assets
└── package.json
```

## 🎯 Key Features

### Navigation System
- **Single Page Application**: Smooth scrolling between sections
- **URL Updates**: Navigation properly updates URLs (e.g., `/#about`, `/#projects`)
- **Responsive Navbar**: Mobile-friendly navigation with hamburger menu
- **Active State**: Navbar highlights current section while scrolling

### Project Showcase
- **Live Demo Links**: Projects with live deployments show both GitHub and demo buttons
- **Tech Stack Tags**: Visual representation of technologies used
- **Responsive Cards**: Tilt effect on project cards for interactive experience
- **Hover Effects**: GitHub and demo buttons appear on hover

### 3D Hero Section
- **Interactive 3D Model**: Animated computer model using Three.js
- **Mobile Optimization**: Responsive design with conditional rendering
- **Smooth Animations**: Framer Motion for seamless transitions

## 🚀 Featured Projects

### Student Management API
- **Tech Stack**: Spring Boot, MySQL, Docker, JWT/OAuth 2.0
- **Features**: Full CRUD operations, CI/CD pipeline, Railway deployment
- **Live Demo**: [Swagger UI](https://studentmanagementapi-production-ca12.up.railway.app/swagger-ui/index.html)
- **Source**: [GitHub](https://github.com/poojadeep45/StudentManagementAPI)

### DocuSense
- **Tech Stack**: Spring Boot, Google Gemini AI, Docker
- **Features**: AI-powered document summarization, async processing
- **Live Demo**: [Live App](https://docusense-production-d92a.up.railway.app/)
- **Source**: [GitHub](https://github.com/poojadeep45/docusense)

### Intelligent Healthcare Platform (FYP)
- **Tech Stack**: Node.js, Express, MongoDB, React, Google Gemini AI
- **Features**: Symptom checking, doctor consultation, appointment booking
- **Source**: [GitHub](https://github.com/AyeshaAhmed1573/Health_management_system)

## 🎨 Customization

### Personal Information
Edit `src/constants/config.ts` to update:
- Name and title
- Hero section text
- Contact information
- Section descriptions

### Projects
Edit `src/constants/index.ts` to:
- Add/remove projects
- Update project descriptions
- Modify tech stack tags
- Add live demo URLs

### Styling
- **Colors**: Modify `tailwind.config.cjs` for theme colors
- **Styles**: Update `src/constants/styles.ts` for text styles
- **CSS**: Edit `src/globals.css` for custom styles

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms
The project can be deployed to any platform that supports static sites:
- Netlify
- GitHub Pages
- Railway
- AWS S3

## 🔧 Troubleshooting

### 3D Model Not Loading
- Ensure `public/desktop_pc/` folder contains all model files
- Check browser console for GLTF loading errors
- Verify file paths in `src/components/canvas/Computers.tsx`

### Navigation Issues
- Clear browser cache
- Check React Router version compatibility
- Verify hash links in navbar component

### Live Demo Buttons Not Showing
- Ensure `liveDemoLink` is added to project data
- Check if projects have valid URLs
- Verify TypeScript types include `liveDemoLink` field

## 📝 Development Notes

### Recent Changes
- Fixed duplicate project sections by removing Works component
- Implemented smooth scrolling with navbar offset
- Added conditional rendering for live demo buttons
- Optimized routing structure for single-page application
- Fixed background image paths for production builds

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Component-based architecture
- Reusable UI components

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: poojadeep684@gmail.com
- **LinkedIn**: [pooja-deep-1bb950276](https://www.linkedin.com/in/pooja-deep-1bb950276/)
- **GitHub**: [poojadeep45](https://github.com/poojadeep45)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Original 3D portfolio template by [JavaScript Mastery](https://www.jsmastery.pro/)
- 3D models and assets from original project
- UI/UX inspiration from modern portfolio designs
- Open source community and contributors

---

**Built with ❤️ by Pooja Deep**

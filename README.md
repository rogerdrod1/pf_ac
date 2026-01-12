# PF Air Conditioning - Professional HVAC Services Website

A modern, responsive website for a professional HVAC services company, built with cutting-edge web technologies to deliver exceptional performance and user experience.

## Overview

This website showcases comprehensive HVAC services including heating, cooling, and ventilation solutions. Designed with user experience and conversion optimization in mind, it features intuitive navigation, engaging visuals, and a streamlined contact process to help customers easily connect with your services.

## Features

- **Responsive Design** - Seamlessly adapts to all devices (desktop, tablet, mobile)
- **Modern UI Components** - Built with shadcn/ui for consistent, accessible design
- **Service Showcase** - Dedicated sections highlighting heating, cooling, and ventilation services
- **Contact Integration** - Easy-to-use contact form for customer inquiries
- **Fast Performance** - Optimized with Vite for lightning-fast load times
- **SEO Ready** - Structured for search engine optimization
- **Type-Safe** - Built with TypeScript for reliability and maintainability

## Tech Stack

- **[React](https://react.dev/)** - Modern UI library for building interactive interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for robust code
- **[Vite](https://vitejs.dev/)** - Next-generation frontend build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality, accessible UI components
- **[React Router](https://reactrouter.com/)** - Client-side routing

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm/bun)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rogerdrod1/pf_ac.git
cd pf_ac
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
pf_ac/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyChooseSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── public/             # Public static files
└── package.json
```

## Deployment

The site is deployed on [Vercel](https://vercel.com/) with automatic deployments on every push to the main branch.

To deploy your own instance:

1. Fork this repository
2. Sign up for a [Vercel account](https://vercel.com/signup)
3. Import your forked repository
4. Configure your custom domain (optional)
5. Deploy!

## Customization

### Updating Content

- **Company Information** - Edit components in `src/components/`
- **Services** - Modify `src/components/ServicesSection.tsx`
- **Contact Details** - Update `src/components/ContactSection.tsx` and `src/components/Footer.tsx`
- **Images** - Replace files in `src/assets/` and `public/`
- **Styling** - Customize colors and themes in `tailwind.config.ts`

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## Roadmap

### High Priority
- [ ] **CRM/Form Integration** - Connect contact form to capture leads
  - Options: Formspree, FormSubmit, HubSpot, or HVAC-specific CRMs
  - Location: `src/components/ContactSection.tsx`

### Enhancements
- [ ] Google Analytics integration
- [ ] Google Maps showing service area
- [ ] Customer testimonials section
- [ ] Before/after photo gallery
- [ ] Live chat widget
- [ ] Schema markup for local SEO
- [ ] FAQ section
- [ ] Blog for HVAC tips and local content
- [ ] Online booking/scheduling system
- [ ] Financing options page

### SEO & Marketing
- [ ] Google Business Profile integration
- [ ] Enhanced meta tags and Open Graph images
- [ ] Structured data for local business
- [ ] Google Reviews widget

### Technical
- [ ] Form validation and error handling
- [ ] Loading states and toast notifications
- [ ] Email notifications for form submissions
- [ ] reCAPTCHA spam prevention

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Support

For questions or support, please contact through the website contact form or open an issue in this repository.

---

Built with ❤️ for exceptional HVAC services

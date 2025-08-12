# Modern Portfolio Website

A clean, professional, black-themed portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Optimized for technical recruiters with smooth animations, responsive design, and modern UI/UX.

## Features

- **Modern Design**: Clean, minimal black theme with high contrast typography
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessible**: Follows accessibility best practices
- **Production Ready**: Optimized for deployment on Vercel

## Sections

- **Hero/Intro**: Name, title, and compelling tagline
- **About Me**: Concise bio with key statistics
- **Projects**: Featured projects with hover effects and live demos
- **Skills**: Interactive skill bars organized by category
- **Experience & Education**: Professional timeline
- **Contact**: Contact form and social links

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Components**: Shadcn/UI
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Customization

### Personal Information
Update the following files with your information:
- `components/Hero.tsx` - Name, title, tagline
- `components/About.tsx` - Bio and statistics
- `components/Projects.tsx` - Your projects
- `components/Skills.tsx` - Your skills and proficiency levels
- `components/Experience.tsx` - Work experience and education
- `components/Contact.tsx` - Contact information and social links

### Styling
- Colors and theme: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Component-specific styles: Individual component files

### SEO
Update meta tags in `app/layout.tsx` with your information.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Build

```bash
npm run build
npm start
```

## Performance Features

- Static site generation for fast loading
- Optimized images and assets
- Minimal JavaScript bundle
- Efficient CSS with Tailwind
- Smooth scroll behavior
- Lazy loading animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Contributing

Feel free to submit issues and enhancement requests!
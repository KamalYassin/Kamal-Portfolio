# Kamal Yassin — Portfolio

A personal portfolio website built with Next.js, Tailwind CSS, and TypeScript. Features a clean, responsive design with dark/light mode support.

## Live Sections

- **Hero** — Introduction with social links (GitHub, LinkedIn)
- **About** — Bio and skills overview
- **Experience** — Work history with company logos, role descriptions, and tech tags
- **Projects** — Highlighted projects with images, descriptions, tech badges, and GitHub links
- **Contact** — Email/phone info + a working contact form powered by [Resend](https://resend.com)
- **Footer** — Social links and copyright

## Tech Stack

| Category       | Technology                          |
| -------------- | ----------------------------------- |
| Framework      | [Next.js 13](https://nextjs.org/)   |
| Language       | TypeScript                          |
| Styling        | [Tailwind CSS](https://tailwindcss.com/) |
| Theme          | [next-themes](https://github.com/pacocoursey/next-themes) (dark/light mode) |
| Email          | [Resend](https://resend.com/)       |
| Icons          | [React Icons](https://react-icons.github.io/react-icons/) |
| Animations     | Intersection Observer (SlideUp), CSS keyframes |
| Smooth Scroll  | [react-scroll](https://github.com/fisshy/react-scroll) |

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
git clone https://github.com/KamalYassin/K-Portfolio.git
cd K-Portfolio
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```
RESEND_API_KEY=your_resend_api_key
```

You can get a free API key at [resend.com](https://resend.com).

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
K-Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page composing all sections
│   └── head.tsx            # Meta tags and page title
├── components/
│   ├── Navbar.tsx           # Navigation bar with smooth scroll links
│   ├── HeroSection.tsx      # Hero with intro and social icons
│   ├── AboutSection.tsx     # Bio and skills grid
│   ├── ExperienceSection.tsx# Work experience cards
│   ├── ProjectsSection.tsx  # Project showcase with images and tech tags
│   ├── ContactSection.tsx   # Contact form + email/phone info
│   ├── Footer.tsx           # Footer with social links
│   └── SlideUp.tsx          # Scroll-triggered animation wrapper
├── pages/
│   └── api/
│       └── contact.ts       # Contact form API route (Resend)
├── public/                  # Images, resume, and static assets
├── styles/
│   └── globals.css          # Tailwind imports and global styles
└── tailwind.config.js       # Tailwind configuration
```

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com):

1. Push the repo to GitHub
2. Import the project in Vercel
3. Add `RESEND_API_KEY` to the environment variables
4. Deploy

## License

This project is open source and available for personal use.

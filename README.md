# Kamal Yassin — Portfolio

A modern, responsive portfolio website built with **Next.js 13**, **TypeScript**, and **Tailwind CSS**.  
Designed with a clean UI, smooth animations, and dark/light mode support.

🔗 Live Site: _[Add your deployed URL here]_

<img width="1280" height="655" alt="Screenshot 2026-02-16 at 10 43 54 PM" src="https://github.com/user-attachments/assets/704892f4-e71b-4f01-b04a-8cb3b6011f59" />


---

## ✨ Features

- Hero section with social links
- About section with skills overview
- Experience section with company logos and tech tags
- Projects showcase with images and GitHub links
- Contact form powered by Resend (server-side API route)
- Fully responsive design
- Dark / Light mode support
- Smooth scroll navigation
- Scroll-triggered animations

---

## 🛠 Tech Stack

| Category      | Technology |
|--------------|------------|
| Framework    | [Next.js 13](https://nextjs.org/) |
| Language     | TypeScript |
| Styling      | [Tailwind CSS](https://tailwindcss.com/) |
| Theme        | [next-themes](https://github.com/pacocoursey/next-themes) |
| Email API    | [Resend](https://resend.com/) |
| Icons        | [React Icons](https://react-icons.github.io/react-icons/) |
| Animations   | Intersection Observer + CSS keyframes |
| Smooth Scroll| [react-scroll](https://github.com/fisshy/react-scroll) |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/KamalYassin/K-Portfolio.git
cd K-Portfolio
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env.local` file in the root directory:

```bash
RESEND_API_KEY=your_resend_api_key
```

Used for handling contact form email delivery via Resend.

---

### 4️⃣ Run Development Server

```bash
npm run dev
```

Visit:  
http://localhost:3000

---

## 📦 Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
K-Portfolio/
├── app/                    # App router layout and pages
├── components/             # UI components (sections, navbar, animations)
├── pages/api/contact.ts    # API route for contact form (Resend)
├── public/                 # Images, resume, and static assets
├── styles/                 # Global styles
└── tailwind.config.js
```

---

## 🌐 Deployment

This project is optimized for deployment on **Vercel**:

1. Push repository to GitHub
2. Import project into Vercel
3. Add `RESEND_API_KEY` as an environment variable
4. Deploy

---

## 📄 License

This project is open-source and available for personal use.

---

## 👤 Author

**Kamal Yassin**  
Computer Science Student — AI & Software Engineering  
GitHub: https://github.com/KamalYassin  
LinkedIn: https://www.linkedin.com/in/your-link

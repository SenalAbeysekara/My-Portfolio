<div align="center">

# 🌐 Senal Abeysekara — Personal Portfolio

> *"Creating Innovative, Functional, and User-Friendly Websites for Digital Solutions."*

</div>

---

## 👤 About Me

I'm **Senal Abeysekara**, a Computer Science undergraduate and aspiring Full Stack Developer passionate about building scalable web applications and real world digital solutions. Experienced in MERN stack development and continuously exploring AI/ML and DevOps.

---

## ✨ Portfolio Features

| Section | Description |
|---|---|
| 🏠 **Hero / Home** | Animated typing effect, Lottie animation, social links & CTA buttons |
| 👤 **About** | Personal bio, downloadable CV, dynamic stats from Supabase |
| 🎨 **Portfolio** | Projects, tech stack icons & certificates fetched live from Supabase |
| 🛠️ **Services** | Service cards with icons, descriptions & features from Supabase |
| 🎓 **Education** | Academic background & timeline |
| 📬 **Contact** | Contact form with email integration |
| 🔔 **Achievements** | Certificates and accomplishments showcase |

---

## 🛠️ Tech Stack

### Frontend

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=black)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white)
![AOS](https://img.shields.io/badge/AOS-Animations-6366f1?style=flat-square)
![Lottie](https://img.shields.io/badge/Lottie-Files-00DDB4?style=flat-square)

### Backend & Database

![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)

### Build & Deployment

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- A [Supabase](https://supabase.com) account & project

### 1. Clone the Repository

```bash
git clone https://github.com/SenalAbeysekara/My-Portfolio.git
cd My-Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Supabase

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```
### 4. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio live. 🎉

---

## 📁 Project Structure

```
My-Portfolio/
├── public/
│   ├── photo.png               # Profile photo
│   ├── lottie.json             # Hero animation
│   └── *.svg                   # Tech stack icons
│
├── src/
│   ├── Pages/
│   │   ├── Home.jsx            # Hero section with typing animation
│   │   ├── About.jsx           # About me + dynamic stats
│   │   ├── Portofolio.jsx      # Projects, tech stack & certificates
│   │   ├── Services.jsx        # Services section
│   │   ├── Education.jsx       # Education timeline
│   │   ├── Contact.jsx         # Contact form
│   │   ├── WelcomeScreen.jsx   # Intro loading screen
│   │   ├── ThankYou.jsx        # Post-contact thank you page
│   │   └── 404.jsx             # Custom 404 page
│   │
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive navigation
│   │   ├── CardProject.jsx     # Project card component
│   │   ├── Achievements.jsx    # Certificate card component
│   │   ├── TechStackIcon.jsx   # Tech icon component
│   │   ├── Modal.jsx           # Project detail modal
│   │   ├── ProjectDetail.jsx   # Full project detail view
│   │   ├── SocialLinks.jsx     # Social media links
│   │   ├── InputField.jsx      # Reusable form input
│   │   ├── LoadingScreen.jsx   # Loading state component
│   │   └── Background.jsx      # Animated background
│   │
│   ├── supabase.js             # Supabase client config
│   ├── App.jsx                 # Root component & routing
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
│
├── .env                        # Environment variables (not committed)
├── vite.config.js
├── tailwind.config.js
└── package.json
```

⭐ If you like this portfolio, give it a star!

</div>

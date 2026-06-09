# MyPort — Vinayak Chaturvedi Portfolio

A modern personal portfolio built with **Next.js**, **Tailwind CSS**, and **TypeScript**, inspired by [itsprem.me](https://itsprem.me/).

## Features

- Dark / light theme toggle (floating button on the right)
- Profile photo and downloadable resume
- Sections: Home, About, Projects, Experience, GitHub, Connect
- Responsive design for mobile and desktop
- Smooth animations with Framer Motion

## Folder Location

```
C:\Users\Lenovo\Desktop\MyPort
```

## Run Locally

```bash
cd C:\Users\Lenovo\Desktop\MyPort
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deploy (Vercel — Recommended)

1. Push this repo to GitHub: `https://github.com/vina-yak11/myport`
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project** → import `myport`
4. Keep default settings (Framework: Next.js)
5. Click **Deploy**
6. Your live URL will look like: `https://myport.vercel.app`

## Update Content Later

- **Project links:** edit `src/data/portfolio.ts` → `projects[].links`
- **Resume:** replace `public/resume/Vinayak_Resume.pdf`
- **Avatar:** replace `public/avatar.png`

## Contact

- Email: vinayakchaturvedi545@gmail.com
- GitHub: https://github.com/vina-yak11

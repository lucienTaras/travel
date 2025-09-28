# TARAS — AI Travel Growth Website

## Local preview
```
npm install
npm run dev
```
Open http://localhost:5173

## Deploy to Vercel
1. Push to a new GitHub repo
2. Import on https://vercel.com (Framework: **Vite**)
3. Add env vars (optional for email):
   - RESEND_API_KEY
   - FROM_EMAIL = no-reply@yourdomain.com
   - TO_EMAIL = lucien@devio.co.za
4. Deploy 🎉

## Customize
- Logo: replace `/public/logo.png`
- Booking link: `https://calendar.app.google/9Lg9BzZy97jv3poHA` (edit in `LandingPage.jsx` if you change it)
- Colors: `tailwind.config.js` under `colors.brand`

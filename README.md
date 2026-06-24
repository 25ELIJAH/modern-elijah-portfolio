# Elijah Easter — Portfolio

Personal portfolio showcasing digital marketing work and software development projects.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

## Project Structure

```
my-portfolio/
├── public/          # Static assets (images, icons, videos, documents)
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Page-level components
│   ├── data/        # Static data (projects, campaigns, skills)
│   ├── lib/         # Utilities and booking logic
│   └── styles/      # Global CSS
└── docs/            # Project notes
```

## Environment Variables

Copy `.env` and fill in your keys:

| Variable | Description |
|---|---|
| `VITE_CALENDLY_URL` | Your Calendly booking link |
| `VITE_EMAILJS_*` | EmailJS credentials for the contact form |
| `VITE_GOOGLE_ANALYTICS_ID` | GA4 measurement ID |

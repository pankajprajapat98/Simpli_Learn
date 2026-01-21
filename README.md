# Simplilearn AI Era Event Landing Page

link https://simpli-learn-blush.vercel.app/

A pixel-perfect, fully responsive Next.js landing page for "The Skills That Matter Most: Preparing Your Workforce & Leaders for the AI Era" event by Simplilearn.

## Features

- ✨ Pixel-perfect responsive design matching provided UI designs
- 🎨 Built with Next.js 15 App Router and TypeScript
- 💅 Styled exclusively with Tailwind CSS
- 📱 Fully responsive across mobile, tablet, and desktop
- 🚀 Server Components for optimal performance
- 📧 Functional RSVP form with Airtable integration
- 🎯 SEO-friendly markup
- ♿ Accessible HTML with ARIA attributes
- 🎭 Beautiful particle background effects
- ⚡ Optimized for Vercel deployment

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Airtable (for RSVP submissions)
- **Deployment**: Vercel-ready

## Project Structure

```
/app
  /page.tsx                  # Main landing page
  /layout.tsx                # Root layout with metadata
  /globals.css               # Global styles and Tailwind
  /components
    /Hero.tsx                # Hero section with RSVP form
    /WhatWeExplore.tsx       # Capabilities grid section
    /Speakers.tsx            # Featured speakers section
    /Agenda.tsx              # Event agenda section
    /Footer.tsx              # Footer with RSVP
    /RSVPForm.tsx            # Reusable RSVP form component
  /api
    /submit-rsvp
      /route.ts              # API route for Airtable integration
/public
  /images                    # Event images (speakers, etc.)
/tailwind.config.ts          # Tailwind configuration
/tsconfig.json               # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Airtable account (for RSVP functionality)

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd "new 1"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your Airtable credentials:
   ```env
   AIRTABLE_API_KEY=your_airtable_api_key
   AIRTABLE_BASE_ID=your_base_id
   AIRTABLE_TABLE_NAME=RSVPs
   ```

### Airtable Setup

1. Create a new Airtable base
2. Create a table named "RSVPs" with the following fields:
   - `Email` (Single line text)
   - `Submitted At` (Date)
   - `Event` (Single line text)
   - `Status` (Single select)
3. Get your API key from [Airtable Account Settings](https://airtable.com/account)
4. Get your Base ID from the Airtable API documentation for your base

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard:
     - `AIRTABLE_API_KEY`
     - `AIRTABLE_BASE_ID`
     - `AIRTABLE_TABLE_NAME`
   - Click "Deploy"

The app will be automatically deployed and optimized for production.

## Components Overview

### Hero
- Dark particle background effect
- Event title and details
- Date, time, and location
- Inline RSVP form

### What We'll Explore
- Grid of 6 key capabilities/topics
- Icons and descriptions
- Responsive grid layout

### Speakers
- 3 featured speaker profiles
- Photos and bios
- Additional expert perspectives section

### Agenda
- 3-column event schedule
- Time slots and descriptions
- "Behind the Curtain" insights section

### Footer
- Final RSVP call-to-action
- Branding and copyright
- Dark theme

## Customization

### Colors
Edit [tailwind.config.ts](tailwind.config.ts):
```typescript
colors: {
  primary: {
    cyan: '#00D4FF',
    blue: '#0066FF',
    navy: '#0A1628',
    dark: '#050B18',
  },
  accent: {
    orange: '#FF9933',
    yellow: '#FFB84D',
  }
}
```

### Content
Update component files in `/app/components/` to modify text, descriptions, and structure.

### Images
Add your images to `/public/images/` and update image paths in components.

## Performance

- Server Components by default (no unnecessary client JS)
- Optimized particle background with CSS
- Responsive images with Next.js Image component
- Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome)

## License

© 2025-2026 Simplilearn Solutions. All Rights Reserved.

## Support

For issues or questions, please contact the development team or create an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS

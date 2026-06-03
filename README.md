# HNX Solutions Website

The HNX Solutions website is a modern company website built with Next.js. It presents HNX Solutions' digital services, CRM offerings, automation capabilities, industry solutions, portfolio work, pricing information, resources, and contact experience in a polished public-facing interface.

This repository contains the frontend application and supporting server-side functionality required to run the website.

## Main Features

- Responsive business website for HNX Solutions
- Service pages for CRM systems, AI automation, web development, SaaS, mobile apps, cloud/DevOps, UI/UX, SEO, and growth
- Solution pages organized by CRM, Web & SaaS, Mobile Apps, AI Automation, Cloud & DevOps, and Design & Growth
- Industry-focused pages for sectors such as healthcare, real estate, education, finance, retail, travel, manufacturing, insurance, automobile, and service businesses
- Portfolio and case-study style project showcase
- Blog and resource pages for educational content
- Interactive CRM demo, workflow lab, and ROI calculator experiences
- Contact and enquiry flows for potential clients
- SEO-ready metadata, sitemap, robots configuration, and structured data support
- Light/dark theme support, responsive navigation, animations, and modern UI components

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS 4
- **Animation:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Theme:** next-themes
- **Database:** MongoDB with Mongoose
- **Validation:** Zod
- **SEO:** Next.js Metadata API, sitemap, robots, and JSON-LD support

## Local Setup

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root:

```bash
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB_NAME=hnx-solutions
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ENHANCED_DEMO=true
```

Run the development server:

```bash
npm run dev
```

Open the local site:

```bash
http://localhost:3000
```

Run lint checks:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Start the production build:

```bash
npm run start
```

## Environment Variables

| Variable | Example Value | Description |
| --- | --- | --- |
| `MONGODB_URI` | `your_mongodb_connection_string` | MongoDB connection string for server-side features. |
| `MONGODB_DB_NAME` | `hnx-solutions` | Database name used by the application. |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | Base site URL used for public metadata and SEO. |
| `NEXT_PUBLIC_ENHANCED_DEMO` | `true` | Enables the enhanced demo experience when supported. |

For production, set `NEXT_PUBLIC_SITE_URL` to the live website domain.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server. |
| `npm run build` | Builds the production application. |
| `npm run start` | Starts the production build. |
| `npm run lint` | Runs ESLint checks. |

## Deployment Checklist

Before deploying:

- Configure all required environment variables in the hosting provider.
- Set `NEXT_PUBLIC_SITE_URL` to the production domain.
- Confirm the MongoDB connection string points to the correct production database.
- Run `npm run lint`.
- Run `npm run build`.
- Verify key pages, contact flows, demo pages, images, and SEO metadata after deployment.
- Confirm `/sitemap.xml` and `/robots.txt` are accessible on the production domain.

## Security Note

- Never commit `.env`, `.env.local`, API keys, database URLs, bot credentials, passwords, or production secrets.
- Production secrets should be stored only in hosting provider environment variables.
- Keep `.env.local` in `.gitignore`.
- Review public documentation before publishing to avoid exposing internal implementation details.

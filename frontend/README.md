## Manthan Dadhania · Academic Portfolio

A fully responsive, animated academic portfolio for Manthan Dadhania built with **Next.js (App Router)**, **Tailwind**, **Framer Motion**, and **next-themes**, ready to consume content from **Appwrite** and deploy on **Vercel**.

### ✨ Features
- Immersive hero cover page with light/dark toggle, gradient accents, and résumé download CTA.
- Structured sections that mirror the requested portfolio outline with reusable animated cards.
- Theming powered by `next-themes` with persistent mode toggle.
- `appwrite` SDK scaffolding ready for dynamic content and resume storage.
- Production-ready typography, motion, and responsive layout tailored for academic storytelling.

---

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000` to preview the site. All primary content lives in:
- `src/app/page.tsx` – layout and section composition.
- `src/data/portfolio.tsx` – data snapshot (replace with Appwrite queries later).
- `src/components/` – reusable UI atoms (theme toggle, section wrapper, cards).

---

## Environment Variables

Create a `.env.local` file in the `frontend` directory with the following keys. These are optional locally (static data is used as a fallback) but required once you switch to Appwrite-powered content:

```
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_PROJECT=
NEXT_PUBLIC_APPWRITE_DATABASE_ID=
NEXT_PUBLIC_APPWRITE_COLLECTION_ID=
NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID=
NEXT_PUBLIC_APPWRITE_RESUME_FILE_ID=
NEXT_PUBLIC_RESUME_URL=           # Optional direct link override for the résumé
```

---

## Appwrite Setup Guide

The frontend is prepped to consume structured data and resume assets from Appwrite. Follow these steps to mirror the current static content:

### 1. Project & API
1. Create an Appwrite project (or reuse your existing one).
2. Note the **Endpoint** and **Project ID** for the `.env.local` file.
3. In Project Settings → API keys, create a key with **Databases (read)** and **Storage (read)** permissions. Use this key for server-side operations or configure session-based access for a public site.

### 2. Database Structure
Create a database, e.g., `portfolio`, and a collection `sections` with the following suggested attributes:

| Field                | Type      | Description |
|----------------------|-----------|-------------|
| `slug`               | String    | Section ID (e.g., `introduction`, `projects`). |
| `title`              | String    | Section heading. |
| `eyebrow`            | String    | Optional eyebrow label. |
| `content`            | Rich Text | Markdown/HTML body for narrative sections. |
| `items`              | JSON      | Array of cards, projects, testimonials, etc. |
| `order`              | Integer   | Sort order for display. |

> Tip: You can break the portfolio into multiple collections if you prefer stronger typing (e.g., `education`, `projects`, `testimonials`). The UI maps cleanly to the data structures in `src/data/portfolio.tsx`.

### 3. Resume Storage
1. Create a Storage bucket (e.g., `media`).
2. Upload the PDF résumé and copy the **File ID**.
3. Expose a download link either via `storage.getFileDownload(bucketId, fileId)` or by making the file public and pasting the public URL into `NEXT_PUBLIC_RESUME_URL`.

### 4. Consuming Data
When you are ready to swap the static import with dynamic data:
1. Replace the imports from `src/data/portfolio.tsx` with an Appwrite fetch helper (create a server action or edge function).
2. Use the scaffolding in `src/lib/appwrite.ts` to initialise the client and retrieve documents.
3. Shape the documents to the existing component props (or adjust the components to render directly from the Appwrite response).

---

## Deployment on Vercel
1. Push the repository to GitHub.
2. Create a new Vercel project and select the repo.
3. Add the `.env.local` keys to the Vercel project environment.
4. Trigger a build—Vercel will install dependencies and run `next build`.
5. Attach your Appwrite API/service key either via Vercel environment variables or secure edge functions for sensitive operations.

---

## Customisation Checklist
- Replace `public/profile-placeholder.svg` with a professional portrait.
- Update `src/data/portfolio.tsx` as your source of truth until Appwrite is wired.
- Adjust colour accents or motion curves in `globals.css` and `highlight-card.tsx`.
- Extend Appwrite schema (e.g., add `gallery`, `blogs`, `certifications` collections) to expand the site without touching the UI layer.

Enjoy showcasing “Learning Beyond Boundaries – Innovate, Integrate, Inspire.”!

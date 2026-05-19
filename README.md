# Melaku Alehegn — Portfolio

Personal portfolio website for Melaku Alehegn, a Software Engineer (AI/ML) working on agentic AI systems.

## Tech Stack

- Next.js 15 with App Router and TypeScript
- Tailwind CSS v4
- next-themes for dark/light mode
- Framer Motion for animations
- Geist Sans + Geist Mono fonts

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
```

The static export will be generated in the `dist` folder.

## Deployment

### GitHub Pages

The site is a static export (`output: "export"`) and deploys via GitHub Actions.

**Live URL:** https://melakualehegn.com (custom domain, no `/portfolio` in paths)

#### One-time GitHub setup

1. Push this repo to [github.com/MelakuAlehegn/portfolio](https://github.com/MelakuAlehegn/portfolio).
2. On GitHub: **Settings → Pages → Build and deployment**
   - **Source:** GitHub Actions
3. **Settings → Pages → Custom domain** → enter `melakualehegn.com` → Save (GitHub reads `public/CNAME`).
4. Configure DNS at your domain registrar (see below).
5. Push to `main` or `minimalist-ux`, or run **Actions → Deploy to GitHub Pages → Run workflow**.

#### DNS (for melakualehegn.com)

At your registrar, add **one** of these (GitHub shows the exact values under Pages settings):

| Type | Name | Value |
|------|------|--------|
| `A` | `@` | GitHub Pages IPs (four `185.199.x.x` addresses) |
| or `CNAME` | `@` or `www` | `MelakuAlehegn.github.io` |

Use **HTTPS** — enable “Enforce HTTPS” in Pages settings after DNS propagates.

#### Test the production build locally

```bash
npm run build:pages
npx serve dist
```

#### Avoiding `/portfolio` in the URL

GitHub adds `/portfolio` only for project URLs like `username.github.io/portfolio`. To serve from the **root**:

- **Custom domain** (this repo) — `melakualehegn.com` → configured above.
- **Or** rename / use a repo named `MelakuAlehegn.github.io` → `https://melakualehegn.github.io/` with no custom domain.

To test the old subpath build: `NEXT_PUBLIC_BASE_PATH=/portfolio npm run build`.

### Other hosts

You can also deploy the `dist` folder to Vercel, Netlify, or any static host. Use a normal `npm run build` (no `basePath`) when the site is served from the domain root.

## Content

Edit content in `lib/data.ts` to update:
- Projects
- Work experience
- Writing links
- Contact information

# Property Guardian Website

Marketing website for **Property Guardian**, a middle-layer service between landlords and renters.

## Stack
- Next.js (App Router, TypeScript)
- Tailwind CSS v4
- Plausible analytics (optional)
- Vercel-ready configuration

## Local Development
1. Install dependencies:
```bash
npm install
```
2. Create environment file:
```bash
cp .env.example .env.local
```
3. Start development server:
```bash
npm run dev
```
4. Open [http://localhost:3000](http://localhost:3000).

## Environment Variables
| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_CONTACT_PHONE` | Yes | Phone number for call CTA (`E.164` format recommended, e.g. `+15551234567`). |
| `NEXT_PUBLIC_WHATSAPP_URL` | No | WhatsApp URL used as primary CTA (falls back to phone if omitted/invalid). |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | No | Domain used by Plausible analytics script. |

If values are missing, the app uses safe fallbacks so the UI still renders.

## Scripts
- `npm run dev` - Run local development server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript checks
- `npm run build` - Build production bundle
- `npm run start` - Start production server locally

## Vercel Deployment (Git-Based)
1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import the repository in Vercel.
3. Add environment variables from `.env.example` in Vercel Project Settings.
4. Deploy:
   - `main` branch -> production deployment
   - pull requests/feature branches -> preview deployments

No custom server is required; Vercel will use standard `next build` output.

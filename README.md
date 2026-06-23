# GovCon Academy

An educational simulator that teaches users how to start and run a federal government contracting business using SAM.gov.

## Tech Stack

- Next.js 14 (App Router)
- Supabase (auth + database)
- Anthropic SDK (Claude Sonnet for AI mentor Martin Business)
- Tailwind CSS + Shadcn/ui
- Deploy-ready for Vercel

## Local Setup

1. Copy `.env.example` to `.env.local` and fill in your keys:

```bash
cp .env.example .env.local
```

2. Create a Supabase project and run the schema in `supabase/schema.sql`.

3. Install dependencies and run:

```bash
npm install
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

## Publish to GitHub

From the project root:

```bash
chmod +x scripts/publish-to-github.sh
./scripts/publish-to-github.sh
```

If git is missing on macOS, install Xcode Command Line Tools first:

```bash
xcode-select --install
```

The script creates a public repo named `govcon-academy` under your GitHub account and pushes the `main` branch.

## Deploy to Vercel

### Option A — Vercel Dashboard (recommended)

1. Push the repo using the script above (or import manually at [vercel.com/new](https://vercel.com/new)).
2. Import the `govcon-academy` GitHub repository.
3. Vercel auto-detects **Next.js** — no custom build settings needed.
4. Add these environment variables in Project Settings → Environment Variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server only) |
| `ANTHROPIC_API_KEY` | Anthropic API key for Martin Business AI mentor |

5. Click **Deploy**. Future pushes to `main` auto-deploy.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

Add the same environment variables when prompted, or set them in the Vercel dashboard afterward.

## Environment Variables

See `.env.example` for the full list. Never commit `.env.local` — it is gitignored.

# Base Mini App Quickstart

A quickstart template for creating mini-apps on Base using MiniKit.

## Getting Started

### Prerequisites

- Base app account
- [Vercel](https://vercel.com/) account for hosting
- Node.js 18+ installed

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd new-mini-app-quickstart
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Configuration

### Update Manifest Configuration

Edit `minikit.config.ts` to customize your mini-app's manifest:

- `name`: Your app name
- `subtitle`: A short tagline
- `description`: Detailed description
- `screenshotUrls`: Array of screenshot URLs
- `iconUrl`: App icon URL
- `splashImageUrl`: Splash screen image URL
- `heroImageUrl`: Hero image URL
- `tags`: Array of tags for discovery
- `primaryCategory`: Main category (e.g., "social", "gaming")

### Account Association

1. Deploy your app to Vercel
2. Navigate to [Base Build Account Association Tool](https://www.base.dev/preview?tab=account)
3. Paste your domain and follow the verification steps
4. Copy the `accountAssociation` object and update `minikit.config.ts`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Set the environment variable `NEXT_PUBLIC_APP_URL` to your Vercel URL
4. Deploy

The manifest will be available at `https://your-domain.com/.well-known/farcaster.json`

## Project Structure

```
new-mini-app-quickstart/
├── app/
│   ├── .well-known/
│   │   └── farcaster.json/     # Manifest endpoint
│   ├── api/
│   │   └── webhook/            # Webhook handler
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── minikit.config.ts           # MiniKit configuration
├── next.config.js              # Next.js configuration
├── package.json
└── tsconfig.json
```

## Preview Your App

After deployment, preview your app at [base.dev/preview](https://base.dev/preview).

## Publishing

To publish your app, create a post in the Base app with your app's URL.

## Learn More

- [Base Mini Apps Documentation](https://docs.base.org/mini-apps)
- [MiniKit Documentation](https://docs.base.org/mini-apps/features/minikit)
- [Next.js Documentation](https://nextjs.org/docs)


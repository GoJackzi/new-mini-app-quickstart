const ROOT_URL = process.env.NEXT_PUBLIC_APP_URL || 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3001');

export const minikitConfig = {
  accountAssociation: {
    "header": "eyJmaWQiOjI2NjM3MSwidHlwZSI6ImF1dGgiLCJrZXkiOiIweDdGMjUxZjFBOTREMzE4MTQxREZFQkNlM0E3MURFN0Q1MDU4ODg5MkMifQ",
    "payload": "eyJkb21haW4iOiJuZXctbWluaS1hcHAtcXVpY2tzdGFydC1saWFyZC52ZXJjZWwuYXBwIn0",
    "signature": "WNK+RqGoDnVI+ADGZmgEt2fN/jLGj1i4E8Y9KtevrIsVMlBT7vZzMUk9l5ldFrnVL5y+1pikWfpCJJwABDjQxxw="
  },
  miniapp: {
    version: "1",
    name: "Cubey", 
    subtitle: "Your AI Ad Companion", 
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;


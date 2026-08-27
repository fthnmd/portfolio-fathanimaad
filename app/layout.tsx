import type { Metadata } from 'next';
import { IBM_Plex_Mono, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const deploymentHost =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL;

const metadataBase = new URL(
  deploymentHost
    ? deploymentHost.startsWith('http')
      ? deploymentHost
      : `https://${deploymentHost}`
    : 'http://localhost:3000',
);

export const metadata: Metadata = {
  metadataBase,
  title: 'Fathan Imaad | Community & Partnerships Portfolio',
  description:
    'Community management and partnership portfolio featuring experience in Web3 communities, international stakeholder communication, moderation, outreach, negotiation, and collaboration management.',
  applicationName: 'Fathan Imaad Portfolio',
  authors: [{ name: 'Fathan Imaad' }],
  category: 'portfolio',
  keywords: [
    'Fathan Imaad',
    'community management',
    'partnerships',
    'public relations',
    'Web3 community',
    'Discord moderation',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Fathan Imaad | Community & Partnerships Portfolio',
    description:
      'Experience in Web3 community management, moderation, outreach, negotiation, and international written communication.',
    siteName: 'Fathan Imaad Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1730,
        height: 909,
        alt: 'Fathan Imaad — Community Management & Partnerships',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fathan Imaad | Community & Partnerships Portfolio',
    description:
      'Experience in Web3 community management, moderation, outreach, negotiation, and international written communication.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${plexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

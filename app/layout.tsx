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
  title: 'Fathan Imaad | Professional Portfolio',
  description:
    'Final-year Psychology student with experience in academic research, data organization, community operations, collaboration management, structured communication, and team coordination.',
  applicationName: 'Fathan Imaad Portfolio',
  authors: [{ name: 'Fathan Imaad' }],
  category: 'portfolio',
  keywords: [
    'Fathan Imaad',
    'professional portfolio',
    'Psychology student',
    'academic research',
    'data organization',
    'community operations',
    'collaboration management',
    'team coordination',
    'professional communication',
    'research',
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
    title: 'Fathan Imaad — Professional Portfolio',
    description:
      'Final-year Psychology student with experience in research, data organization, community operations, collaboration management, structured communication, and team coordination.',
    siteName: 'Fathan Imaad Portfolio',
    images: [
      {
        url: '/og-professional.png',
        width: 1730,
        height: 909,
        alt: 'Fathan Imaad — research, coordination, communication, and data',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fathan Imaad — Professional Portfolio',
    description:
      'Final-year Psychology student with experience in research, data organization, community operations, collaboration management, structured communication, and team coordination.',
    images: ['/og-professional.png'],
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

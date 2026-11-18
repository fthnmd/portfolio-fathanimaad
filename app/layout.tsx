import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const inter = localFont({ src: '../public/fonts/Inter.ttf', variable: '--font-inter', display: 'swap' });
const playfair = localFont({ src: '../public/fonts/PlayfairDisplay.ttf', variable: '--font-playfair', display: 'swap' });

const deploymentHost = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const metadataBase = new URL(deploymentHost ? (deploymentHost.startsWith('http') ? deploymentHost : `https://${deploymentHost}`) : 'https://fathanimaad.me');

export const metadata: Metadata = {
  metadataBase,
  title: 'Fathan Imaad | Psychology, People & Operations',
  description: 'Portfolio and profile of Fathan Imaad. Academic background in Psychology, coursework in job analysis, and volunteer coordination experience.',
  applicationName: 'Fathan Imaad Portfolio',
  authors: [{ name: 'Fathan Imaad' }],
  keywords: ['Fathan Imaad', 'Psychology', 'People Operations', 'Human Resources', 'Collaboration Management', 'Community Operations', 'Academic Research'],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Fathan Imaad | Psychology, People & Operations',
    description: 'Volunteer experience, academic research, and the coordination behind people-focused work.',
    siteName: 'Fathan Imaad Portfolio',
    images: [{ url: '/og-professional.png', width: 1200, height: 630, alt: 'Fathan Imaad — Psychology, people and operations portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fathan Imaad | Psychology, People & Operations',
    description: 'Volunteer experience, academic research, and the coordination behind people-focused work.',
    images: ['/og-professional.png'],
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${playfair.variable}`}>{children}</body></html>;
}

import type { Metadata } from 'next';
import { Suspense } from 'react';
import localFont from 'next/font/local';

import { Toaster } from '@/components/ui/sonner';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Container from '@/components/container';
import HeaderSkeleton from '@/components/header-skeleton';
import OfflineStatus from '@/components/offline-status';

import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// `VERCEL_URL` is automatically set by Vercel during the build process. It contains the domain of your deployed application (e.g., `eventogo-git-main-yourteam.vercel.app`).
const baseUrlFromEnv =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

const safeBaseUrl = (() => {
  try {
    return new URL(baseUrlFromEnv || 'http://localhost:3000');
  } catch {
    return new URL('http://localhost:3000');
  }
})();

export const metadata: Metadata = {
  metadataBase: safeBaseUrl,
  title: 'Evento — Find events happening around you',
  description: 'Explore more than 10,000 events worldwide',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-y-scroll bg-gray-950 text-white`}
      >
        <OfflineStatus />
        <Toaster position="bottom-right" richColors />
        <Container>
          <Suspense fallback={<HeaderSkeleton />}>
            <Header />
          </Suspense>
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}

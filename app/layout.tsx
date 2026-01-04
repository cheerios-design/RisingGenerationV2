import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RisingGen - Connect, Grow, Unite',
  description: 'A platform for Young Adults (18-35) in Europe to connect, participate, and grow together.',
  keywords: ['young adults', 'europe', 'community', 'events', 'meetups', 'friendship'],
  authors: [{ name: 'RisingGen Team' }],
  openGraph: {
    title: 'RisingGen - Connect, Grow, Unite',
    description: 'Strengthening unity and connection among Young Adults across Europe',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

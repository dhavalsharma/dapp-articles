import '@coinbase/onchainkit/styles.css';
import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CrytoLit',
  description: 'CrytoLit: Decentralised article funding app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background dark">
        <nav>
          <Link href="/">Home</Link>
          <Link href="/create-article">Create Article</Link>
          <Link href="/articles">Articles</Link>
        </nav>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

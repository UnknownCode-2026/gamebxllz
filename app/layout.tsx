import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://gamebxllz.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Anuthit Kalachak | Developer Portfolio',
    template: '%s | Anuthit Kalachak',
  },
  description: 'Portfolio ของ Anuthit Kalachak — Developer & Digital Creator รวมผลงานเว็บไซต์ ระบบหลังบ้าน และโปรเจกต์ดิจิทัล',
  keywords: ['Anuthit Kalachak', 'Developer Portfolio', 'Web Developer', 'Next.js', 'Supabase', 'Thailand Developer'],
  authors: [{ name: 'Anuthit Kalachak' }],
  creator: 'Anuthit Kalachak',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Anuthit Kalachak | Developer Portfolio V2',
    description: 'จากไอเดีย สู่เว็บไซต์และระบบที่ใช้งานได้จริง',
    type: 'website',
    locale: 'th_TH',
    url: siteUrl,
    siteName: 'Anuthit Kalachak Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Anuthit Kalachak | Developer Portfolio V2',
    description: 'Developer & Digital Creator — เว็บไซต์ ระบบหลังบ้าน และโปรเจกต์ดิจิทัล',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body>{children}</body></html>;
}

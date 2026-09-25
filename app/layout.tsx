import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Anuthit Kalachak | Developer Portfolio', description: 'Portfolio ของ Anuthit Kalachak — แนะนำตัว ผลงาน และช่องทางติดต่อร่วมงานด้านเว็บไซต์และระบบดิจิทัล', openGraph: { title: 'Anuthit Kalachak | Developer Portfolio', description: 'จากไอเดีย สู่ประสบการณ์ที่ใช้งานได้จริง', type: 'website', locale: 'th_TH' }, robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="th"><body>{children}</body></html>; }

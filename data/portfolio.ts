export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  role: string;
  technologies: string[];
  source?: string;
  url?: string;
  status?: string;
};

export const portfolio = {
  name: 'Anuthit Kalachak',
  version: '2.0',
  site: 'https://gamebxllz.vercel.app',
  facebook: 'https://www.facebook.com/share/1D8rr7xpzi/',
  github: 'https://github.com/UnknownCode-2026',
  headline: 'จากไอเดีย สู่เว็บไซต์และระบบที่ใช้งานได้จริง',
  intro: 'Developer & Digital Creator ที่สนใจการสร้างเว็บไซต์ ระบบหลังบ้าน และประสบการณ์ดิจิทัลที่ใช้งานง่าย พร้อมพัฒนาไอเดียให้กลายเป็นโปรเจกต์จริง',
  availability: 'พร้อมพูดคุยโปรเจกต์ใหม่',
};

export const skills = [
  { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { category: 'Backend & API', items: ['Node.js', 'PHP', 'REST API', 'Server Actions'] },
  { category: 'Database & Auth', items: ['Supabase', 'PostgreSQL', 'MySQL', 'RLS'] },
  { category: 'Deployment & Tools', items: ['Vercel', 'GitHub', 'Windows Server', 'XAMPP', 'PM2'] },
];

export const projects: Project[] = [
  {
    id: 'nexus-store',
    title: 'Nexus Store',
    category: 'FULL-STACK',
    summary: 'เว็บไซต์ขายไอเทมเกมแบบ Full-Stack พร้อมระบบสมาชิก เครดิต สินค้า Stock และ Admin Dashboard',
    description: 'Nexus Store ถูกพัฒนาสำหรับ Vercel + Supabase โดยมีระบบ Auth, User/Admin roles, Product + Stock, Orders, เครดิต, Storage และ RLS รวมถึงโครงสร้างสำหรับระบบเติมเงินฝั่ง Server',
    role: 'พัฒนาโครงสร้างเว็บไซต์ ระบบผู้ใช้ ระบบหลังบ้าน ฐานข้อมูล และ flow การซื้อสินค้าด้วยเครดิต',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel'],
    source: 'https://github.com/UnknownCode-2026/nexus-store',
    status: 'ACTIVE',
  },
  {
    id: 'mindplay',
    title: 'MindPlay',
    category: 'WEB APP',
    summary: 'แพลตฟอร์มเว็บพร้อม Admin Control Center, Feature Flags, Announcement Manager และระบบควบคุมเกม',
    description: 'MindPlay มีระบบตั้งค่าเว็บไซต์ผ่าน Supabase, เปิด/ปิดฟีเจอร์และเกม, โหมด Maintenance, Analytics สำหรับผู้ดูแล และ Audit Log โดยตรวจสิทธิ์ Admin ผ่าน Supabase Auth และ Edge Function',
    role: 'พัฒนา Admin Control Center และโครงสร้างเชื่อมต่อ Supabase สำหรับควบคุมข้อมูลและการตั้งค่าของเว็บไซต์',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Edge Functions', 'Vercel'],
    source: 'https://github.com/UnknownCode-2026/mindplay',
    status: 'ACTIVE',
  },
  {
    id: 'siamplay',
    title: 'SiamPlay',
    category: 'PLATFORM',
    summary: 'เว็บไซต์รวม Mini Games ภาษาไทยแบบ Mobile First ที่ออกแบบให้เข้าใช้งานง่ายและพร้อมต่อยอดเกมใหม่',
    description: 'SiamPlay เป็นรากฐานแพลตฟอร์ม Mini Games ภาษาไทย มีหน้า Games, Stats, Settings และ About พร้อมสถาปัตยกรรม Next.js + TypeScript + Tailwind CSS และออกแบบสำหรับการ Deploy บน Vercel',
    role: 'วางโครงสร้างแพลตฟอร์ม หน้าใช้งานหลัก และระบบ UI แบบ Mobile First เพื่อรองรับการเพิ่ม Mini Games ในอนาคต',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    source: 'https://github.com/UnknownCode-2026/siamplay',
    status: 'BUILDING',
  },
];

export const services = [
  {
    number: '01',
    icon: '</>',
    title: 'เว็บไซต์และเว็บแอป',
    text: 'พัฒนาเว็บไซต์ Portfolio, เว็บไซต์ธุรกิจ และ Web App ที่เน้นโครงสร้างชัดเจน ใช้งานง่าย และรองรับมือถือ',
  },
  {
    number: '02',
    icon: '{ }',
    title: 'ระบบหลังบ้านและ API',
    text: 'วางระบบสมาชิก Dashboard ฐานข้อมูล API และ workflow ที่ช่วยให้จัดการข้อมูลหรือบริการได้สะดวกขึ้น',
  },
  {
    number: '03',
    icon: '↗',
    title: 'พัฒนาและต่อยอดระบบ',
    text: 'ปรับปรุงเว็บไซต์หรือระบบเดิม แก้ flow การใช้งาน และวางแนวทางสำหรับฟีเจอร์เวอร์ชันถัดไป',
  },
];

export const journey = [
  {
    year: '01',
    title: 'Build the foundation',
    text: 'เริ่มจากการสร้างเว็บไซต์และทดลองระบบที่แก้โจทย์การใช้งานจริง',
  },
  {
    year: '02',
    title: 'Connect the system',
    text: 'ต่อยอดสู่ระบบสมาชิก ฐานข้อมูล API ระบบหลังบ้าน และการ deploy บน production',
  },
  {
    year: '03',
    title: 'Refine the experience',
    text: 'ให้ความสำคัญกับ Mobile UX, ความเร็ว ความชัดเจน และการดูแลระบบในระยะยาว',
  },
];

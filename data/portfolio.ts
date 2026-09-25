export type Project = { id: string; title: string; category: string; summary: string; description: string; role: string; technologies: string[]; image?: string; url?: string; source?: string };
export const portfolio = {
  name: 'Anuthit Kalachak',
  facebook: 'https://www.facebook.com/share/1D8rr7xpzi/',
  github: 'https://github.com/UnknownCode-2026',
  headline: 'จากไอเดีย สู่ประสบการณ์ที่ใช้งานได้จริง',
  intro: 'สวัสดีครับ ผม Anuthit — Developer ที่สนใจการสร้างเว็บไซต์และระบบดิจิทัล พร้อมพูดคุยและแลกเปลี่ยนไอเดียสำหรับโปรเจกต์ของคุณ',
};
// เพิ่มเฉพาะทักษะและผลงานที่ยืนยันแล้ว รายการว่างจะมี empty state ที่สมบูรณ์
export const skills: { category: string; items: string[] }[] = [];
export const projects: Project[] = [];
export const services = [
  { number: '01', icon: '</>', title: 'เว็บไซต์และเว็บแอป', text: 'พูดคุยไอเดียเว็บไซต์ส่วนตัว เว็บไซต์ธุรกิจ หรือเว็บแอปที่เหมาะกับการใช้งานของคุณ' },
  { number: '02', icon: '{ }', title: 'บอทและระบบอัตโนมัติ', text: 'เริ่มต้นจากงานที่คุณอยากให้สะดวกขึ้น แล้วร่วมกันวางขอบเขตบอทและระบบอัตโนมัติ' },
  { number: '03', icon: '↗', title: 'พัฒนาต่อยอดไอเดีย', text: 'แลกเปลี่ยนแนวทางปรับปรุงเว็บไซต์และระบบเดิม เพื่อกำหนดสิ่งที่ควรพัฒนาต่อไป' },
];

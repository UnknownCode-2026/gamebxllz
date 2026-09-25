# Anuthit Kalachak — Portfolio V2

Portfolio ส่วนตัวเวอร์ชัน 2 พัฒนาด้วย Next.js App Router + TypeScript + Tailwind CSS และออกแบบแบบ Thai-first / responsive.

## V2 highlights

- Hero ใหม่พร้อม availability badge และ Portfolio V2 identity card
- Portfolio summary / stats
- เพิ่ม Skills & Toolbox ที่ใช้งานจริง
- เพิ่มผลงานจริงจาก GitHub: Nexus Store, MindPlay และ SiamPlay
- Project filter + Project detail dialog + Source Code links
- เพิ่ม Journey section
- ปรับ Services และ development process
- Contact section พร้อม GitHub + Facebook
- ปรับ UI dark/blue, glow, cards, hover interactions และ mobile polish
- SEO metadata, canonical URL, sitemap.xml และ robots.txt
- รองรับ prefers-reduced-motion

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel

## Run

```sh
npm install
npm run dev
npm run build
npm start
```

## Edit portfolio content

ข้อมูลหลักอยู่ใน `data/portfolio.ts`:

- profile / social links
- skills
- projects
- services
- journey

เพิ่มผลงานใหม่ผ่าน `projects` โดยระบุ title, category, summary, description, role, technologies และ source/url ตามต้องการ.

## Deployment

เว็บไซต์ production: https://gamebxllz.vercel.app

Repository: https://github.com/UnknownCode-2026/gamebxllz

สำหรับ Vercel ให้เชื่อม repository นี้และใช้ branch `main` เป็น production.

Git integration verified for Portfolio V2 automatic production deployments.

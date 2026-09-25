# Anuthit Kalachak — Portfolio V1

Next.js App Router + TypeScript + Tailwind CSS. Thai-first, responsive dark/blue developer portfolio.

## Run
Node.js 22+ recommended.
```sh
npm install
npm run dev
npm run build
npm start
```

## Edit content
Edit `data/portfolio.ts` to change the name, biography, Facebook URL, services, verified skills and projects. Skills and projects are intentionally empty until real information is supplied. The toolbox labels the technology used by this website, not personal skill claims. No fictional experience, clients or testimonials are shown.

Add project objects with `id`, `title`, `category`, `summary`, `description`, `role`, `technologies`; optional `image` (local path under public), `url`, `source`. Categories populate automatically. The project dialog supports Escape, native focus trapping and focus restoration. Place images under `public/images`. If remote images are used, explicitly configure allowed remote image hosts in next.config.ts.

## Vercel
Import `UnknownCode-2026/gamebxllz`, select Next.js, root directory `./`, build command `npm run build`, default output. No database, secrets or API keys required. Connecting GitHub enables subsequent push-triggered deployments. Connector file-upload deployments do not themselves guarantee a Git integration.

## Scope
Responsive navigation, hero, about, toolbox, project filtering/detail dialog, service discussions, workflow, Facebook/GitHub links, metadata, favicon and reduced-motion support. No contact form, fabricated projects, authentication, payment system or admin panel.

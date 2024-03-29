# Cheap Stack: Astro With Typescript, React, Tailwind, Shadcn UI and Pocketbase 

> [!CAUTION]  
> This boilerplate is still work in progress and expect any breaking changes will occured.

This is a mono repo that consist of frontend and backend with stack:

- Astro (Typescript)
- React
- Tailwind CSS + Shadcn UI
- Pocketbase
- Docker

Use this repo as a template. You can also setup [`action-template-sync`](https://github.com/marketplace/actions/actions-template-sync) to update template with already created repo (since it's different with repo forking).

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── app/
│   │   ├── ui/
│   │   └── InteractiveComponent.tsx
│   ├── layouts/
│   │   ├── BlogPage.astro
│   │   ├── DashboardPage.astro
│   │   └── LandingPage.astro
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   └── index.astro
│   ├── services/backend/
│   │   ├── pocketbase.ts
│   │   └── pocketbase-types.ts
│   ├── styles/
│   │   └── global.css
│   └── types/
│       └── pages.ts
├── .env
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Pocketbase Backend

Go to `backend` folder and copy `.env.example` to `.env`. 

Using docker locally

```bash
docker build -t cheapstack/backend .
docker run --env-file .env --rm -p 8080:8080 cheapstack/backend
```
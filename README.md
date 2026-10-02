# nathansparks.dev

Personal site of Nwankwonta Chiemena: web products and machine-learning research.
React + Vite, deployed on Vercel.

## Run locally

    npm install
    npm run dev

Open http://localhost:5173

## Edit content

All text, projects, research results and links live in `src/data/index.js`.
Links left as `''` are hidden automatically.

- Add LinkedIn: set `profile.linkedin`
- Add a CV: put the PDF in `/public`, then set `profile.cv` to e.g. `'/Nathan-Sparks-CV.pdf'`
- Add a project screenshot: put the image in `/public/work/`, then set that project's `image`
- Link a project's code: set its `repo` to the repository URL

## Pages

- `/`            Home: selected work, AI and machine learning, services, about, contact
- `/work`        All projects
- `/work/:slug`  Case study for one project

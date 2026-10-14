# Rashid Liaquat, portfolio (Astro)

## Run on your computer
Needs Node.js 22.12 or newer (nodejs.org, LTS).

    npm install
    npm run dev        # opens http://localhost:4321
    npm run build      # makes the finished site in dist/
    npm run preview    # shows the built site

## Where things are
- `src/data/projects.js`  all text: research, projects, skills, links, photo and CV settings
- `src/pages/index.astro`  page layout and styles
- `src/components/ProjectCard.astro`  one project entry
- `public/photo.jpg`  your photo (replace the file to change it)
- `public/img/`  project figures

## Add the CV and email later
1. Put the PDF at `public/cv.pdf`, then in `src/data/projects.js` set `cvUrl: "/cv.pdf"`.
2. To show an email button, set `email: "you@example.com"` in the same place.

## Deploy free on Vercel
1. Create a GitHub repo (for example `portfolio`) and push this folder to it.
2. Go to vercel.com, sign in with GitHub, click Add New > Project, pick the repo.
3. Vercel detects Astro. Leave the defaults and click Deploy.
4. Every push to `main` redeploys the site. Add the link to LinkedIn (Featured), GitHub and your CV.

## Update when results arrive
Thesis projects say "In progress". When a result exists, add it to the project's `summary` or `metrics` in `src/data/projects.js`.

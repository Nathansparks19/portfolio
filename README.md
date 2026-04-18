# chiemena.dev — Portfolio

A dark, techy portfolio built with React + Vite. Features animated project cards, filterable projects page, profile photo section, and a live contact form via EmailJS.

---

## STEP-BY-STEP SETUP GUIDE

### STEP 1 — Unzip and install

```bash
unzip portfolio.zip
cd portfolio
npm install
npm run dev
```

Open http://localhost:5173 — you should see your portfolio running.

---

### STEP 2 — Add your profile photo

1. Take or find a good photo of yourself (portrait orientation works best — 3:4 ratio)
2. Rename the file to `profile.jpg`
3. Drop it into the `public/` folder:
   ```
   portfolio/
   └── public/
       └── profile.jpg  ← put it here
   ```
4. Save. Your photo will appear automatically in the About section.

> Tip: If your photo is a PNG, rename it `profile.png` and update the `src` in
> `src/pages/Home.jsx` line ~55 from `/profile.jpg` to `/profile.png`

---

### STEP 3 — Wire up the contact form (EmailJS — free, no backend needed)

EmailJS lets the form send emails directly from the browser. Free tier = 200 emails/month.

#### 3a. Create your EmailJS account
1. Go to https://www.emailjs.com and click **Sign Up** (it's free)
2. Verify your email and log in

#### 3b. Connect your email
1. In the EmailJS dashboard, click **Email Services** → **Add New Service**
2. Choose **Gmail** (or any email you use)
3. Click **Connect Account** and authorize Gmail
4. Name the service anything (e.g. `portfolio_service`)
5. Click **Create Service** → you'll get a **Service ID** like `service_abc123` — copy it

#### 3c. Create an email template
1. Click **Email Templates** → **Create New Template**
2. In the template editor, set it up like this:

   **Subject:**
   ```
   New portfolio message from {{name}}
   ```

   **Body:**
   ```
   You have a new message from your portfolio!

   Name: {{name}}
   Email: {{email}}
   Project type: {{project_type}}

   Message:
   {{message}}
   ```

3. Click **Save** → you'll get a **Template ID** like `template_xyz789` — copy it

#### 3d. Get your Public Key
1. In the EmailJS dashboard, go to **Account** → **General**
2. Copy your **Public Key** (looks like `user_AbCdEfGhIjK`)

#### 3e. Paste the values into your code
Open `src/pages/Home.jsx` and find these lines near the top (around line 9–11):

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
```

Replace with your real values:

```js
const EMAILJS_SERVICE_ID  = 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'user_AbCdEfGhIjK'
```

Save. Test by filling out the contact form — you should receive an email!

---

### STEP 4 — Update your personal info

Everything to edit lives in two files:

**`src/data/index.js`** — edit your projects, services, and tech stack
- Update `link` and `github` URLs for each project
- Set `featured: true` on the 2 projects you want on the homepage
- Add new projects by copying an existing object

**`src/pages/Home.jsx`** — edit your bio text, email, and contact links
- Search for `hello@chiemena.dev` and replace with your real email
- Update the GitHub link
- Edit the bio paragraphs in the `// RIGHT — bio + stack` section

---

### STEP 5 — Deploy to Vercel (free, takes 3 minutes)

#### Option A — Push to GitHub first (recommended)

1. Create a new repo on https://github.com/new (name it `portfolio`)
2. In your terminal, inside the portfolio folder:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
3. Go to https://vercel.com → **Add New Project**
4. Click **Import** next to your `portfolio` repo
5. Vercel auto-detects Vite — don't change any settings
6. Click **Deploy** — it'll be live in ~60 seconds!
7. You'll get a URL like `https://portfolio-xyz.vercel.app`

#### Option B — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```
Follow the prompts. Done.

---

### STEP 6 — Connect a custom domain (optional)

If you own `chiemena.dev` or any domain:

1. In your Vercel project → **Settings** → **Domains**
2. Type your domain and click **Add**
3. Vercel shows you DNS records to add (usually an A record or CNAME)
4. Go to your domain registrar (Namecheap, GoDaddy, etc.) and add those records
5. Wait 5–30 minutes for DNS to propagate — your site is live on your domain!

---

## Project Structure (for reference)

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed nav, mobile hamburger menu, scroll blur
│   ├── ProjectCard.jsx     # Animated card with accent top-border on hover
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx            # Hero, About+Photo, Projects, Services, Contact
│   └── Projects.jsx        # All projects with category filter tabs
├── data/
│   └── index.js            # ← EDIT YOUR PROJECTS AND SERVICES HERE
├── index.css               # Global CSS tokens and utility classes
└── App.jsx                 # Router + page transition wrapper
public/
└── profile.jpg             # ← DROP YOUR PHOTO HERE
vercel.json                 # SPA routing config (don't delete this)
```

---

## Quick Customisation Cheat Sheet

| What to change | Where |
|---|---|
| Projects & links | `src/data/index.js` |
| Bio text | `src/pages/Home.jsx` (About section) |
| Your email address | `src/pages/Home.jsx` (Contact section) |
| Profile photo | `public/profile.jpg` |
| EmailJS keys | `src/pages/Home.jsx` (top of file, lines 9–11) |
| Color accent | `src/index.css` → `--accent` variable |
| Nav logo text | `src/components/Navbar.jsx` |

---

Built by Chiemena · github.com/Nathansparks19

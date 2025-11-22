# Modern Developer Portfolio

A clean, modern, and responsive developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment:** GitHub Pages

## 🛠️ Installation

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Customization

1.  **Update Personal Data:**
    Edit `data/portfolio.ts` to update your name, role, description, skills, projects, and experience.

2.  **Update Images:**
    Replace the placeholder images in `data/portfolio.ts` with your own project screenshots.
    Add your resume PDF to the `public` folder and update the link in `data/portfolio.ts`.

3.  **Update Colors:**
    Edit `app/globals.css` to change the CSS variables for the theme colors.

## 🌍 Deployment to GitHub Pages

This project is configured for static export, which is perfect for GitHub Pages.

### Option 1: Manual Deployment

1.  **Build the project:**

    ```bash
    npm run build
    ```

    This will create an `out` directory with the static files.

2.  **Deploy:**
    -   Push the contents of the `out` directory to a `gh-pages` branch, or
    -   Configure GitHub Pages in your repository settings to serve from the `main` branch (if this is a user site `username.github.io`) or a `docs` folder.

### Option 2: GitHub Actions (Recommended)

1.  Push this code to your GitHub repository.
2.  Go to **Settings** > **Pages**.
3.  Under **Build and deployment**, select **GitHub Actions** as the source.
4.  GitHub will suggest a Next.js workflow. Click **Configure**.
5.  Commit the workflow file.
6.  Your site will automatically build and deploy!

### Important Note for User Sites (`username.github.io`)

If you are deploying to `username.github.io`, the default configuration in `next.config.js` works perfectly.

If you are deploying to a project site (`username.github.io/repo-name`), you need to add the `basePath` to `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/repo-name', // Add this line
};

module.exports = nextConfig;
```

## 📂 Folder Structure

```
.
├── app/                  # App Router pages and layout
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/               # Reusable UI components (Button, Card, etc.)
│   ├── navbar.tsx        # Navigation bar
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── projects.tsx      # Projects section
│   ├── experience.tsx    # Experience section
│   ├── contact.tsx       # Contact section
│   └── theme-provider.tsx # Dark mode provider
├── data/                 # Static data
│   └── portfolio.ts      # Portfolio content
├── lib/                  # Utilities
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── ...config files
```

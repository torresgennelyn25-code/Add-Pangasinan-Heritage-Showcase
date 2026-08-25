# Pangasinan Heritage Digital Showcase

## Activity 2 — Static Site Generation and GitHub Pages

**Student Name:** Gennelyn Torres  
**Selected Framework:** Next.js 14 (App Router)  
**Deployment Approach:** Static Site Generation (SSG) + GitHub Pages

### Live Website
`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

### Project Overview
A mobile-first, accessible and lightweight digital showcase for Pangasinan heritage destinations including Hundred Islands, Bolinao Lighthouse and Balungao Hot Spring. The project preserves the Atomic Design component structure from Activity 1.

### SSG Implementation
The project uses `output: "export"` in `next.config.mjs`. Running `npm run build` generates the static website in the `out/` directory. No Node.js server is required to serve the generated site.

### GitHub Pages
A GitHub Actions workflow is included at `.github/workflows/deploy.yml`. After pushing this project to a public GitHub repository:

1. Create a repository on GitHub.
2. Push this project to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Set the Pages source to **GitHub Actions**.
5. Wait for the workflow named **Deploy Next.js static site to GitHub Pages** to complete.
6. Open the URL shown by the Pages deployment.
7. Replace the placeholder Live Website URL above with the actual URL.

### Local development
```bash
npm install
npm run dev
```

### Static production build
```bash
npm run build
```

The generated static site is written to `out/`.

### Quality checks
Before submission, verify that the GitHub Pages website loads, all pages/navigation work, images/assets load, responsive layouts work, and there are no major broken links or missing resources. Then run Chrome Lighthouse for Performance, Accessibility, Best Practices and SEO.

### Activity 2 submission
- GitHub Repository Link: **replace with actual public repository URL**
- GitHub Pages Link: **replace with actual deployed URL**
- Lighthouse Results: `documentation/Lighthouse-Audit-Results.pdf`

# Warning Light Finder

Car dashboard symbols and warning light meanings — [warninglightfinder.com](https://warninglightfinder.com)

## Local development

```bash
yarn install
yarn dev
```

## Deploy to production

This project is not connected to Vercel Git integration. Pushing to GitHub alone does **not** update the live site. After committing, run Vercel CLI to deploy:

```bash
git add .
git commit -m "..."
git push origin master    # 只更新 GitHub

vercel --prod             # 这一步才会更新线上网站
```

Production URL: https://warninglightfinder.com

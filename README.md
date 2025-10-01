# Cakes by Janneke

Single-page React website for a boutique cake studio.

## Run locally
```bash
npm start
```

## Build
```bash
npm run build
```

## Pages
- Home
- Cakes/Menu
- Gallery
- Custom Orders
- About
- Testimonials
- FAQ
- Contact

Built with React 18 + react-router v6.

## Deploy to GitHub Pages

1) In `package.json`, set `homepage` to `https://<your-username>.github.io/<your-repo>`.

2) Push this project to a GitHub repository named `<your-repo>`.

3) Deploy:

```bash
npm run deploy
```

This builds the project and publishes the `build/` directory to the `gh-pages` branch. The app uses HashRouter to avoid 404s on refresh.

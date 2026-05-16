# INTERGEN

Static Astro site for the INTERGEN academic project.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

In GitHub, set **Settings -> Pages -> Build and deployment -> Source** to **GitHub Actions**. Pushing to `main` will build and publish `dist/`.

The Astro config is set for:

```txt
https://antonov-denis.github.io/intergen
```

No repository variables are required.

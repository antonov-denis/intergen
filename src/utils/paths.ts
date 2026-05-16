export const withBase = (path: string) => {
  // Required while hosting this as a GitHub Pages project site, where assets
  // live under /<repo-name>/. If the site moves to a root domain later, this
  // helper can be removed and paths can go back to normal root-relative URLs.
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
};

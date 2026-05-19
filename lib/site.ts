/** Base path when deployed to GitHub Pages (e.g. /portfolio). Empty for local dev or root hosting. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix absolute public asset paths for GitHub Pages subpath hosting. */
export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

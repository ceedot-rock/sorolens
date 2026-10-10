const SITE_URL_FALLBACK = "https://sorolens.dev";

/**
 * Canonical origin of the web app, with no trailing slash.
 *
 * Single source of truth for the public site URL used by `sitemap.ts`,
 * `robots.ts`, and the `metadataBase` in `app/layout.tsx`, so production
 * can never emit mismatched URLs across them.
 *
 * Configure with the `NEXT_PUBLIC_SITE_URL` environment variable
 * (see `.env.example`); falls back to the production origin.
 */
export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL_FALLBACK).replace(
    /\/$/,
    ""
  );
}

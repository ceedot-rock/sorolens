/**
 * Base URL of the Sorolens API (Go backend).
 *
 * Single source of truth for the API origin used across the web app.
 * Override with the `NEXT_PUBLIC_API_URL` environment variable;
 * defaults to the local development server.
 */
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

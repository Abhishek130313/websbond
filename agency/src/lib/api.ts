// Central API client utility to handle connections between React frontend and Spring Boot backend
const API_BASE_URL = import.meta.env.VITE_API_URL || "";

/**
 * Returns a normalized, environment-aware API URL for fetching backend routes.
 * Prepend VITE_API_URL if configured, otherwise falls back to relative domain proxy.
 */
export const getApiUrl = (path: string): string => {
  const base = API_BASE_URL.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
};

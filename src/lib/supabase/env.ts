/**
 * Supabase public client config.
 * Supports legacy anon JWT keys and newer Supabase publishable keys.
 */
export function getSupabasePublicConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";

  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ||
    "";

  return {
    url,
    anonKey,
    isConfigured: Boolean(url && anonKey),
  };
}

export function assertSupabasePublicConfig() {
  const config = getSupabasePublicConfig();

  if (config.isConfigured) return config;

  throw new Error(
    "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local in the project root, then restart the dev server (npm run dev)."
  );
}

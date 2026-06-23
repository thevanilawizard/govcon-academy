import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import { assertSupabasePublicConfig, getSupabasePublicConfig } from "./env";

let browserClient: SupabaseClient | undefined;

export function createClient(): SupabaseClient {
  const { url, anonKey } = assertSupabasePublicConfig();

  if (!browserClient) {
    browserClient = createBrowserClient(url, anonKey);
  }

  return browserClient;
}

export function isSupabaseConfigured(): boolean {
  return getSupabasePublicConfig().isConfigured;
}

import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;
const { combinedEnv } = loadEnvConfig(process.cwd());

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SUPABASE_URL: combinedEnv.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      combinedEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      combinedEnv.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  },
};

export default nextConfig;

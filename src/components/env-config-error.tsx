import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function EnvConfigError() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white">
      <Card className="max-w-lg w-full">
        <CardHeader>
          <CardTitle>Supabase configuration required</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            The app could not read your Supabase URL or API key. Add these to{" "}
            <code className="text-foreground">.env.local</code> in the project root:
          </p>
          <pre className="p-3 rounded-lg bg-muted text-xs overflow-x-auto text-foreground">
{`NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-or-publishable-key`}
          </pre>
          <p>
            Find both values in Supabase → Project Settings → API (use the{" "}
            <strong className="text-foreground">anon public</strong> or{" "}
            <strong className="text-foreground">publishable</strong> key).
          </p>
          <p>
            After saving <code className="text-foreground">.env.local</code>, restart the dev
            server: stop it, then run <code className="text-foreground">npm run dev</code> again.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

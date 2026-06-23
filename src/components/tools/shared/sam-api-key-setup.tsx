"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSamGovApiKey, setSamGovApiKey } from "@/lib/tools/storage";

export function SamApiKeySetup({ compact }: { compact?: boolean }) {
  const [key, setKey] = useState(() => getSamGovApiKey());
  const [saved, setSaved] = useState(false);

  if (compact && key) return null;

  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">
          SAM.gov API setup (free — takes ~2 minutes)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground text-xs leading-relaxed">
          <li>Go to <a href="https://api.sam.gov" target="_blank" rel="noopener noreferrer" className="text-primary underline">api.sam.gov</a> and create a free account</li>
          <li>Request a public API key under &quot;Account Details&quot;</li>
          <li>Paste your key below — stored locally in your browser only</li>
        </ol>
        <div className="flex gap-2">
          <Input
            type="password"
            placeholder="Paste SAM.gov API key"
            value={key}
            onChange={(e) => {
              setKey(e.target.value);
              setSaved(false);
            }}
          />
          <Button
            size="sm"
            onClick={() => {
              setSamGovApiKey(key);
              setSaved(true);
            }}
          >
            Save
          </Button>
        </div>
        {saved && <p className="text-xs text-emerald-700">API key saved locally.</p>}
        {!key && (
          <p className="text-xs text-amber-700">
            Without an API key, simulated opportunities still work. Add a key to unlock live SAM.gov search.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

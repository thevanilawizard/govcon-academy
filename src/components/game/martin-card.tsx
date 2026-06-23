export function MartinAvatar({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "h-8 w-8 text-xs", md: "h-10 w-10 text-sm", lg: "h-12 w-12 text-base" };
  return (
    <div className={`${sizes[size]} rounded-full bg-martin flex items-center justify-center text-white font-medium shrink-0`}>
      MB
    </div>
  );
}

export function MartinSkeleton() {
  return (
    <div className="space-y-2 py-2">
      <div className="h-3 bg-muted rounded animate-pulse" style={{ width: "80%" }} />
      <div className="h-3 bg-muted rounded animate-pulse" style={{ width: "65%" }} />
      <div className="h-3 bg-muted rounded animate-pulse" style={{ width: "40%" }} />
    </div>
  );
}

export function MartinCard({
  content,
  loading,
  trigger,
}: {
  content: string;
  loading?: boolean;
  trigger?: string;
}) {
  return (
    <div className="flex gap-3 p-4 rounded-lg border bg-white">
      <MartinAvatar />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium">Martin Business</span>
          {trigger && (
            <span className="text-xs text-muted-foreground capitalize">
              {trigger.replace(/_/g, " ")}
            </span>
          )}
        </div>
        {loading ? (
          <MartinSkeleton />
        ) : (
          <p className="text-sm text-foreground leading-relaxed">{content}</p>
        )}
      </div>
    </div>
  );
}

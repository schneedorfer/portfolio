export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-8 font-mono text-[12.5px] text-muted-foreground">
      {children}
    </p>
  );
}

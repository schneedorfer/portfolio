export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 font-mono text-[12.5px] font-normal text-muted-foreground">
      {children}
    </h2>
  );
}

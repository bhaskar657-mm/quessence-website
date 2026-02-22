export default function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-bold text-[var(--q-badge-text)] tracking-[2px] uppercase">
      {children}
    </span>
  );
}

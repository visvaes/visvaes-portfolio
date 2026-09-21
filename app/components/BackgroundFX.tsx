export function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-dot bg-dot-1" />
      <div className="bg-dot bg-dot-2" />
      <div className="bg-dot bg-dot-3" />
      <div className="bg-dot bg-dot-4" />
    </div>
  );
}

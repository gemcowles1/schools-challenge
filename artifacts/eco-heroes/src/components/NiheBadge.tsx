export function NiheBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute top-3 right-3 z-10 bg-white rounded-xl px-2 py-1 shadow-md border border-gray-100 opacity-90 ${className}`}>
      <img
        src="/nihe-logo.jpg"
        alt="NI Housing Executive"
        className="h-8 w-auto object-contain"
      />
    </div>
  );
}

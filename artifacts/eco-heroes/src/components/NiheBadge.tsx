export function NiheBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute top-0 left-0 right-0 z-10 bg-white border-b-2 border-gray-100 flex items-center px-4 py-1.5 ${className}`}>
      <img
        src="/nihe-logo.jpg"
        alt="NI Housing Executive"
        className="h-7 w-auto object-contain"
      />
      <span className="ml-3 text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:block">
        NI Housing Executive / NIEAS Energy Awareness Programme
      </span>
    </div>
  );
}

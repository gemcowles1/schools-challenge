export function NiheBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute top-0 left-0 right-0 z-10 bg-white border-b-2 border-gray-100 flex items-center px-4 py-3 ${className}`}>
      <img
        src="/nihe-logo.jpg"
        alt="NI Housing Executive"
        className="h-40 w-auto object-contain"
      />
    </div>
  );
}

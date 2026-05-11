export function NiheBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative z-10 bg-white border-b-2 border-gray-100 flex items-center px-4 py-3 ${className}`}>
      <img
        src="/nihe-logo.jpg"
        alt="NI Housing Executive"
        className="h-[35px] w-auto object-contain"
      />
    </div>
  );
}

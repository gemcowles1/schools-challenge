export function NiheBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative z-10 bg-white border-b-2 border-gray-100 flex items-center justify-between px-4 py-3 ${className}`}>
      <img
        src="/nihe-logo.jpg"
        alt="NI Housing Executive"
        className="h-[60px] w-auto object-contain"
      />
      <img
        src="/niseeap-logo.jpg"
        alt="NI Schools Energy Efficiency Awareness Programme"
        className="h-[100px] w-auto object-contain"
      />
    </div>
  );
}

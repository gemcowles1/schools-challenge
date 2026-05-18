export function NiheBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative z-10 bg-white border-b-2 border-gray-100 flex items-center justify-between px-8 py-3 ${className}`}>
      <img
        src="/nihe-logo.jpg"
        alt="NI Housing Executive"
        className="h-[60px] w-auto object-contain"
      />
      <div className="text-center px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Sponsored by<br />NI Energy Advice Service</p>
        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-wide text-gray-800 leading-tight">
          Schools Energy<br />Competition
        </h2>
      </div>
      <img
        src="/niseeap-logo.jpg"
        alt="NI Schools Energy Efficiency Awareness Programme"
        className="h-[200px] w-auto object-contain"
      />
    </div>
  );
}

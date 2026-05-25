export function NiheBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative z-10 bg-white border-b-2 border-gray-100 flex items-center justify-between px-2 md:px-8 py-3 ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}eco-heroes-export/images/nihe-logo.jpg`}
        alt="NI Housing Executive"
        className="h-[40px] md:h-[60px] w-auto object-contain flex-shrink-0"
      />
      <div className="text-center px-2 md:px-4 flex-1 min-w-0">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Sponsored by<br /><span className="whitespace-nowrap">NI Energy Advice Service</span></p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-wide text-gray-800 leading-tight whitespace-nowrap">
          Schools Energy Competition
        </h2>
      </div>
      <img
        src={`${import.meta.env.BASE_URL}eco-heroes-export/images/niseeap-logo.jpg`}
        alt="NI Schools Energy Efficiency Awareness Programme"
        className="hidden sm:block h-[80px] md:h-[200px] w-auto object-contain flex-shrink-0"
      />
    </div>
  );
}

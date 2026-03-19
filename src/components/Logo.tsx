export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="h-6 w-6 sm:h-7 sm:w-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="6" fill="#FF6B00" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="Inter, Arial, sans-serif"
          fontWeight="900"
          fontSize="16"
          fill="#1a1a1a"
        >
          TE
        </text>
      </svg>
      <span className="text-base font-black tracking-tight sm:text-lg">
        <span className="text-orange">TOOL</span>
        <span className="text-foreground">EXECUTIVE</span>
      </span>
    </div>
  );
}

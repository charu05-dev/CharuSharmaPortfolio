import React, { useState } from 'react';
import { TechLogo } from './TechLogos';

export const Sticker = ({
  name,
  role,
  color = "sunburst",
  tilt = "0deg",
  size = "md",
  logo,
  className = "",
  interactive = true,
  onClick,
  showTooltip = true,
  badge
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Slush solid color mapping
  const colorMap = {
    sunburst: "bg-[#ffd731] text-[#000000]",
    mint: "bg-[#55db9c] text-[#000000]",
    lavender: "bg-[#e9ccff] text-[#000000]",
    electric: "bg-[#4da2ff] text-[#000000]",
    ember: "bg-[#fb4903] text-[#ffffff]",
    violet: "bg-[#5c4ade] text-[#ffffff]",
    sky: "bg-[#dceeff] text-[#000000]",
    mist: "bg-[#e9e9e9] text-[#000000]",
    concrete: "bg-[#cccccc] text-[#000000]",
    paper: "bg-[#ffffff] text-[#000000]",
    carbon: "bg-[#000000] text-[#ffffff]"
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs font-bold gap-1.5",
    md: "px-4 py-2 text-sm font-bold gap-2",
    lg: "px-5 py-2.5 text-base font-extrabold gap-2.5",
    xl: "px-6 py-3 text-lg font-black gap-3"
  };

  const bgClasses = colorMap[color] || colorMap.sunburst;

  return (
    <div 
      className={`relative inline-block select-none group ${className}`}
      style={{ transform: `rotate(${tilt})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className={`
          flex items-center rounded-pill border-[1.5px] border-carbon 
          shadow-[3px_3px_0px_#000000] 
          transition-all duration-200 ease-out cursor-pointer
          ${bgClasses}
          ${sizeClasses[size] || sizeClasses.md}
          ${interactive ? 'hover:-translate-y-1 hover:translate-x-0.5 hover:shadow-[5px_5px_0px_#000000] active:translate-y-0.5 active:shadow-[1px_1px_0px_#000000]' : ''}
        `}
      >
        {logo && (
          <span className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
            <TechLogo name={logo} className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />
          </span>
        )}
        <span className="font-display tracking-tight uppercase">{name}</span>
        {badge && (
          <span className="ml-1 px-1.5 py-0.5 text-[10px] uppercase font-black bg-carbon text-paper rounded-full border border-carbon">
            {badge}
          </span>
        )}
      </div>

      {/* Role Tooltip in tactile sticker bubble */}
      {showTooltip && role && isHovered && (
        <div 
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none animate-in fade-in zoom-in-90 duration-150"
          style={{ transform: `translateX(-50%) rotate(calc(-1 * ${tilt}))` }}
        >
          <div className="bg-carbon text-paper text-xs px-3 py-1.5 rounded-card border-[1.5px] border-paper shadow-[3px_3px_0px_#000000] whitespace-nowrap font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sunburst inline-block"></span>
            <span>{role}</span>
          </div>
          {/* Bubble triangle pointer */}
          <div className="w-2 h-2 bg-carbon border-r-[1.5px] border-b-[1.5px] border-paper rotate-45 mx-auto -mt-1"></div>
        </div>
      )}
    </div>
  );
};

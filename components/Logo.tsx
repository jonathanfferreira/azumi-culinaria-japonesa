import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`relative inline-flex items-center justify-center border-2 border-current rounded-full font-japanese select-none ${className}`}>
      <div className="flex flex-col items-center justify-center leading-none pt-0.5 w-full h-full">
        <span className="block font-black mb-[-0.15em] text-[0.85em]">安</span>
        <span className="block font-black mt-[-0.05em] text-[0.85em]">曇</span>
      </div>
    </div>
  );
};

export default Logo;
import React from 'react';

interface MentorExLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const MentorExLogo: React.FC<MentorExLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const heightClasses = {
    // Increased navbar logo size
    sm: 'h-11 sm:h-12 md:h-14',

    md: 'h-11 sm:h-12 md:h-14',

    lg: 'h-16 sm:h-18 md:h-20',

    xl: 'h-20 sm:h-24 md:h-28',

    '2xl': 'h-28 sm:h-32 md:h-36',
  };

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
    >
      <img
        src="/mentorex-digital.png"
        alt="MentorEx Digital — A Digital Choice."
        className={`
          ${heightClasses[size]}
          w-auto
          max-w-full
          object-contain
          transition-all
          duration-300
          group-hover:scale-[1.04]
          drop-shadow-[0_2px_16px_rgba(56,189,248,0.25)]
          hover:drop-shadow-[0_4px_24px_rgba(249,115,22,0.35)]
        `}
        onError={(e) => {
          const target = e.currentTarget;

          if (!target.src.endsWith('.svg')) {
            target.src = '/images/mentorex-logo.svg';
          }
        }}
      />
    </div>
  );
};
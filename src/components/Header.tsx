import React from 'react';

interface HeaderProps {
  onQuickRead: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onQuickRead }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FBFBFA]/90 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-[#001090] transition-colors"
        >
          Decathlon Digital <span className="font-normal text-stone-500 font-serif-editorial">/ Tech Review</span>
        </a>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
          <a href="#genese" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Genèse & Défi
          </a>
          <a href="#architecture" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Multi-Cloud
          </a>
          <a href="#rfid" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            RFID & Edge
          </a>
          <a href="#github-ecosystem" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            GitHub & GitOps
          </a>
          <a href="#green-it" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Green IT
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={onQuickRead}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#001090] rounded-lg hover:bg-[#000d70] active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
          >
            Explorer l'Architecture
          </button>
        </div>
      </div>
    </header>
  );
};

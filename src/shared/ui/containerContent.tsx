'use client';

import { useState } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';

interface ContainerContentProps {
  children: React.ReactNode;
  title?: string;
  isCollapsible?: boolean;
  width?: string;
  className?: string;
}

export const ContainerContent = ({
  children,
  title,
  isCollapsible = false,
  width = '100%',
  className,
}: ContainerContentProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleExpand = () => {
    if (isCollapsible) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`bg-white px-8 py-6 rounded-lg shadow-sm ${className}`} style={{ width }}>
      <div
        className={`relative flex items-center justify-center transition-all duration-400 ${
          isOpen ? 'mb-4' : ''
        }`}
      >
        {title && (
          <h3 className="text-lightpurple font-semibold text-2xl uppercase transition-all duration-400">
            {title}
          </h3>
        )}
        {isCollapsible && (
          <button
            onClick={toggleExpand}
            className="p-1 absolute right-0 text-graybutton hover:text-lightpurple transition-all cursor-pointer "
            aria-label={isOpen ? 'Recolher' : 'Expandir'}
          >
            <BiSolidDownArrow
              className={`hover:text-lightpurple transition duration-400 ${
                isOpen ? '' : 'rotate-180'
              }`}
            />
          </button>
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

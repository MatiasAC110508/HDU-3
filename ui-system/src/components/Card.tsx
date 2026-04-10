import React from 'react';
import { Badge } from './Badge';
import type { BadgeProps } from './Badge';

export interface CardProps {
  title: string;
  type: 'green' | 'white' | 'black';
  imageUrl?: string;
  footer?: React.ReactNode;
  badges: BadgeProps[]; // Array de props para renderizar al menos un Badge (CA_09 / CA_13)
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  type,
  imageUrl,
  footer,
  badges,
  children
}) => {
  const typeStyles = {
    green: "bg-green-50 border-green-200 text-green-900",
    white: "bg-white border-gray-200 text-gray-900",
    black: "bg-gray-900 border-gray-700 text-white",
  };

  return (
    <div className={`rounded-xl border shadow-sm overflow-hidden flex flex-col ${typeStyles[type]}`}>
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      
      <div className="p-5 flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {/* Se garantiza la renderización de Badges */}
          {badges.map((badge, index) => (
            <Badge key={index} {...badge} />
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <div className="text-sm opacity-90 mb-4">
          {children}
        </div>
      </div>

      {footer && (
        <div className={`p-5 border-t ${type === 'black' ? 'border-gray-700' : 'border-gray-100'} mt-auto`}>
          {footer}
        </div>
      )}
    </div>
  );
};

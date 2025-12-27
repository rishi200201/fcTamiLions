import React from 'react';
import { TamiLionSLogo } from './TamiLionSLogo';

const FloatingWatermark = ({ 
  position = 'bottom-right', // 'bottom-right', 'bottom-left', 'top-right', 'top-left'
  variant = 'dark',
  opacity = 0.1,
  size = 'w-24 h-24'
}) => {
  const positions = {
    'bottom-right': 'fixed bottom-8 right-8',
    'bottom-left': 'fixed bottom-8 left-8',
    'top-right': 'fixed top-24 right-8',
    'top-left': 'fixed top-24 left-8'
  };

  return (
    <div 
      className={`${positions[position]} z-10 pointer-events-none select-none`}
      style={{ opacity }}
    >
      <TamiLionSLogo 
        variant={variant}
        size="custom"
        customSize={size}
        className="animate-pulse-slow"
      />
    </div>
  );
};

export default FloatingWatermark;
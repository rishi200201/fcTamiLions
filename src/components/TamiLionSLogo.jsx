// Logo Component for TamiLionS with multiple variants
import React from 'react';

// Import the logo files (using existing assets for now)
import logoLight from '../assets/Tamilions Logo - Final Version_page-0001 (1) (1) (1).jpg';
import logoDark from '../assets/Tamilions Logo - Final Version_page-0001 (1) (1) (2).jpg';
import logoRed from '../assets/Tamilions Logo - Final Version_page-0001 (1) (1) (3).jpg';

const TamiLionSLogo = ({ 
  variant = 'light', // 'light', 'dark', 'red'
  size = 'md', // 'sm', 'md', 'lg', 'xl', 'custom'
  className = '',
  customSize,
  ...props 
}) => {
  const logos = {
    light: logoLight,
    dark: logoDark,
    red: logoRed
  };

  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
    custom: customSize || 'w-24 h-24'
  };

  const sizeClass = sizes[size];

  return (
    <div className={`${sizeClass} ${className} flex-shrink-0`}>
      <img
        src={logos[variant]}
        alt="FC TamiLionS Logo"
        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        {...props}
      />
    </div>
  );
};

// Brand Text Component for consistent branding
const BrandText = ({ 
  size = 'md',
  className = '',
  showSubtitle = true,
  theme = 'light' // 'light', 'dark'
}) => {
  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
    xxl: 'text-5xl'
  };

  const textColors = {
    light: 'text-white',
    dark: 'text-neutral-900'
  };

  const subtitleColors = {
    light: 'text-neutral-400',
    dark: 'text-neutral-600'
  };

  return (
    <div className={`${className} flex flex-col`}>
      <span className={`${sizes[size]} font-bold ${textColors[theme]} tracking-tight font-display transition-colors duration-300`}>
        FC TamiLionS
      </span>
      {showSubtitle && (
        <span className={`text-xs uppercase tracking-widest ${subtitleColors[theme]} font-medium transition-colors duration-300`}>
          Football Club
        </span>
      )}
    </div>
  );
};

// Combined Logo + Text Component
const FullBrand = ({ 
  logoVariant = 'light',
  logoSize = 'md',
  textSize = 'md',
  textTheme = 'light',
  orientation = 'horizontal', // 'horizontal', 'vertical'
  className = '',
  gap = 'gap-3',
  ...props
}) => {
  const orientationClasses = {
    horizontal: 'flex items-center',
    vertical: 'flex flex-col items-center text-center'
  };

  return (
    <div className={`${orientationClasses[orientation]} ${gap} ${className}`} {...props}>
      <TamiLionSLogo variant={logoVariant} size={logoSize} />
      <BrandText size={textSize} theme={textTheme} />
    </div>
  );
};

export { TamiLionSLogo, BrandText, FullBrand };
export default TamiLionSLogo;
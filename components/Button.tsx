import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  as = 'button',
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-semibold transition-all duration-300 rounded-sm tracking-wide uppercase font-serif hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-azumi-red text-white hover:bg-red-700 shadow-lg shadow-red-900/20 border border-transparent",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-azumi-dark"
  };

  const widthStyles = fullWidth ? "w-full" : "";
  const combinedClassName = `${baseStyles} ${variants[variant]} ${widthStyles} ${className}`;

  if (as === 'a' && href) {
    return (
      <a href={href} className={combinedClassName} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
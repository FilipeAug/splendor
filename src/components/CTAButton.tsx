import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  onClick: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "blue";
  className?: string;
}

export function CTAButton({ 
  children, 
  onClick, 
  size = "md", 
  variant = "default",
  className = "" 
}: CTAButtonProps) {
  const baseClasses = variant === "blue" ? "cta-button-blue" : "cta-button";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",  
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
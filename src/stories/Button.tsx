import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FunctionComponent<ButtonProps> = ({ backgroundColor, label, ...props }) => {
  return (
    <button type="button" className="bg-blue-500" style={{ backgroundColor }} {...props}>
      {label}
    </button>
  );
};

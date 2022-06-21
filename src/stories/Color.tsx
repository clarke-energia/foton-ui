import React from 'react';

interface ColorProps {
  label: string;
  value: string;
}
const Color: React.FC<ColorProps> = ({ label, value }) => {
  return <div className={`bg-${value}-500`}>{label}</div>;
};

export default Color;

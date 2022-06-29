import React from 'react';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, ...attrs }) => {
  // discard whatever type is set in 'attrs' and fix it into radio button
  const { type, id, disabled, className, ...rest } = attrs;
  const disabledClass = disabled ? 'text-neutral-40' : 'text-black';
  const borderClass = disabled ? 'border-neutral-40' : 'border border-black';
  const colorClass = disabled ? 'text-neutral-40' : 'text-primary-60';

  const dynamicClasses = [borderClass, colorClass].join(' ');

  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        className={`focus:ring-2 focus:ring-offset-2 focus:ring-primary-60 ${dynamicClasses}`}
        disabled={disabled}
        {...rest}
      />
      <label htmlFor={id} className={`ml-3 text-paragraph-medium ${disabledClass}`}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;

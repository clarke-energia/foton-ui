import React from 'react';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, ...attrs }) => {
  // discard whatever type is set in 'attrs' and fix it into radio button
  const { type, id, disabled, className, ...rest } = attrs;
  const disabledClass = disabled ? 'text-neutral-40' : 'text-black';

  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        className="rounded border border-black focus:ring-2 focus:ring-offset-2 accent-primary-60 focus:ring-primary-60"
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

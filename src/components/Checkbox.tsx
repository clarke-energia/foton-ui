import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const Checkbox: React.FC<CheckboxProps> = ({ label, ...attrs }) => {
  // discard whatever type is set in 'attrs' and fix it into checkbox
  const { type, id, disabled, className, ...rest } = attrs;
  const disabledClass = disabled ? 'text-neutral-40' : 'text-black';
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        className="rounded focus:ring-2 focus:ring-offset-2 border-red accent-primary-60 focus:ring-primary-60"
        disabled={disabled}
        {...rest}
      />
      <label htmlFor={id} className={`ml-3 text-paragraph-medium ${disabledClass}`}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

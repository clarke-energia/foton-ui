import React from 'react';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; display: string }[];
  placeholderText?: string;
  error: boolean;
}

const Select: React.FC<SelectProps> = ({ label, options, placeholderText, error, ...attrs }) => {
  const { id, disabled, className, ...rest } = attrs;
  const disabledClass = disabled ? 'text-neutral-40' : 'text-black';
  const errorClass = error ? 'outline-none border border-danger-60 ring-danger-60' : '';
  const focusClass = error
    ? 'focus:border focus:outline-none focus:border-danger-60 focus:ring-danger-60'
    : 'focus:border focus:outline-none focus:border-primary-60 focus:ring-primary-60';

  const dynamicClasses = [errorClass, focusClass].join(' ');

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={`ml-3 mb-2 text-paragraph-medium ${disabledClass}`}>
        {label}
      </label>
      <select id={id} disabled={disabled} {...rest} className={`rounded ${dynamicClasses}`}>
        {placeholderText && (
          <option disabled selected>
            {placeholderText}
          </option>
        )}
        {options.map(({ value, display }) => (
          <option value={value}>{display}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;

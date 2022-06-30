import React from 'react';
import HeroIcon from './HeroIcons';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: boolean;
  helper?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, error, helper, ...attrs }) => {
  const { type, id, disabled, className, ...rest } = attrs;
  const disabledClass = disabled ? 'text-neutral-40' : 'text-black';

  const borderClass = disabled ? 'border-neutral-40' : 'border border-black';
  const errorClass = disabled
    ? 'outline-none border ring-0'
    : error
    ? 'outline-none border border-danger-60 ring-danger-60'
    : '';
  const focusClass = error
    ? 'focus:border focus:outline-none focus:border-danger-60 focus:ring-danger-60'
    : 'focus:border focus:outline-none focus:border-primary-60 focus:ring-primary-60';

  const dynamicClasses = [borderClass, errorClass, focusClass].join(' ');

  const helperClass = disabled ? 'text-neutral-40' : error ? 'text-danger-60' : 'text-black';

  return (
    <div className="flex relative flex-col">
      <label htmlFor={id} className={`mb-2 text-paragraph-medium ${disabledClass}`}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        disabled={disabled}
        {...rest}
        className={`rounded-small text-paragraph-medium ${dynamicClasses}`}
      />
      {error && (
        <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <HeroIcon icon="ExclamationCircleIcon" extraClassNames="w-5 h-5 text-danger-60" />
        </div>
      )}
      {helper && <p className={`mt-2 text-paragraph-small ${helperClass}`}>{helper}</p>}
    </div>
  );
};

export default TextInput;

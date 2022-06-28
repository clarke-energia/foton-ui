import React from 'react';
import HeroIcon, { IconName } from './HeroIcons';

type Variant = 'primary' | 'secondary' | 'chip' | 'ghost';
type IconOptions = 'None' | IconName;
export interface ButtonProps extends React.ComponentProps<'button'> {
  /**
   * Text to be displayed
   */
  label: string;
  /**
   * The button variant
   */
  kind: Variant;
  /**
   * Icon to be shown, if any
   */
  icon?: IconOptions;
}

type ButtonState = 'hover' | 'active' | 'focus' | 'disabled';
const DEFAULT_BG_COLOR_GETTER: Record<Variant, string> = {
  primary: 'bg-primary-60',
  secondary: 'bg-white',
  chip: 'bg-black',
  ghost: 'bg-white',
};
const STATE_BG_COLOR_GETTER: Record<Variant, Record<ButtonState, string>> = {
  primary: {
    hover: 'bg-primary-70',
    active: 'bg-primary-80',
    focus: 'bg-primary-60',
    disabled: 'bg-neutral-10',
  },
  secondary: {
    hover: 'bg-neutral-10',
    active: 'bg-neutral-30',
    focus: 'bg-white',
    disabled: 'bg-neutral-10',
  },
  chip: {
    hover: 'bg-neutral-70',
    active: 'bg-primary-90',
    focus: 'bg-black',
    disabled: 'bg-neutral-10',
  },
  ghost: {
    hover: 'bg-neutral-10',
    active: 'bg-neutral-30',
    focus: 'bg-white',
    disabled: 'bg-neutral-10',
  },
};

const Button: React.FC<ButtonProps> = ({ label, kind, disabled, icon, ...btnAttrs }) => {
  const textColor = disabled ? 'text-neutral-50' : kind === 'chip' ? 'text-white' : 'text-black';
  const borderColor = kind === 'ghost' ? 'border-none' : disabled ? 'border border-neutral-50' : 'border border-black';
  const defaultBgColor = DEFAULT_BG_COLOR_GETTER[kind];
  const hoverBgColor = `hover:${STATE_BG_COLOR_GETTER[kind]['hover']}`;
  const focusBgColor = `focus:${STATE_BG_COLOR_GETTER[kind]['focus']}`;
  const activeBgColor = `active:${STATE_BG_COLOR_GETTER[kind]['active']}`;
  const disabledBgColor = `disabled:${STATE_BG_COLOR_GETTER[kind]['disabled']}`;

  const dynamicClasses = [
    textColor,
    borderColor,
    defaultBgColor,
    hoverBgColor,
    focusBgColor,
    activeBgColor,
    disabledBgColor,
  ].join(' ');

  return (
    <button
      disabled={disabled}
      className={`py-4 px-6 focus:ring-2 focus:ring-offset-2 focus:ring-primary-60 rounded-pill text-paragraph-large ${dynamicClasses}`}
      {...btnAttrs}
    >
      <div className="flex items-center">
        {icon && icon !== 'None' && <HeroIcon icon={icon} extraClassNames="mr-4 w-5 h-5" />}
        {label}
      </div>
    </button>
  );
};

export default Button;

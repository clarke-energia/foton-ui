import * as OutlineIcons from '@heroicons/react/outline';

export type IconName = keyof typeof OutlineIcons;
interface IconProps {
  icon: IconName;
  extraClassNames: string;
}

const HeroIcon: React.FC<IconProps> = ({ icon, extraClassNames }) => {
  const Icon = OutlineIcons[icon];
  return <Icon className={extraClassNames} />;
};

export default HeroIcon;

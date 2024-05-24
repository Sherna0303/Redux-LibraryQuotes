import { ReactElement } from 'react';
import './style.css';

interface IconProps {
  size: number;
  color: string;
  icon: string;
}

const Icon = ({ size, color, icon }: IconProps): ReactElement => {
  const iconStyle = {
    height: `${size}px`,
    width: `${size}px`,
    backgroundColor: color,
    WebkitMaskImage: `url(/src/assets/icon/${icon}.svg)`,
  };

  return (
    <i className="icon" style={iconStyle} aria-hidden="true" />
  );
};

export default Icon;

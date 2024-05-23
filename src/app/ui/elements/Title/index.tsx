import { ReactElement } from 'react';
import './style.css';

interface TitleProps {
  className?: string;
  text: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Title = ({ className, text, type }: TitleProps): ReactElement => {
  const Tag = type || 'h1';

  return (
    <Tag className={className}>
      {text}
    </Tag>
  );
};

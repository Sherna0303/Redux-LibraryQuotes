import { ReactElement } from 'react';
import './style.css';

interface ParagraphProps {
  className: string;
  text: string;
}

export const Paragraph = ({ className, text }: ParagraphProps): ReactElement => {

  return (
    <p className={className}>{text}</p>
  );
};

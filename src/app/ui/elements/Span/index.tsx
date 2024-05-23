import { ReactElement } from 'react';

interface SpanProps {
  className: string;
  text: string;
  
}

export const Span = ({ className, text }: SpanProps): ReactElement => {

  return (
    <span className={className}>
      {text}
    </span>
  );
};

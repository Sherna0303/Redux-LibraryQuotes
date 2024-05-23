import { MouseEventHandler, ReactElement } from 'react';

interface ButtonProps {
  className: string;
  text: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ className, text, disabled, onClick }: ButtonProps): ReactElement => {

  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

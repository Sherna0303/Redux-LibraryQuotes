import { ChangeEvent, ReactElement } from 'react';
import './style.css';

interface LabelProps {
  classNameLabel: string;
  classNameInput: string;
  classNameSpan: string;
  text: string;
  type: string;
  nameInput: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
}

export const Label = ({ classNameLabel, classNameInput, classNameSpan, text, type, nameInput, onChange, hasError }: LabelProps): ReactElement => {

  return (
    <label className={classNameLabel}>
      <span className={classNameSpan}>{text}</span>
      <input className={`${classNameInput} ${hasError ? 'error' : ''}`} type={type} name={nameInput} onChange={onChange} />
    </label>
  );
};
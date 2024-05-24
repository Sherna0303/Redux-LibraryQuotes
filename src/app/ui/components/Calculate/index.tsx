import { CartInfo } from '../../../core/models/cart-info.model';
import { Button } from '../../elements/Button';
import { Label } from '../../elements/Label';
import { useCalculate } from '../../../core/hooks/useCalculate';
import { ChangeEvent } from 'react';
import './style.css';

interface CalculateProps {
    carts: CartInfo[];
  }
  
const Calculate: React.FC<CalculateProps> = ({ carts }) => {
  const { loading, error, handleDateChange, handleCalculate } = useCalculate();
  
  const onDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleDateChange(event.target.value);
  };
  
  const onCalculate = () => {
    handleCalculate(carts);
  };
  
  return (
    <div className='calculate__container'>
      <Label classNameInput="calculate__input" classNameLabel="calculate__label" classNameSpan="calculate__span" nameInput="date" text="" type="date" onChange={onDateChange} />
      <Button onClick={onCalculate} text="Calculate" className="calculate__button" />
      
  
      {loading && <p>Loading...</p>}
      {error && <p className="calculate__error">{error}</p>}
    </div>
  );
};
  
export default Calculate;
import { CartInfo } from '../../../core/models/cart-info.model';
import { Button } from '../../elements/Button';
import { Label } from '../../elements/Label';
import { useCalculate } from '../../../core/hooks/useCalculate';
import Modal from '../Modal';
import { ChangeEvent } from 'react';
import { Title } from '../../elements/Title';
import Groups from '../GroupsDetail';

interface CalculateProps {
    carts: CartInfo[];
  }
  
const Calculate: React.FC<CalculateProps> = ({ carts }) => {
  const { apiResponse, showModal, loading, error, handleDateChange, handleCalculate, handleCloseModal } = useCalculate();
  
  const onDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleDateChange(event.target.value);
  };
  
  const onCalculate = () => {
    handleCalculate(carts);
  };
  
  return (
    <div className='calculate__container'>
      <Button onClick={onCalculate} text="Calculate" className="calculate__button" />
      <Label classNameInput="calculate__input" classNameLabel="calculate__label" classNameSpan="calculate__span" nameInput="date" text="Date:" type="date" onChange={onDateChange} />
  
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
  
      {showModal && apiResponse && (
        <Modal onClose={handleCloseModal}>
          <Title type='h2' text={`Total Groups: ${apiResponse.totalGroups}`} className='calculate__title' />
          <Title type='h2' text={`Total Discount Groups: ${apiResponse.totalDiscountGroups}`} className='calculate__title' />
          <Title type='h2' text={`Total Increase Groups: ${apiResponse.totalIncreaseGroups}`} className='calculate__title' />
          {apiResponse.groups.map((group, index) => (
            <Groups key={index} group={group} index={index} />
          ))}
        </Modal>
      )}
    </div>
  );
};
  
export default Calculate;
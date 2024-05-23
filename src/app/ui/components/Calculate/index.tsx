import { CartInfo } from '../../../core/models/cart-info.model';
import { Button } from '../../elements/Button';
import { Label } from '../../elements/Label';
import { useCalculate } from '../../../core/hooks/useCalculate';
import Modal from '../Modal';
import { ChangeEvent } from 'react';

interface CalculateProps {
    carts: CartInfo[];
  }
  
const Calculate: React.FC<CalculateProps> = ({ carts }) => {
  const { apiResponse, showModal, handleDateChange, handleCalculate, handleCloseModal } = useCalculate();
  
  const onDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleDateChange(event.target.value);
  };
  
  const onCalculate = () => {
    handleCalculate(carts);
  };
  
  return (
    <>
      <Button onClick={onCalculate} text="Calculate" className="main__button" />
      <Label classNameInput="main__input" classNameLabel="main__label" classNameSpan="main__span" nameInput="date" text="Date:" type="date" onChange={onDateChange} />
  
      {showModal && apiResponse && (
        <Modal onClose={handleCloseModal}>
          <h2>Total Groups: {apiResponse.totalGroups}</h2>
          <h2>Total Discount Groups: {apiResponse.totalDiscountGroups}</h2>
          <h2>Total Increase Groups: {apiResponse.totalIncreaseGroups}</h2>
          {apiResponse.groups.map((group, index) => (
            <div key={index}>
              <h3>Group {index + 1}</h3>
              <p>Seniority: {group.seniority}</p>
              <p>Total: {group.total}</p>
              <p>Total Discount: {group.totalDiscount}</p>
              <p>Total Increase: {group.totalIncrease}</p>
              <ul>
                {group.copies.map((copy, copyIndex) => (
                  <li key={copyIndex}>
                    <p>Title: {copy.title}</p>
                    <p>Author: {copy.author}</p>
                    <p>Price: {copy.price}</p>
                    <p>Increase: {copy.increase}</p>
                    <p>Discount: {copy.discount}</p>
                    <p>Total Price: {copy.totalPrice}</p>
                    <p>Type: {copy.type}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Modal>
      )}
    </>
  );
};
  
export default Calculate;
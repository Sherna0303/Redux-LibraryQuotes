import React from 'react';
import { Button } from '../../elements/Button';
import { CartInfo } from '../../../core/models/cart-info.model';
import { Title } from '../../elements/Title';
import './style.css';

interface CartsProps {
    carts: CartInfo[];
    setActiveCart: (cartId: string) => void;
    removeCart: (cartId: string) => void;
    handleAddCart: () => void;
}

const Carts: React.FC<CartsProps> = ({ carts, setActiveCart, removeCart, handleAddCart }) => {
  return (
    <div className='carts__container'>
      <Button onClick={handleAddCart} text="Create New Cart" className='carts__button carts__button--new' />
      <Title type='h3' text='Existing Carts' className='carts__title' />
      <ul className='carts__list'>
        {carts.map(cart => (
          <li key={cart.id} className='carts__item'>
            <Button onClick={() => setActiveCart(cart.id)} text={`Cart #${cart.readableId}`} className='carts__button carts__button--cart' />
            <Button onClick={() => removeCart(cart.id)} text="Remove" className='carts__button carts__button--remove' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carts;

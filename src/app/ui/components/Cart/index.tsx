import React from 'react';
import { Copy } from '../../../core/models/copy.model';
import { Button } from '../../elements/Button';
import { Span } from '../../elements/Span';
import { Title } from '../../elements/Title';
import './style.css';

interface CartProps {
  cartId: number;
  cart: Copy[];
  onRemoveFromCart: (id: string) => void;
  onIncreaseQuantity: (id: string) => void;
  onDecreaseQuantity: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ cartId, cart, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity }) => {
  return (
    <div className='cart__container'>
      <Title type='h2' text={`Bag #${cartId}`} className='cart__title'/>
      <ul className='cart__list'>
        {cart.map((item) => (
          <li key={item.id} className='cart__book'>
            <Span text={item.title} className='cart__book-title'/>
            <div className="cart__amount">
              <Span text='Amount:' className='cart__amount cart__amount-title'/>
              <Span text={item.quantity.toString()} className='cart__amount'/>
            </div>
            <div className='cart__quantity-controls'>
              <Button onClick={() => onIncreaseQuantity(item.id)} className={'cart__book-button cart__book-button--amount'} text={'+'} />
              <Button onClick={() => onDecreaseQuantity(item.id)} className={'cart__book-button cart__book-button--amount'} text={'-'} />
              <Button onClick={() => onRemoveFromCart(item.id)} className={'cart__book-button cart__book-button--remove'} text={'Remove'} />
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

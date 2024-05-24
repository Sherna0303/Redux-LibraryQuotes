import React from 'react';
import { Button } from '../../elements/Button';
import { CartInfo } from '../../../core/models/cart-info.model';
import { Title } from '../../elements/Title';
import './style.css';
import Icon from '../../elements/Icon/inde';
import Calculate from '../Calculate';
import { useAside } from '../../../core/hooks/useAside';
import { setContent } from '../../../core/store/reducers/aside.reducer';

interface CartsProps {
    carts: CartInfo[];
    setActiveCart: (cartId: string) => void;
    removeCart: (cartId: string) => void;
    handleAddCart: () => void;
}

const Carts: React.FC<CartsProps> = ({ carts, setActiveCart, removeCart, handleAddCart }) => {
  const { dispatch } = useAside();

  const handleActivateCart = (cartId: string) => {
    setActiveCart(cartId);
    dispatch(setContent('cartDetails'));
  };

  return (
    <div className='carts__container'>
      <Title type='h3' text='Existing Bags' className='carts__title' />
      <ul className='carts__list'>
        {carts.map(cart => (
          <li key={cart.id} className='carts__item'>
            <Button onClick={() => handleActivateCart(cart.id)} text={`Bag #${cart.readableId}`} className='carts__button carts__button--cart' />
            <button onClick={() => removeCart(cart.id)} className='carts__button carts__button--remove'>
              <Icon color='white' size={32} icon='shopping-bag-x'/>
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddCart} className='carts__button carts__button--new' >
        <Icon color='white' size={32} icon='shopping-bag-plus'/>
      </button>
      <div className="carts__calculate">
        <Calculate carts={carts}/>
      </div>
    </div>
  );
};

export default Carts;

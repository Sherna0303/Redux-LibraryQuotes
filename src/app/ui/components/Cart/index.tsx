import { Copy } from '../../../core/models/copy.model';
import { Button } from '../../elements/Button';
import { Span } from '../../elements/Span';
import { Title } from '../../elements/Title';

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
      <Title type='h2' text={`Cart #${cartId}`} className='cart__title'/>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className='cart__book'>
            <Span text={item.title} className='cart__book-span'/>
            <Span text={item.quantity.toString()} className='cart__book-span'/>
            <Button onClick={() => onIncreaseQuantity(item.id)} className={'cart__book-button'} text={'+'} />
            <Button onClick={() => onDecreaseQuantity(item.id)} className={'cart__book-button'} text={'-'} />
            <Button onClick={() => onRemoveFromCart(item.id)} className={'cart__book-button'} text={'Remove'} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
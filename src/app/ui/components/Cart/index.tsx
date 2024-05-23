import { Copy } from '../../../core/models/copy.model';
import { Button } from '../../elements/Button';

interface CartProps {
    cart: Copy[];
    onRemoveFromCart: (id: string) => void;
    onIncreaseQuantity: (id: string) => void;
    onDecreaseQuantity: (id: string) => void;
  }
  
const Cart: React.FC<CartProps> = ({ cart, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <span>Quantity: {item.quantity}</span>
            <Button onClick={() => onIncreaseQuantity(item.id)} className={'cart__button'} text={'+'}/>
            <Button onClick={() => onDecreaseQuantity(item.id)} className={'cart__button'} text={'-'}/>
            <Button onClick={() => onRemoveFromCart(item.id)} className={'cart__button'} text={'Remove'}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
  
export default Cart;
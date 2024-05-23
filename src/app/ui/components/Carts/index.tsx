import { Button } from '../../elements/Button';
import { CartInfo } from '../../../core/models/cart-info.model';

interface CartsProps {
    carts: CartInfo[];
    setActiveCart: (cartId: string) => void;
    removeCart: (cartId: string) => void;
    handleAddCart: () => void;
  }
  
const Carts: React.FC<CartsProps> = ({ carts, setActiveCart, removeCart, handleAddCart }) => {
  return (
    <>
      <Button onClick={handleAddCart} text="Create New Cart" className={'cart__button'} />
      <h3>Existing Carts</h3>
      <ul>
        {carts.map(cart => (
          <li key={cart.id}>
            <Button onClick={() => setActiveCart(cart.id)} text={`Cart #${cart.readableId}`} className={'cart__button'} />
            <Button onClick={() => removeCart(cart.id)} text="Remove" className={'cart__button'} />
          </li>
        ))}
      </ul>
    </>
  );
};
  
export default Carts;
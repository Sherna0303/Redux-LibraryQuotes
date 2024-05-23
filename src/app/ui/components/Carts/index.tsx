import { Button } from '../../elements/Button';
import { CartInfo } from '../../../core/models/cart-info.model';
import { Title } from '../../elements/Title';

interface CartsProps {
    carts: CartInfo[];
    setActiveCart: (cartId: string) => void;
    removeCart: (cartId: string) => void;
    handleAddCart: () => void;
  }
  
const Carts: React.FC<CartsProps> = ({ carts, setActiveCart, removeCart, handleAddCart }) => {
  return (
    <div className='carts__container'>
      <Button onClick={handleAddCart} text="Create New Cart" className={'carts__button'} />
      <Title type='h3' text='Existing Carts' className='carts__title'/>
      <ul className='carts__container-existing'>
        {carts.map(cart => (
          <li key={cart.id} className='carts__existing-buttons'>
            <Button onClick={() => setActiveCart(cart.id)} text={`Cart #${cart.readableId}`} className={'carts__existing-button'} />
            <Button onClick={() => removeCart(cart.id)} text="Remove" className={'carts__existing-button'} />
          </li>
        ))}
      </ul>
    </div>
  );
};
  
export default Carts;
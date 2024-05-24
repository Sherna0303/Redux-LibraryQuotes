import { useAside } from '../../../core/hooks/useAside';
import { useCart } from '../../../core/hooks/useCart';
import { setContent } from '../../../core/store/reducers/aside.reducer';
import { Button } from '../../elements/Button';
import Cart from '../Cart';
import Carts from '../Carts';
import './style.css';

const Aside: React.FC = () => {
  const { showAside, content, dispatch} = useAside();
  const { carts, activeCart, addCart, setActiveCart, removeCart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const handleAddCart = () => {
    addCart();
  };

  const handleSetActiveCart = (cartId: string) => {
    setActiveCart(cartId);
  };

  const handleRemoveCart = (cartId: string) => {
    removeCart(cartId);
  };

  const handleRemoveFromCart = (id: string) => {
    removeFromCart(id);
  };

  const handleIncreaseQuantity = (id: string) => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = (id: string) => {
    decreaseQuantity(id);
  };

  return (
    <aside className={`aside__main ${showAside ? 'aside__main-visible' : 'aside__main-hidden'}`}>
      <Button text='Show Bags' className={`aside__button ${content === 'cartDetails' ? 'aside__button-disabled' : 'aside__button-active'}`} onClick={() => dispatch(setContent('carts'))}/>
      <Button text={activeCart ? `Bag - ${activeCart.readableId}` : 'Empty'} className={`aside__button ${content === 'carts' ? 'aside__button-disabled' : 'aside__button-active'}`} onClick={() => dispatch(setContent('cartDetails'))}/>

      {showAside && (
        <div className="aside__content">
          {content === 'carts' && 
          <Carts carts={carts} 
            setActiveCart={handleSetActiveCart} 
            handleAddCart={handleAddCart} 
            removeCart={handleRemoveCart} 
          />}
          {content === 'cartDetails' && activeCart &&
          <Cart
            cartId={activeCart.readableId}
            cart={activeCart.items} 
            onRemoveFromCart={handleRemoveFromCart} 
            onIncreaseQuantity={handleIncreaseQuantity} 
            onDecreaseQuantity={handleDecreaseQuantity} 
          />}
        </div>
      )}
    </aside>
  );
};

export default Aside;
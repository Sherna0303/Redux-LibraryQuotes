import { useCart } from '../core/hooks/useCart';
import Calculate from '../ui/components/Calculate';
import Cart from '../ui/components/Cart';
import Carts from '../ui/components/Carts';

const CartContainer: React.FC = () => {
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
    <>
      <Calculate carts={carts}/>

      <Carts carts={carts} 
        setActiveCart={handleSetActiveCart} 
        handleAddCart={handleAddCart} 
        removeCart={handleRemoveCart} 
      />

      {activeCart && (
        <Cart
          cartId={activeCart.readableId}
          cart={activeCart.items} 
          onRemoveFromCart={handleRemoveFromCart} 
          onIncreaseQuantity={handleIncreaseQuantity} 
          onDecreaseQuantity={handleDecreaseQuantity} 
        />
      )}
    </>
  );
};

export default CartContainer;
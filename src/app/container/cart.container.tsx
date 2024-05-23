import { useCart } from '../core/hooks/useCart';
import Cart from '../ui/components/Cart';

const CartContainer: React.FC = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  
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
    <Cart 
      cart={cart} 
      onRemoveFromCart={handleRemoveFromCart} 
      onIncreaseQuantity={handleIncreaseQuantity} 
      onDecreaseQuantity={handleDecreaseQuantity} 
    />
  );
};
  
export default CartContainer;
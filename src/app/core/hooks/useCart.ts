import { Copy } from '../models/copy.model';
import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart, selectCart } from '../store/reducers/cart.reducer';
import { useAppDispatch, useAppSelector } from './useStore';

export const useCart = () => {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const addToCartHandler = (item: Copy) => dispatch(addToCart(item));
  const removeFromCartHandler = (id: string) => dispatch(removeFromCart(id));
  const increaseQuantityHandler = (id: string) => dispatch(increaseQuantity(id));
  const decreaseQuantityHandler = (id: string) => dispatch(decreaseQuantity(id));

  return {
    cart,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    increaseQuantity: increaseQuantityHandler,
    decreaseQuantity: decreaseQuantityHandler
  };
};
import { Copy } from '../models/copy.model';
import { addCart, addToCart, decreaseQuantity, increaseQuantity, removeCart, removeFromCart, selectActiveCart, selectCart, setActiveCart } from '../store/reducers/cart.reducer';
import { useAppDispatch, useAppSelector } from './useStore';


export const useCart = () => {
  const carts = useAppSelector(selectCart);
  const activeCartId = useAppSelector(selectActiveCart);
  const activeCart = carts.find(cart => cart.id === activeCartId);
  const dispatch = useAppDispatch();

  const addCartHandler = () => { dispatch(addCart()); };
  const setActiveCartHandler = (cartId: string) => dispatch(setActiveCart(cartId));
  const removeCartHandler = (cartId: string) => dispatch(removeCart(cartId));

  const addToCartHandler = (copy: Copy) => {
    if (activeCartId) {
      dispatch(addToCart({ cartId: activeCartId, copy }));
    }
  };
  
  const removeFromCartHandler = (copyId: string) => {
    if (activeCartId) {
      dispatch(removeFromCart({ cartId: activeCartId, copyId }));
    }
  };

  const increaseQuantityHandler = (copyId: string) => {
    if (activeCartId) {
      dispatch(increaseQuantity({ cartId: activeCartId, copyId }));
    }
  };

  const decreaseQuantityHandler = (copyId: string) => {
    if (activeCartId) {
      dispatch(decreaseQuantity({ cartId: activeCartId, copyId }));
    }
  };

  return {
    carts,
    activeCart,
    addCart: addCartHandler,
    setActiveCart: setActiveCartHandler,
    removeCart: removeCartHandler,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    increaseQuantity: increaseQuantityHandler,
    decreaseQuantity: decreaseQuantityHandler
  };
};
import { useCart } from '../core/hooks/useCart';
import Aside from '../ui/components/Aside';
import Calculate from '../ui/components/Calculate';

const CartContainer: React.FC = () => {
  const { carts } = useCart();


  return (
    <>
      <Aside/>
      <Calculate carts={carts}/>
    </>
  );
};

export default CartContainer;
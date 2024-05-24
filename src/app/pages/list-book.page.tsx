import BooksListContainer from '../container/book-list.container';
import CartContainer from '../container/cart.container';

const BooksPage: React.FC = () => {
  return (
    <div>
      <BooksListContainer />
      <CartContainer/>
    </div>
  );
};
  
export default BooksPage;
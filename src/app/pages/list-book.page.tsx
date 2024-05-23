import BooksListContainer from '../container/book-list.container';
import CartContainer from '../container/cart.container';

const BooksPage: React.FC = () => {
  return (
    <div>
      <h1>Books List</h1>
      <BooksListContainer />
      <CartContainer/>
    </div>
  );
};
  
export default BooksPage;
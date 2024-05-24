import BooksListContainer from '../container/book-list.container';
import CartContainer from '../container/cart.container';
import ModalContainer from '../container/modal.container';

const BooksPage: React.FC = () => {
  return (
    <div>
      <BooksListContainer />
      <ModalContainer/>
      <CartContainer/>
    </div>
  );
};
  
export default BooksPage;
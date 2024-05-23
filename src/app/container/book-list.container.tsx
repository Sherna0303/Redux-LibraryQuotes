import { useSelector } from 'react-redux';
import { RootState } from '../core/store/store';
import { useEffect } from 'react';
import { getCopies } from '../core/store/thunks/copies.thunk';
import BooksList from '../ui/components/BookList';
import { useAppDispatch } from '../core/hooks/useStore';
import { useCart } from '../core/hooks/useCart';
import { Copy } from '../core/models/copy.model';

const BooksListContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const books = useSelector((state: RootState) => state.copies.books);
  const status = useSelector((state: RootState) => state.copies.status);
  const error = useSelector((state: RootState) => state.copies.error);
  const { addToCart } = useCart();

  const handleAddToCart = (copy: Copy) => {
    addToCart(copy);
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getCopies());
    }
  }, [status, dispatch]);

  return (
    <>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && <BooksList books={books} addToCart={handleAddToCart} />}
    </>
  );
};

export default BooksListContainer;
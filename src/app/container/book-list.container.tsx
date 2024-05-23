import { useEffect } from 'react';
import { getCopies } from '../core/store/thunks/copies.thunk';
import BooksList from '../ui/components/BookList';
import { useCart } from '../core/hooks/useCart';
import { Copy } from '../core/models/copy.model';
import { useCopies } from '../core/hooks/useCopies';

const BooksListContainer: React.FC = () => {
  const { addToCart } = useCart();
  const { books, status, error, dispatch } = useCopies();

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
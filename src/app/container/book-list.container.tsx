import { useEffect } from 'react';
import { getCopies } from '../core/store/thunks/copies.thunk';
import BooksList from '../ui/components/BookList';
import { useCart } from '../core/hooks/useCart';
import { Copy } from '../core/models/copy.model';
import { useCopies } from '../core/hooks/useCopies';
import { getAggregateService } from '../core/services/get-aggregate-id.service';

const BooksListContainer: React.FC = () => {
  const { addToCart } = useCart();
  const { books, status, error, dispatch } = useCopies();
  const { addCart } = useCart();

  const handleAddToCart = (copy: Copy) => {
    addToCart(copy);
  };

  useEffect(() => {
    const validateAggregateId = async () => {
      const idRoot = localStorage.getItem('AggregateId');

      if (!idRoot) {
        await getAggregateService();
      }
    };


    if (status === 'idle') {
      addCart();
      dispatch(getCopies());
      validateAggregateId();
    }
  }, [status, dispatch, addCart]);

  return (
    <>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && <BooksList books={books} addToCart={handleAddToCart} />}
    </>
  );
};

export default BooksListContainer;
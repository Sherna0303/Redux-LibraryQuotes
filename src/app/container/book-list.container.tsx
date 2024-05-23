import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../core/store/store';
import { useEffect } from 'react';
import { getCopies } from '../core/store/thunks/copies.thunk';
import BooksList from '../ui/components/BookList';

const BooksListContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector((state: RootState) => state.copies.books);
  const status = useSelector((state: RootState) => state.copies.status);
  const error = useSelector((state: RootState) => state.copies.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getCopies());
    }
  }, [status, dispatch]);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && <BooksList books={books} />}
    </div>
  );
};

export default BooksListContainer;
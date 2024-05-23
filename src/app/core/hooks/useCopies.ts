import { selectBooks, selectError, selectStatus } from '../store/reducers/copies.reducer';
import { useAppDispatch, useAppSelector } from './useStore';

export const useCopies = () => {
    
  const books = useAppSelector(selectBooks);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  return{
    books,
    status,
    error,
    dispatch
  };

};
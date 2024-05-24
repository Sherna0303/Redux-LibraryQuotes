import { CartInfo } from '../models/cart-info.model';
import { setDate, setError, toggleModal } from '../store/actions/calculate.actions';
import { useAppDispatch, useAppSelector } from './useStore';
import { selectApiReponse, selectDate, selectError, selectLoading, selectShowModal } from '../store/reducers/calculate.reducer';
import { calculateGroupsService } from '../services/calculateGroups.service';

export const useCalculate = () => {
  const date = useAppSelector(selectDate);
  const apiResponse = useAppSelector(selectApiReponse);
  const showModal = useAppSelector(selectShowModal);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  const handleDateChange = (newDate: string) => {
    dispatch(setDate(newDate));
  };

  const handleCalculate = (carts: CartInfo[]) => {
    if (!date) {
      dispatch(setError('Date is required'));
      return;
    }
    if (carts.length > 0 && carts.every(cart => cart.items.length > 0)) {
      dispatch(calculateGroupsService(carts, date));
    } else {
      dispatch(setError('All carts must contain at least one item.'));
    }
  };

  const handleCloseModal = () => {
    dispatch(toggleModal());
  };

  return {
    date,
    apiResponse,
    showModal,
    loading,
    error,
    handleDateChange,
    handleCalculate,
    handleCloseModal,
  };
};
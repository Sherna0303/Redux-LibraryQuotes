import { useDispatch } from 'react-redux';
import { CartInfo } from '../models/cart-info.model';
import { calculateGroupsService } from '../services/calculateGroups.service';
import { setApiResponse, setDate, toggleModal } from '../store/actions/calculate.actions';
import { useAppSelector } from './useStore';
import { selectApiReponse, selectDate, selectShowModal } from '../store/reducers/calculate.reducer';

export const useCalculate = () => {
  const date = useAppSelector(selectDate);
  const apiResponse = useAppSelector(selectApiReponse);
  const showModal = useAppSelector(selectShowModal);
  const dispatch = useDispatch();
  
  const handleDateChange = (newDate: string) => {
    dispatch(setDate(newDate));
  };
  
  const handleCalculate = async (carts: CartInfo[]) => {
    if (carts.length > 0 && carts.every(cart => cart.items.length > 0) && date != '') {
      const response = await calculateGroupsService(carts, date);
      if (response) {
        dispatch(setApiResponse(response));
        dispatch(toggleModal());
      }
    }
  };
  
  const handleCloseModal = () => {
    dispatch(toggleModal());
  };
  
  return {
    date,
    apiResponse,
    showModal,
    handleDateChange,
    handleCalculate,
    handleCloseModal,
  };
};
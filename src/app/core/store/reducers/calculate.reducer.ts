import { ApiResponse } from '../../models/api-response.model';
import { SET_API_RESPONSE, SET_DATE, SET_ERROR, SET_LOADING, TOGGLE_MODAL } from '../actions/calculate.actions';
import { RootState } from '../store';

interface CalculateState {
    date: string;
    apiResponse: ApiResponse | null;
    showModal: boolean;
    loading: boolean;
    error: string | null;
  }
  
const initialState: CalculateState = {
  date: '',
  apiResponse: null,
  showModal: false,
  loading: false,
  error: null,
};
  
const calculateReducer = (state = initialState, action: any): CalculateState => {
  switch (action.type) {
  case SET_DATE:
    return { ...state, date: action.payload };
  case SET_API_RESPONSE:
    return { ...state, apiResponse: action.payload };
  case TOGGLE_MODAL:
    return { ...state, showModal: !state.showModal };
  case SET_LOADING:
    return { ...state, loading: action.payload };
  case SET_ERROR:
    return { ...state, error: action.payload };
  default:
    return state;
  }
};
  
export const selectDate = (state: RootState) => state.calculate.date;
export const selectApiReponse = (state: RootState) => state.calculate.apiResponse;
export const selectShowModal = (state: RootState) => state.calculate.showModal;
export const selectLoading = (state: RootState) => state.calculate.loading;
export const selectError = (state: RootState) => state.calculate.error;
export default calculateReducer;
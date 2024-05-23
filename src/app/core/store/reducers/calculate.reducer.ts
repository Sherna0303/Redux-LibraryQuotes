import { ApiResponse } from '../../models/api-response.model';
import { SET_API_RESPONSE, SET_DATE, TOGGLE_MODAL } from '../actions/calculate.actions';
import { RootState } from '../store';

interface CalculateState {
    date: string;
    apiResponse: ApiResponse | null;
    showModal: boolean;
  }
  
const initialState: CalculateState = {
  date: '',
  apiResponse: null,
  showModal: false,
};
  
const calculateReducer = (state = initialState, action: any): CalculateState => {
  switch (action.type) {
  case SET_DATE:
    return { ...state, date: action.payload };
  case SET_API_RESPONSE:
    return { ...state, apiResponse: action.payload };
  case TOGGLE_MODAL:
    return { ...state, showModal: !state.showModal };
  default:
    return state;
  }
};
  
export const selectDate = (state: RootState) => state.calculate.date;
export const selectApiReponse = (state: RootState) => state.calculate.apiResponse;
export const selectShowModal = (state: RootState) => state.calculate.showModal;
export default calculateReducer;
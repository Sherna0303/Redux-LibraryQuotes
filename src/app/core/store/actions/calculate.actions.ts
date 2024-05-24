import { ApiResponse } from '../../models/api-response.model';

export const SET_DATE = 'SET_DATE';
export const SET_API_RESPONSE = 'SET_API_RESPONSE';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const setDate = (date: string) => ({
  type: SET_DATE,
  payload: date,
});

export const setApiResponse = (response: ApiResponse) => ({
  type: SET_API_RESPONSE,
  payload: response,
});

export const toggleModal = () => ({ type: TOGGLE_MODAL });
export const setLoading = (loading: boolean) => ({ type: SET_LOADING, payload: loading });
export const setError = (error: string | null) => ({ type: SET_ERROR, payload: error });
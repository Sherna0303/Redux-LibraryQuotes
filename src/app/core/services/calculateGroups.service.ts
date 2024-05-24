import { mapCartsToApiFormat } from '../mappers/carts.mapper';
import { CartInfo } from '../models/cart-info.model';
import { ulrs } from '../resources/url.resource';
import httpService from './general/http.service';
import { StorageService } from './general/storage.service';
import { setApiResponse, setError, setLoading, toggleModal } from '../store/actions/calculate.actions';
import { AppDispatch } from '../store/store';

export const calculateGroupsService = (carts: CartInfo[], date: string ) => async (dispatch: AppDispatch): Promise<void> => {
  const storageService = new StorageService();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  const aggregateId:string = storageService.get('AggregateId');

  dispatch(setLoading(true));
  dispatch(setError(null));
  
  const url = ulrs.calculateGroups;
  const body = mapCartsToApiFormat(carts, date, aggregateId);

  return httpService.post(url, headers, body)
    .then(async (response) => {
      if (response.status === 200) {
        const responseBody = await response.json();
        dispatch(setApiResponse(responseBody));
        dispatch(toggleModal());
      } else {
        dispatch(setError('An error occurred while calculating the groups.'));
      }
    }).finally(() => {
      dispatch(setLoading(false));
    });
};
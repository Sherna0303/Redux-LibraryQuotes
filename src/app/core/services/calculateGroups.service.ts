import { mapCartsToApiFormat } from '../mappers/carts.mapper';
import { CartInfo } from '../models/cart-info.model';
import { ulrs } from '../resources/url.resource';
import httpService from './general/http.service';
import { StorageService } from './general/storage.service';
import { ApiResponse } from '../models/api-response.model';

export const calculateGroupsService = (carts: CartInfo[], date: string ): Promise<ApiResponse> => {
  const storageService = new StorageService();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  const aggregateId:string = storageService.get('AggregateId');

  const url = ulrs.calculateGroups;
  const body = mapCartsToApiFormat(carts, date, aggregateId);

  return httpService.post(url, headers, body)
    .then(async (response) => {
      if (response.status === 200) {
        const responseBody = await response.json();
        return responseBody;
      }
      return false;
    });
};
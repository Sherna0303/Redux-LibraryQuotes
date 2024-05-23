import { ulrs } from '../resources/url.resource';
import httpService from './general/http.service';
import { StorageService } from './general/storage.service';

export const getAggregateService = (): Promise<boolean> => {
  const storageService = new StorageService();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  const url = ulrs.getAggregateId;
  return httpService.get(url, headers)
    .then(async (response) => {
      if (response.status === 200) {
        const responseBody = await response.json(); 
        if (responseBody.aggregateId) {
          const aggregateId = responseBody.aggregateId; 
          storageService.set('AggregateId', aggregateId);
          return true;
        }
      } 
      return false;
    });
};
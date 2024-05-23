import { Copy } from '../models/copy.model';
import { ulrs } from '../resources/url.resource';
import http from '../services/general/http.service';

export const listCopiesSerice = (): Promise<Copy[]> => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };
  const url = ulrs.getAllCopies;
  return http.get(url, headers)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
    });
};
import { Copy } from '../models/copy.model';
import { ulrs } from '../resources/url.resource';
import http from './general/http.service';

interface CopyResponse {
  copyResponses: Copy[];
}

export const listCopiesService = (): Promise<CopyResponse> => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };
  const url = ulrs.getAllCopies;
  return http.get(url, headers)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return { copyResponses: [] };
      }
    })
    .catch(() => {
      return { copyResponses: [] };
    });
};
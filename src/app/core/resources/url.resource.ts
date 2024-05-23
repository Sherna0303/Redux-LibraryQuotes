import { environment } from '../environment/environment';

export const ulrs = {
  getAllCopies: `${environment.apiUrl}/GetAllCopies`,
  calculateGroups: `${environment.apiUrl}/CalculateGroups`,
  getAggregateId: `${environment.apiUrl}/GetRoot`
};
import { ICopyToApi } from './copy-to-api.model';

export interface SendToApi {
    aggregateId: string;
    customerId: string;
    createCustomer: string;
    groups: ICopyToApi[][];
}
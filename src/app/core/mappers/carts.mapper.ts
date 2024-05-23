import { SendToApi } from '../models/send-to-api.model';
import { CartInfo } from '../models/cart-info.model';

export const mapCartsToApiFormat = (carts: CartInfo[], date: string, aggregateId: string): SendToApi => {
  const groups: { id: string; amount: number }[][] = [];
  
  carts.forEach(cart => {
    const group: { id: string; amount: number }[] = [];
    cart.items.forEach(item => {
      group.push({
        id: item.id,
        amount: item.quantity
      });
    });
    groups.push(group);
  });
  
  const response: SendToApi = {
    aggregateId: aggregateId,
    customerId: 'IdCustomer',
    createCustomer: date,
    groups: groups
  };
  
  return response;
};
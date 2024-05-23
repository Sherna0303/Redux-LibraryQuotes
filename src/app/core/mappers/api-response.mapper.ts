import { ApiResponse, ComponentProps } from '../models/api-response.model';

export const mapApiResponseToComponentProps = (apiResponse: ApiResponse): ComponentProps => {
  return {
    totalGroups: apiResponse.totalGroups,
    totalDiscountGroups: apiResponse.totalDiscountGroups,
    totalIncreaseGroups: apiResponse.totalIncreaseGroups,
    groups: apiResponse.groups.map(group => ({
      seniority: group.seniority,
      total: group.total,
      totalDiscount: group.totalDiscount,
      totalIncrease: group.totalIncrease,
      copies: group.copies.map(copy => ({
        id: copy.id,
        title: copy.title,
        author: copy.author,
        price: copy.price,
        increase: copy.increase,
        discount: copy.discount,
        totalPrice: copy.totalPrice,
        type: copy.type,
      })),
    })),
  };
};
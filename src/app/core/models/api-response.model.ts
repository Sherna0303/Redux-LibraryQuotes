export interface ApiResponse {
    totalGroups: number;
    totalDiscountGroups: number;
    totalIncreaseGroups: number;
    groups: GroupInfo[];
}
  
export interface GroupInfo {
    seniority: number;
    total: number;
    totalDiscount: number;
    totalIncrease: number;
    copies: CopyInfo[];
}
  
export interface CopyInfo {
    id: string;
    title: string;
    author: string;
    price: number;
    increase: number;
    discount: number;
    totalPrice: number;
    type: string;
}
  
export interface ComponentProps {
    totalGroups: number;
    totalDiscountGroups: number;
    totalIncreaseGroups: number;
    groups: ComponentGroup[];
}
  
export interface ComponentGroup {
    seniority: number;
    total: number;
    totalDiscount: number;
    totalIncrease: number;
    copies: ComponentCopy[];
}

export interface ComponentCopy {
    id: string;
    title: string;
    author: string;
    price: number;
    increase: number;
    discount: number;
    totalPrice: number;
    type: string;
}
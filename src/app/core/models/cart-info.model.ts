import { Copy } from './copy.model';

export interface CartInfo {
    id: string;
    readableId: number;
    items: Copy[];
  }
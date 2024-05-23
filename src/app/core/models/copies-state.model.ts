import { Copy } from './copy.model';

export interface CopiesState {
    books: Copy[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
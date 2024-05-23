import { createAsyncThunk } from '@reduxjs/toolkit';
import { listCopiesService } from '../../services/listCopies.service';

export const getCopies = createAsyncThunk(
  'copies/getAllCopies',
  async () => {
    const result = await listCopiesService();
    return result.copyResponses;
  }
);
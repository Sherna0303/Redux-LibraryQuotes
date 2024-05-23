import { createAsyncThunk } from '@reduxjs/toolkit';
import { listCopiesSerice } from '../../services/listCopies.service';

export const getCopies = createAsyncThunk(
  'copies/getAllCopies',
  async () => {
    const copiesData = await listCopiesSerice();
    return copiesData;
  }
);
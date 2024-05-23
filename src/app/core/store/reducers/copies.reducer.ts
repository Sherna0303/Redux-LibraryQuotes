import { createSlice } from '@reduxjs/toolkit';
import { getCopies } from '../thunks/copies.thunk';

interface Copy {
    id: number;
    title: string;
    author: string;
  }
  
  interface CopiesState {
    copies: Copy[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
const initialState: CopiesState = {
  copies: [],
  status: 'idle',
  error: null,
};
  
const copiesSlice = createSlice({
  name: 'copies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCopies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCopies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.copies = action.payload;
      })
      .addCase(getCopies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch books';
      });
  },
});
  
export default copiesSlice.reducer;
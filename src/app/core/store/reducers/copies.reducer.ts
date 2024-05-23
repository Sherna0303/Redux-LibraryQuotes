import { createSlice } from '@reduxjs/toolkit';
import { getCopies } from '../thunks/copies.thunk';
import { RootState } from '../store';
import { CopiesState } from '../../models/copies-state.model';


const initialState: CopiesState = {
  books: [],
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
        state.books = action.payload;
      })
      .addCase(getCopies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to get books';
      });
  },
});
  
export const selectBooks = (state: RootState) => state.copies.books;
export const selectStatus = (state: RootState) => state.copies.status;
export const selectError = (state: RootState) => state.copies.error;
export default copiesSlice.reducer;
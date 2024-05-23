import { createSlice } from '@reduxjs/toolkit';
import { getCopies } from '../thunks/copies.thunk';
import { Copy } from '../../models/copy.model';
  
interface CopiesState {
  books: Copy[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
  
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
        state.error = action.error.message || 'Failed to fetch books';
      });
  },
});
  
export default copiesSlice.reducer;
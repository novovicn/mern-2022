import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  goals: [],
  error: false,
  success: false,
  loading: false,
  message: '',
};

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers:{
      reset: (state) => initialState,
  }
});


export const { reset } = goalsSlice.actions;
export default goalsSlice.reducer;
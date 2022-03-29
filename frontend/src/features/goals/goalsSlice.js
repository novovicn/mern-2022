import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import goalsService from './goalsService';

const initialState = {
  goals: [],
  error: false,
  success: false,
  loading: false,
  message: '',
};

export const createGoal = createAsyncThunk(
  '/goals/create',
  async (goalData, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth.user;
      console.log(token);
      return await goalsService.createGoal(goalData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state) => {
        state.loading = true;
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = false;
        state.message = '';
        state.goals.push(action.payload);
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.success = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = goalsSlice.actions;
export default goalsSlice.reducer;

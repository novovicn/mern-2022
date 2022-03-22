import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

//Get user from localStorage

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    error: false,
    success: false,
    loading: false,
    message: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false
            state.success = false
            state.error = false
            state.message = ''
        }
    },
    extraReducers: () => {}
})

export const { reset } = authSlice.actions
export default authSlice.reducer
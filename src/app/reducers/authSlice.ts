import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Users } from '../../types/user.type'

interface AuthState {
    isAuthenticated: boolean,
    token: string
    error: string
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: '',
    error: ''
}

export const login = createAsyncThunk('auth', async (body: Users , thunkAPI) => {
    try {
      const response = axios.post("https://65d592b8f6967ba8e3bbd40b.mockapi.io/login_", body)
      return response
    } catch (error: any) {
      if (error.name === 'AxiosError' && error.response.status === 422) {
        return thunkAPI.rejectWithValue(error.response.data)
      }
      throw error
    }
  })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers(buider){
        buider
        .addCase(login.fulfilled, (state,action:PayloadAction<any>) => {
            state.isAuthenticated = true;
            state.token = action.payload.data.token
            console.log(action)
        })
        .addCase(login.rejected, (state,action: PayloadAction<any>) => {
            state.isAuthenticated = false;
            state.error = action.payload
            
            
        })
    }
})
export default authSlice.reducer
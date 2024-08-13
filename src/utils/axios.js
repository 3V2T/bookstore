import axios from 'axios'
import { clearStore } from '../features/users/userSlice'
const bookUrl = 'http://localhost:5000/api/v1'

export const customFetch = axios.create({
  baseURL: bookUrl,
  withCredentials: true,
})


export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore())
    return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
  }
  return thunkAPI.rejectWithValue(error.response.data.msg)
}




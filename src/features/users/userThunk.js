import { customFetch, checkForUnauthorizedResponse } from '../../utils/axios'
import { clearAllBooksState } from '../books/allBooksSlice'
import { clearUserOrderState } from '../orders/orderSlice'
import { clearUserInfo } from './userSlice'

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user)

    return resp.data
  } catch (error) {
    const message = error.response?.data?.msg || 'Register failed!'
    return thunkAPI.rejectWithValue(message)
  }
}

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user)
    console.log(resp)

    return resp.data
  } catch (error) {
    const message = error.response?.data?.msg || 'Login error!'
    return thunkAPI.rejectWithValue(message)
  }
}

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, user)
    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(clearUserInfo(message))
    thunkAPI.dispatch(clearAllBooksState())
    thunkAPI.dispatch(clearUserOrderState())
    return Promise.resolve()
  } catch (error) {
    return Promise.reject()
  }
}

export const logoutUserThunk = async (url, thunkAPI) => {
  try {
    thunkAPI.dispatch(clearUserInfo())
    thunkAPI.dispatch(clearAllBooksState())
    thunkAPI.dispatch(clearUserOrderState())
    const resp = await customFetch.delete(`${url}`)
    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

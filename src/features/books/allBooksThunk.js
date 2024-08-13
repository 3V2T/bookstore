import { customFetch } from '../../utils/axios'

export const getAllBooksThunk = async (_, thunkAPI) => {
  const { search, category, publisher, author, sort, page } =
    thunkAPI.getState().allBooks
  const queryParams = {
    search,
    category,
    publisher,
    author,
    sort,
    page,
  }
  try {
    const resp = await customFetch('/books', { params: queryParams })
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

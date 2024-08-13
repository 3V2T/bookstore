import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { getAllBooksThunk } from './allBooksThunk'

const initialFiltersState = {
      search: '',
      categoryID: '',
      publisherID: '',
      authorID: '',
      sort: 'latest',
}

const initialState = {
  isLoading: true,
  books: [],
  totalBooks: 0,
  numOfPages: 1,
  page: 1,
  ...initialFiltersState,
}

export const getAllBooks = createAsyncThunk('allBooks/getBooks', getAllBooksThunk)


const allBooksSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    howLoading: (state) => {
      state.isLoading = true
    },
    hideLoading: (state) => {
      state.isLoading = false
    },
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1
      state[name] = value
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState }
    },
    changePage: (state, { payload }) => {
      state.page = payload
    },
    clearAllBooksState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllBooks.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.books = payload.books
        state.numOfPages = payload.meta.numOfPages
        state.totalBooks = payload.meta.totalBooks
      })
      .addCase(getAllBooks.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  },
})

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
  clearAllBooksState,
} = allBooksSlice.actions
export default allBooksSlice.reducer

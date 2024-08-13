import FormInput from '../FormInput'
import Form from 'react-bootstrap/Form'
import { ListInput, SelectInput } from '../'
import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import {
  primaryBgColor,
  quaternaryBgColor,
  primaryBgColorHover,
} from '../../assets/js/variables'
import Button from 'react-bootstrap/Button'
import { customFetch } from '../../utils/axios'
import { handleChange } from '../../features/books/allBooksSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useMemo } from 'react'


const fetchCategories = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await customFetch.get('/categories')
      return data
    },
  })
  return { isLoading, data, error, isError }
}


const fetchPublishers = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ['publishers'],
    queryFn: async () => {
      const { data } = await customFetch.get('/publishers')
      return data
    },
  })
  return { isLoading, data, error, isError }
}

const Sidebar = () => {
  const dispatch = useDispatch()

  const debounce = () => {
    let timeoutID
    return (e) => {
      setLocalSearch(e.target.value)
      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }))
      }, 1000)
    }
  }

  const optimizedDebounce = useMemo(() => debounce(), [])

  const handleChoose = (e) => {
     e.preventDefault()
    console.log(e.target.name);
     dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  }
  const {
    isLoading: isLoadingCategories,
    data: categoriesData,
    error: errorCategories,
    isError: isErrorCategories,
  } = fetchCategories()
  const {
    isLoading: isLoadingPublishers,
    data: publishersData,
    error: errorPublishers,
    isError: isErrorPublishers,
  } = fetchPublishers()

  if (isLoadingCategories)
    return <p style={{ marginTop: '1rem' }}>Loading...</p>
  if (isErrorCategories)
    return <p style={{ marginTop: '1rem' }}>{errorCategories.message}</p>
  if (isLoadingPublishers)
    return <p style={{ marginTop: '1rem' }}>Loading...</p>
  if (isErrorPublishers)
    return <p style={{ marginTop: '1rem' }}>{errorPublishers.message}</p>

  return (
    <Wrapper>
      <Form className="sidebar">
        <FormInput
          type="text"
          name="search"
          placeholder="Search"
          handleChange={optimizedDebounce}
        />
        <ListInput
          list={categoriesData.categories}
          name="category"
          handleChoose={handleChoose}
        />
        <SelectInput
          list={publishersData.publishers}
          name="publisher"
          handleChoose={handleChoose}
        />
        <Button className="btn-sm">Clear Filters</Button>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .sidebar {
    width: 12.5rem;
    position: sticky;
    top: 3rem;
    margin-bottom: 1rem;
  }

  .form-control {
    background-color: ${quaternaryBgColor};
  }

  .btn-sm {
    color: ${quaternaryBgColor};
    font-weight: bold;
    background-color: ${primaryBgColor};
    border-color: ${primaryBgColorHover};
  }
  .btn.btn-sm:active {
    background-color: ${quaternaryBgColor};
    color: ${primaryBgColor};
  }
`
export default Sidebar

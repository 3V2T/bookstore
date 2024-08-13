import React from 'react'
import styled from 'styled-components'

const SectionTitle = ({ text }) => {
  return (
    <Wrapper>
      <h2>{text}</h2>
    </Wrapper>
  )
}

export default SectionTitle

const Wrapper = styled.section`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 1rem;
`

import React from 'react'
import {
  shadow4,
  tertiaryBgColor,
  quaternaryBgColor,
  boldTextColor,
} from '../../assets/js/variables'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const BookItem = ({ book }) => {
  const image = book.book_img || 'https://via.placeholder.com/150'
  return (
    <Wrapper>
      <Link key={book.id} to={`/library/${book.id}`}>
        <Col key={book.id}>
          <Card className="b-card">
            <Card.Img variant="top" src={image} />
            <Card.Body className="b-card-body">
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.author.name}</Card.Text>
            </Card.Body>
            <div className="price-tag">{book.price} $</div>
          </Card>
        </Col>
      </Link>
    </Wrapper>
  )
}

export default BookItem

const Wrapper = styled.section`
  a {
    text-decoration: none;
  }
  .b-card:hover {
    box-shadow: ${shadow4};
    cursor: pointer;
    position: relative;
  }

  .b-card-body {
    background: ${quaternaryBgColor};
    border-radius: 0 0 5px 5px;
    height: 10.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .price-tag {
    width: fit-content;
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0.5rem 1rem;
    font-weight: bold;
    color: ${boldTextColor};
  }
`

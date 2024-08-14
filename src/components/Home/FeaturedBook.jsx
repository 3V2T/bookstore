import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useLoaderData, Link } from 'react-router-dom'
import styled from 'styled-components'

const FeaturedBook = () => {
  const { newBooks } = useLoaderData()
  return (
    <Wrapper className="segment">
      <h3 className="mx-5 segment-heading mb-3">Featured Books</h3>
      <Row xs={1} md={2} lg={4} className="g-5 mx-3">
        {newBooks.map((book) => {
          return (
            <Link key={book.id} to={`/library/${book.id}`}>
              <Col key={book.id}>
                <Card className="b-card">
                  <Card.Img variant="top" src={book.book_img} />
                  <Card.Body className="b-card-body">
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.author.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Link>
          )
        })}
      </Row>
    </Wrapper>
  )
}
export default FeaturedBook

const Wrapper = styled.section`
  a {
    text-decoration: none;
  }
`

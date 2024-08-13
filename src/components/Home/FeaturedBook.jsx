import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
const bookList = [
  {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Book 2',
    author: 'Author 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Book 3',
    author: 'Author 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Book 4',
    author: 'Author 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Book 5',
    author: 'Author 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    title: 'Book 6',
    author: 'Author 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
  },
]

const FeaturedBook = () => {
  return (
    <div className="segment">
      <h3 className="mx-5 segment-heading mb-3">Featured Books</h3>
      <Row xs={1} md={2} lg={4} className="g-5 mx-3">
        {bookList.map((book) => {
          return (
            <Col key={book.id}>
              <Card className='b-card'>
                <Card.Img variant="top" src={book.image} />
                <Card.Body className='b-card-body'>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
export default FeaturedBook

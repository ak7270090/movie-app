import { Card, Col, Container, Row } from "react-bootstrap";

const Page = ({Search}) => {
    return ( 
        <div>

<Container className='design'>
     
     <Row>
     <Col>
   <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={Search.Poster} />
     <Card.Body>
      <Card.Title>Title</Card.Title>
      <Card.Text>
        {Search.Title}
      </Card.Text>
      
    </Card.Body>
   </Card>
   </Col>
   </Row>
   </Container>

        </div>
     );
}
 
export default Page;
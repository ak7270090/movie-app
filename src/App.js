import logo from './logo.svg';
import './App.css';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import './design.css';
import Page from './page';

function App() {


  const [search,setSearch]=useState("mumbai");
const [data,setData]=useState("");
const [error,setError]=useState("");
const [MOVIE_NAME,setMOVIE_NAME]=useState("");


const submithandler=(e)=>{
  setError("");
  e.preventDefault();
 //http://www.omdbapi.com/?i=${search}&apikey=5cf1dafc
   axios.get(``)
   .then((res)=>
   setData(res.data))
.catch((error)=>
  setError(error.response.data.message)
);

};

  return (


    
    <div className="App">
     <Container>
      
       
    <Form onSubmit={submithandler}>
    <Row>
    <Col>
      <Form.Group  controlId="formBasicEmail" 
      //</Col>className="mb-3 col-sm-10 "
      >

       

        <div className="searchbar" >
        <Form.Control type="text" value={MOVIE_NAME} placeholder="City name" style={{borderRadius: '3.375rem' ,width: '90%'}}
        onChange={(e)=> setMOVIE_NAME(e.target.value)}
       
         />
       </div>
      </Form.Group>
      </Col>
</Row>
      
      <div className="mybtn">
      <Button variant="primary" type="submit" style={{borderRadius: '0.77rem'}}
      >
        Search
      </Button>
      </div>
    </Form>
    </Container>

    {/* {data && <div >
      
      <Container className='design'>
     
      <Row>
      <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.Poster} />
      <Card.Body>
       <Card.Title>Plot</Card.Title>
       <Card.Text>
         {data.Plot}
       </Card.Text>
       
     </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    <div>
   

 <Container>
 <Row>
        <Col>{data.Title}</Col>
      </Row>
      <Row>
        <Col>Rating-{data.imdbRating}</Col>
      </Row>
      <Row>
        <Col>Year-{data.Year}</Col>
      </Row>
      <Row>
        <Col>Runtime-{data.Runtime}</Col>
      </Row>
    </Container> 

    </div>
      </div>} */}
{error && <div>{error.Error}</div>}
<div className='flexdesign'>
  {data && data.Error?<div>{data.Error}</div>:null}
      {data && data.Search?.map((Search)=>

      <Page Search={Search}></Page>)}

    </div>
    </div>
  );
}

export default App;

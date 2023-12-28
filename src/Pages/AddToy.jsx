
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_NewToy } from "../graphql/toyMutation";
import { useNavigate } from "react-router-dom";
 
const AddToy = () => {
  const name = useRef("");
  const imageUrl = useRef("");
  const price = useRef("");
 
  const [addToy] = useMutation(CREATE_NewToy);
 
  const navigate = useNavigate();
 
  const addToyHandler = () => {
    addToy({
      variables: {
        name: name.current.value,
        imageUrl: imageUrl.current.value,
        price: Number(price.current.value),
      },
    }).then(() => {
      navigate("/");
    });
  };
 

  

  
  return (
    <>
   
      <Container className="">
        <Row>
      
          <Col className="col-md-8 offset-md-2">
            <legend>Add users Form</legend>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>price</Form.Label>
              <Form.Control type="text" ref={price} />
            </Form.Group>

           <Form.Group className="mb-3" controlId="formImageUrl">
              <Form.Label>Image Url</Form.Label>
              <Form.Control type="text" ref={imageUrl} />
            </Form.Group>

            <Button variant="primary" type="button" onClick={addToyHandler}>
              Add
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AddToy;
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useEffect, useRef } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ToyById } from "../graphql/toysQuery";
import { useNavigate, useParams } from "react-router-dom";
import { UPDATE_Toy } from "../graphql/toyMutation";
const EditToy = () => {
  const name = useRef("");
  const imageUrl = useRef("");
  const price = useRef("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery(GET_ToyById, {
    variables: { id: Number(id) },
  });
 
  const [updateToy] = useMutation(UPDATE_Toy);
 
  useEffect(() => {
    if (data?.Toy) {
      name.current.value = data.Toy.name;
      price.current.value = data.Toy.price;
      imageUrl.current.value = data.Toy.imageUrl;
    }
  }, [data]);
 



  const updateToyHandler = () => {
    updateToy({
      variables: {
        id: Number(id),
        name: name.current.value,
        imageUrl: imageUrl.current.value,
        price: Number(price.current.value),
      },
    }).then(() => {
      navigate("/");
    });
  };
 

  //  const updateToyHandler = () => {
  //   updateToy({
  //     variables: {
  //       id: Number(id),
  //       name: name.current.value,
  //       imageUrl: imageUrl.current.value,
  //       price: Number(price.current.value),
  //     },
  //     update(cache, { data: { updateToy } }) {
  //       cache.modify({
  //         fields: {
  //           allToys(existingData = [], { readField }) {
  //             existingData = existingData.filter(
  //               (item) => updateToy.id !== readField("id", item)
  //             );
  //             const updatToyRef = cache.writeFragment({
  //               data: updateToy,
  //               fragment: gql`
  //                 fragment newToy on Toy {
  //                   id
  //                   name
  //                   price
  //                   imageUrl
  //                 }
  //               `,
  //             });
  //             return [...existingData, updatToyRef];
  //           },
  //         },
  //       });
  //     },
  //   }).then(() => {
  //     navigate("/");
  //   });
  // }
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Update  users Form</legend>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" ref={price} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImageUrl">
              <Form.Label>Image Url</Form.Label>
              <Form.Control type="text" ref={imageUrl} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={updateToyHandler}>
              Update
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default EditToy;
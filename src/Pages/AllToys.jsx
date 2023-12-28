// import { useQuery } from "@apollo/client";
// import { useEffect, useState } from "react";
// import { Button, Container } from "react-bootstrap";
// import { GET_AllToys } from "../graphql/toysQuery";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import { useNavigate } from "react-router-dom";
// import { DELETE_ToyById } from "../graphql/toyMutation";
// import DeleteConfirmation from "../components/DeleteConfirmation";



 
// const AllToys = () => {
//   const [allToysData, setAllToysData] = useState([]);
//   const { data } = useQuery(GET_AllToys, {
//     fetchPolicy: "no-cache",
//   });
 
//   const navigate = useNavigate();
//   const [itemIDToDelete, setItemIDToDelete] = useState(0);
//   const [showModal, setShowModal] = useState(false);
 
//   const [deleteToy] = useMutation(DELETE_ToyById);
 

//   useEffect(() => {
//     if (data?.allToys) {
//       setAllToysData(data.allToys);
//     }
//   }, [data]);

//   const openConfirmDeleteModalHandler = (id) => {
//     setItemIDToDelete(id);
//     setShowModal(true);
//   };
 
//   const closeConfirmDeleteModalHandler = () => {
//     setItemIDToDelete(0);
//     setShowModal(false);
//   };
 
//   const confirmDeleteHandler = () => {
//     deleteToy({
//       variables: {
//         id: itemIDToDelete,
//       },
//     }).then(() => {
//       setAllToysData((existingData) => {
//         return existingData.filter((_) => _.id != itemIDToDelete);
//       });
//       setItemIDToDelete(0);
//       setShowModal(false);
//     });
//   };
 
//   return (
//     <>

    
//     <DeleteConfirmation
//     showModal={showModal}
//     title="Delete Confirmation"
//     body="Are you sure you want to delete item?"
//     closeConfirmDeleteModalHandler={closeConfirmDeleteModalHandler}
//     confirmDeleteHandler={confirmDeleteHandler}
//   ></DeleteConfirmation>


//     <thead>
//                   <tr>
//                      <th className="">Name</th>
//                      <th className="">Capital</th>
                  
                   
                    
//                  </tr>
//                 </thead>


//            <tbody>   
//       <Container className="mt-2">
//         <Row xs={1} md={3} className="g-4">
//           {allToysData.map((toy) => (
//             <Col key={toy.id}>
//             <tr>
           
            
//                 <Card>
//                 <td>
//                 <Card.Img
//                   // variant="top"
//                   // src={toy.imageUrl}
//                   // style={{ height: 400, width: "100%" }}
//                 />
//                 </td>
              
//                 <Card.Body>
//                 <td>
//                   <Card.Title>{toy.name}</Card.Title></td>
//                 <td> <Card.Text>{toy.price}</Card.Text>
// </td>

// <td>
//                   <Button
//                   variant="primary"
//                   type="button"
//                   onClick={() => navigate(`/edit-toy/${toy.id}`)}
//                   >
//                   Edit
//                   </Button>
//             </td>
//                 </Card.Body>
//               </Card>
//               </tr>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       <Button
//       variant="danger"
//       type="button"
//       onClick={() => openConfirmDeleteModalHandler(toy.id)}
//     >
//       Delete
//     </Button>

//       <Container className="mt-2">
//         <Row>
//           <Col className="col-md-4 offset-md-4">
//             <Button className="col-10"
//               variant="primary"
//               type="button"
//               onClick={() => {
//                 navigate("/add-toy");
//               }}
//             >
//               Add
//             </Button>
//           </Col>
//         </Row>
//         <Row xs={1} md={3} className="g-4">
       
//         </Row>
//       </Container>
   
//    </tbody>
//       </>
//   );
// };
 
// export default AllToys;




import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { GET_AllToys } from "../graphql/toysQuery";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { DELETE_ToyById } from "../graphql/toyMutation";
import DeleteConfirmation from "../Components/DeleteConfirmation";
 
const AllToys = () => {
  const [allToysData, setAllToysData] = useState([]);
  const { data } = useQuery(GET_AllToys, {
    fetchPolicy: "no-cache",
  });
  const navigate = useNavigate();
 
  const [itemIDToDelete, setItemIDToDelete] = useState(0);
  const [showModal, setShowModal] = useState(false);
 
  const [deleteToy] = useMutation(DELETE_ToyById);
 
  useEffect(() => {
    if (data?.allToys) {
      setAllToysData(data.allToys);
    }
  }, [data]);
 
  const openConfirmDeleteModalHandler = (id) => {
    setItemIDToDelete(id);
    setShowModal(true);
  };
 
  const closeConfirmDeleteModalHandler = () => {
    setItemIDToDelete(0);
    setShowModal(false);
  };
 
  const confirmDeleteHandler = () => {
    deleteToy({
      variables: {
        id: itemIDToDelete,
      },
    }).then(() => {
      setAllToysData((existingData) => {
        return existingData.filter((_) => _.id != itemIDToDelete);
      });
      setItemIDToDelete(0);
      setShowModal(false);
    });
  };
 





  // const confirmDeleteHandler = () => {
  //   deleteToy({
  //     variables: {
  //       id: itemIDToDelete,
  //     },
  //     update(cache, { data: { removeToy } }) {
  //       cache.modify({
  //         fields: {
  //           allToys(existingData = [], { readField }) {
  //             existingData = existingData.filter(
  //               (item) => removeToy.id !== readField("id", item)
  //             );
  //             return existingData;
  //           },
  //         },
  //       });
  //     },
  //   }).then(() => {
  //     // setAllToysData((existingData) => {
  //     //   return existingData.filter((_) => _.id != itemIDToDelete);
  //     // });
  //     setItemIDToDelete(0);
  //     setShowModal(false);
  //   });
  // };




  return (
    <>
      <DeleteConfirmation
        showModal={showModal}
        title="Delete Confirmation"
        body="Are you sure you want to delete item?"
        closeConfirmDeleteModalHandler={closeConfirmDeleteModalHandler}
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-4 offset-md-4">
            <Button
              variant="primary"
              type="button"
              onClick={() => {
                navigate("/add-toy");
              }}
            >
              Add
            </Button>
          </Col>
        </Row>
        <Row xs={1} md={3} className="g-4">
          {allToysData.map((toy) => (
            <Col key={toy.id}>
              <Card>
                <Card.Img
                  // variant="top"
                  // src={toy.imageUrl}
                  // style={{ height: 400, width: "100%" }}
                />
                <Card.Body>
                  <Card.Title>{toy.name}</Card.Title>
                  <Card.Text> {toy.price}</Card.Text>
                  <Button
                    variant="primary"
                    type="button"
                    onClick={() => navigate(`/edit-toy/${toy.id}`)}
                  >
                    Edit
                  </Button>
                  |
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => openConfirmDeleteModalHandler(toy.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default AllToys;



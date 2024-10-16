"use client";

import ButtonAtom from "hst/components/atoms/ButtonAtom";
import LoginFormOrganism from "hst/components/organisms/LoginFormOrganism";
import HomeTemplate from "hst/components/templates/HomeTemplate";
import { useGetUsersQuery } from "hst/store/services/users.api";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

export default function Login() {
    // const { data, error, isLoading } = useGetUsersQuery();
    // const { data, error, isLoading } = useGetUsersQuery();
    const handleSubmit = () => {
        console.log('Hola mundo')
    }

    return (
        // <Container>
        //     <Row>
        //         <Col>
        //             <ListGroup>
        //                 {data && data.length > 0 && data.map((item, index) => (
        //                     <ListGroup.Item key={item.id}>{item.title}, precio {item.body}</ListGroup.Item>
        //                     // console.log(item)
        //                 ))}
        //             </ListGroup>
        //         </Col>
        //     </Row>
        // </Container>
        <LoginFormOrganism />
        // <HomeTemplate>
        //     <h1>Mi nombre</h1>
        //     <p>Carlos Medina</p>
        //     <ButtonAtom label={'Enviara API'} onClick={handleSubmit} />
        // </HomeTemplate>

    );
}

// "use client";

// import {Container, Row, Col, ListGroup } from "react-bootstrap";

// import {useGetProductsQuery} from "lab9/store/services/product.api";

// export default function Product() {
  
//   const { data, error, isLoading } = useGetProductsQuery();
 
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <ListGroup>
//             {data && data.length > 0 && data.map((item, index) => (
//               <ListGroup.Item key={item.id}>{item.title}, precio {item.body}</ListGroup.Item>
//             ))}
//           </ListGroup>
//         </Col>
//       </Row>
//     </Container>
//   )
// }
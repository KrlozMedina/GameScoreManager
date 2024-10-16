"use client";

import withAuth from "hst/hoc/with-auth";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useGetUsersQuery } from "hst/store/services/users.api";

export default function PlayersList() {
    const { data, error, isLoading } = useGetUsersQuery();

    return (
        // <p>Hello PlayersList!</p>
        <Container>
            <Row>
                <Col>
                    <ListGroup>
                        {data && data.length > 0 && data.map((item, index) => (
                            <ListGroup.Item key={item.id}>{item.title}, precio {item.body}</ListGroup.Item>
                            // console.log(item)
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

// export default withAuth(PlayersList);
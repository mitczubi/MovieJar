import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowUp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Stats() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Link to="/">
                            <ArrowUp size={85} />
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Nothing here yet! Check back later for cool features.</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Stats;
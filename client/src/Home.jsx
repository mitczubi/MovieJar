import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowLeft, ArrowRight, ArrowDown } from "react-bootstrap-icons";
import { motion } from "framer-motion";

function Home() {

    return (
        <>
            <motion.main
                exit={{ opacity: 0 }}
                transition={{ duration: .5 }}
            >
                <Container>
                    <Row className="mb-3">
                        <Col>
                            <Link to="/jar">
                                <ArrowLeft size={85} />
                            </Link>
                        </Col>
                        <Col xs={8}>
                            <h1>Welcome to Movie Jar</h1>
                        </Col>
                        <Col>
                            <Link to="/paper">
                                <ArrowRight size={85} />
                            </Link>
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col>
                            <Link to="/stats">
                                <ArrowDown size={85}>
                                </ArrowDown>
                            </Link>   
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className="py-2">Stats</h3>
                        </Col>
                    </Row>
                </Container>
            </motion.main>
        </>
    )
};

export default Home;
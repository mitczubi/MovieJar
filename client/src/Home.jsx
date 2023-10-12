import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { motion } from "framer-motion";

function Home() {

    return (
        <>
            <motion.main
                exit={{ opacity: 0 }}
                transition={{ duration: .5 }}
            >
                <Container>
                    <Row>
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
                </Container>
            </motion.main>
        </>
    )
};

export default Home;
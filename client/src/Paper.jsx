import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

import { motion } from "framer-motion";

function Paper() {
    return(
        <>
            <motion.main
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
             >
                <Container>
                    <Row>
                        <Col>
                            <h1>Paper!</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Link to="/">
                            <ArrowLeft size={85} />
                        </Link>
                    </Row>
                </Container>
            </motion.main>
        </>
    )
}

export default Paper;
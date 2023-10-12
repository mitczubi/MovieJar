import { useState } from "react";
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { ArrowRight } from "react-bootstrap-icons";

import { motion } from "framer-motion";

function Jar() {
    const [randomMovie, setRandomMovie] = useState(null);

    const fetchRandomMovie = () => {
        axios.get("http://localhost:8000/api/movies/random/")
            .then(response => {
                console.log(response.data);
                setRandomMovie(response.data)
            })
            .catch(error => {
                console.error("Error: ", error)
            })
    }

    return(
        <>
            <motion.main
                animate={{ x: "0%" }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
             >
                <Container>
                    <Row>
                        <Col>
                            <Button variant="secondary" onClick={fetchRandomMovie}>
                                Pull from the Jar!
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        {randomMovie && (
                            <Card>
                                <Card.Body>{ randomMovie.name }</Card.Body>
                            </Card>
                        )}
                    </Row>
                    <Row>
                        <Link to="/">
                            <ArrowRight size={85} />
                        </Link>
                    </Row>
                </Container>
            </motion.main>
        </>
    )
}

export default Jar;
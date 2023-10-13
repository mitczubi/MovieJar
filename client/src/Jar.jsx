import { useState } from "react";
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { ArrowRight } from "react-bootstrap-icons";

import { motion } from "framer-motion";

function Jar() {
    const [randomMovie, setRandomMovie] = useState(null);
    const [movieToDelete, setMovieToDelete] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

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

    const handleDeleteMovie = async (movieId) => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/movies/${movieId}`);
            if (response.status === 200) {
                    console.log(`Movie with ID ${movieId} deleted successfully`);
                    setMovieToDelete(null);
                    setShowDeleteModal(false);
            } else {
                console.error(`Failed to delete movie with ID: ${movieId}.`);
            }
        } catch (error) {
            console.error('Error', error);
        }
    }

    return(
        <>
            <motion.main
                animate={{ x: "0%" }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
             >
                <Container>
                    <Row className="my-5">
                        <Col>
                            <Button variant="secondary" onClick={fetchRandomMovie}>
                                Pull from the Jar!
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        {randomMovie && (
                            <Card>
                                <Card.Body>
                                    <Card.Title>{ randomMovie.name }</Card.Title>
                                    <Button 
                                        variant="warning"
                                        onClick={() => {
                                            setMovieToDelete(randomMovie);
                                            setShowDeleteModal(true);
                                        }}
                                    >
                                        Remove Movie from Jar
                                    </Button>
                                </Card.Body>
                            </Card>
                        )}                        
                    </Row>
                    <Row>
                        <Link to="/">
                            <ArrowRight size={85} />
                        </Link>
                    </Row>
                    {movieToDelete && 
                        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Remove Movie</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Are you sure you want to remove {movieToDelete.name} from your jar?</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                                <Button variant="danger" onClick={() => handleDeleteMovie(movieToDelete.id)}>Confirm</Button>
                            </Modal.Footer>
                        </Modal>
                    }
                </Container>
            </motion.main>
        </>
    )
}

export default Jar;
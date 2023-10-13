import { useState } from "react";
import axios from "axios";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Alert
} from "react-bootstrap"
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

import { motion } from "framer-motion";

function Paper() {
    const [formData, setFormData] = useState({
        name: ''
    });
    const [movieCreated, setMovieCreated] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/movies/", formData);
            if (response.status === 200) {
                console.log('Movie added successfully');
                setMovieCreated(true);
            } else {
                console.error('Failed to add movie.');
            } 
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return(
        <>
            <motion.main
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
             >
                <Container fluid>
                    <Row>
                        <Col>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3"> 
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Movie Name" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleInputChange} 
                                    />
                                </Form.Group>
                                <Button variant="info" type="submit">
                                    Add Movie to Jar
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        {movieCreated && (
                            <Alert variant="success" onClose={() => setMovieCreated(false)} dismissible>
                                <Alert.Heading>Movie Added!</Alert.Heading>
                            </Alert>
                        )}
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
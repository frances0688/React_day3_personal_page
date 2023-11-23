import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquareFull} from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Contact = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
    };

    const [data,
        setData] = useState(initialState);

    const [disabled,
        setDisabled] = useState(true)

    const [alert,
        setAlert] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        if (data.firstName.length < 3) {
            setAlert("Name must be at least 3 characters");
            setDisabled(true);
        } else {
            setAlert(null);
            setDisabled(false);
        }
    }, [data]);

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
        console.log("data", data);
        console.log("event", e.target);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAlert("Form submitted successfully");
        setTimeout(() => {
            setData(initialState);
            navigate("/");
        }, 3000);
    };

    localStorage.setItem('data', JSON.stringify(data));

    return (
        <Container id="contactPage">
            <Row>
                <Col>
                    <h1>
                        <FontAwesomeIcon icon={faSquareFull} className="fa-solid"/>
                        Let's Talk</h1>
                </Col>
                <Col>
                    <section className="stylizedSec">
                        <Form onSubmit={handleSubmit}>
                            <Row id="form-name">
                                <Col>
                                    <Form.Group controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            onChange={handleInputChange}
                                            required/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="lastName"
                                            defaultValue={data.lastName}
                                            onChange={handleInputChange}
                                            required/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    defaultValue={data.email}
                                    onChange={handleInputChange}
                                    required/>
                            </Form.Group>

                            <Form.Group controlId="subject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="subject"
                                    defaultValue={data.subject}
                                    onChange={handleInputChange}
                                    required/>
                            </Form.Group>

                            <Form.Group controlId="message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    name="message"
                                    defaultValue={data.message}
                                    onChange={handleInputChange}
                                    required/>
                            </Form.Group>

                            <Button type="submit" disabled={disabled}>Send</Button>
                        </Form>
                        {alert}
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact
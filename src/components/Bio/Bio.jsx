import Container from "react-bootstrap/esm/Container"
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import "./Bio"
import {Col, Row} from "react-bootstrap";

const Bio = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{
                        width: '18rem'
                    }}>
                        <Image
                            src="https://lh3.googleusercontent.com/a/ACg8ocIuZ2tbwGl_GX1EmSNjPSAjqvtSV7bpVrewixewg5EmCNCc=s576-c-no"
                            rounded/>
                        <Card.Body>
                            <Card.Title>
                                <h4>Frances Morales Velilla</h4>
                                <h6>FULLSTACK WEB DEVELOPER</h6>
                            </Card.Title>
                            <Card.Text>
                                <div id="contact-icons">
                                    <a href="#">
                                        <span className="fa-brands fa-linkedin-in"></span>
                                    </a>
                                    <a href="#">
                                        <span className="fa-brands fa-github"></span>
                                    </a>
                                    <a href="#">
                                        <span className="fa-brands fa-facebook-f"></span>
                                    </a>
                                    <a href="#">
                                        <span className="fa-brands fa-instagram"></span>
                                    </a>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>

                    <Container id="intro">
                        <h1>Hello</h1>
                        <h2>Here's who I am and what I do...</h2>
                        <p>
                            I am an aspiring FullStack Web Developer with over 10 years professional
                            experience in Human Resources. My passion for technology and process
                            improvement, combined with an understanding of HR best practices, give me the
                            ability to work in different office environments and across multiple industries.
                        </p>
                        <p>
                            I am known for my strategic thinking, attention to detail, strong communication
                            skills, and I thrive in dynamic and fast-paced environments. On a regular day, I
                            could go from interviewing potential employees to staffing a new client, and
                            handling a Worker’s Compensation claim within the span of an hour.
                        </p>
                        <p>
                            <em>
                                In my pursuit of a career transition, I have discovered a deep enthusiasm for
                                Web Development, enriching my expertise through rigorous bootcamps and
                                self-directed online courses. I am excited to take on new challenges and grow
                                within the Web Development industry.
                            </em>
                        </p>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Bio
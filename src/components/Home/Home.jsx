import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faGithub, faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <Container className='main'>
            <Row>
                <Col md={6}>
                    <section id="contact-card">
                        <Image
                            src="https://lh3.googleusercontent.com/a/ACg8ocIuZ2tbwGl_GX1EmSNjPSAjqvtSV7bpVrewixewg5EmCNCc=s576-c-no"
                            alt="profile picture"
                            roundedCircle
                            fluid/>
                        <h1>Frances Morales</h1>
                        <hr/>
                        <h4>FULLSTACK WEB DEVELOPER</h4>
                        <div id="contact-icons">
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href="#"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                        </div>
                    </section>
                </Col>
                <Col md={6}>
                    <section id="intro">
                        <h1>Hello</h1>
                        <h2>Here's who I am and what I do...</h2>
                        <div>
                            <a href="./pages/bio.html">
                                <Button>Resume</Button>
                            </a>
                            <a href="./pages/portfolio.html">
                                <Button>Projects</Button>
                            </a>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam beatae
                            labore sit fugit molestias repellat necessitatibus voluptas possimus officiis,
                            incidunt atque. Dolorem?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure accusantium
                            facilis, quaerat dolores doloremque ad nostrum? Omnis!
                        </p>
                    </section>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;

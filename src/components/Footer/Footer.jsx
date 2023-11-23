import "./Footer.css"
import {Navbar, Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn, faGithub, faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <Navbar className="footer" sticky="bottom" expand="lg md">
            <Container>
                <Row>
                    <Col>
                        <h5>Developed with
                            <FontAwesomeIcon icon={faHeart} className="fa-solid"/>
                            by Frances</h5>
                    </Col>
                    <Col>
                        <div>
                            <h4>Call</h4>
                            <p>123 45 67 89</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4>Email</h4>
                            <p>frances0688@gmail.com</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4>Follow</h4>
                            <div>
                                <a href="#">
                                    <FontAwesomeIcon icon={faLinkedinIn}/>
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebookF}/>
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Footer;

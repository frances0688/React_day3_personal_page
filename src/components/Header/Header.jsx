import "./Header.css"
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faSquareFull} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <Navbar className="header" expand="lg md" fluid='true' nowrap='true'>
            <Container className="d-flex align-items-center justify-content-between">
                <Row className="align-items-center">
                    <Col>
                        <Navbar.Brand className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faSquareFull} className="fa-solid"/>
                            <h2 className="ml-2 mb-0">Frances Morales</h2>
                            <h4 className="ml-2 mb-0">/ FULLSTACK WEB DEVELOPER</h4>
                        </Navbar.Brand>
                    </Col>
                    <Col className="menu-container">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-icon">
                            <FontAwesomeIcon icon={faBars}/>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/" className="ml-3">ABOUT ME</Nav.Link>
                                <Nav.Link href="/bio" className="ml-3">BIOGRAPHY</Nav.Link>
                                <Nav.Link href="/projects" className="ml-3">PROJECTS</Nav.Link>
                                <Nav.Link href="/contact" className="ml-3">CONTACT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default Header
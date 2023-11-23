import Container from "react-bootstrap/esm/Container"
import Image from "react-bootstrap/esm/Image"
import "./Portfolio.css"
import {Col, Row} from "react-bootstrap"

const Portfolio = () => {
    return (
        <Container id="portfolioPage-main">
            <Row className="d-flex">
                <Col>
                    <Container id="portfolioPage-div">
                        <h1>
                            <span className="fa-solid fa-square-full"></span>
                            Portfolio</h1>
                        <p>
                            Here are some of the projects I've completed through my MERN stack learning
                            journey.
                            <b>Click on the images and take a look!</b>
                        </p>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Container className="d-flex stylizedSec">
                            <div>
                                <h2>Shine & Find</h2>
                                <p>
                                    Search for object in the dark with your lantern! This game was created with HTML
                                    and CSS.
                                </p>
                            </div>
                            <a href="https://frances0688.github.io/ShineAndFind/" target="_blank">
                                <Image
                                    src="./src/assets/images/Shine&Find.png"
                                    alt="Shine and find image"
                                    fluid/>
                            </a>
                        </Container>
                        <Container className="d-flex stylizedSec">
                            <div>
                                <h2>PawKedarnos</h2>
                                <p>Application for customers to manage profiles and request pet services
                                    appointments. App created using React, MongoDB, Express framework, and NodeJS.</p>
                            </div>
                            <a
                                href="https://github.com/frances0688?tab=repositories&q=pawKedarnos&type=&language=&sort="
                                target="_blank">
                                <Image
                                    src="./src/assets/images/PawKedarnos.png"
                                    alt="PawKedarnos website image"
                                    fluid/>
                            </a>
                        </Container>
                        <Container className="d-flex stylizedSec">
                            <div>
                                <h2>PrimeTech Solutions</h2>
                                <p>One page website for PrimeTech Solutions company.</p>
                            </div>
                            <a href="http://primetechsols.com/" target="_blank">
                                <Image
                                    src="./src/assets/images/PrimeTech.png"
                                    alt="PrimeTech website image"
                                    fluid/>
                            </a>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Portfolio
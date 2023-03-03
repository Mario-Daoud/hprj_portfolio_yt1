import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "./MailChimpForm"
import logo from "../assets/img/MDlogo.png"
import houseIcon from "../assets/img/houseIcon.png"
import linkedInIcon from '../assets/img/nav-icon1.svg';
import githubIcon from '../assets/img/nav-icon-4.png';
import booksIcon from '../assets/img/studies.png';

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />

                    <Col className="text-center text-sm-end align-items-center">
                        <a href="#home"><img src={logo} style={{ height: 100, width: 100 }} alt="Your Logo" /></a>
                        <div className="social-icon">
                            <a href="#home"><img src={houseIcon} alt="footerIcon" /></a>
                            <a href="https://www.linkedin.com/in/mario-daoud-bb5628268/"><img src={linkedInIcon} alt="footerIcon" /></a>
                            <a href="https://github.com/Mario-Daoud"><img src={githubIcon} alt="footerIcon" /></a>
                            <a href="https://www.vives.be/nl/handelswetenschappen-en-bedrijfskunde/software-development"><img src={booksIcon} alt="footerIcon" /></a>
                        </div>
                        <p>&copy; CopyRight {currentYear}. All rights reserved.</p>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}
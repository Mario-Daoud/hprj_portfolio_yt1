import { Container, Card, Col, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import githubIcon from '../assets/img/nav-icon-4.png';


export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1
        }
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Col>
                    <h2>Projects</h2>
                    <p>
                        In my portfolio, you will find a collection of projects that showcase my skills and expertise as a programmer.
                        Each project highlights my ability to build robust and efficient solutions to complex problems using various programming languages and technologies.
                        Whether it's a website, web application, or software tool, I approach each project with a creative and analytical mindset to deliver high-quality results.
                        Through each project, I have gained invaluable experience in project management, problem-solving, and collaboration, which allows me to deliver exceptional value to my clients and partners.
                        Take a look at my projects and see for yourself the level of excellence I bring to every task.
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <br />
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Container>
                                    <Row>
                                        <Col className="text-center">
                                            <Card className="bg-dark">
                                                <Card.Body>
                                                    <a href="https://github.com/Mario-Daoud">
                                                        <img src={githubIcon} alt="githubIcon" style={{ width: '64px', height: '64px' }} />
                                                    </a>
                                                    <Card.Text style={{ paddingLeft: '10px' }}>Check out my github account for more information and projects!</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="bg image" />
        </section>
    )
}

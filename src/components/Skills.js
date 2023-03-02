import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';


export const Skills = () => {
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>
              As a skilled programmer, I possess a strong foundation in various programming languages and frameworks, including but not limited to Java, .NET Core, Javascript, Node.js, ...
              <br/>
              Additionally, I am proficient in utilizing modern development tools such as Git and Agile & SCRUM methodologies to ensure efficient collaboration and project management. 
              My strong problem-solving skills, attention to detail, and passion for coding make me a valuable asset to any team.
              </p>
              
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="carousel item" />
                  <h5>
                    Full Stack Development
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="carousel item" />
                  <h5>
                    Back End Development
                  </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="carousel item" />
                  <h5>
                    Mobile App Development
                  </h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="carousel item" />
                  <h5>
                    Microsoft Office 365
                  </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="colorsharp" />
    </section>
  )
}


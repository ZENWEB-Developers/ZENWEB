import { Container, Row, Col, Tab, Nav, Card } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import mobileapp1 from "../assets/img/mobileapp1.png";
import mobileapp2 from "../assets/img/mobileapp2.png";
import mobileapp3 from "../assets/img/mobileapp3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webProjects = [
    {
      title: "Travel & Toure Management System",
      description: "MERN Development",
      imgUrl: projImg1,
    },
    {
      title: "Acution Website",
      description: "HTML, CSS, JavaScript Development",
      imgUrl: projImg2,
    },
    {
      title: "Customize Websites",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const mobileProjects = [
    {
      title: "Note App",
      description: "Kotlin Development",
      imgUrl: mobileapp1,
    },
    {
      title: "Mobile Game",
      description: "Kotlin + Firebase Development",
      imgUrl: mobileapp2,
    },
    {
      title: "To Do App",
      description: "Kotlin + Firebase Development",
      imgUrl: mobileapp3,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Projects are structured endeavors aimed at achieving specific goals. They involve planning, execution, and evaluation phases to deliver outcomes within set parameters. Projects can range from academic research and business initiatives to creative endeavors, each requiring careful management and coordination to succeed.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Our services</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="third">
  <Row>
    <Col md={6} lg={6}>
      <Card className="service-card custom-card text-center bg-light mb-4">
        <Card.Body>
          <Card.Title className="card-title">Web Development</Card.Title>
          <Card.Text>
            Creating responsive and engaging websites tailored to your business needs.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6} lg={6}>
      <Card className="service-card custom-card text-center bg-light mb-4">
        <Card.Body>
          <Card.Title className="card-title">University Project Help</Card.Title>
          <Card.Text>
            Assisting with academic projects and providing guidance for successful completion.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6} lg={6}>
      <Card className="service-card custom-card text-center bg-light mb-4">
        <Card.Body>
          <Card.Title className="card-title">Portfolio Development</Card.Title>
          <Card.Text>
            Designing and developing portfolios to showcase your skills and achievements.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6} lg={6}>
      <Card className="service-card custom-card text-center bg-light mb-4">
        <Card.Body>
          <Card.Title className="card-title">Mobile App Development</Card.Title>
          <Card.Text>
            Building user-friendly mobile applications for Android platform.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    
  </Row>
</Tab.Pane>

                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webProjects.map((project, index) => {
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
                      <Row>
                        {
                          mobileProjects.map((project, index) => {
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

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub } from 'react-icons/fa';
import data from "../../data/index.json";
import 'animate.css';
import { useInView } from 'react-intersection-observer';

export default function MyPortfolio() {
  const handleGitHubClick = () => {
    window.open("https://github.com/ahmedali221", "_blank");
  };

  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1 });

  return (
    <section id="MyPortfolio" className="py-5 bg-light">
      <Row className="g-4 d-flex justify-content-center">
        <div ref={headerRef} className={`text-center mb-5 ${headerInView ? 'animate__animated animate__fadeInDown animate__slow' : ''}`}>
          <h1 className="mb-4">My Portfolio</h1>
          <Button 
            variant="outline-primary" 
            onClick={handleGitHubClick}
            style={{ 
              backgroundColor: 'var(--primary)',
              color: 'white',
              border: 'none',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <FaGithub /> Visit My GitHub
          </Button>
        </div>
      </Row>
      <Container>
        <Row ref={cardsRef} className="g-4 justify-content-center">
          {data?.portfolio?.map((item, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              lg={4}
              className={`${cardsInView ? 'animate__animated animate__fadeInUp animate__slow' : ''}`}
            >
              <Card className="h-100 rounded shadow">
                <div className="position-relative rounded-top">
                  <Image src={item.src} alt={item.title || "Portfolio image"} className="img-fluid rounded-top h-auto" style={{ width: '100%', height: 'auto' }} />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between p-4">
                  <div>
                    <Card.Title className="text-dark">{item.title}</Card.Title>
                    <Card.Text className="text-muted">{item.description}</Card.Text>
                    <div className="skills--section--technologies mt-3">
                      <div className="mt-3 d-flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            style={{
                              backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
                              color: 'var(--primary)',
                              padding: '6px 12px',
                              borderRadius: '20px',
                              fontSize: '0.875rem',
                              fontWeight: '500',
                              display: 'inline-block',
                              margin: '2px',
                              transition: 'all 0.3s ease',
                              border: '1px solid var(--primary)',
                              opacity: '0.9',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                  </div>
                  </div>
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-between border-bottom pb-2 text-decoration-none fw-semibold mt-3"
                    style={{ 
                      color: 'var(--primary)',
                      borderColor: 'var(--primary)'
                    }}
                  >
                    {item.link}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <path
                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                        stroke="currentColor"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
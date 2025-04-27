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
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeFilter, setActiveFilter] = React.useState('all');

  const filteredProjects = data?.portfolio?.filter(item => {
    if (activeFilter === 'flutter') {
      return item.technologies.includes('Flutter');
    } else if (activeFilter === 'web') {
      return !item.technologies.includes('Flutter');
    }
    return true;
  });

  return (
    <section id="MyPortfolio" className="py-5 bg-light">
      <Container>
        <div 
          ref={headerRef} 
          className={`text-center mb-5 ${headerInView ? 'animate__animated animate__fadeInDown animate__faster' : ''}`}
          style={headerInView ? { 
            animationDuration: '800ms',
            animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          } : {}}
        >
          <h1 className="mb-4">My Journey</h1>
          <div className="d-flex justify-content-center gap-3 mb-3">
            <Button 
              variant={activeFilter === 'all' ? 'primary' : 'outline-primary'}
              onClick={() => setActiveFilter('all')}
              style={{
                backgroundColor: activeFilter === 'all' ? '#5E3BEE' : 'transparent',
                borderColor: '#5E3BEE',
                color: activeFilter === 'all' ? 'white' : '#5E3BEE',
                transition: 'all 0.3s ease'
              }}
            >
              All
            </Button>
            <Button 
              variant={activeFilter === 'flutter' ? 'primary' : 'outline-primary'}
              onClick={() => setActiveFilter('flutter')}
              style={{
                backgroundColor: activeFilter === 'flutter' ? '#5E3BEE' : 'transparent',
                borderColor: '#5E3BEE',
                color: activeFilter === 'flutter' ? 'white' : '#5E3BEE',
                transition: 'all 0.3s ease'
              }}
            >
              Mobile
            </Button>
            <Button 
              variant={activeFilter === 'web' ? 'primary' : 'outline-primary'}
              onClick={() => setActiveFilter('web')}
              style={{
                backgroundColor: activeFilter === 'web' ? '#5E3BEE' : 'transparent',
                borderColor: '#5E3BEE',
                color: activeFilter === 'web' ? 'white' : '#5E3BEE',
                transition: 'all 0.3s ease'
              }}
            >
              Web
            </Button>
          </div>
          <Button 
            variant="outline-primary" 
            onClick={handleGitHubClick}
            style={{ 
              backgroundColor: '#5E3BEE',
              color: 'white',
              border: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            <FaGithub /> Visit My GitHub
          </Button>
        </div>

        <div className="timeline">
          {filteredProjects?.map((item, index) => (
            <div 
              key={`${item.id}-${activeFilter}`} 
              ref={index === 0 ? cardsRef : null}
              className={`timeline-item ${cardsInView ? 'animate__animated animate__fadeInUp animate__slow' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }} 
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content card shadow">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="card-title mb-0">{item.title}</h3>
                    <span className="badge bg-primary">{item.date}</span>
                  </div>
                  <p className="card-text text-muted">{item.description}</p>
                  
                  <div className="mt-3 d-flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="tech-badge"
                        style={{
                          backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
                          color: 'var(--primary)',
                          padding: '6px 12px',
                          borderRadius: '20px',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          border: '1px solid var(--primary)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {item.linkUrl && (
                    <a
                      href={item.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center justify-content-between mt-3 text-decoration-none fw-semibold"
                      style={{ color: 'var(--primary)' }}
                    >
                      {item.link}
                      <svg width="16" height="16" viewBox="0 0 20 19" fill="none">
                        <path
                          d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                          stroke="currentColor"
                          strokeWidth="2.66667"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <style jsx>{`
        .timeline {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        @media (max-width: 767px) {
          .timeline::after {
            display: none;
          }
          .timeline-item {
            width: 100%;
            padding: 10px 20px;
            left: 0 !important;
            margin-bottom: 20px;
          }
          .timeline-marker {
            left: 20px !important;
            right: auto !important;
          }
          .timeline-content {
            margin-left: 30px;
          }
        }
        
        @media (min-width: 768px) {
          .timeline::after {
            content: '';
            position: absolute;
            width: 2px;
            background-color: var(--primary);
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -1px;
          }
          .timeline-item {
            padding: 10px 40px;
            position: relative;
            width: 50%;
            box-sizing: border-box;
          }
          .timeline-item:nth-child(odd) {
            left: 0;
          }
          .timeline-item:nth-child(even) {
            left: 50%;
          }
          .timeline-marker {
            position: absolute;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background: var(--primary);
            border: 3px solid white;
            top: 15px;
            z-index: 1;
          }
          .timeline-item:nth-child(odd) .timeline-marker {
            right: -8px;
          }
          .timeline-item:nth-child(even) .timeline-marker {
            left: -8px;
          }
        }
        
        .timeline-content {
          padding: 20px;
          background-color: white;
          position: relative;
          border-radius: 6px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .tech-badge {
          transition: all 0.3s ease;
        }
        .tech-badge:hover {
          background-color: var(--primary) !important;
          color: white !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
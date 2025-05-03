import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Button, Avatar } from '@mui/material';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function HeroSection() {
  const iconStyle = {
    color: 'var(--darkblue)',
    fontSize: { xs: '20px', md: '24px' },
    marginRight: '10px',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: 'var(--primary)',
      cursor: 'pointer'
    }
  };

  const fullTitle = "Hi, I'm Ahmed Ali";
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTitleVisible(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (titleVisible && titleIndex < fullTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedTitle(prevTitle => prevTitle + fullTitle[titleIndex]);
        setTitleIndex(prevIndex => prevIndex + 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [titleIndex, fullTitle, titleVisible]);

  const handleViewCV = () => {
    window.open("https://drive.google.com/file/d/1_AReCBZ0WuvImVc9fYaOyOLrdMn3o1MY/view?usp=sharing", "_blank");
  };

  return (
    <Box
      component="section"
      id="heroSection"
      sx={{
        py: { xs: 8, md: 16 },
        backgroundColor: 'var(--bg-shade)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center'
          }}
        >
          <Box sx={{ 
            visibility: titleVisible ? 'visible' : 'hidden',
            animation: titleVisible ? 'fadeIn 1s ease-in' : 'none'
          }}>
            <Typography variant="h4" ref={titleRef} sx={{ mb: 2 }}>
              {displayedTitle}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: 'var(--heading-color)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 2
              }}
            >
              <Box component="span" sx={{ color: 'var(--primary)' }}>
                Full Stack Web & Mobile
              </Box>
              <br />
              Developer
            </Typography>
            <Typography
              sx={{
                color: 'var(--darkblue)',
                fontSize: '1.125rem',
                lineHeight: 1.5,
                mb: 3
              }}
            >
              Full Stack Web Developer and Flutter Mobile Specialist with expertise in building comprehensive web applications and cross-platform mobile solutions. Proficient in both frontend and backend technologies, delivering scalable and efficient applications with exceptional user experiences.
            </Typography>

            <Box sx={{ display: 'flex', mb: 4 }}>
              {[
                { icon: FaGithub, link: "https://github.com/ahmedali221" },
                { icon: FaLinkedin, link: "https://www.linkedin.com/in/ahmedali2322" },
                { icon: FaWhatsapp, link: "https://wa.me/+201117744708" },
                { icon: FaEnvelope, link: "mailto:ahmeedali322322@gmail.com" }
              ].map((item, index) => (
                <Box
                  key={index}
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  sx={iconStyle}
                >
                  <item.icon />
                </Box>
              ))}
            </Box>

            <Button
              variant="outlined"
              onClick={handleViewCV}
              sx={{
                borderColor: 'var(--darkblue)',
                color: 'var(--darkblue)',
                py: 1.5,
                px: 4,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'var(--primary)',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              View My CV
            </Button>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              order: { xs: -1, md: 2 }
            }}
          >
            <Avatar
              src="./img/Ahmed.jpg"
              alt="Hero Section"
              sx={{
                width: { xs: '100%', sm: '240px', md: '320px', lg: '400px' },
                height: 'auto',
                maxWidth: '400px',
                aspectRatio: '1/1',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
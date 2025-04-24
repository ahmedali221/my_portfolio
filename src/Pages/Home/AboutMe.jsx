import React from 'react';
import { Box, Container, Grid, Typography, styled } from '@mui/material';

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: 2,
  boxShadow: 3,
  display: 'block',
  margin: '0 auto',
});

export default function AboutMe() {
  return (
    
    <Box
      component="section"
      id="AboutMe"
      sx={{
        py: 5,
        backgroundColor: 'var(--bg-shade)',
      }}
    >
      
      <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              color: 'var(--heading-color)',
              fontSize: { xs: '35px', md: '64px' },
              fontWeight: 700,
              lineHeight: { xs: '40px', md: '77px' },
              textAlign: 'center',
              mb: 4
            }}
          >
            About Me
          </Typography>
        <Box sx={{ textAlign: 'left', mb: 4 }}>
       
          
        </Box>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <StyledImage
                src="./img/programmer.jpg"
                alt="About Me"
                style={{ maxWidth: '500px', height: 'auto' }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--darkblue)',
                  mb: 3,
                  textAlign: 'center'
                }}
              >
                Versatile Full-Stack Developer with expertise in React.js and Flutter development. Proficient in building 
                responsive web applications using modern JavaScript, React.js, Node.js, and related technologies. Additionally, 
                experienced in creating cross-platform mobile applications with Flutter and Firebase. Strong foundation in both 
                frontend and backend development, with a focus on clean architecture, state management, and API integration. 
                Committed to delivering high-performance, user-centric solutions while maintaining code quality and best practices. 
                Passionate about learning new technologies and implementing innovative solutions to complex problems.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import data from "../../data/index.json";

export default function MySkills() {
  return (
    <Box
      component="section"
      id="mySkills"
      sx={{
        py: { xs: 7, md: 10 },
        backgroundColor: 'var(--white)',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8, px: { xs: 3, sm: 6, md: 0 } }}> {/* Added horizontal padding here */}
          <Typography
            variant="h2"
            sx={{
              color: 'var(--heading-color)',
              fontSize: { xs: '35px', md: '64px' },
              fontWeight: 700,
              lineHeight: { xs: '40px', md: '77px' }
            }}
          >
            My Skills
          </Typography>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{
            display: { xs: 'block', md: 'grid' },
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            padding: { xs: '10px', md: '20px' }
          }}
        >
          {data?.skills?.map((item, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'var(--white)',
                p: 2,
                borderRadius: '10.6px',
                border: '3px solid var(--bg-shade)',
                width: 'auto',
                '&:hover': {
                  borderBottom: '4px solid var(--primary)',
                  '& .description': {
                    color: 'var(--darkblue)'
                  }
                }
              }}
            >
              <Box
                sx={{
                  p: 2,
                  bgcolor: 'white',
                  borderRadius: '10.6px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: { xs: '100px', sm: '120px' },
                  width: { xs: '100px', sm: '120px' },
                  margin: '0 auto'
                }}
              >
                <CardMedia
                  component="img"
                  image={item.src}
                  alt={item.title}
                  sx={{
                    height: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
              </Box>

              <CardContent sx={{ p: 0, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '23px', md: '32px' },
                    fontWeight: 700,
                    lineHeight: { xs: '30px', md: '45px' },
                    color: 'var(--heading-color)'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  className="description"
                  sx={{
                    fontSize: { xs: '17.333px', md: '21.3px' },
                    lineHeight: { xs: '27px', md: '32px' },
                    color: 'var(--black)',
                    transition: 'color 0.3s'
                  }}
                >
                  {item.description}
                </Typography>
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  mt: 2,
                  gap: 1  
                }}>
                  {item.technologies.map((tech, techIndex) => (
                    <Box
                      key={techIndex}
                      sx={{
                        bgcolor: 'var(--bg-shade)',
                        color: 'var(--primary)',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '16px',
                        fontSize: '14px',
                        fontWeight: 500,
                        border: '1px solid var(--primary)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'var(--primary)',
                          color: 'var(--white)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                        }
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
               
                </Box>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

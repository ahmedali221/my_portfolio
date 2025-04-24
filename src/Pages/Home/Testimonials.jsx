import React from 'react';
import { Box, Container, Typography, Grid, Card, Avatar, Stack } from '@mui/material';
import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <Box
      component="section"
      id="testimonial"
      sx={{
        py: 4,
        backgroundColor: 'var(--bg-shade)'
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
       
        <Typography
          variant="h2"
          sx={{
            color: 'var(--heading-color)',
            fontSize: { xs: '35px', md: '45px' },
            fontWeight: 700
          }}
        >
          Customer Feedback
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={4}
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            gap: { xs: 3, md: 4 }
          }}
        >
          {data?.testimonial?.map((item, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '30px',
                  backgroundColor: 'var(--bg-shade)',
                  border: '1px solid var(--primary)',
                  borderRadius: 2,
                  boxShadow: 'none',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Stack direction="row" spacing={1}>
                  {[...Array(5)].map((_, starIndex) => (
                    <Box
                      key={starIndex}
                      component="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={19}
                      viewBox="0 0 27 26"
                      sx={{ fill: 'var(--primary)' }}
                    >
                      <path d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9150C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.37836 9.38942 7.37836L12.0945 0.953177Z" />
                    </Box>
                  ))}
                </Stack>

                <Typography
                  sx={{
                    minHeight: '120px',
                    color: 'var(--darkblue)',
                    fontSize: '1rem',
                    lineHeight: 1.7
                  }}
                >
                  {item.description}
                </Typography>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    src={item.src}
                    alt={item.author_name}
                    sx={{ width: 50, height: 50 }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: 'var(--heading-color)',
                        fontSize: '14px'
                      }}
                    >
                      {item.author_name}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'var(--darkblue)',
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '120%'
                      }}
                    >
                      {item.author_designation}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
import { Box, Container, Typography, Grid } from '@mui/material';

export default function Internships() {
  return (
    <Box component="section" id="internships" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Internships
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Dec 2024 - Present
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'var(--primary)', mt: 1 }}>
                ITI - Frontend & Cross Platform Mobile Intensive Code Camp
              </Typography>
              <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>
                Sohag Branch
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                • Intensive 4-months full-stack development program<br/>
                • Frontend & Cross-Platform Mobile: React, Angular, Flutter, React Native<br/>
                • Backend: Node.js with MongoDB<br/>
                • Hands-on projects and real-world scenarios
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Feb 2025 - Apr 2025
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'var(--primary)', mt: 1 }}>
                Cellula Technologies
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Flutter Internship (Remote)
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
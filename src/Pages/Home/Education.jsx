import { Box, Container, Typography, Grid } from '@mui/material';

export default function Education() {
  return (
    <Box component="section" id="education" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Education
        </Typography>
        
        <Box sx={{ borderLeft: '2px solid var(--primary)', pl: 4, position: 'relative' }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              2019-2023
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, color: 'var(--primary)' }}>
              Faculty of Computers and Information, Assiut University
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Bachelor's in Information Systems
            </Typography>
            <Typography variant="body1">
              Grade: Very Good
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic' }}>
              Graduation Project: Grade: Excellent
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
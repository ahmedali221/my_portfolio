import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

export default function CoursesCertificates() {
  return (
    <Box component="section" id="certificates" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Courses and Certificates
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Flutter Intern Certificate
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Cellula Technologies
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Employability Skills
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  UCCD (American Chamber)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Project Management
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  UCCD (Aspire)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
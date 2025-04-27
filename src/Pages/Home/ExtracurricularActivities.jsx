import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

export default function ExtracurricularActivities() {
  return (
    <Box component="section" id="activities" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Extracurricular Activities
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Project Architect Member
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Enactus AU
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  OC Member
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  TEDx - Assiut University
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  PR Member
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Bio Code - Assiut University
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
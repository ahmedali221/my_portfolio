import { Box, Container, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function Experience() {
  return (
    <Box component="section" id="experience" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Experience
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            2025 - Present
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, color: 'var(--primary)' }}>
            iSON Xperiences Egypt
          </Typography>
          <Typography variant="subtitle1">
            IT Help Desk
          </Typography>
          
          <List sx={{ mt: 2, pl: 2 }}>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', p: 0 }}>
              <ListItemText primary="Provided first-line technical support to end-users" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', p: 0 }}>
              <ListItemText primary="Documented and escalated complex problems to higher-level technical teams" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', p: 0 }}>
              <ListItemText primary="Managed and resolved customer IT support requests" />
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  );
}
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, Container, Typography, TextField, Button, Checkbox, FormControlLabel, Grid, Select, MenuItem, FormControl, InputLabel, Snackbar, Alert } from '@mui/material';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.init('AzhnVPZmWgR1y6j88');
    
    emailjs.send('service_y2po65q', 'template_wk3eex2', {
      title: "New Contact Form Submission",
      name: formData.name,
      message: formData.message,
      email: formData.email,
      time: new Date().toLocaleString(),
      reply_to: formData.email
    })
    .then(() => {
      setSnackbarMessage('Message sent successfully!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch(() => {
      setSnackbarMessage('Failed to send message. Please try again.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    });
  };

  return (
    <Box component="section" id="Contact" sx={{ py: { xs: 10, md: 12 }, backgroundColor: 'var(--white)' }}>
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 8 } }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h5"
            sx={{
              color: 'var(--primary)',
              textTransform: 'uppercase',
              mb: 2
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: 'var(--heading-color)',
              fontSize: { xs: '35px', md: '45px' },
              fontWeight: 700,
              mb: 2
            }}
          >
            Contact Me
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--darkblue)' }}>
          You Can Send Me A Message Via The Form Below.
          </Typography>
         
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 4,
            mx: 'auto',
            px: { xs: 2, md: 4 },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'var(--primary)' },
              '&:hover fieldset': { borderColor: 'var(--primary)' },
              '&.Mui-focused fieldset': { borderColor: 'var(--primary)' }
            },
            '& .MuiInputLabel-root': {
              color: 'var(--darkblue)',
              '&.Mui-focused': { color: 'var(--primary)' }
            }
          }}
        >
          <Grid container spacing={3} direction="column">
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                label="Your Name"
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                label="Email"
                type="email"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                label="Message"
                multiline
                rows={8}
                placeholder="Type your message..."
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="outlined"
                type="submit"
                sx={{
                  borderColor: 'var(--primary)',
                  color: 'var(--primary)',
                  py: 1.5,
                  px: 4,
                  '&:hover': {
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
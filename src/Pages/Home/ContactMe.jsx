import { Box, Container, Typography, TextField, Button, Checkbox, FormControlLabel, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function ContactMe() {
  return (
    <Box
      component="section"
      id="Contact"
      sx={{
        py: { xs: 10, md: 12 },
        backgroundColor: 'var(--white)',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '100%'
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: '100%',
          px: { xs: 2, md: 8 }
        }}
      >
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
          </Typography>
        </Box>

        <Box
          component="form"
          sx={{
            mt: 4,
            maxWidth: '800px',
            mx: 'auto',
            width: '100%',
            px: { xs: 2, md: 4 },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'var(--primary)',
              },
              '&:hover fieldset': {
                borderColor: 'var(--primary)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'var(--primary)',
              }
            },
            '& .MuiInputLabel-root': {
              color: 'var(--darkblue)',
              '&.Mui-focused': {
                color: 'var(--primary)',
              }
            },
            '& .MuiSelect-select': {
              '&:focus': {
                backgroundColor: 'transparent'
              }
            }
          }}
        >
          <Grid container spacing={3} direction="column"> {/* Changed direction to column */}
            <Grid item container spacing={2}>
              <Grid item xs={12} sm={6} >
                <TextField
                  
                  required
                  id="first-name"
                  label="First Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  
                  required
                  id="last-name"
                  label="Last Name"
                  variant="outlined"
                />
              </Grid>
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="phone-number"
                label="Phone Number"
                type="tel"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Choose a topic</InputLabel>
                <Select
                  defaultValue=""
                  label="Choose a topic"
                >
                  <MenuItem value="">Select One...</MenuItem>
                  <MenuItem value="item1">Item 1</MenuItem>
                  <MenuItem value="item2">Item 2</MenuItem>
                  <MenuItem value="item3">Item 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="message"
                label="Message"
                multiline
                rows={8}
                placeholder="Type your message..."
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox required />}
                label="I accept the terms"
                sx={{ color: 'var(--darkblue)' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  py: 1.5,
                  px: 4,
                  '&:hover': {
                    backgroundColor: 'var(--primary-dark)'
                  }
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
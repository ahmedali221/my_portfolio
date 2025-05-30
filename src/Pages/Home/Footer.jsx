import React from "react";
import { Box, Container, Typography, Stack, Link as MuiLink } from '@mui/material';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  const iconStyle = {
    color: 'var(--darkblue)',
    fontSize: { xs: '20px', sm: '24px' },
    '&:hover': {
      color: 'var(--primary)',
    }
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: { xs: 3, md: 5 },
        backgroundColor: 'var(--bg-shade)'
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          spacing={2} 
          alignItems="center"
          textAlign="center"
        >
          <Typography>
            Contact Me:{' '}
            <MuiLink 
              href="mailto:ahmeedali322322@gmail.com"
              sx={{ color: 'var(--primary)', textDecoration: 'none' }}
            >
              Ahmed Ali
            </MuiLink>
          </Typography>

          <Stack 
            spacing={2} 
            alignItems="center"
            textAlign="center"
            direction={{ xs: "column", sm: "row" }}
          >
            <MuiLink href="https://github.com/yourusername" target="_blank" rel="noreferrer" sx={iconStyle}>
              <FaGithub />
            </MuiLink>
            <MuiLink href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noreferrer" sx={iconStyle}>
              <FaLinkedin />
            </MuiLink>
            <MuiLink href="https://wa.me/+201117744708" target="_blank" rel="noreferrer" sx={iconStyle}>
              <FaWhatsapp />
            </MuiLink>
          </Stack>

          <Typography color="var(--darkblue)">
            &copy; {new Date().getFullYear()} Ahmed Ali. All Rights Reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
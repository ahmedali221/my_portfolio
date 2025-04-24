import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Container, Button, IconButton, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code'; // Add this import at the top


function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', id: 'heroSection' },
    { label: 'Skills', id: 'mySkills' },
    { label: 'About Me', id: 'AboutMe' },
    { label: 'Portfolio', id: 'MyPortfolio' },
    { label: 'Testimonials', id: 'testimonial' }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} onClick={() => scrollTo(item.id)}>
            <ListItemText primary={item.label} sx={{ cursor: 'pointer' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'var(--white)',
        boxShadow: isScrolled ? '0px 5.333px 80px 0 rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease',
        py: isScrolled ? 0 : 1
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ 
          justifyContent: 'space-between', 
          py: 1,
          minHeight: '64px',
          margin: '0 auto'
        }}>
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
          }}>
            <Box 
              onClick={() => scrollTo('heroSection')}
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                marginRight: { xs: 0, md: 4 }
              }}
            >
              <CodeIcon 
                sx={{
                  fontSize: '32px',
                  color: 'var(--primary)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(20deg)',
                    color: 'var(--darkblue)'
                  }
                }}
              />
              <Box 
                component="span"
                sx={{
                  fontSize: { xs: '20px', md: '24px' },
                  fontWeight: 700,
                  color: 'var(--primary)',
                  fontFamily: 'Roboto',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: 'var(--darkblue)',
                  }
                }}
              >
                AhmedAli.dev
              </Box>
            </Box>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                sx={{
                  display: { xs: 'none', md: 'block' },
                  color: activeSection === item.id ? 'var(--primary)' : 'var(--darkblue)',
                  borderBottom: activeSection === item.id ? '2px solid var(--primary)' : 'none',
                  borderRadius: 0,
                  padding: '6px 12px',
                  '&:hover': { 
                    color: 'var(--primary)',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            ml: 'auto'
          }}>
            <Button
              variant="outlined"
              onClick={() => scrollTo('Contact')}
              sx={{
                display: { xs: 'none', md: 'block' },
                borderColor: 'var(--primary)',
                color: 'var(--primary)',
                '&:hover': {
                  borderColor: 'var(--primary)',
                  backgroundColor: 'var(--primary)',
                  color: 'white'
                }
              }}
            >
              Contact Me
            </Button>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: 'var(--darkblue)' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: { xs: '200px', sm: '240px' } 
          }
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;

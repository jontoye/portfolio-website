import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  SwipeableDrawer,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Slide,
  Switch,
  SvgIcon,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';

const pages = [
  { name: 'About', icon: InfoIcon, href: '#about' },
  { name: 'Projects', icon: CodeIcon, href: '#projects' },
  { name: 'Contact', icon: PersonIcon, href: '#contact' },
];

const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  theme: {
    display: 'flex',
    alignItems: 'center',
  },
};

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  bottom: 8,
  left: 'calc(50% - 15px)',
}));

const HideOnScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = ({ toggleDarkMode }) => {
  const theme = useTheme();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <HideOnScroll>
      <AppBar position="fixed" color="default">
        <Container>
          <Toolbar sx={styles.toolbar}>
            <Box sx={styles.social}>
              <IconButton
                href="https://github.com/jontoye/"
                target="_blank"
                aria-label="GitHub Link"
                color={theme.palette.mode === 'dark' ? 'customTeal' : 'default'}>
                <GitHubIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/jonathan-toye/"
                target="_blank"
                aria-label="LinkedIn Link"
                color={theme.palette.mode === 'dark' ? 'customTeal' : 'default'}>
                <LinkedInIcon />
              </IconButton>
            </Box>

            <IconButton sx={{ display: { sm: 'none' } }} onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {pages.map((page) => (
                <Button variant="text" color="inherit" key={page.name} href={page.href}>
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={styles.theme}>
              <FormControlLabel
                label={
                  <SvgIcon sx={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                    {theme.palette.mode === 'light' ? (
                      <LightModeIcon />
                    ) : (
                      <DarkModeIcon
                        color={theme.palette.mode === 'dark' ? 'customTeal' : 'default'}
                      />
                    )}
                  </SvgIcon>
                }
                control={<Switch size="small" onChange={toggleDarkMode} color="default" />}
              />
            </Box>
          </Toolbar>
        </Container>
        <SwipeableDrawer
          anchor="top"
          open={isMenuOpen && isSmallScreen}
          onClose={() => setMenuOpen(false)}
          onOpen={() => setMenuOpen(true)}>
          <List>
            {pages.map((page) => (
              <ListItem key={page.name}>
                <ListItemButton>
                  <ListItemIcon>
                    <page.icon />
                  </ListItemIcon>
                  <ListItemText>{page.name}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Puller />
        </SwipeableDrawer>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;

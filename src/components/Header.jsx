import React from 'react';
import { Avatar, Box, Button, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BackgroundImg from '../images/bg3.jpeg';
import ProfileImg from '../images/profile-img.png';

const styles = {
  section: {
    maxWidth: { xs: '700px', md: '1200px' },
    paddingTop: { xs: '5rem', custom: '9rem', md: '13rem' },
  },
  greeting: {
    display: { xs: 'none', sm: 'block' },
  },
  columnText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: { sm: 'flex-end', md: 'flex-start' },
  },
  columnImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    marginTop: { xs: '1rem', sm: '2rem' },
  },
  profileAvatar: {
    width: { xs: '6rem', sm: '10rem', custom: '15rem', md: '20rem' },
    height: { xs: '6rem', sm: '10rem', custom: '15rem', md: '20rem' },
    background: `url(${BackgroundImg})`,
    backgroundSize: 'cover',
    boxShadow: (theme) => theme.shadows[8],
  },
};

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box>
      <Container sx={styles.section}>
        <Grid container spacing={2}>
          <Grid item xs={8} md={6} order={{ xs: 2, md: 2 }} sx={styles.columnText}>
            <Typography variant="h6" sx={styles.greeting}>
              Hello, I&apos;m
            </Typography>
            <Typography variant={isSmallScreen ? 'h3' : 'h2'}>Jonathan Toye</Typography>
            <Typography
              variant={isSmallScreen ? 'subtitle2' : 'h6'}
              color={theme.palette.mode === 'light' ? 'customBlue.main' : 'customTeal.main'}>
              A Web Developer in Toronto
            </Typography>
            <Box sx={styles.buttons}>
              <Button
                variant="contained"
                size={isSmallScreen ? 'small' : 'large'}
                color={theme.palette.mode === 'light' ? 'customBlue' : 'customTeal'}
                href="#projects">
                My Projects
              </Button>
              <Button
                variant="outlined"
                size={isSmallScreen ? 'small' : 'large'}
                color={theme.palette.mode === 'light' ? 'customBlue' : 'customTeal'}
                href="#contact">
                Contact Me
              </Button>
            </Box>
          </Grid>

          <Grid item xs={4} md={6} order={{ xs: 1, md: 1 }} sx={styles.columnImage}>
            <Avatar sx={styles.profileAvatar} src={ProfileImg} alt="Profile" elevation={3} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;

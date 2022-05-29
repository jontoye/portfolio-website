import React from 'react';
import { Avatar, Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const styles = {
  section: {
    maxWidth: { xs: '700px', md: '1200px' },
    paddingTop: { xs: '2rem', md: '4rem'}
  },
  greeting: {
    display: { xs: 'none', sm: 'block' }
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
  profileAvatar: {
    display: { sm: 'none' },
    width: '5rem',
    height: '5rem',
    background: "url('images/bg3.jpeg')",
    backgroundSize: 'cover'
  },
  profileImage: {
    display: { xs: 'none', sm: 'block' },
    position: 'relative',
    height: '22rem',
    width: '100%',
    backgroundImage: "url('images/bg3.jpeg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    borderRadius: { xs: '50%', sm: '3rem' },
    marginTop: '3rem',
    transform: {xs: 'scale(0.6)', sm: 'scale(0.9)', md: 'scale(1)' },

    '& img': {
      position: 'absolute',
      right: { md: '1rem' },
      bottom: { xs: 0, sm: '-3rem' },
      maxWidth: '100%',
    },
  },
  imageOverlay: {
    position: 'absolute',
    width: '100%',
    height: '3rem',
    bottom: '-3rem',
    right: 0,
    backgroundImage : (theme) => `linear-gradient(to bottom, rgba(255,255,255, 0), ${theme.palette.background.default} 90%)`,
  }
}

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <Box>
      <Container sx={styles.section}>
        <Grid container spacing={2}>
          <Grid item xs={8} sm={12} md={5} order={{ xs: 2, sm: 1}} sx={styles.columnText}>
            <Typography variant='h6' sx={styles.greeting}>Hello, I'm</Typography>
            <Typography variant={isSmallScreen ? 'h4' : 'h2'}>Jonathan Toye</Typography>
            <Typography variant={isSmallScreen ? 'subtitle2' : 'h6'} color={theme.palette.mode === 'light' ? 'customBlue.main' : 'customTeal.main'}>A Web Developer in Toronto</Typography>
          </Grid>

          <Grid item xs={4} sm={12} md={7} order={{ xs: 1, sm: 2}}  sx={styles.columnImage}>
            <Box sx={styles.profileImage}>
              <img src='images/profile-img.png' alt='Profile' />
              <Box sx={styles.imageOverlay} />
            </Box>
            <Avatar sx={styles.profileAvatar} src='images/profile-img.png' alt='Profile' />
          </Grid>
        </Grid>
      </Container>
    </Box>

  )
}

export default Header
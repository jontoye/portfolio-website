import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/material'

const styles = {
  section: {
    height: '100vh',
  },
  columnLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  columnRight: {

  },
  profileImage: {
    position: 'relative',
    height: '30rem',
    width: '100%',
    backgroundImage: "url('images/bg3.jpeg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    borderRadius: '3rem',

    '& img': {
      position: 'absolute',
      right: { xs: 0, lg: '3rem' },
      bottom: '-3rem',
    }
  },
  imageOverlay: {
    position: 'absolute',
    width: '100%',
    height: '3rem',
    bottom: '-3rem',
    right: 0,
    backgroundImage : 'linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 1) 90%)',
  }
}

const Header = () => {
  return (
    <Box sx={styles.section}>
      <Container>
        <Grid container columns={8}>
          <Grid item xs={3} sx={styles.columnLeft}>
            <Typography variant='subtitle'>Hello, I'm</Typography>
            <Typography variant='h2'>Jonathan Toye</Typography>
            <Typography variant='h6'>A Web Developer in Toronto</Typography>
          </Grid>

          <Grid item xs={5} sx={styles.columnRight}>
            <Box sx={styles.profileImage}>
              <img src="images/profile-img.png" alt="Profile" />
              <Box sx={styles.imageOverlay} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

  )
}

export default Header
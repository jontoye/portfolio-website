import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/material'

const styles = {
  section: {
    maxWidth: { xs: '700px', md: '100%' },
    paddingTop: { xs: '2rem', md: '4rem'}
  },
  greeting: {
    display: { xs: 'none', sm: 'block' }
  },
  columnLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: { sm: 'flex-end', md: 'flex-start' },
  },
  columnRight: {
  },
  profileImage: {
    position: 'relative',
    height: { xs: '10rem', sm: '22rem'},
    width: '100%',
    backgroundImage: "url('images/bg3.jpeg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    borderRadius: { xs: '50%', sm: '3rem' },
    marginTop: '3rem',

    '& img': {
      position: 'absolute',
      right: { md: '1rem' },
      bottom: { xs: 0, sm: '-3rem' },
      maxWidth: '100%',
    }
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
  return (
    <Box>
      <Container sx={styles.section}>
        <Grid container spacing={2}>
          <Grid item xs={7} sm={12} md={5} order={{ xs: 2, sm: 1}} sx={styles.columnLeft}>
            <Typography variant='subtitle' sx={styles.greeting}>Hello, I'm</Typography>
            <Typography variant='h2'>Jonathan Toye</Typography>
            <Typography variant='h6'>A Web Developer in Toronto</Typography>
          </Grid>

          <Grid item xs={5} sm={12} md={7} order={{ xs: 1, sm: 2}}  sx={styles.columnRight}>
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
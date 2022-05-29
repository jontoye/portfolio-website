import React from 'react'
import { AppBar, Box, Button, Container, FormControlLabel, Switch, Toolbar, Typography } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '@mui/material/styles';
import { SvgIcon } from '@mui/material';

const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  theme: {
    display: 'flex',
    alignItems: 'center',
  }
}

const pages = ['About', 'Projects', 'Contact'];

const Navbar = ({ toggleDarkMode }) => {
  const theme = useTheme();
  console.log(theme)
  return (
    <AppBar position='static' color='default'>
      <Container>
        <Toolbar sx={styles.toolbar}>
          <Typography>social links here</Typography>
          <Box>
            {pages.map(page => (
              <Button variant='text' color='inherit' key={page}>{page}</Button>
            ))}
          </Box>
          <Box sx={styles.theme}>
            <FormControlLabel control={<Switch size='small' onChange={toggleDarkMode} color='default' />}/>
            <SvgIcon>
              {theme.palette.mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
            </SvgIcon>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
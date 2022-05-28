import React, { useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline, useMediaQuery, Switch, FormControlLabel } from '@mui/material';
import Header from './components/Header';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

  const theme = useMemo(() => 
    createTheme({
      palette: {
        mode: mode,
      },
    }),
    [mode],
  );

  const toggleDarkMode = () => {
    setMode(prev => prev === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormControlLabel control={<Switch onChange={toggleDarkMode} />} label={mode} />
      <Box sx={{height: '10rem'}} />
      <Header />
    </ThemeProvider>
  )
}

export default App
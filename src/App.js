import React, { useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, useMediaQuery } from '@mui/material';

import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

  const theme = useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            custom: 760,
            md: 1000,
            lg: 1200,
            xl: 1536,
          },
        },
        palette: {
          mode: mode,
          customBlue: {
            main: '#1a0b64',
          },
          customTeal: {
            main: '#4fc9bc',
          },
          customGreen: {
            main: '#99ed3e',
          },
          customYellow: {
            main: '#fdfeb6',
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
              },
            },
          },
        },
      }),
    [mode]
  );

  const toggleDarkMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Header />
      <About />
      <Projects />
      {/* <Contact />
      <Footer /> */}
    </ThemeProvider>
  );
};

export default App;

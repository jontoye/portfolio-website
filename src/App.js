import { Box } from '@mui/material'
import { CssBaseline } from '@mui/material'
import React from 'react'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{height: '10rem'}} />
      <Header />
    </>
  )
}

export default App
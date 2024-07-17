"use client";
import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import AppAppBar from './components/AppAppBar';

import Highlights from './components/Highlights';

import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';




export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>('light');

  // const LPtheme = createTheme(getLPTheme(mode));
  // const defaultTheme = createTheme({ palette: { mode } });

  
  return (
    // <ThemeProvider theme={showCustomTheme ? defaultTheme: LPtheme }>
    <div>
      <CssBaseline />
      <AppAppBar mode={mode}  />
      {/* <Hero /> */}
      <Box sx={{ bgcolor: 'background.default' }}>
        <FAQ />{/* <LogoCollection /> */}
        
        <Features />
        <Divider />
        <Highlights />
        <Divider />
        <Testimonials />
        <Divider />
        
        
      </Box>
      {/* <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      /> */}
      </div>
    // </ThemeProvider>
  );
}

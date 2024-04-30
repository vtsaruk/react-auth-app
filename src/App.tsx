import React from 'react';
import RouterElement from './core/routes';
import { StyledEngineProvider } from '@mui/material/styles';
import { AlertList } from './components/common';

import './App.css';

function App () {
  return (
    <StyledEngineProvider injectFirst>
      <AlertList />
      <RouterElement />
    </StyledEngineProvider>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../themes';

import StudentBottomMenu from '../StudentBottomMenu';

const displayName = 'App';

export default function App() {
  return (
    <ThemeProvider theme={{ theme }}>
      <Route path="/menu" to={StudentBottomMenu} exact />
    </ThemeProvider>
  );
}

App.displayName = displayName;

import React from 'react';
import Grid from 'styled-components-grid';

import StudentBottomMenuStyle from './StudentBottomMenuStyle';

const StudentBottomMenu = () => (
  <Grid halign="center" wrap={false}>
    <Grid.Unit size={1} style={{
      background: 'blue',
      position: 'absolute',
      bottom: '0'
    }}><StudentBottomMenuStyle>Home</StudentBottomMenuStyle></Grid.Unit>
  </Grid>
);

const displayName = 'StudentBottomMenu';
StudentBottomMenu.displayName = displayName;

export default StudentBottomMenu;

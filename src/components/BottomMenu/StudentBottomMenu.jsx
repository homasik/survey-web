import React from 'react';
import Grid from 'styled-components-grid';

import StudentBottomMenuStyle from './StudentBottomMenuStyle';

const StudentBottomMenu = () => (
  <Grid halign="center">
    <StudentBottomMenuStyle>
      <Grid.Unit size={0.25}>trainings</Grid.Unit>
    </StudentBottomMenuStyle>
    <StudentBottomMenuStyle>
      <Grid.Unit size={0.25}>home</Grid.Unit>
    </StudentBottomMenuStyle>
  </Grid>
);
const displayName = 'StudentBottomMenu';
StudentBottomMenu.displayName = displayName;

export default StudentBottomMenu;

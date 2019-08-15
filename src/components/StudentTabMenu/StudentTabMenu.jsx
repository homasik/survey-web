import React from 'react';

import StudentTabMenuPanelStyle from './StudentTabMenuPanelStyle';
import StudentTabMenuStyle from './StudentTabMenuStyle';

const StudentTabMenu = () => (
  <StudentTabMenuPanelStyle halign="justify" wrap={false}>
    <StudentTabMenuStyle>Home</StudentTabMenuStyle>
    <StudentTabMenuStyle>Profile</StudentTabMenuStyle>
  </StudentTabMenuPanelStyle>
);

const displayName = 'StudentTabMenu';
StudentTabMenu.displayName = displayName;

export default StudentTabMenu;

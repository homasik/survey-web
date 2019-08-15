import React from 'react';

import TeacherTabMenuPanelStyle from './TeacherTabMenuPanelStyle';
import TeacherTabMenuStyle from './TeacherTabMenuStyle';

const TeacherTabMenu = () => (
  <TeacherTabMenuPanelStyle halign="justify" wrap={false}>
    <TeacherTabMenuStyle>Home</TeacherTabMenuStyle>
    <TeacherTabMenuStyle>Tests</TeacherTabMenuStyle>
    <TeacherTabMenuStyle>Profile</TeacherTabMenuStyle>
  </TeacherTabMenuPanelStyle>
);

const displayName = 'TeacherTabMenu';
TeacherTabMenu.displayName = displayName;

export default TeacherTabMenu;

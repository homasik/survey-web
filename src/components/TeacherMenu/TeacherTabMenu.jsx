import React from 'react';

import MenuItem from '../MenuItem';
import Menu from '../Menu';
import MenuLink from '../MenuLink';

const TeacherMenu = () => (
  <Menu>
    <MenuItem>
      <MenuLink>Home</MenuLink>
    </MenuItem>
    <MenuItem>
      <MenuLink>Tests</MenuLink>
    </MenuItem>
    <MenuItem>
      <MenuLink>Profile</MenuLink>
    </MenuItem>
  </Menu>
);

const displayName = 'TeacherMenu';
TeacherMenu.displayName = displayName;

export default TeacherMenu;

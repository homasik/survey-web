import React from 'react';

import MenuItem from '../MenuItem';
import Menu from '../Menu';
import MenuLink from '../MenuLink';

const displayName = 'TeacherMenu';

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
TeacherMenu.displayName = displayName;

export default TeacherMenu;

import React from 'react';

import MenuItem from '../MenuItem';
import Menu from '../Menu';
import MenuLink from '../MenuLink';

const StudentMenu = () => (
  <Menu>
    <MenuItem>
      <MenuLink>Home</MenuLink>
    </MenuItem>
    <MenuItem>
      <MenuLink>Profile</MenuLink>
    </MenuItem>
  </Menu>
);

const displayName = 'StudentMenu';
StudentMenu.displayName = displayName;

export default StudentMenu;

import React from 'react';

import MenuItem from '../MenuItem';
import Menu from '../Menu';
import MenuLink from '../MenuLink';

const displayName = 'StudentMenu';

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
StudentMenu.displayName = displayName;

export default StudentMenu;

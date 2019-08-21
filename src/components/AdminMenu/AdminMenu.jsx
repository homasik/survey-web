import React from 'react';

import MenuItem from '../MenuItem';
import Menu from '../Menu';
import MenuLink from '../MenuLink';

const displayName = 'AdminMenu';

const AdminMenu = () => (
  <Menu>
    <MenuItem>
      <MenuLink>Home</MenuLink>
    </MenuItem>
    <MenuItem>
      <MenuLink>Tests</MenuLink>
    </MenuItem>
    <MenuItem>
      <MenuLink>Students</MenuLink>
    </MenuItem>
    <MenuItem>
      <MenuLink>Teachers</MenuLink>
    </MenuItem>
    <MenuItem>
      <MenuLink>Admins</MenuLink>
    </MenuItem>
    <MenuItem>
      <MenuLink>Profile</MenuLink>
    </MenuItem>
  </Menu>
);

AdminMenu.displayName = displayName;

export default AdminMenu;

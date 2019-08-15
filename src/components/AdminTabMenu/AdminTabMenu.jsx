import React from 'react';

import AdminTabMenuPanelStyle from './AdminTabMenuPanelStyle';
import AdminTabMenuStyle from './AdminTabMenuStyle';

const AdminTabMenu = () => (
  <AdminTabMenuPanelStyle halign="justify" wrap={false}>
    <AdminTabMenuStyle>Home</AdminTabMenuStyle>
    <AdminTabMenuStyle>Tests</AdminTabMenuStyle>
    <AdminTabMenuStyle>Students</AdminTabMenuStyle>
    <AdminTabMenuStyle>Teachers</AdminTabMenuStyle>
    <AdminTabMenuStyle>Admins</AdminTabMenuStyle>
    <AdminTabMenuStyle>Profile</AdminTabMenuStyle>
  </AdminTabMenuPanelStyle>
);

const displayName = 'AdminTabMenu';
AdminTabMenu.displayName = displayName;

export default AdminTabMenu;

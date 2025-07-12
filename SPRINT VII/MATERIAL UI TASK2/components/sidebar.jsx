import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,Toolbar, Box, Typography, Divider} from '@mui/material';
import { FaReact } from 'react-icons/fa';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import TableChartIcon from '@mui/icons-material/TableChart';
import TextFieldsIcon from '@mui/icons-material/TextFields';  
import AppsIcon from '@mui/icons-material/Apps';             
import MapIcon from '@mui/icons-material/Map';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { label: 'User Profile', icon: <PersonIcon />, path: '/user-profile' },
  { label: 'Table List', icon: <TableChartIcon />, path: '/table-list' },
  { label: 'Typography', icon: <TextFieldsIcon />, path: '/typography' },
  { label: 'Icons', icon: <AppsIcon />, path: '/icons' },
  { label: 'Maps', icon: <MapIcon />, path: '/maps' },
  { label: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },];

function Sidebar() {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1a2035',
          color: '#fff',
        },
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center" gap={1} sx={{ ml: 1 }}>
          <FaReact color="#61DBFB" size={24} />
          <Typography variant="h6" noWrap>CREATIVE TIM</Typography>
        </Box>
      </Toolbar>
      <Divider sx={{ backgroundColor: '#394867', my: 1 }} />
      <List>
        {navItems.map(({ label, icon, path }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
              component={Link}
              to={path}
              sx={{
                color: '#fff',
                '&:hover': { backgroundColor: '#394867' },
                ...(location.pathname === path && { backgroundColor: '#4e73df' }),
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;

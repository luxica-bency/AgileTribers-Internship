import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import AddIcon from '@mui/icons-material/Add';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from 'react-router-dom';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Completed Tasks', icon: <CheckCircleIcon /> },
  { text: 'Pending Tasks', icon: <PendingIcon /> },
  { text: 'In Progress Tasks', icon: <HourglassTopIcon /> },
  { text: 'Deployed Tasks', icon: <RocketLaunchIcon /> },
  { text: 'Deferred Tasks', icon: <PauseCircleIcon /> },
  { text: 'Add New Tasks', icon: <AddIcon />, path: '/add-task' },
  { text: 'Task Stats', icon: <BarChartIcon /> },
];

function Sidebar({ closeDrawer }) {
  return (
    <Box sx={{ width: 350, p: 2, backgroundColor:'#BDA9DF',}}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Task Manager
      </Typography>
      <List>
        {menuItems.map((item) => (
          item.path ? (
            <Link
              to={item.path}
              style={{ textDecoration: 'none', color: 'inherit' }}
              key={item.text}
              onClick={closeDrawer}
            >
              <ListItem button>
                <ListItemIcon sx={{ color: 'white' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ) : (
            <ListItem button key={item.text}>
              <ListItemIcon sx={{ color: 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          )
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;

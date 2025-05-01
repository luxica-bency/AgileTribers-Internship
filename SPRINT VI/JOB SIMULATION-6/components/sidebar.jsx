import React from 'react';
import {Drawer,List,ListItem,ListItemIcon, ListItemText,Collapse,Typography,Box,IconButton} from '@mui/material';
import {Dashboard, Login,ExpandLess,ExpandMore,FormatColorText,Palette, BlurOn,InsertEmoticon, Info,Menu} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [authOpen, setAuthOpen] = React.useState(false);
  const [utilsOpen, setUtilsOpen] = React.useState(false);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        '& .MuiDrawer-paper': { width: 260,backgroundColor: '#f0f0f0', color: '#000',},
      }} >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://th.bing.com/th/id/OIP.1aAkYIpWPpnmqzsxJtbLWwHaHa?rs=1&pid=ImgDetMain"
            alt="Berry Logo"
            style={{ height: 30, marginRight: 8 }}
          />
          <Typography variant="h6" fontWeight="bold">
            BERRY
          </Typography>
        </Box>
        <IconButton>
          <Menu />
        </IconButton>
      </Box>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => setAuthOpen(!authOpen)}>
          <ListItemIcon><Login /></ListItemIcon>
          <ListItemText primary="Authentication" />
          {authOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={authOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/authentication">
              <ListItemText primary="Login/Register" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => setUtilsOpen(!utilsOpen)}>
          <ListItemIcon><InsertEmoticon /></ListItemIcon>
          <ListItemText primary="UI Elements" />
          {utilsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={utilsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/typography">
              <ListItemIcon><FormatColorText /></ListItemIcon>
              <ListItemText primary="Typography" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/color">
              <ListItemIcon><Palette /></ListItemIcon>
              <ListItemText primary="Color" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/shadow">
              <ListItemIcon><BlurOn /></ListItemIcon>
              <ListItemText primary="Shadow" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/icons">
              <ListItemIcon><InsertEmoticon /></ListItemIcon>
              <ListItemText primary="Icons" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to="/sample-page">
          <ListItemIcon><Info /></ListItemIcon>
          <ListItemText primary="Sample Page" />
        </ListItem>
        <ListItem button component={Link} to="/documentation">
          <ListItemIcon><Info /></ListItemIcon>
          <ListItemText primary="Documentation" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

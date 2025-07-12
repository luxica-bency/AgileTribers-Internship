import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, IconButton, useMediaQuery, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './components/sidebar';
import TaskBoard from './components/taskboard';
import Header from './components/header';
import AddTask from './components/addtask';

function App() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#E5E5E5' }}>
        {!isMobile && <Sidebar />}
        {isMobile && (
          <>
            <IconButton
              onClick={toggleDrawer}
              sx={{ position: 'absolute', top: 16, left: 16, zIndex: 1300 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer}
              PaperProps={{
                sx: { width: 250, backgroundColor: '#957DAD', color: 'white' },
              }}
            >
              <Sidebar closeDrawer={toggleDrawer} />
            </Drawer>
          </>
        )}
        <Box sx={{ flexGrow: 1, p: isMobile ? 1 : 3 }}>
          <Header />
          <Routes>
            <Route path="/" element={<TaskBoard />} />
            <Route path="/add-task" element={<AddTask />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;

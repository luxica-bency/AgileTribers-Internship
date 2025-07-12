import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import UserProfile from './pages/userdetails';
import TableList from './pages/tablelist';
import TypographyPage from './pages/typo';
import Icons from './pages/icons';
import Maps from './pages/maps';
import Notifications from './pages/notifi';
import { Box, Toolbar } from '@mui/material';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/table-list" element={<TableList />} />
            <Route path="/typography" element={<TypographyPage />} />
            <Route path="/icons" element={<Icons />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;

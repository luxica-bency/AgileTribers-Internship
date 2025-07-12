import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import Authentication from './pages/authen';
import Typography from './pages/typo';
import Color from './pages/colors';
import Shadow from './pages/shadow';
import Icons from './pages/icons';
import SamplePage from './pages/sample';
import Documentation from './pages/doc';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/typography" element={<Typography />} />
            <Route path="/color" element={<Color />} />
            <Route path="/shadow" element={<Shadow />} />
            <Route path="/icons" element={<Icons />} />
            <Route path="/sample-page" element={<SamplePage />} />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;

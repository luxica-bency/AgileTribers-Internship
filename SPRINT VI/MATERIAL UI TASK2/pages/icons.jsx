import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaReact, FaBell, FaMapMarkerAlt } from 'react-icons/fa';

function Icons() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Available Icons</Typography>
      <Box sx={{ fontSize: 40, display: 'flex', justifyContent: 'center', gap: 4 }}>
        <FaReact />
        <FaBell />
        <FaMapMarkerAlt />
      </Box>
    </Box>
  );
}
export default Icons;

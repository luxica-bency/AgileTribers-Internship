import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header({ onMenuClick, isMobile }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
      {isMobile && (
        <IconButton onClick={onMenuClick} color="inherit">
          <MenuIcon />
        </IconButton>
      )}
      <Typography variant="h4" fontWeight="bold" textAlign={'center'} sx={{ flexGrow: 1 }}>
        Tasks
      </Typography>
    </Box>
  );
}

export default Header;

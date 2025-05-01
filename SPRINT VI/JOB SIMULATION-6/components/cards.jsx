import React from 'react';
import { Box, Typography } from '@mui/material';

const StatCard = ({ title, value, color, icon, chart }) => {
  return (
    <Box
      bgcolor={color}
      color="white" p={2}
      borderRadius={3} boxShadow={2}
      display="flex"
      justifyContent="space-between" alignItems="center" minHeight={100} >
      <Box>
        <Typography fontSize={20}>{icon}</Typography>
        <Typography variant="h6">{value}</Typography>
        <Typography variant="body2">{title}</Typography>
      </Box>
      {chart && (
        <Box>
          <svg width="240px" height="40px">
            <polyline
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              points="0,30 20,10 40,25 60,15 80,30"
            />
          </svg>
        </Box>
      )}
    </Box>
  );
};

export default StatCard;

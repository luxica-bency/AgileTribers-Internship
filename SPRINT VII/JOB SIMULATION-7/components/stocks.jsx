import React from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemText, Chip } from '@mui/material';

const stocks = [
  { name: 'Bajaj Finery', value: '$1839.00', growth: '+10%', color: 'green' },
  { name: 'TTML', value: '$100.00', growth: '-12%', color: 'red' },
  { name: 'Reliance', value: '$200.00', growth: '+15%', color: 'green' },
];

const PopularStocks = () => {
  return (
    <Box bgcolor="white" p={2} borderRadius={3} boxShadow={1}>
      <Typography variant="h6" gutterBottom>Popular Stocks</Typography>
      <Box bgcolor="#ede7f6" p={2} borderRadius={2} mb={2} width={520}>
        <Typography fontWeight={600}>Bajaj Finery</Typography>
        <Typography>$1839.00</Typography>
        <svg width="100%" height="40">
          <polyline
            fill="#d1c4e9" stroke="#7e57c2"
            strokeWidth="2" points="0,30 20,10 40,20 60,10 80,25 100,15" />
        </svg>
      </Box>
      <Divider />
      <List>
        {stocks.map((stock, index) => (
          <ListItem key={index} disableGutters secondaryAction={
            <Chip
              label={stock.growth}
              size="small"
              style={{ backgroundColor: stock.color === 'green' ? '#e8f5e9' : '#ffebee', color: stock.color === 'green' ? '#388e3c' : '#d32f2f' }}
            />
          }>
            <ListItemText primary={stock.name} secondary={stock.value} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PopularStocks;

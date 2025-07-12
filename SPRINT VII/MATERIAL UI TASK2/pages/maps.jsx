import React from 'react';
import { Box, Typography } from '@mui/material';

function Maps() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom>Google Map</Typography>
      <iframe
        title="map"
        src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </Box>
  );
}
export default Maps;

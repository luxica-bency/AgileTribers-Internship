import React from 'react';
import { Typography, Divider, Box } from '@mui/material';

function TypographyPage() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom>Typography Examples</Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body1" gutterBottom>
        This is standard body text to show the default typography settings.
      </Typography>
      <Typography variant="h6">Subheading H6</Typography>
      <Typography variant="caption">Caption Text Example</Typography>
      <Typography variant="button" display="block" gutterBottom>
        Button Styled Text
      </Typography>
    </Box>
  );
}
export default TypographyPage;

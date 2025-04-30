import React from 'react';
import { Alert, Stack, Typography } from '@mui/material';

function Notifications() {
  return (
    <Stack spacing={2} sx={{ maxWidth: 600, margin: '2rem auto' }}>
      <Typography variant="h5">Notifications</Typography>
      <Alert severity="info">New updates available</Alert>
      <Alert severity="success">Profile updated successfully</Alert>
      <Alert severity="warning">Subscription ending soon</Alert>
      <Alert severity="error">Failed to load dashboard data</Alert>
    </Stack>
  );
}
export default Notifications;

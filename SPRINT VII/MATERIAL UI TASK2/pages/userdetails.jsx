import React from 'react';
import { Card, CardContent, Typography, Avatar, Button } from '@mui/material';

function UserProfile() {
  return (
    <Card sx={{ maxWidth: 400, margin: '2rem auto' }}>
      <CardContent>
        <Avatar sx={{ width: 80, height: 80, margin: 'auto' }} />
        <Typography variant="h5" align="center" gutterBottom>
          Jane Doe
        </Typography>
        <Typography align="center" color="text.secondary"> Software Developer at Creative Tim </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>Email:</strong> jane@example.com<br />
          <strong>Phone:</strong> +1 234 567 8901
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }} fullWidth>
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
}
export default UserProfile;

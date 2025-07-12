import React from 'react';
import { Box, Typography, Chip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TaskCard({ title, desc, start, end, status, color, onDelete }) {
  const statusColor = {
    Completed: 'success',
    Pending: 'warning',
    'In Progress': 'info',
  };

  return (
    <Box
      sx={{
        bgcolor: 'white',
        borderRadius: 2,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '350px',          
        height: '100%',
        p: 2,
      }}
    >
      <Box sx={{ bgcolor: color, borderRadius: 1, p: 1, mb: 2 }}>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          {title}
        </Typography>
      </Box>

      <Typography variant="body2" mb={2}>
        {desc}
      </Typography>

      <Typography variant="caption" display="block">
        <strong>Start Date:</strong> {start}
      </Typography>
      <Typography variant="caption" display="block" mb={1}>
        <strong>End Date:</strong> {end}
      </Typography>

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="caption">Puskar Roy</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Chip label={status} color={statusColor[status]} size="small" />
          <IconButton onClick={onDelete} color="error" size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default TaskCard;

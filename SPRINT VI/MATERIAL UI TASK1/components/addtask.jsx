import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, MenuItem, Grid, Box } from '@mui/material';

function AddTask() {
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState({
    title: '',
    desc: '',
    start: '',
    end: '',
    status: 'Pending',
    color: '#FFFFFF',
  });

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    localStorage.setItem('tasks', JSON.stringify([...existingTasks, newTask]));
    navigate('/'); 
  };

  return (
    <Box sx={{ p: 4, flexGrow: 1 }}>
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Title" name="title" value={newTask.title} onChange={handleChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Description" name="desc" value={newTask.desc} onChange={handleChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Start Date" name="start" value={newTask.start} onChange={handleChange} fullWidth type="date" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="End Date" name="end" value={newTask.end} onChange={handleChange} fullWidth type="date" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label="Status"
              name="status"
              value={newTask.status}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Color" name="color" value={newTask.color} onChange={handleChange} fullWidth type="color" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">Add Task</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default AddTask;

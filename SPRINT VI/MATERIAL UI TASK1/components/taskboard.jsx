import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import TaskCard from './taskcard';

function TaskBoard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  return (
    <div className="board">
      <Grid container spacing={4}>
        {tasks.map((task, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <TaskCard {...task} onDelete={() => handleDelete(index)} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TaskBoard;

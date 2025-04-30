import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function TableList() {
  const rows = [
    { id: 1, name: 'Project A', status: 'Active' },
    { id: 2, name: 'Project B', status: 'Pending' },
    { id: 3, name: 'Project C', status: 'Completed' },];
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 600, margin: '2rem auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableList;

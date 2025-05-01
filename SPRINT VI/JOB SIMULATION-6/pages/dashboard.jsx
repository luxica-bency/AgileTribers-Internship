import React from 'react';
import { Grid, Box, Typography, MenuItem, Select } from '@mui/material';
import StatCard from '../components/cards';
import Chart from '../components/charts';
import PopularStocks from '../components/stocks';
import TopBar from '../components/topbar';
import {BarChart,Bar, XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,} from 'recharts';

const barData = [
  { name: 'Jan', earnings: 100, orders: 80, revenue: 60 },
  { name: 'Feb', earnings: 180, orders: 140, revenue: 90 },
  { name: 'Mar', earnings: 90, orders: 160, revenue: 120 },
  { name: 'Apr', earnings: 200, orders: 130, revenue: 170 },
  { name: 'May', earnings: 150, orders: 110, revenue: 140 }, ];

const Dashboard = () => {
  return (
    <>
      <TopBar />
        <Box p={3} bgcolor="#f5f7ff" minHeight="100vh" ml={{ xs: 0, md: '260px' }}>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard title="Total Earning" value="$500.00" color="#7e57c2" icon="💰" chart />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard title="Total Order" value="$961" color="#42a5f5" icon="🛒" chart />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard title="Total Income" value="$203k" color="#1e88e5" icon="💳" chart />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard title="Total Expense" value="$203k" color="#ffca28" icon="📦" chart />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} width={850}>
            <Box bgcolor="white" p={2} borderRadius={3} boxShadow={1} height="100%">
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6">Total Growth</Typography>
                <Select size="small" value="today">
                  <MenuItem value="today">Today</MenuItem>
                  <MenuItem value="week">This Week</MenuItem>
                </Select>
              </Box>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="earnings" fill="#7e57c2" />
                  <Bar dataKey="orders" fill="#42a5f5" />
                  <Bar dataKey="revenue" fill="#cfd8dc" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <PopularStocks />
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={7} >
          <Grid item xs={12} md={6} width={1080}>
            <Box bgcolor="white" p={2} borderRadius={3} boxShadow={1} height="100%">
              <Typography variant="h6" mb={2}>Order Trend</Typography>
              <Chart />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;

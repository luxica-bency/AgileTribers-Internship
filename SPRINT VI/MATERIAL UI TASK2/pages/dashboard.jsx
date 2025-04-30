import React from 'react';
import {Box, Card, CardContent, Typography, Avatar, IconButton, Tooltip, InputBase, Paper} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {LineChart, Line, BarChart, Bar, ResponsiveContaine } from 'recharts';

const chartData = [
  { name: 'M', value: 30 },
  { name: 'T', value: 20 },
  { name: 'W', value: 50 },
  { name: 'T', value: 40 },
  { name: 'F', value: 60 },
  { name: 'S', value: 80 },
  { name: 'S', value: 90 },];
const emailData = [
  { name: 'M', value: 200 },
  { name: 'T', value: 300 },
  { name: 'W', value: 400 },
  { name: 'T', value: 500 },
  { name: 'F', value: 600 },
  { name: 'S', value: 700 },
  { name: 'S', value: 800 },];
const taskData = [
  { name: '12am', value: 900 },
  { name: '3pm', value: 600 },
  { name: '6pm', value: 400 },
  { name: '9pm', value: 350 },
  { name: '12am', value: 300 },
  { name: '3am', value: 280 },
  { name: '6am', value: 260 },];

function DashboardCards() {
  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: -2 }}>
        <Typography variant="h4" gutterBottom>
          Material Dashboard
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Paper
            component="form"
            sx={{ p: '2px 8px', display: 'flex', alignItems: 'center', width: 200, backgroundColor: '#f1f1f1', borderRadius: 2, boxShadow: 'none' }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Paper>
          <Tooltip title="Notifications">
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="body1">John Doe</Typography>
          <Avatar alt="Luxi" src="https://i.pravatar.cc/150?img=3" />
        </Box>
      </Box>
      <br />
      <Box sx={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card sx={{ flex: 1, maxWidth: 300, borderRadius: 2, boxShadow: 3 }}>
          <Box sx={{ backgroundColor: '#4caf50', padding: 2, color: '#fff', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
            <AttachMoneyIcon />
          </Box>
          <CardContent>
            <Typography variant="body2" color="textSecondary">Revenue</Typography>
            <Typography variant="h6">$34,245</Typography>
            <Typography variant="caption" color="textSecondary">Last 24 Hours</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, maxWidth: 300, borderRadius: 2, boxShadow: 3 }}>
          <Box sx={{ backgroundColor: '#ff9800', padding: 2, color: '#fff', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
            <BarChartIcon />
          </Box>
          <CardContent>
            <Typography variant="body2" color="textSecondary">Used Space</Typography>
            <Typography variant="h6">49/50 GB</Typography>
            <Typography variant="caption" color="textSecondary">Get More Space...</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, maxWidth: 300, borderRadius: 2, boxShadow: 3 }}>
          <Box sx={{ backgroundColor: '#f44336', padding: 2, color: '#fff', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
            <TrendingUpIcon />
          </Box>
          <CardContent>
            <Typography variant="body2" color="textSecondary">Fixed Issues</Typography>
            <Typography variant="h6">75</Typography>
            <Typography variant="caption" color="textSecondary">Tracked from GitHub</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, maxWidth: 300, borderRadius: 2, boxShadow: 3 }}>
          <Box sx={{ backgroundColor: '#00bcd4', padding: 2, color: '#fff', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
            <GroupIcon />
          </Box>
          <CardContent>
            <Typography variant="body2" color="textSecondary">Followers</Typography>
            <Typography variant="h6">+245</Typography>
            <Typography variant="caption" color="textSecondary">Just Updated</Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ display: 'flex', gap: 4, mt: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card sx={{ flex: 1, maxWidth: 400, borderRadius: 2, boxShadow: 3 }}>
          <Box sx={{ backgroundColor: '#4caf50', padding: 2, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <Line type="monotone" dataKey="value" stroke="#ffffff" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
          <CardContent>
            <Typography variant="subtitle1">Daily Sales</Typography>
            <Typography variant="body2" color="textSecondary">↑ 55% increase in today sales.</Typography>
            <Typography variant="caption" color="textSecondary">updated 4 minutes ago</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, maxWidth: 400, borderRadius: 2, boxShadow: 3 }}>
          <Box sx={{ backgroundColor: '#ff9800', padding: 2, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={emailData}>
                <Bar dataKey="value" fill="#ffffff" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
          <CardContent>
            <Typography variant="subtitle1">Email Subscriptions</Typography>
            <Typography variant="body2" color="textSecondary">Last Campaign Performance</Typography>
            <Typography variant="caption" color="textSecondary">campaign sent 2 days ago</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, maxWidth: 400, borderRadius: 2, boxShadow: 3 }}>
          <Box sx={{ backgroundColor: '#f44336', padding: 2, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={taskData}>
                <Line type="monotone" dataKey="value" stroke="#ffffff" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
          <CardContent>
            <Typography variant="subtitle1">Completed Tasks</Typography>
            <Typography variant="body2" color="textSecondary">Last Campaign Performance</Typography>
            <Typography variant="caption" color="textSecondary">campaign sent 2 days ago</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default DashboardCards;

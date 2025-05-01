import React from 'react';
import {LineChart,Line, XAxis,YAxis,Tooltip,CartesianGrid,ResponsiveContainer} from 'recharts';

const data = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 400 },
];

const Chart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#1976d2" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;

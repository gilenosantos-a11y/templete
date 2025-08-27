import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Europe: 400, America: 240, Indonesia: 240 },
  { name: 'Fev', Europe: 300, America: 139, Indonesia: 221 },
  { name: 'Mar', Europe: 200, America: 980, Indonesia: 229 },
  { name: 'Abr', Europe: 278, America: 390, Indonesia: 200 },
  { name: 'Mai', Europe: 189, America: 480, Indonesia: 218 },
  { name: 'Jun', Europe: 239, America: 380, Indonesia: 250 },
  { name: 'Jul', Europe: 349, America: 430, Indonesia: 210 },
];

const RegionalVisitsChart = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <h4 style={{ marginBottom: '10px' }}>Profile Visit</h4>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
        <p>• Europa: 862</p>
        <p>• America: 375</p>
        <p>• Indonesia: 1025</p>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Europe" stroke="#8884d8" dot={false} />
          <Line type="monotone" dataKey="America" stroke="#82ca9d" dot={false} />
          <Line type="monotone" dataKey="Indonesia" stroke="#ffc658" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RegionalVisitsChart;
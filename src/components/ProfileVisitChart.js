import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Seg', visitas: 120 },
  { name: 'Ter', visitas: 150 },
  { name: 'Qua', visitas: 200 },
  { name: 'Qui', visitas: 180 },
  { name: 'Sex', visitas: 250 },
  { name: 'Sáb', visitas: 300 },
  { name: 'Dom', visitas: 280 },
];

const ProfileVisitChart = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <h4>Profile Visit</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="visitas" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfileVisitChart;
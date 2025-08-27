import React from 'react';
import StatsCard from './StatsCard';
import ProfileVisitChart from './ProfileVisitChart';
import VisitorsChart from './VisitorsChart';
import LatestComments from './LatestComments';
import RegionalVisitsChart from './RegionalVisitsChart'; 
import RecentMessages from './RecentMessages';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f2f5', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Cards de estatísticas no topo */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
        <StatsCard title="Profile Views" value="456" />
        <StatsCard title="Followers" value="1.2k" />
        <StatsCard title="Following" value="789" />
        <StatsCard title="Saved Post" value="123" />
      </div>

      {/* Seção Principal - Lado a Lado */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>

        {/* Coluna da Esquerda (com os gráficos e comentários) */}
        <div style={{ flex: '2', display: 'grid', gap: '20px' }}>
          
          {/* Gráfico de Barras */}
          <ProfileVisitChart />

          {/* Gráfico de Linha e Comentários Lado a Lado */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
            <RegionalVisitsChart />
            <LatestComments />
          </div>
          
        </div>

        {/* Coluna da Direita (com mensagens e gráfico de pizza) */}
        <div style={{ flex: '1', display: 'grid', gap: '20px' }}>
          <RecentMessages />
          <VisitorsChart />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import ProfileCard from './components/ProfileCard';
import RecentMessages from './components/RecentMessages';
import ProfileVisitChart from './components/ProfileVisitChart';
import RegionalVisitsChart from './components/RegionalVisitsChart';
import LatestComments from './components/LatestComments';
import VisitorsChart from './components/VisitorsChart';

function App() {
  // Cria um estado para controlar se o sidebar está ativo.
  // Começa como 'active' para que a barra lateral esteja visível por padrão.
  const [isSidebarActive, setIsSidebarActive] = useState(true);

  // Função para alternar o estado do sidebar.
  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <div id="app" className={isSidebarActive ? 'active' : ''}>
      {/* Passa o estado atual para o Sidebar */}
      <Sidebar isSidebarActive={isSidebarActive} />
      <div id="main">
        {/* Passa a função de alternar para o Header, que a usará para o botão do menu */}
        <Header toggleSidebar={toggleSidebar} />
        <div className="page-heading">
          <h3>Profile Statistics</h3>
        </div>
        <div className="page-content">
          <section className="row">
            {/* Coluna principal (esquerda) para os cards e gráficos */}
            <div className="col-12 col-lg-9">
              {/* Cards de Estatísticas no topo */}
              <div className="row">
                <StatsCard className="col-6 col-lg-3 col-md-6" icon="iconly-boldShow" color="purple" title="Profile Views" value="112.000" />
                <StatsCard className="col-6 col-lg-3 col-md-6" icon="iconly-boldProfile" color="blue" title="Followers" value="183.000" />
                <StatsCard className="col-6 col-lg-3 col-md-6" icon="iconly-boldAdd-User" color="green" title="Following" value="80.000" />
                <StatsCard className="col-6 col-lg-3 col-md-6" icon="iconly-boldBookmark" color="red" title="Saved Post" value="112" />
              </div>

              {/* Gráfico de Barras (Profile Visit) */}
              <div className="row">
                <div className="col-12">
                  <ProfileVisitChart />
                </div>
              </div>

              {/* Gráfico de Linha (Regional Visits) e Comentários (Latest Comments) */}
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <RegionalVisitsChart />
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                  <LatestComments />
                </div>
              </div>
            </div>
            
            {/* Coluna da direita para o perfil, mensagens e gráfico de visitantes */}
            <div className="col-12 col-lg-3">
              <ProfileCard />
              <RecentMessages />
              <VisitorsChart />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import ChartsSection from './components/ChartsSection';
import CommentsTable from './components/CommentsTable';
import RecentMessages from './components/RecentMessages';
import ProfileCard from './components/ProfileCard';
import MainContent from './components/MainContent'
function App() {
  return (
    <div id="app">
      <Sidebar />
      <div id="main">
        <Header />
        <div className="page-heading">
          <h3>Profile Statistics</h3>
        </div>
        <div className="page-content">
          <section className="row">
            <div className="col-12 col-lg-9">
              {/* Cards de Estatísticas */}
              <div className="row">
                <StatsCard icon="iconly-boldShow" color="purple" title="Profile Views" value="112.000" />
                <StatsCard icon="iconly-boldProfile" color="blue" title="Followers" value="183.000" />
                <StatsCard icon="iconly-boldAdd-User" color="green" title="Following" value="80.000" />
                <StatsCard icon="iconly-boldBookmark" color="red" title="Saved Post" value="112" />
              </div>

              {/* Seção de Gráficos e Tabela de Comentários */}
              <ChartsSection />
              <CommentsTable />
            </div>
            
            {/* Seção da Direita */}
            <div className="col-12 col-lg-3">
              <ProfileCard />
              <RecentMessages />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
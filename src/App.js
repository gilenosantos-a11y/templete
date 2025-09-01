import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import ProfileCard from './components/ProfileCard';
import RecentMessages from './components/RecentMessages';
import RegionalVisitsChart from './components/RegionalVisitsChart';
import LatestComments from './components/LatestComments';
import VisitorsChart from './components/VisitorsChart';
import Table from "./pages/Table"; // <-- ADIÇÃO AQUI
import DataTable from "./pages/DataTable";
import Files from "./pages/files";
import EmailApp from "./pages/EmailApp";
import ChatApp from "./pages/ChatApp";
import GalleryApp from "./pages/GalleryApp";
import FormLayout from './pages/FormLayout';


function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

const renderPageContent = () => {
  if (currentPage === 'form-layout') {
    return <FormLayout />;
  } 
  else if (currentPage === 'table') {
    return <Table />;
  }
  else if (currentPage === 'data-table') {
    return <DataTable />;
  }
  else if (currentPage === 'files') {
    return <Files />;
  }
  else if (currentPage === 'email-app') {
    return <EmailApp />;
  }
  else if (currentPage === 'chat-app') {
    return <ChatApp />;
  }
  else if (currentPage === 'gallery-app') {
    return <GalleryApp />;
  }


    // Dashboard por padrão
    return (
      <>
        <div className="page-heading">
          <h3>Profile Statistics</h3>
        </div>
        <div className="page-content">
          <section className="row">
            <div className="col-12 col-lg-9">
              <div className="row">
                <StatsCard className="col-6 col-lg-3 col-md-6" icon="iconly-boldShow" color="purple" title="Profile Views" value="112.000" />
                <StatsCard className="col-6 col-lg-3 col-md-6" icon="iconly-boldProfile" color="blue" title="Followers" value="183.000" />
                <StatsCard className="col-6 col-lg-3 col-md-6" icon="iconly-boldAdd-User" color="green" title="Following" value="80.000" />
                <StatsCard className="col-6 col-lg-3 col-md-6" icon="iconly-boldBookmark" color="red" title="Saved Post" value="112" />
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <RegionalVisitsChart />
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                  <LatestComments />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <ProfileCard />
              <RecentMessages />
              <VisitorsChart />
            </div>
          </section>
        </div>
      </>
    );
  };

  return (
    <div id="app" className={isSidebarActive ? 'active' : ''}>
      <Sidebar isSidebarActive={isSidebarActive} setCurrentPage={setCurrentPage} />
      <div id="main">
        <Header toggleSidebar={toggleSidebar} />
        {renderPageContent()}
      </div>
    </div>
  );
}

export default App;

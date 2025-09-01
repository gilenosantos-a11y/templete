import React from 'react';
import StatsCard from '../components/StatsCard'; // Ajuste o caminho se necessário
import ProfileCard from '../components/ProfileCard';
import RecentMessages from '../components/RecentMessages';
import RegionalVisitsChart from '../components/RegionalVisitsChart';
import LatestComments from '../components/LatestComments';
import VisitorsChart from '../components/VisitorsChart';

function Dashboard() {
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
}

export default Dashboard;
import React from 'react';

function ChartsSection() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h4>Profile Visit</h4>
          </div>
          <div className="card-body">
            <div id="chart-profile-visit"></div>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-4">
        <div className="card">
          <div className="card-header">
            <h4>Profile Visit</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <svg className="bi text-primary" width="32" height="32" fill="blue" style={{ width: '10px' }}>
                    <use xlinkHref="/assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" />
                  </svg>
                  <h5 className="mb-0 ms-3">Europe</h5>
                </div>
              </div>
              <div className="col-6">
                <h5 className="mb-0">862</h5>
              </div>
              <div className="col-12">
                <div id="chart-europe"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <svg className="bi text-success" width="32" height="32" fill="blue" style={{ width: '10px' }}>
                    <use xlinkHref="/assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" />
                  </svg>
                  <h5 className="mb-0 ms-3">America</h5>
                </div>
              </div>
              <div className="col-6">
                <h5 className="mb-0">375</h5>
              </div>
              <div className="col-12">
                <div id="chart-america"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <svg className="bi text-danger" width="32" height="32" fill="blue" style={{ width: '10px' }}>
                    <use xlinkHref="/assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" />
                  </svg>
                  <h5 className="mb-0 ms-3">Indonesia</h5>
                </div>
              </div>
              <div className="col-6">
                <h5 className="mb-0">1025</h5>
              </div>
              <div className="col-12">
                <div id="chart-indonesia"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartsSection;
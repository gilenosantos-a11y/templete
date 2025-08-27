import React from 'react';

function MainContent() {
  return (
    <>
      <div className="page-heading">
        <h3>Profile Statistics</h3>
      </div>

      <div className="page-content">
        <section className="row">
          <div className="col-12 col-lg-9">
            <div className="row">
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-3 py-4-5">
                    <div className="row">
                      <div className="col-md-4">
                        {/* Ícone de "Profile Views" */}
                        <div className="stats-icon purple">
                          <i className="iconly-boldShow"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="text-muted font-semibold">Profile Views</h6>
                        <h6 className="font-extrabold mb-0">112.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-3 py-4-5">
                    <div className="row">
                      <div className="col-md-4">
                        {/* Ícone de "Followers" */}
                        <div className="stats-icon blue">
                          <i className="iconly-boldProfile"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="text-muted font-semibold">Followers</h6>
                        <h6 className="font-extrabold mb-0">183.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-3 py-4-5">
                    <div className="row">
                      <div className="col-md-4">
                        {/* Ícone de "Following" */}
                        <div className="stats-icon green">
                          <i className="iconly-boldAdd-User"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="text-muted font-semibold">Following</h6>
                        <h6 className="font-extrabold mb-0">80.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-3 py-4-5">
                    <div className="row">
                      <div className="col-md-4">
                        {/* Ícone de "Saved Post" */}
                        <div className="stats-icon red">
                          <i className="iconly-boldBookmark"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="text-muted font-semibold">Saved Post</h6>
                        <h6 className="font-extrabold mb-0">112</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Profile Visit</h4>
                  </div>
                  <div className="card-body">
                    {/* Gráfico do Profile Visit */}
                    <div id="chart-profile-visit"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
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
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-8">
                <div className="card">
                  <div className="card-header">
                    <h4>Latest Comments</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-lg">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Comment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="col-3">
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-md me-3">
                                  <img src="/assets/images/faces/5.jpg" alt="Si Cantik" />
                                </div>
                                <h6>Si Cantik</h6>
                              </div>
                            </td>
                            <td className="col-auto">
                              <p className="mb-0">Congratulations on your graduation!</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="col-3">
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-md me-3">
                                  <img src="/assets/images/faces/2.jpg" alt="Si Ganteng" />
                                </div>
                                <h6>Si Ganteng</h6>
                              </div>
                            </td>
                            <td className="col-auto">
                              <p className="mb-0">Wow amazing design! Can you make another tutorial for this design?</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="card">
              <div className="card-body py-4 px-5">
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-xl">
                    <img src="/assets/images/faces/1.jpg" alt="John Duck" />
                  </div>
                  <div className="ms-3 name">
                    <h5 className="font-bold">John Duck</h5>
                    <h6 className="text-muted mb-0">@johnducky</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Recent Messages</h4>
              </div>
              <div className="card-content pb-4">
                <div className="recent-message d-flex px-4 py-3">
                  <div className="avatar avatar-lg">
                    <img src="/assets/images/faces/6.jpg" alt="Hank Schrader" />
                  </div>
                  <div className="name ms-4">
                    <h5 className="mb-1">Hank Schrader</h5>
                    <h6 className="text-muted mb-0">@johnducky</h6>
                  </div>
                </div>
                <div className="recent-message d-flex px-4 py-3">
                  <div className="avatar avatar-lg">
                    <img src="/assets/images/faces/7.jpg" alt="Dean Winchester" />
                  </div>
                  <div className="name ms-4">
                    <h5 className="mb-1">Dean Winchester</h5>
                    <h6 className="text-muted mb-0">@imdean</h6>
                  </div>
                </div>
                <div className="recent-message d-flex px-4 py-3">
                  <div className="avatar avatar-lg">
                    <img src="/assets/images/faces/8.jpg" alt="John Dodol" />
                  </div>
                  <div className="name ms-4">
                    <h5 className="mb-1">John Dodol</h5>
                    <h6 className="text-muted mb-0">@dodoljohn</h6>
                  </div>
                </div>
                <div className="px-4">
                  <button className='btn btn-block btn-xl btn-light-primary font-bold mt-3'>Start Conversation</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MainContent;
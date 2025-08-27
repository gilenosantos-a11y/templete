<>
  {"{"}% set title = 'Account Security' %{"}"}
  {"{"}% set filename = 'account-security.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Account Security</h3>
          <p className="text-subtitle text-muted">
            A page where this page can change account security settings
          </p>
        </div>
        <div className="col-12 col-md-6 order-md-2 order-first">
          <nav
            aria-label="breadcrumb"
            className="breadcrumb-header float-start float-lg-end"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Security
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Change Password</h5>
            </div>
            <div className="card-body">
              <form action="#" method="get">
                <div className="form-group my-2">
                  <label htmlFor="current_password" className="form-label">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="current_password"
                    id="current_password"
                    className="form-control"
                    placeholder="Enter your current password"
                    defaultValue="1L0V3Indonesia"
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="password" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter new password"
                    defaultValue=""
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="confirm_password" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    className="form-control"
                    placeholder="Enter confirm password"
                    defaultValue=""
                  />
                </div>
                <div className="form-group my-2 d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Two Factor Authentication</h5>
            </div>
            <div className="card-body">
              <form action="#" method="get">
                <div className="form-group my-2">
                  <label htmlFor="email" className="form-label">
                    Current Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your current email"
                    defaultValue="john.doe@example.net"
                  />
                </div>
                <div className="form-group my-2 d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Delete Account</h5>
            </div>
            <div className="card-body">
              <form action="#" method="get">
                <p>
                  Your account will be permanently deleted and cannot be
                  restored, click "Touch me!" to continue
                </p>
                <div className="form-check">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      id="iaggree"
                      className="form-check-input"
                    />
                    <label htmlFor="iaggree">
                      Touch me! If you agree to delete permanently
                    </label>
                  </div>
                </div>
                <div className="form-group my-2 d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    id="btn-delete-account"
                    disabled=""
                  >
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {"{"}% endblock %{"}"}
  {"{"}% block js %{"}"}
  {"{"}% endblock %{"}"}
</>

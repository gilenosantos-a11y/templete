<>
  {"{"}% set title = 'Form Layout' %{"}"}
  {"{"}% set filename = 'form-layout.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Form Layout</h3>
          <p className="text-subtitle text-muted">
            Multiple form layouts, you can use.
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
                Form Layout
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    {/* Basic Horizontal form layout section start */}
    <section id="basic-horizontal-layouts">
      <div className="row match-height">
        <div className="col-md-6 col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Horizontal Form</h4>
            </div>
            <div className="card-content">
              <div className="card-body">
                <form className="form form-horizontal">
                  <div className="form-body">
                    <div className="row">
                      <div className="col-md-4">
                        <label htmlFor="first-name-horizontal">
                          First Name
                        </label>
                      </div>
                      <div className="col-md-8 form-group">
                        <input
                          type="text"
                          id="first-name-horizontal"
                          className="form-control"
                          name="fname"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="email-horizontal">Email</label>
                      </div>
                      <div className="col-md-8 form-group">
                        <input
                          type="email"
                          id="email-horizontal"
                          className="form-control"
                          name="email-id"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="contact-info-horizontal">Mobile</label>
                      </div>
                      <div className="col-md-8 form-group">
                        <input
                          type="number"
                          id="contact-info-horizontal"
                          className="form-control"
                          name="contact"
                          placeholder="Mobile"
                        />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="password-horizontal">Password</label>
                      </div>
                      <div className="col-md-8 form-group">
                        <input
                          type="password"
                          id="password-horizontal"
                          className="form-control"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-12 col-md-8 offset-md-4 form-group">
                        <div className="form-check">
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              id="checkbox1"
                              className="form-check-input"
                              defaultChecked=""
                            />
                            <label htmlFor="checkbox1">Remember Me</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 d-flex justify-content-end">
                        <button
                          type="submit"
                          className="btn btn-primary me-1 mb-1"
                        >
                          Submit
                        </button>
                        <button
                          type="reset"
                          className="btn btn-light-secondary me-1 mb-1"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Horizontal Form with Icons</h4>
            </div>
            <div className="card-content">
              <div className="card-body">
                <form className="form form-horizontal">
                  <div className="form-body">
                    <div className="row">
                      <div className="col-md-4">
                        <label htmlFor="first-name-horizontal-icon">Name</label>
                      </div>
                      <div className="col-md-8">
                        <div className="form-group has-icon-left">
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              id="first-name-horizontal-icon"
                            />
                            <div className="form-control-icon">
                              <i className="bi bi-person" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="email-horizontal-icon">Email</label>
                      </div>
                      <div className="col-md-8">
                        <div className="form-group has-icon-left">
                          <div className="position-relative">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              id="email-horizontal-icon"
                            />
                            <div className="form-control-icon">
                              <i className="bi bi-envelope" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="contact-info-horizontal-icon">
                          Mobile
                        </label>
                      </div>
                      <div className="col-md-8">
                        <div className="form-group has-icon-left">
                          <div className="position-relative">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Mobile"
                              id="contact-info-horizontal-icon"
                            />
                            <div className="form-control-icon">
                              <i className="bi bi-phone" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="password-horizontal-icon">
                          Password
                        </label>
                      </div>
                      <div className="col-md-8">
                        <div className="form-group has-icon-left">
                          <div className="position-relative">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              id="password-horizontal-icon"
                            />
                            <div className="form-control-icon">
                              <i className="bi bi-lock" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group col-md-8 offset-md-4">
                        <div className="form-check">
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              id="checkbox2"
                              className="form-check-input"
                              defaultChecked=""
                            />
                            <label htmlFor="checkbox2">Remember Me</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-end">
                        <button
                          type="submit"
                          className="btn btn-primary me-1 mb-1"
                        >
                          Submit
                        </button>
                        <button
                          type="reset"
                          className="btn btn-light-secondary me-1 mb-1"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* // Basic Horizontal form layout section end */}
    {/* Basic Vertical form layout section start */}
    <section id="basic-vertical-layouts">
      <div className="row match-height">
        <div className="col-md-6 col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Vertical Form</h4>
            </div>
            <div className="card-content">
              <div className="card-body">
                <form className="form form-vertical">
                  <div className="form-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="first-name-vertical">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="first-name-vertical"
                            className="form-control"
                            name="fname"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="email-id-vertical">Email</label>
                          <input
                            type="email"
                            id="email-id-vertical"
                            className="form-control"
                            name="email-id"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="contact-info-vertical">Mobile</label>
                          <input
                            type="number"
                            id="contact-info-vertical"
                            className="form-control"
                            name="contact"
                            placeholder="Mobile"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="password-vertical">Password</label>
                          <input
                            type="password"
                            id="password-vertical"
                            className="form-control"
                            name="contact"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              id="checkbox3"
                              className="form-check-input"
                              defaultChecked=""
                            />
                            <label htmlFor="checkbox3">Remember Me</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-end">
                        <button
                          type="submit"
                          className="btn btn-primary me-1 mb-1"
                        >
                          Submit
                        </button>
                        <button
                          type="reset"
                          className="btn btn-light-secondary me-1 mb-1"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Vertical Form with Icons</h4>
            </div>
            <div className="card-content">
              <div className="card-body">
                <form className="form form-vertical">
                  <div className="form-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group has-icon-left">
                          <label htmlFor="first-name-icon">First Name</label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Input with icon left"
                              id="first-name-icon"
                            />
                            <div className="form-control-icon">
                              <i className="bi bi-person" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group has-icon-left">
                          <label htmlFor="email-id-icon">Email</label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                              id="email-id-icon"
                            />
                            <div className="form-control-icon">
                              <i className="bi bi-envelope" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group has-icon-left">
                          <label htmlFor="mobile-id-icon">Mobile</label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Mobile"
                              id="mobile-id-icon"
                            />
                            <div className="form-control-icon">
                              <i className="bi bi-phone" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group has-icon-left">
                          <label htmlFor="password-id-icon">Password</label>
                          <div className="position-relative">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              id="password-id-icon"
                            />
                            <div className="form-control-icon">
                              <i className="bi bi-lock" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <div className="checkbox mt-2">
                            <input
                              type="checkbox"
                              id="remember-me-v"
                              className="form-check-input"
                              defaultChecked=""
                            />
                            <label htmlFor="remember-me-v">Remember Me</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-end">
                        <button
                          type="submit"
                          className="btn btn-primary me-1 mb-1"
                        >
                          Submit
                        </button>
                        <button
                          type="reset"
                          className="btn btn-light-secondary me-1 mb-1"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* // Basic Vertical form layout section end */}
    {/* // Basic multiple Column Form section start */}
    <section id="multiple-column-form">
      <div className="row match-height">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Multiple Column</h4>
            </div>
            <div className="card-content">
              <div className="card-body">
                <form className="form">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label htmlFor="first-name-column">First Name</label>
                        <input
                          type="text"
                          id="first-name-column"
                          className="form-control"
                          placeholder="First Name"
                          name="fname-column"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label htmlFor="last-name-column">Last Name</label>
                        <input
                          type="text"
                          id="last-name-column"
                          className="form-control"
                          placeholder="Last Name"
                          name="lname-column"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label htmlFor="city-column">City</label>
                        <input
                          type="text"
                          id="city-column"
                          className="form-control"
                          placeholder="City"
                          name="city-column"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label htmlFor="country-floating">Country</label>
                        <input
                          type="text"
                          id="country-floating"
                          className="form-control"
                          name="country-floating"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label htmlFor="company-column">Company</label>
                        <input
                          type="text"
                          id="company-column"
                          className="form-control"
                          name="company-column"
                          placeholder="Company"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label htmlFor="email-id-column">Email</label>
                        <input
                          type="email"
                          id="email-id-column"
                          className="form-control"
                          name="email-id-column"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="form-group col-12">
                      <div className="form-check">
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            id="checkbox5"
                            className="form-check-input"
                            defaultChecked=""
                          />
                          <label htmlFor="checkbox5">Remember Me</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn btn-primary me-1 mb-1"
                      >
                        Submit
                      </button>
                      <button
                        type="reset"
                        className="btn btn-light-secondary me-1 mb-1"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* // Basic multiple Column Form section end */}
  </div>
  {"{"}% endblock %{"}"}
</>

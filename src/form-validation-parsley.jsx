<>
  {"{"}% set title = 'Form Validation' %{"}"} {"{"}% set filename =
  'form-validation-parsley.html' %{"}"} {"{"}% extends 'src/layouts/master.html'
  %{"}"} {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Form Validation</h3>
          <p className="text-subtitle text-muted">
            Complete the form with powerful validation library such as Parsley.
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
                Form Validation
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Parsley
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
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
                <form className="form" data-parsley-validate="">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="form-group mandatory">
                        <label
                          htmlFor="first-name-column"
                          className="form-label"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first-name-column"
                          className="form-control"
                          placeholder="First Name"
                          name="fname-column"
                          data-parsley-required="true"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label
                          htmlFor="last-name-column"
                          className="form-label"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last-name-column"
                          className="form-control"
                          placeholder="Last Name"
                          name="lname-column"
                          data-parsley-required="true"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label htmlFor="city-column" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          id="city-column"
                          className="form-control"
                          placeholder="Custom validation. Value has to be Jakarta."
                          name="city-column"
                          data-parsley-restricted-city="Jakarta"
                          data-parsley-required="true"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label
                          htmlFor="country-floating"
                          className="form-label"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          id="country-floating"
                          className="form-control"
                          name="country-floating"
                          placeholder="Country"
                          data-parsley-required="true"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label htmlFor="company-column" className="form-label">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company-column"
                          className="form-control"
                          name="company-column"
                          placeholder="Company"
                          data-parsley-required="true"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group mandatory">
                        <label htmlFor="email-id-column" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email-id-column"
                          className="form-control"
                          name="email-id-column"
                          placeholder="Email"
                          data-parsley-required="true"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <div className="form-check mandatory">
                          <input
                            type="checkbox"
                            id="checkbox5"
                            className="form-check-input"
                            defaultChecked=""
                            data-parsley-required="true"
                            data-parsley-error-message="You have to accept our terms and conditions to proceed."
                          />
                          <label
                            htmlFor="checkbox5"
                            className="form-check-label form-label"
                          >
                            I accept these terms and conditions.
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group mandatory">
                        <fieldset>
                          <label className="form-label">
                            {" "}
                            Favourite Colour{" "}
                          </label>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              data-parsley-required="true"
                            />
                            <label
                              className="form-check-label form-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Red
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              className="form-check-label form-label"
                              htmlFor="flexRadioDefault2"
                            >
                              Blue
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div className="row">
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
  {"{"}% endblock %{"}"} {"{"}% block js %{"}"}
  {"{"}% endblock %{"}"}
</>

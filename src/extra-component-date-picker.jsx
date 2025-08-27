<>
  {"{"}% set title = 'Date Picker' %{"}"}
  {"{"}% set filename = 'extra-component-date-picker.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Date Picker</h3>
          <p className="text-subtitle text-muted">
            Lightweight and powerful datetime picker with flatpickr
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
                Date Picker
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Basic Usage</h4>
            </div>
            <div className="card-body">
              <p>
                <code>flatpickr</code> without any config{" "}
              </p>
              <input
                type="date"
                className="form-control mb-3 flatpickr-no-config"
                placeholder="Select date.."
              />
              <p>Always-open date picker</p>
              <input
                type="date"
                className="form-control flatpickr-always-open"
                placeholder="Select date.."
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Date Range</h4>
            </div>
            <div className="card-body">
              <p>You can choose the start date and the end date</p>
              <input
                type="date"
                className="form-control flatpickr-range mb-3"
                placeholder="Select date.."
              />
              <p>Preloaded date ranges</p>
              <input
                type="date"
                className="form-control flatpickr-range-preloaded"
                placeholder="Select date.."
              />
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Time Picker</h4>
            </div>
            <div className="card-body">
              <p>24-hour time picker</p>
              <input
                type="date"
                className="form-control flatpickr-time-picker-24h"
                placeholder="Select time.."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {"{"}% endblock %{"}"}
  {"{"}% block styles %{"}"}
  <link rel="stylesheet" href="assets/extensions/flatpickr/flatpickr.min.css" />
  {"{"}% endblock %{"}"}
  {"{"}% block js %{"}"}
  {"{"}% endblock %{"}"}
</>

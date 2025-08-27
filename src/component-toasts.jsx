<>
  {"{"}% set title = 'Toast' %{"}"}
  {"{"}% set filename = 'component-toasts.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Toast</h3>
          <p className="text-subtitle text-muted">
            Push notifications to your visitors with a toast, a lightweight and
            easily customizable alert message.
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
                Toasts
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="card">
            <div className="card-header">
              <h5>Basic Toasts</h5>
            </div>
            <div className="card-body">
              <div
                className="toast show"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <svg
                    className="bd-placeholder-img rounded me-2"
                    width={20}
                    height={20}
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#007aff" />
                  </svg>
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  />
                </div>
                <div className="toast-body">
                  Hello, world! This is a toast message.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="card">
            <div className="card-header">
              <h5>Open Toast Buttons</h5>
            </div>
            <div className="card-body">
              <p>Click the button to show toasts.</p>
              <button
                type="button"
                className="btn btn-primary"
                id="liveToastBtn"
              >
                Show live toast
              </button>
              <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div
                  id="liveToast"
                  className="toast"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div className="toast-header">
                    <svg
                      className="bd-placeholder-img rounded me-2"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <rect width="100%" height="100%" fill="#007aff" />
                    </svg>
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    />
                  </div>
                  <div className="toast-body">
                    Hello, world! This is a toast message.
                  </div>
                </div>
              </div>
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

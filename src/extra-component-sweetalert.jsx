<>
  {"{"}% set title = 'Sweet Alert' %{"}"}
  {"{"}% set filename = 'extra-component-sweetalert.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Sweet Alert</h3>
          <p className="text-subtitle text-muted">
            A beautiful replacement for javascript alerts.
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
                Sweet Alert
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Basic Sweet Alert</h4>
              <p className="text-muted">
                SweetAlert automatically centers itself on the page and looks
                great no matter if you're using a desktop computer, mobile or
                tablet. It's even highly customizable, as you can see below!
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 col-12">
                  <button
                    id="basic"
                    className="btn btn-outline-primary btn-lg btn-block"
                  >
                    Basic Example
                  </button>
                </div>
                <div className="col-md-4 col-12">
                  <button
                    id="title"
                    className="btn btn-outline-primary btn-lg btn-block"
                  >
                    A title with a text
                  </button>
                </div>
                <div className="col-md-4 col-12">
                  <button
                    id="footer"
                    className="btn btn-outline-primary btn-lg btn-block"
                  >
                    With Footer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Toast</h4>
              <p className="text-muted">
                SweetAlert can also show a message in the corner of your screen!
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 col-12">
                  <button
                    id="toast-success"
                    className="btn btn-outline-primary btn-lg btn-block"
                  >
                    Success Example
                  </button>
                </div>
                <div className="col-md-4 col-12">
                  <button
                    id="toast-failed"
                    className="btn btn-outline-primary btn-lg btn-block"
                  >
                    Failed Toast
                  </button>
                </div>
                <div className="col-md-4 col-12">
                  <button
                    id="toast-warning"
                    className="btn btn-outline-primary btn-lg btn-block"
                  >
                    Toast Warning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Types</h4>
              <p className="text-muted">
                The type of the modal. SweetAlert comes with 5 built-in types
                which will show a corresponding icon animation: "warning",
                "error", "success" and "info". You can also set it as "input" to
                get a prompt modal. It can either be put in the object under the
                key "icon" or passed as the third parameter of the function.
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 col-12">
                  <button
                    id="success"
                    className="btn btn-outline-success btn-lg btn-block"
                  >
                    Success
                  </button>
                </div>
                <div className="col-md-4 col-12">
                  <button
                    id="error"
                    className="btn btn-outline-danger btn-lg btn-block"
                  >
                    Error
                  </button>
                </div>
                <div className="col-md-4 col-12">
                  <button
                    id="warning"
                    className="btn btn-outline-warning btn-lg btn-block"
                  >
                    Warning
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6 col-12">
                  <button
                    id="info"
                    className="btn btn-outline-info btn-lg btn-block"
                  >
                    Info
                  </button>
                </div>
                <div className="col-md-6 col-12">
                  <button
                    id="question"
                    className="btn btn-outline-secondary btn-lg btn-block"
                  >
                    Question
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Alert Input</h4>
              <p className="text-muted">
                The type of the modal. SweetAlert comes with 5 built-in types
                which will show a corresponding icon animation: "warning",
                "error", "success" and "info". You can also set it as "input" to
                get a prompt modal. It can either be put in the object under the
                key "icon" or passed as the third parameter of the function.
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 col-12">
                  <button
                    id="text"
                    className="btn btn-outline-success btn-lg btn-block"
                  >
                    Text
                  </button>
                </div>
                <div className="col-md-4 col-12">
                  <button
                    id="email"
                    className="btn btn-outline-danger btn-lg btn-block"
                  >
                    Email
                  </button>
                </div>
                <div className="col-md-4 col-12">
                  <button
                    id="url"
                    className="btn btn-outline-warning btn-lg btn-block"
                  >
                    URL
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-4 col-12">
                  <button
                    id="password"
                    className="btn btn-outline-info btn-lg btn-block"
                  >
                    Password
                  </button>
                </div>
                <div className="col-md-4 col-12">
                  <button
                    id="textarea"
                    className="btn btn-outline-secondary btn-lg btn-block"
                  >
                    Textarea
                  </button>
                </div>
                <div className="col-md-4 col-12">
                  <button
                    id="select"
                    className="btn btn-outline-secondary btn-lg btn-block"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {"{"}% endblock %{"}"}
  {"{"}% block styles %{"}"}
  <link rel="stylesheet" href="assets/scss/pages/sweetalert2.scss" />
  <link
    rel="stylesheet"
    href="assets/extensions/sweetalert2/sweetalert2.min.css"
  />
  {"{"}% endblock %{"}"}
  {"{"}% block js %{"}"}
  &gt; &gt;
  {"{"}% endblock %{"}"}
</>

<>
  {"{"}% set title = 'Chat Application' %{"}"}
  {"{"}% set filename = 'application-chat.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Chat Application</h3>
          <p className="text-subtitle text-muted">
            An application for user to check Chat inbox.
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
                Chat Application
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
              <h5 className="card-title">Coming Soon!</h5>
            </div>
            <div className="card-body">
              <p>
                While you wait, you can use the
                <a href="ui-widgets-chatbox.html">chatbox widget.</a>
              </p>
              <p>
                If you want to contribute, check out our
                <a href="https://github.com/zuramai/mazer" target="_blank">
                  template repository
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {"{"}% endblock %{"}"}
</>

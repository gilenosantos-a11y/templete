<>
  {"{"}% set title = 'Rating' %{"}"}
  {"{"}% set filename = 'extra-component-rating.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Rating</h3>
          <p className="text-subtitle text-muted">
            Rating with <a href="">rater-js</a> - a pure javascript rating
            library.
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
                Rating
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
              <h4 className="card-title">Basic Rating</h4>
            </div>
            <div className="card-body">
              <div id="basic" />
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
              <h4 className="card-title">5 Star Rating with Step</h4>
            </div>
            <div className="card-body">
              <div id="step" />
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
              <h4 className="card-title">Unlimited Number of Stars</h4>
            </div>
            <div className="card-body">
              <div id="unli1" />
              <br />
              <div id="unli2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {"{"}% endblock %{"}"}
  {"{"}% block styles %{"}"}
  <link rel="stylesheet" href="assets/extensions/rater-js/lib/style.css" />
  {"{"}% endblock %{"}"}
  {"{"}% block js %{"}"}
  {"{"}% endblock %{"}"}
</>
    
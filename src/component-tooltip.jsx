<>
  {"{"}% set title = 'Tooltip' %{"}"}
  {"{"}% set filename = 'component-tooltip.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Tooltip</h3>
          <p className="text-subtitle text-muted">
            The tooltip, also known as infotip or hint, is a common graphical
            user interface element which shows additional information on element
            hover.
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
                Tooltip
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
              <h5>Basic Tooltip</h5>
            </div>
            <div className="card-body">
              <div className="d-inline-block mb-2 me-1">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Tooltip on top"
                >
                  Tooltip on top
                </button>
              </div>
              <div className="d-inline-block mb-2 me-1">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Tooltip on right"
                >
                  Tooltip on right
                </button>
              </div>
              <div className="d-inline-block mb-2 me-1">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Tooltip on bottom"
                >
                  Tooltip on bottom
                </button>
              </div>
              <div className="d-inline-block mb-2 me-1">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Tooltip on left"
                >
                  Tooltip on left
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="card">
            <div className="card-header">
              <h5>Tooltip in Text</h5>
            </div>
            <div className="card-body">
              Tight pants next level keffiyeh{" "}
              <a href="#" data-bs-toggle="tooltip" title="Some tooltip text!">
                you probably
              </a>{" "}
              haven't heard of them. Photo booth beard raw denim letterpress
              vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's
              fixie sustainable quinoa 8-bit american apparel{" "}
              <a
                href="#"
                data-bs-toggle="tooltip"
                title="Another tooltip text!"
              >
                have a
              </a>{" "}
              terry richardson vinyl chambray. Beard stumptown, cardigans banh
              mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko
              mcsweeney's cleanse vegan chambray. A really ironic artisan{" "}
              <a href="#" data-bs-toggle="tooltip" title="Another here too!">
                whatever keytar
              </a>
              , scenester farm-to-table banksy Austin twitter handle freegan
              cred raw denim single-origin coffee viral.
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

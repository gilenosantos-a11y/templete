<>
  {"{"}% set title = 'JS Vector Map' %{"}"}
  {"{"}% set filename = 'ui-map-jsvectormap.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>JS Vector Map</h3>
          <p className="text-subtitle text-muted">
            We use the{" "}
            <a
              href="https://github.com/themustafaomar/jsvectormap"
              target="_blank"
            >
              Jsvectormap
            </a>{" "}
            plugin to create vector maps.
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
                JS Vector Map
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
              <h5 className="card-title">World Map</h5>
            </div>
            <div className="card-body">
              <div id="world-map" className="w-100" style={{ height: 450 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {"{"}% endblock %{"}"}
  {"{"}% block styles %{"}"}
  <link
    rel="stylesheet"
    href="assets/extensions/jsvectormap/css/jsvectormap.min.css"
  />
  {"{"}% endblock %{"}"}
  {"{"}% block js %{"}"}
  {"{"}% endblock %{"}"}
</>

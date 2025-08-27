<>
  {"{"}% set title = 'Apexcharts' %{"}"}
  {"{"}% set filename = 'ui-chart-apexcharts.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Apexcharts</h3>
          <p className="text-subtitle text-muted">
            A chart says more than a thousand words.
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
                Apexcharts
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">
              <h4>Line Area Chart</h4>
            </div>
            <div className="card-body">
              <div id="area" />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h4>Radial Gradient Chart</h4>
            </div>
            <div className="card-body">
              <div id="radialGradient" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Line Chart</h4>
            </div>
            <div className="card-body">
              <div id="line" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Bar Chart</h4>
            </div>
            <div className="card-body">
              <div id="bar" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4>Radial Gradient Chart</h4>
            </div>
            <div className="card-body">
              <div id="candle" />
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

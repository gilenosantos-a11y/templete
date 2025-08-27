<>
  {"{"}% set title = 'Leaflet Map' %{"}"}
  {"{"}% set filename = 'ui-map-leaflet.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Leaflet Map</h3>
          <p className="text-subtitle text-muted">
            an open-source JavaScript library for mobile-friendly interactive
            maps.
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
                Leaflet Map
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
              <h5 className="card-title">Our Location</h5>
            </div>
            <div className="card-body">
              <div id="map" />
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
    href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    crossOrigin=""
  />
  <style
    dangerouslySetInnerHTML={{
      __html: "\n\t#map {\n\t\theight: 500px;\n\t\twidth: 100%;\n\t}\n"
    }}
  />
  {"{"}% endblock %{"}"}
  {"{"}% block js %{"}"}
  {"{"}% endblock %{"}"}
</>

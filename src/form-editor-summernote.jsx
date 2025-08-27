<>
  {"{"}% set title = 'Summernote' %{"}"}
  {"{"}% set filename = 'form-editor-summernote.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Summernote </h3>
          <p className="text-subtitle text-muted">
            Super simple WYSIWYG editor. But you must include jQuery.
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
                Summernote
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
              <h4 className="card-title">Default Editor</h4>
            </div>
            <div className="card-body">
              <div id="summernote" />
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
              <h4 className="card-title">Word Hints</h4>
            </div>
            <div className="card-body">
              <div id="hint" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {"{"}% endblock %{"}"}
  {"{"}% block styles %{"}"}
  <link rel="stylesheet" href="assets/scss/pages/summernote.scss" />
  <link
    rel="stylesheet"
    href="assets/extensions/summernote/summernote-lite.css"
  />
  {"{"}% endblock %{"}"}
  {"{"}% block js %{"}"}
  {"{"}% endblock %{"}"}
</>

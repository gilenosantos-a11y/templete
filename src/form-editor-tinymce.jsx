<>
  {"{"}% set title = 'TinyMCE' %{"}"}
  {"{"}% set filename = 'form-editor-tinymce.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>TinyMCE </h3>
          <p className="text-subtitle text-muted">
            Allow your users to provide formatted content with a powerful
            WYSIWYG editor.
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
                TinyMCE
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
              <textarea
                name=""
                id="default"
                cols={30}
                rows={10}
                defaultValue={""}
              />
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
              <h4 className="card-title">Code Toolbar</h4>
            </div>
            <div className="card-body">
              <textarea id="dark" cols={30} rows={10} defaultValue={""} />
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

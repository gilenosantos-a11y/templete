<>
  {"{"}% set title = 'Form Editor' %{"}"}
  {"{"}% set filename = 'form-editor-quill.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Quill Form Editor </h3>
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
                Quill
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Quill.js Snow Editor</h4>
        </div>
        <div className="card-body">
          <p>Snow is a clean editor theme</p>
          <div id="snow">
            <p>Hello World!</p>
            <p>
              Some initial <strong>bold</strong> text
            </p>
            <p>
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Bubble Editor</h4>
        </div>
        <div className="card-body">
          <p>Block some text to display options in poppovers </p>
          <div id="bubble">
            <p>Hello World!</p>
            <p>
              Some initial <strong>bold</strong> text
            </p>
            <p>
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Full Editor</h4>
        </div>
        <div className="card-body">
          <p>Block some text to display options in poppovers </p>
          <div id="full">
            <p>Hello World!</p>
            <p>
              Some initial <strong>bold</strong> text
            </p>
            <p>
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  {"{"}% endblock %{"}"}
  {"{"}% block styles %{"}"}
  <link rel="stylesheet" href="assets/extensions/quill/quill.snow.css" />
  <link rel="stylesheet" href="assets/extensions/quill/quill.bubble.css" />
  {"{"}% endblock %{"}"}
  {"{"}% block js %{"}"}
  {"{"}% endblock %{"}"}
</>

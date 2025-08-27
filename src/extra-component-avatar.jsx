<>
  {"{"}% set title = 'Avatar' %{"}"}
  {"{"}% set filename = 'extra-component-avatar.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Avatar</h3>
          <p className="text-subtitle text-muted">
            A container to show avatar images or initials.
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
                Avatar
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Default Avatar</h4>
        </div>
        <div className="card-body">
          <p>
            Wrap your content with <code>.avatar</code> class and wrap your text
            in <code>.avatar-content</code>
            to create a avatar.You have to use inline attributes to set height
            width of image in default avatar.
          </p>
          <div className="avatar bg-primary me-3">
            <span className="avatar-content">
              <i className="bi bi-envelope" />
            </span>
          </div>
          <div className="avatar bg-warning me-3">
            <span className="avatar-content">AS</span>
          </div>
          <div className="avatar bg-warning me-3">
            <img src="assets/static/images/faces/1.jpg" alt="" srcSet="" />
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Avatar Sizes</h4>
        </div>
        <div className="card-body">
          <p>
            use class{" "}
            <code>
              .avatar-{"{"}sm|lg|xl{"}"}
            </code>{" "}
            with <code>.avatar</code> to modify size of your avatar.
          </p>
          <div className="avatar avatar-sm bg-primary me-3">
            <span className="avatar-content">
              <i className="bi bi-envelope" />
            </span>
          </div>
          <div className="avatar bg-warning me-3">
            <span className="avatar-content">AS</span>
          </div>
          <div className="avatar me-3">
            <img src="assets/static/images/faces/1.jpg" alt="" srcSet="" />
          </div>
          <div className="avatar avatar-lg me-3">
            <img src="assets/static/images/faces/2.jpg" alt="" srcSet="" />
          </div>
          <div className="avatar avatar-xl me-3">
            <img src="assets/static/images/faces/3.jpg" alt="" srcSet="" />
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Avatar Status</h4>
        </div>
        <div className="card-body">
          <p>
            use class <code>.avatar-status</code> and{" "}
            <code>
              .bg-{"{"}color{"}"}
            </code>{" "}
            after <code>.avatar-content</code>
          </p>
          <div className="avatar bg-warning me-3">
            <span className="avatar-content">AS</span>
            <span className="avatar-status bg-success" />
          </div>
          <div className="avatar bg-warning me-3">
            <img src="assets/static/images/faces/1.jpg" alt="" srcSet="" />
            <span className="avatar-status bg-danger" />
          </div>
        </div>
      </div>
    </section>
  </div>
  {"{"}% endblock %{"}"}
</>

<>
  {"{"}% set title = 'Placeholder' %{"}"}
  {"{"}% set filename = 'component-placeholder.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Placeholder</h3>
          <p className="text-subtitle text-muted">
            Placeholders are used to enhance your app experience.
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
                Placeholder
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Example</h4>
        </div>
        <div className="card-body">
          <p>
            In the example below, we take a typical card component and recreate
            it with placeholders applied to create a “loading card”. Size and
            proportions are the same between the two.
          </p>
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6" />
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7" />
            <span className="placeholder col-4" />
            <span className="placeholder col-4" />
            <span className="placeholder col-6" />
            <span className="placeholder col-8" />
          </p>
          <a
            className="btn btn-primary disabled placeholder col-6"
            aria-disabled="true"
          />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Width</h4>
        </div>
        <div className="card-body">
          <p>
            You can change the <code>width</code> through grid column classes,
            width utilities, or inline styles.
          </p>
          <span className="placeholder col-6" />
          <span className="placeholder w-75" />
          <span className="placeholder" style={{ width: "25%" }} />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Color</h4>
        </div>
        <div className="card-body">
          <p>
            By default, the <code>placeholder</code> uses the{" "}
            <code>currentColor</code>. This can be overridden with an utility
            class or custom color.
          </p>
          <span className="placeholder col-12" />
          <span className="placeholder col-12 bg-primary" />
          <span className="placeholder col-12 bg-secondary" />
          <span className="placeholder col-12 bg-success" />
          <span className="placeholder col-12 bg-danger" />
          <span className="placeholder col-12 bg-warning" />
          <span className="placeholder col-12 bg-info" />
          <span className="placeholder col-12 bg-light" />
          <span className="placeholder col-12 bg-dark" />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Sizing</h4>
        </div>
        <div className="card-body">
          <p>
            The size of <code>.placeholder</code> is based on the typographic
            style of the parent element. Customize them with sizing modifiers:{" "}
            <code>.placeholder-lg</code>, <code>.placeholder-sm</code>, or
            <code>.placeholder-xs</code>.
          </p>
          <span className="placeholder col-12 placeholder-lg" />
          <span className="placeholder col-12" />
          <span className="placeholder col-12 placeholder-sm" />
          <span className="placeholder col-12 placeholder-xs" />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Animation</h4>
        </div>
        <div className="card-body">
          <p>
            Animate placeholders with <code>.placeholder-glow</code> or{" "}
            <code>.placeholder-wave</code> to better convey the perception of
            something being actively loaded.
          </p>
          <p className="placeholder-glow">
            <span className="placeholder col-12" />
          </p>
          <p className="placeholder-wave">
            <span className="placeholder col-12" />
          </p>
        </div>
      </div>
    </section>
  </div>
  {"{"}% endblock %{"}"}
</>

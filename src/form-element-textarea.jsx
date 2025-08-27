<>
  {"{"}% set title = 'Textarea' %{"}"}
  {"{"}% set filename = 'form-element-textarea.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Textarea</h3>
          <p className="text-subtitle text-muted">
            Multi-line input where you can input a lot of text.
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
                Textarea
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">Default Textarea</div>
            <div className="card-body">
              <div className="form-group mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">Floating Labels</div>
            <div className="card-body">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  defaultValue={""}
                />
                <label htmlFor="floatingTextarea">Comments</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">Textarea with Title</div>
            <div className="card-body">
              <div className="form-group with-title mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
                <label>Your experience</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {"{"}% endblock %{"}"}
</>

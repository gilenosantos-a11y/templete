<>
  {"{"}% set title = 'Collapse' %{"}"}
  {"{"}% set filename = 'component-collapse.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Collapse</h3>
          <p className="text-subtitle text-muted">
            Collapse your content and control its visibility with buttons.
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
                Collapse
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    {/* list groups simple & disabled start */}
    <section id="basic-list-group">
      <div className="row match-height">
        <div className="col-lg-6 col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Simple Collapse</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
                Click the buttons below to show and hide another element via
                class changes:
              </p>
              <p>
                <a
                  className="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Link with href
                </a>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Button with data-bs-target
                </button>
              </p>
              <div className="collapse" id="collapseExample">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Multiple Targets</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
                Click the buttons below to show and hide another element via
                class changes:
              </p>
              <p>
                <a
                  className="btn btn-primary mb-2"
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  Toggle first element
                </a>
                <button
                  className="btn btn-primary mb-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#multiCollapseExample2"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample2"
                >
                  Toggle second element
                </button>
                <button
                  className="btn btn-primary mb-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target=".multi-collapse"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1 multiCollapseExample2"
                >
                  Toggle both elements
                </button>
              </p>
              <div className="row">
                <div className="col">
                  <div
                    className="collapse multi-collapse"
                    id="multiCollapseExample1"
                  >
                    <div className="card card-body">
                      Some placeholder content for the first collapse component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the relevant
                      trigger.
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="collapse multi-collapse"
                    id="multiCollapseExample2"
                  >
                    <div className="card card-body">
                      Some placeholder content for the second collapse component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the relevant
                      trigger.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* list groups simple & disabled end */}
  </div>
  {"{"}% endblock %{"}"}
</>

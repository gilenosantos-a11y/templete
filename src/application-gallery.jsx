<>
  {"{"}% set title = 'Photo Gallery' %{"}"}
  {"{"}% set filename = 'application-gallery.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Photo Gallery</h3>
          <p className="text-subtitle text-muted">
            Super simple photo gallery.
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
                Photo Gallery
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
              <h5 className="card-title">Our Gallery</h5>
            </div>
            <div className="card-body">
              <div
                className="row gallery"
                data-bs-toggle="modal"
                data-bs-target="#galleryModal"
              >
                <div className="col-6 col-sm-6 col-lg-3 mt-2 mt-md-0 mb-md-0 mb-2">
                  <a href="#">
                    <img
                      className="w-100 active"
                      src="https://images.unsplash.com/photo-1633008808000-ce86bff6c1ed?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      data-bs-target="#Gallerycarousel"
                      data-bs-slide-to={0}
                    />
                  </a>
                </div>
                <div className="col-6 col-sm-6 col-lg-3 mt-2 mt-md-0 mb-md-0 mb-2">
                  <a href="#">
                    <img
                      className="w-100"
                      src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                      data-bs-target="#Gallerycarousel"
                      data-bs-slide-to={1}
                    />
                  </a>
                </div>
                <div className="col-6 col-sm-6 col-lg-3 mt-2 mt-md-0 mb-md-0 mb-2">
                  <a href="#">
                    <img
                      className="w-100"
                      src="https://images.unsplash.com/photo-1632951634308-d7889939c125?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      data-bs-target="#Gallerycarousel"
                      data-bs-slide-to={2}
                    />
                  </a>
                </div>
                <div className="col-6 col-sm-6 col-lg-3 mt-2 mt-md-0 mb-md-0 mb-2">
                  <a href="#">
                    <img
                      className="w-100"
                      src="https://images.unsplash.com/photo-1632949107130-fc0d4f747b26?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      data-bs-target="#Gallerycarousel"
                      data-bs-slide-to={3}
                    />
                  </a>
                </div>
              </div>
              <div
                className="row mt-2 mt-md-4 gallery"
                data-bs-toggle="modal"
                data-bs-target="#galleryModal"
              >
                <div className="col-6 col-sm-6 col-lg-3 mt-2 mt-md-0 mb-md-0 mb-2">
                  <a href="#">
                    <img
                      className="w-100 active"
                      src="https://images.unsplash.com/photo-1633008808000-ce86bff6c1ed?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      data-bs-target="#Gallerycarousel"
                      data-bs-slide-to={0}
                    />
                  </a>
                </div>
                <div className="col-6 col-sm-6 col-lg-3 mt-2 mt-md-0 mb-md-0 mb-2">
                  <a href="#">
                    <img
                      className="w-100"
                      src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                      data-bs-target="#Gallerycarousel"
                      data-bs-slide-to={1}
                    />
                  </a>
                </div>
                <div className="col-6 col-sm-6 col-lg-3 mt-2 mt-md-0 mb-md-0 mb-2">
                  <a href="#">
                    <img
                      className="w-100"
                      src="https://images.unsplash.com/photo-1632951634308-d7889939c125?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      data-bs-target="#Gallerycarousel"
                      data-bs-slide-to={2}
                    />
                  </a>
                </div>
                <div className="col-6 col-sm-6 col-lg-3 mt-2 mt-md-0 mb-md-0 mb-2">
                  <a href="#">
                    <img
                      className="w-100"
                      src="https://images.unsplash.com/photo-1632949107130-fc0d4f747b26?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      data-bs-target="#Gallerycarousel"
                      data-bs-slide-to={3}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div
    className="modal fade"
    id="galleryModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="galleryModalTitle"
    aria-hidden="true"
  >
    <div
      className="modal-dialog modal-dialog-centered modal-dialog-centered"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="galleryModalTitle">
            Our Gallery Example
          </h5>
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i data-feather="x" />
          </button>
        </div>
        <div className="modal-body">
          <div
            id="Gallerycarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#Gallerycarousel"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#Gallerycarousel"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#Gallerycarousel"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#Gallerycarousel"
                data-bs-slide-to={3}
                aria-label="Slide 4"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1633008808000-ce86bff6c1ed?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1632951634308-d7889939c125?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1632949107130-fc0d4f747b26?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#Gallerycarousel"
              role="button"
              type="button"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
            </a>
            <a
              className="carousel-control-next"
              href="#Gallerycarousel"
              role="button"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  {"{"}% endblock %{"}"}
</>

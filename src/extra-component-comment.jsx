<>
  {"{"}% set title = 'Comment' %{"}"}
  {"{"}% set filename = 'extra-component-comment.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Comment</h3>
          <p className="text-subtitle text-muted">
            A component that can be used to comment on the content of your
            website. It can be used to comment on a post, image, or video.
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
                Comment
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Basic Comment</h4>
        </div>
        <div className="card-body">
          <div className="comment">
            <div className="comment-header">
              <div className="pr-50">
                <div className="avatar avatar-2xl">
                  <img src="assets/static/images/faces/2.jpg" alt="Avatar" />
                </div>
              </div>
              <div className="comment-body">
                <div className="comment-profileName">Muhammad Alfian </div>
                <div className="comment-time">8 seconds ago</div>
                <div className="comment-message">
                  <p className="list-group-item-text truncate mb-20">
                    Your{" "}
                    <a
                      href="https://github.com/alfianchii/confess"
                      target="_blank"
                    >
                      confession
                    </a>{" "}
                    will be processed. Stay tuned!
                  </p>
                </div>
                <div className="comment-actions">
                  <button className="btn icon icon-left btn-primary me-2 text-nowrap">
                    <i className="bi bi-eye-fill" /> Show
                  </button>
                  <button className="btn icon icon-left btn-warning me-2 text-nowrap">
                    <i className="bi bi-pencil-square" /> Edit
                  </button>
                  <button className="btn icon icon-left btn-danger me-2 text-nowrap">
                    <i className="bi bi-x-circle" /> Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="comment">
            <div className="comment-header">
              <div className="pr-50">
                <div className="avatar avatar-2xl">
                  <img src="assets/static/images/faces/3.jpg" alt="Avatar" />
                </div>
              </div>
              <div className="comment-body">
                <div className="comment-profileName"> Sana Fatima </div>
                <div className="comment-time">4 minutes ago</div>
                <div className="comment-message">
                  <p className="list-group-item-text truncate mb-20">
                    I have looked into your matter and will respond soon.
                  </p>
                </div>
                <div className="comment-actions">
                  <button className="btn icon icon-left btn-primary me-2 text-nowrap">
                    <i className="bi bi-eye-fill" /> Show
                  </button>
                  <button className="btn icon icon-left btn-warning me-2 text-nowrap">
                    <i className="bi bi-pencil-square" /> Edit
                  </button>
                  <button className="btn icon icon-left btn-danger me-2 text-nowrap">
                    <i className="bi bi-x-circle" /> Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {"{"}% endblock %{"}"}
</>

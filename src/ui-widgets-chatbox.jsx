<>
  {"{"}% set title = 'Chatbox' %{"}"}
  {"{"}% set filename = 'ui-widgets-chatbox.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Chatbox</h3>
          <p className="text-subtitle text-muted">
            Our take on a chat conversation.
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
                Chatbox
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <div className="media d-flex align-items-center">
                <div className="avatar me-3">
                  <img
                    src="assets/static/images/faces/1.jpg"
                    alt=""
                    srcSet=""
                  />
                  <span className="avatar-status bg-success" />
                </div>
                <div className="name flex-grow-1">
                  <h6 className="mb-0">Alfy</h6>
                  <span className="text-xs">Online</span>
                </div>
                <button className="btn btn-sm">
                  <i data-feather="x" />
                </button>
              </div>
            </div>
            <div className="card-body pt-4 bg-grey">
              <div className="chat-content">
                <div className="chat">
                  <div className="chat-body">
                    <div className="chat-message">
                      Hi Alfy, how can i help you?
                    </div>
                  </div>
                </div>
                <div className="chat chat-left">
                  <div className="chat-body">
                    <div className="chat-message">
                      I'm looking for the best admin dashboard template
                    </div>
                    <div className="chat-message">With bootstrap certainly</div>
                  </div>
                </div>
                <div className="chat">
                  <div className="chat-body">
                    <div className="chat-message">
                      I recommend you to use Mazer Dashboard
                    </div>
                  </div>
                </div>
                <div className="chat chat-left">
                  <div className="chat-body">
                    <div className="chat-message">
                      That's great! I like it so much :)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="message-form d-flex flex-direction-column align-items-center">
                <a href="http://" className="black">
                  <i data-feather="smile" />
                </a>
                <div className="d-flex flex-grow-1 ms-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message.."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {"{"}% endblock %{"}"}
  {"{"}% block styles %{"}"}
  <link rel="stylesheet" href="assets/scss/widgets/chat.scss" />
  {"{"}% endblock %{"}"}
</>

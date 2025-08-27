<>
  {"{"}% set title = 'Forgot Password' %{"}"}
  {"{"}% extends 'src/layouts/auth.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="row h-100">
    <div className="col-lg-5 col-12">
      <div id="auth-left">
        <div className="auth-logo">
          <a href="index.html">
            <img src="assets/static/images/logo/logo.svg" alt="Logo" />
          </a>
        </div>
        <h1 className="auth-title">Forgot Password</h1>
        <p className="auth-subtitle mb-5">
          Input your email and we will send you reset password link.
        </p>
        <form action="index.html">
          <div className="form-group position-relative has-icon-left mb-4">
            <input
              type="email"
              className="form-control form-control-xl"
              placeholder="Email"
            />
            <div className="form-control-icon">
              <i className="bi bi-envelope" />
            </div>
          </div>
          <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">
            Send
          </button>
        </form>
        <div className="text-center mt-5 text-lg fs-4">
          <p className="text-gray-600">
            Remember your account?{" "}
            <a href="auth-login.html" className="font-bold">
              Log in
            </a>
            .
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-7 d-none d-lg-block">
      <div id="auth-right"></div>
    </div>
  </div>
  {"{"}% endblock %{"}"}
</>

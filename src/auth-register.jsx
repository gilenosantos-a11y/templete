<>
  {"{"}% set title = 'Register' %{"}"}
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
        <h1 className="auth-title">Sign Up</h1>
        <p className="auth-subtitle mb-5">
          Input your data to register to our website.
        </p>
        <form action="index.html">
          <div className="form-group position-relative has-icon-left mb-4">
            <input
              type="text"
              className="form-control form-control-xl"
              placeholder="Email"
            />
            <div className="form-control-icon">
              <i className="bi bi-envelope" />
            </div>
          </div>
          <div className="form-group position-relative has-icon-left mb-4">
            <input
              type="text"
              className="form-control form-control-xl"
              placeholder="Username"
            />
            <div className="form-control-icon">
              <i className="bi bi-person" />
            </div>
          </div>
          <div className="form-group position-relative has-icon-left mb-4">
            <input
              type="password"
              className="form-control form-control-xl"
              placeholder="Password"
            />
            <div className="form-control-icon">
              <i className="bi bi-shield-lock" />
            </div>
          </div>
          <div className="form-group position-relative has-icon-left mb-4">
            <input
              type="password"
              className="form-control form-control-xl"
              placeholder="Confirm Password"
            />
            <div className="form-control-icon">
              <i className="bi bi-shield-lock" />
            </div>
          </div>
          <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-5 text-lg fs-4">
          <p className="text-gray-600">
            Already have an account?{" "}
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

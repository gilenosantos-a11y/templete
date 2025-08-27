<>
  {"{"}% set title = '403' %{"}"}
  {"{"}% extends 'src/layouts/error.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="error-page container">
    <div className="col-md-8 col-12 offset-md-2">
      <div className="text-center">
        <img
          className="img-error"
          src="assets/static/images/samples/error-403.svg"
          alt="Forbidden"
        />
        <h1 className="error-title">Forbidden</h1>
        <p className="fs-5 text-gray-600">
          You are unauthorized to see this page.
        </p>
        <a href="index.html" className="btn btn-lg btn-outline-primary mt-3">
          Go Home
        </a>
      </div>
    </div>
  </div>
  {"{"}% endblock %{"}"}
</>

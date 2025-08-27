<>
  {"{"}% set title = '404' %{"}"}
  {"{"}% extends 'src/layouts/error.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="error-page container">
    <div className="col-md-8 col-12 offset-md-2">
      <div className="text-center">
        <img
          className="img-error"
          src="assets/static/images/samples/error-404.svg"
          alt="Not Found"
        />
        <h1 className="error-title">Not Found</h1>
        <p className="fs-5 text-gray-600">
          The page you are looking not found.
        </p>
        <a href="index.html" className="btn btn-lg btn-outline-primary mt-3">
          Go Home
        </a>
      </div>
    </div>
  </div>
  {"{"}% endblock %{"}"}
</>

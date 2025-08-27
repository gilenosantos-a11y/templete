<>
  {"{"}% set title = '500' %{"}"}
  {"{"}% extends 'src/layouts/error.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="error-page container">
    <div className="col-md-8 col-12 offset-md-2">
      <div className="text-center">
        <img
          className="img-error"
          src="assets/static/images/samples/error-500.svg"
          alt="System Error"
        />
        <h1 className="error-title">System Error</h1>
        <p className="fs-5 text-gray-600">
          The website is currently unaivailable. Try again later or contact the
          developer.
        </p>
        <a href="index.html" className="btn btn-lg btn-outline-primary mt-3">
          Go Home
        </a>
      </div>
    </div>
  </div>
  {"{"}% endblock %{"}"}
</>

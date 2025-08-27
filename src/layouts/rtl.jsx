<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>
    {"{"}
    {"{"} title {"}"}
    {"}"} - {"{"}
    {"{"} web_title {"}"}
    {"}"}
  </title>
  {"{"}% block stylesfirst %{"}"}
  {"{"}% endblock %{"}"}
  <link rel="stylesheet" href="assets/compiled/css/app.rtl.css" />
  <link rel="stylesheet" href="assets/compiled/css/app-dark.rtl.css" />
  <link
    rel="shortcut icon"
    href="assets/static/images/logo/favicon.svg"
    type="image/x-icon"
  />
  <link
    rel="shortcut icon"
    href="assets/static/images/logo/favicon.png"
    type="image/png"
  />
  {"{"}% block styles %{"}"}
  {"{"}% endblock %{"}"}
  <div id="app">
    <div id="sidebar">
      {"{"}% include "src/layouts/sidebar.html" %{"}"}
    </div>
    <div id="main">
      <header className="mb-3">
        <a href="#" className="burger-btn d-block d-xl-none">
          <i className="bi bi-justify fs-3" />
        </a>
      </header>
      {"{"}% block content %{"}"}
      {"{"}% endblock %{"}"}
      {"{"}% include '../partials/footer.html' %{"}"}
    </div>
  </div>
  {"{"}% if isDev %{"}"}
  {"{"}% else %{"}"}
  {"{"}% endif %{"}"}
  {"{"}% block js %{"}"}
  {"{"}% endblock %{"}"}
</>

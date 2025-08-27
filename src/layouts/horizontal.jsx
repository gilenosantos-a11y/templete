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
  <link rel="stylesheet" href="assets/scss/app.scss" />
  <link rel="stylesheet" href="assets/scss/themes/dark/app-dark.scss" />
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
    <div id="main" className="layout-horizontal">
      <header className="mb-5">
        <div className="header-top">
          <div className="container">
            <div className="logo">
              <a href="index.html">
                <img src="assets/static/images/logo/logo.svg" alt="Logo" />
              </a>
            </div>
            <div className="header-top-right">
              <div className="dropdown">
                <a
                  href="#"
                  id="topbarUserDropdown"
                  className="user-dropdown d-flex align-items-center dropend dropdown-toggle "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="avatar avatar-md2">
                    <img src="assets/static/images/faces/1.jpg" alt="Avatar" />
                  </div>
                  <div className="text">
                    <h6 className="user-dropdown-name">John Ducky</h6>
                    <p className="user-dropdown-status text-sm text-muted">
                      Member
                    </p>
                  </div>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end shadow-lg"
                  aria-labelledby="topbarUserDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      My Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="auth-login.html">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              {/* Burger button responsive */}
              <a href="#" className="burger-btn d-block d-xl-none">
                <i className="bi bi-justify fs-3" />
              </a>
            </div>
          </div>
        </div>
        <nav className="main-navbar">
          <div className="container">
            <ul>
              {"{"}% set maxSubmenuItemY = 8 %{"}"}
              {"{"}% for menuItem in horizontalMenuItems %{"}"}
              {"{"}% if not menuItem.isTitle %{"}"}
              <li className="menu-item {{ 'active' if (menuItem.url == filename or filename|startsWith(menuItem.key)) }} {{'has-sub' if menuItem.submenu.length > 0 }}">
                <a
                  href="{{menuItem.url if menuItem.url!==undefined else '#'}}"
                  className="menu-link"
                >
                  <span>
                    <i className="bi bi-{{ menuItem.icon }}" /> {"{"}
                    {"{"}menuItem.name{"}"}
                    {"}"}
                  </span>
                </a>
                {"{"}% if menuItem.submenu.length &gt; 0 %{"}"}
                <div className="submenu {{ 'active' if (sub.url and sub.url == filename or filename|startsWith(sidebarItem.key)) }}">
                  {/* Wrap to submenu-group-wrapper if you want 3-level submenu. Otherwise remove it. */}
                  <div className="submenu-group-wrapper">
                    {"{"}% for sub in menuItem.submenu %{"}"}
                    {"{"}% if loop.index % maxSubmenuItemY == 1 %{"}"}
                    <ul className="submenu-group">
                      {"{"}% endif %{"}"}
                      <li className="submenu-item {{ 'active' if sub.url == filename }} {{'has-sub' if sub.submenu.length > 0 }}">
                        <a
                          href="{{sub.url if sub.url!==undefined else '#'}}"
                          className="submenu-link"
                        >
                          {"{"}
                          {"{"} sub.name {"}"}
                          {"}"}
                        </a>
                        {"{"}% if sub.submenu.length &gt; 0 %{"}"}
                        {/* 3 Level Submenu */}
                        <ul className="subsubmenu">
                          {"{"}% for subsub in sub.submenu %{"}"}
                          <li className="subsubmenu-item ">
                            <a
                              href="{{ subsub.url }}"
                              className="subsubmenu-link"
                            >
                              {"{"}
                              {"{"}
                              subsub.name {"}"}
                              {"}"}
                            </a>
                          </li>
                          {"{"}% endfor %{"}"}
                        </ul>
                        {"{"}% endif %{"}"}
                      </li>
                      {"{"}% if (loop.index % maxSubmenuItemY == 0) or
                      (loop.last) %{"}"}
                    </ul>
                    {"{"}% endif %{"}"}
                    {"{"}% endfor %{"}"}
                  </div>
                </div>
                {"{"}% endif %{"}"}
              </li>
              {"{"}% endif %{"}"}
              {"{"}% endfor %{"}"}
            </ul>
          </div>
        </nav>
      </header>
      <div className="content-wrapper container">
        {"{"}% block content %{"}"}
        {"{"}% endblock %{"}"}
      </div>
      <footer>
        <div className="container">
          <div className="footer clearfix mb-0 text-muted">
            <div className="float-start">
              <p>2023 © Mazer</p>
            </div>
            <div className="float-end">
              <p>
                Crafted with{" "}
                <span className="text-danger">
                  <i className="bi bi-heart" />
                </span>{" "}
                by <a href="https://saugi.me">Saugi</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
  {"{"}% if isDev %{"}"}
  {"{"}% else %{"}"}
  {"{"}% endif %{"}"}
  {"{"}% block js %{"}"}
  {"{"}% endblock %{"}"}
</>

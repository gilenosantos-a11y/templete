<>
  {"{"}% set title = 'Todo List' %{"}"}
  {"{"}% set filename = 'ui-widgets-todolist.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Todo List</h3>
          <p className="text-subtitle text-muted">
            A decorated, sortable todo-list implementation.
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
                Todo List
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    {/* Task App Widget Starts */}
    <section className="tasks">
      <div className="row">
        <div className="col-lg-7">
          <div className="card widget-todo">
            <div className="card-header border-bottom d-flex justify-content-between align-items-center">
              <h4 className="card-title d-flex">
                <i className="bx bx-check font-medium-5 pl-25 pr-75" />
                Tasks
              </h4>
              <ul className="list-inline d-flex mb-0">
                <li className="d-flex align-items-center">
                  <i className="bx bx-check-circle font-medium-3 me-50" />
                  <div className="dropdown">
                    <div
                      className="dropdown-toggle me-1"
                      role="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      All Task
                    </div>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bx bx-sort me-50 font-medium-3" />
                  <div className="dropdown">
                    <div
                      className="dropdown-toggle"
                      role="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      All Task
                    </div>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-body px-0 py-1 overflow-auto">
              <ul className="widget-todo-list-wrapper" id="widget-todo-list">
                <li className="widget-todo-item">
                  <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                    <div className="widget-todo-title-area d-flex align-items-center gap-2">
                      <i data-feather="list" className="cursor-move" />
                      <div className="checkbox checkbox-shadow">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkbox-1"
                        />
                      </div>
                      <label
                        htmlFor="checkbox-1"
                        className="widget-todo-title ms-2"
                      >
                        Add SCSS and JS files if required
                      </label>
                    </div>
                    <div className="widget-todo-item-action d-flex align-items-center">
                      <div className="badge badge-pill bg-light-success me-1">
                        frontend
                      </div>
                      <div className="avatar bg-warning">
                        <img
                          src="assets/static/images/faces/1.jpg"
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer" />
                    </div>
                  </div>
                </li>
                <li className="widget-todo-item">
                  <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                    <div className="widget-todo-title-area d-flex align-items-center gap-2">
                      <i data-feather="list" className="cursor-move" />
                      <div className="checkbox checkbox-shadow">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkbox-2"
                        />
                      </div>
                      <label
                        htmlFor="checkbox-2"
                        className="widget-todo-title ms-2"
                      >
                        Check all the changes that you did, before you commit
                      </label>
                    </div>
                    <div className="widget-todo-item-action d-flex align-items-center">
                      <div className="badge badge-pill bg-light-danger me-1">
                        backend
                      </div>
                      <div className="avatar bg-warning">
                        <img
                          src="assets/static/images/faces/2.jpg"
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer" />
                    </div>
                  </div>
                </li>
                <li className="widget-todo-item completed">
                  <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                    <div className="widget-todo-title-area d-flex align-items-center gap-2">
                      <i data-feather="list" className="cursor-move" />
                      <div className="checkbox checkbox-shadow">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkbox-3"
                          defaultChecked=""
                        />
                      </div>
                      <label
                        htmlFor="checkbox-3"
                        className="widget-todo-title ms-2"
                      >
                        Dribble, Behance, UpLabs &amp; Pinterest Post
                      </label>
                    </div>
                    <div className="widget-todo-item-action d-flex align-items-center">
                      <div className="badge badge-pill bg-light-primary me-1">
                        UI/UX
                      </div>
                      <div className="avatar bg-rgba-primary m-0 me-50">
                        <img
                          src="assets/static/images/faces/3.jpg"
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer" />
                    </div>
                  </div>
                </li>
                <li className="widget-todo-item">
                  <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                    <div className="widget-todo-title-area d-flex align-items-center gap-2">
                      <i data-feather="list" className="cursor-move" />
                      <div className="checkbox checkbox-shadow">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkbox-4"
                        />
                      </div>
                      <label
                        htmlFor="checkbox-4"
                        className="widget-todo-title ms-2"
                      >
                        Fresh Design Web &amp; Responsive Miracle
                      </label>
                    </div>
                    <div className="widget-todo-item-action d-flex align-items-center">
                      <div className="badge badge-pill bg-light-info me-1">
                        Design
                      </div>
                      <div className="avatar bg-warning">
                        <img
                          src="assets/static/images/faces/4.jpg"
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer" />
                    </div>
                  </div>
                </li>
                <li className="widget-todo-item">
                  <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                    <div className="widget-todo-title-area d-flex align-items-center gap-2">
                      <i data-feather="list" className="cursor-move" />
                      <div className="checkbox checkbox-shadow">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkbox-5"
                        />
                      </div>
                      <label
                        htmlFor="checkbox-5"
                        className="widget-todo-title ms-2"
                      >
                        Add Calendar page and source and credit page in
                        documentation
                      </label>
                    </div>
                    <div className="widget-todo-item-action d-flex align-items-center">
                      <div className="badge badge-pill bg-light-warning me-1">
                        Javascript
                      </div>
                      <div className="avatar bg-warning">
                        <img
                          src="assets/static/images/faces/5.jpg"
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer" />
                    </div>
                  </div>
                </li>
                <li className="widget-todo-item">
                  <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                    <div className="widget-todo-title-area d-flex align-items-center gap-2">
                      <i data-feather="list" className="cursor-move" />
                      <div className="checkbox checkbox-shadow">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkbox-6"
                        />
                      </div>
                      <label
                        htmlFor="checkbox-6"
                        className="widget-todo-title ms-2"
                      >
                        Add Angular Starter-kit
                      </label>
                    </div>
                    <div className="widget-todo-item-action d-flex align-items-center">
                      <div className="badge badge-pill bg-light-primary me-1">
                        UI/UX
                      </div>
                      <div className="avatar bg-warning">
                        <img
                          src="assets/static/images/faces/1.jpg"
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card widget-todo">
            <div className="card-header border-bottom d-flex justify-content-between align-items-center">
              <h4 className="card-title d-flex">
                <i className="bx bx-check font-medium-5 pl-25 pr-75" />
                Progress
              </h4>
            </div>
            <div className="card-body px-0 py-1">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td className="col-3">UI Design</td>
                    <td className="col-6">
                      <div className="progress progress-info">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </td>
                    <td className="col-3 text-center">60%</td>
                  </tr>
                  <tr>
                    <td className="col-3">VueJS</td>
                    <td className="col-6">
                      <div className="progress progress-success">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "35%" }}
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </td>
                    <td className="col-3 text-center">30%</td>
                  </tr>
                  <tr>
                    <td className="col-3">Laravel</td>
                    <td className="col-6">
                      <div className="progress progress-danger">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </td>
                    <td className="col-3 text-center">50%</td>
                  </tr>
                  <tr>
                    <td className="col-3">ReactJS</td>
                    <td className="col-6">
                      <div className="progress progress-primary">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </td>
                    <td className="col-3 text-center">80%</td>
                  </tr>
                  <tr>
                    <td className="col-3">Go</td>
                    <td className="col-6">
                      <div className="progress progress-secondary">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "65%" }}
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </td>
                    <td className="col-3 text-center">65%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {"{"}% endblock %{"}"}
  {"{"}% block styles %{"}"}
  <link rel="stylesheet" href="assets/scss/widgets/todo.scss" />
  <link rel="stylesheet" href="assets/extensions/dragula/dragula.min.css" />
  {"{"}% endblock %{"}"}
  {"{"}% block js %{"}"}
  {"{"}% endblock %{"}"}
</>

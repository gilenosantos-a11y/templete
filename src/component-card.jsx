<>
  {"{"}% set title = 'Card' %{"}"}
  {"{"}% set filename = 'component-card.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Card</h3>
          <p className="text-subtitle text-muted">
            Bootstrap’s cards provide a flexible and extensible content
            container with multiple variants and options.
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
                Card
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    {/* Basic card section start */}
    <section id="content-types">
      <div className="row">
        <div className="col-xl-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-content">
              <div className="card-body">
                <h4 className="card-title">Card With Header And Footer</h4>
                <p className="card-text">
                  Introducing our beautifully designed cards, thoughtfully
                  crafted to enhance your browsing experience. These versatile
                  elements are the perfect way to present information, products,
                  or services on our website.
                </p>
              </div>
              <img
                className="img-fluid w-100"
                src="assets/static/images/samples/banana.jpg"
                alt="Card image cap"
              />
            </div>
            <div className="card-footer d-flex justify-content-between">
              <span>Card Footer</span>
              <button className="btn btn-light-primary">Read More</button>
            </div>
          </div>
          <div className="card collapse-icon accordion-icon-rotate">
            <div className="card-header">
              <h4 className="card-title pl-1">Accordion</h4>
            </div>
            <div className="card-body">
              <div className="accordion" id="cardAccordion">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Accordion Item #1
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the first item's accordion body.
                        </strong>{" "}
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Accordion Item #2
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the second item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Accordion Item #3
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the third item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-content">
              <img
                src="assets/static/images/samples/motorcycle.jpg"
                className="card-img-top img-fluid"
                alt="singleminded"
              />
              <div className="card-body">
                <h5 className="card-title">Be Single Minded</h5>
                <p className="card-text">
                  Chocolate sesame snaps apple pie danish cupcake sweet roll
                  jujubes tiramisu.Gummies bonbon apple pie fruitcake icing
                  biscuit apple pie jelly-o sweet roll.
                </p>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-body">
                <h4 className="card-title mb-0">Video Card</h4>
              </div>
              <div className="embed-responsive embed-responsive-item embed-responsive-16by9 w-100">
                <iframe
                  src="https://www.youtube.com/embed/2b9txcAt4e0"
                  style={{ width: "100%" }}
                  height={300}
                  allowFullScreen=""
                />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Candy cupcake sugar plum oat cake wafer marzipan jujubes.
                  Jelly-o sesame snaps cheesecake topping. Cupcake fruitcake
                  macaroon donut pastry gummies tiramisu chocolate bar muffin.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-content">
              <div className="card-body">
                <h4 className="card-title">Carousel</h4>
                <h6 className="card-subtitle">Support card subtitle</h6>
              </div>
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="assets/static/images/samples/architecture1.jpg"
                      className="d-block w-100"
                      alt="Image Architecture"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/static/images/samples/bg-mountain.jpg"
                      className="d-block w-100"
                      alt="Image Mountain"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/static/images/samples/jump.jpg"
                      className="d-block w-100"
                      alt="Image Jump"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Welcome to our dynamic carousel, where innovation takes center
                  stage. Take a captivating journey through our cutting-edge
                  products, groundbreaking solutions, and the latest
                  advancements in technology. Each slide invites you to discover
                  something new and exciting, providing a glimpse into the
                  future of innovation.
                </p>
                <p className="card-text">
                  Whether you're a tech enthusiast, an industry professional, or
                  simply curious about what's on the horizon, our carousel is
                  your window into the world of creativity, ingenuity, and
                  limitless possibilities. Swipe, click, or scroll through to
                  immerse yourself in a visual feast of innovation that will
                  inspire, inform, and leave you with a sense of wonder.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-body">
                <h4 className="card-title">Feedback Form</h4>
                <p className="card-text">
                  Your feedback is instrumental in shaping our future. It guides
                  our decisions, inspires innovation, and ensures that we're
                  meeting your needs. Whether you've had a stellar experience or
                  encountered any challenges, we want to hear from you. Your
                  feedback fuels our commitment to continuous improvement.
                </p>
                <form className="form" method="post">
                  <div className="form-body">
                    <div className="form-group">
                      <label htmlFor="feedback1" className="sr-only">
                        Name
                      </label>
                      <input
                        type="text"
                        id="feedback1"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="feedback4" className="sr-only">
                        Last Game
                      </label>
                      <input
                        type="text"
                        id="feedback4"
                        className="form-control"
                        placeholder="Last Name"
                        name="LastName"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="feedback2" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        id="feedback2"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <select name="reason" className="form-control">
                        <option value="Inquiry">Inquiry</option>
                        <option value="Complain">Complaints</option>
                        <option value="Quotation">Quotation</option>
                      </select>
                    </div>
                    <div className="form-group form-label-group">
                      <textarea
                        className="form-control"
                        id="label-textarea"
                        rows={3}
                        placeholder="Suggestion"
                        defaultValue={""}
                      />
                      <label htmlFor="label-textarea" />
                    </div>
                  </div>
                  <div className="form-actions d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary me-1">
                      Submit
                    </button>
                    <button type="reset" className="btn btn-light-primary">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card">
            <div className="card-content">
              <img
                className="card-img-bottom img-fluid"
                src="assets/static/images/samples/building.jpg"
                alt="Card image cap"
                style={{ height: "20rem", objectFit: "cover" }}
              />
              <div className="card-body">
                <h4 className="card-title">Social Media</h4>
                <p className="card-text">
                  Candy Cupcake sugar plum oat cake wafer marzipan jujubes.
                  Jelly-o sesame snaps cheesecake topping. Cupcake fruitcake
                  macaroon donut pastry gummies tiramisu chocolate bar muffin.
                </p>
                <a href="#" className="card-link">
                  <small>Read 12 Comments</small>
                </a>
              </div>
              <div className="btn-group align-items-center mx-2 px-1">
                <button
                  type="button"
                  className="btn btn-link p-2 m-1 text-decoration-none"
                >
                  <i className="bi bi-heart d-flex align-items-center justify-content-center text-secondary" />
                </button>
                <button
                  type="button"
                  className="btn btn-link p-2 m-1 text-decoration-none"
                >
                  <i className="bi bi-chat d-flex align-items-center justify-content-center text-secondary" />
                </button>
                <button
                  type="button"
                  className="btn btn-link p-2 m-1 text-decoration-none"
                >
                  <i className="bi bi-bookmark d-flex align-items-center justify-content-center text-secondary" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card">
            <div className="card-content">
              <img
                className="card-img-top img-fluid"
                src="assets/static/images/samples/origami.jpg"
                alt="Card image cap"
                style={{ height: "20rem" }}
              />
              <div className="card-body">
                <h4 className="card-title">Top Image Cap</h4>
                <p className="card-text">
                  Jelly-o sesame snaps cheesecake topping. Cupcake fruitcake
                  macaroon donut pastry gummies tiramisu chocolate bar muffin.
                  Dessert bonbon caramels brownie chocolate bar chocolate tart
                  dragée.
                </p>
                <p className="card-text">
                  Cupcake fruitcake macaroon donut pastry gummies tiramisu
                  chocolate bar muffin.
                </p>
                <button className="btn btn-primary block">Update now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card">
            <div className="card-content">
              <div className="card-body">
                <h4 className="card-title">Bottom Image Cap</h4>
                <p className="card-text">
                  Jelly-o sesame snaps cheesecake topping. Cupcake fruitcake
                  macaroon donut pastry gummies tiramisu chocolate bar muffin.
                  Dessert bonbon caramels brownie chocolate bar chocolate tart
                  dragée.
                </p>
                <p className="card-text">
                  Cupcake fruitcake macaroon donut pastry gummies tiramisu
                  chocolate bar muffin.
                </p>
                <small className="text-muted">Last updated 3 mins ago.</small>
              </div>
              <img
                className="card-img-bottom img-fluid"
                src="assets/static/images/samples/water.jpg"
                alt="Card image cap"
                style={{ height: "20rem", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Basic Card types section end */}
    {/* Groups section start */}
    <section id="groups">
      <div className="row match-height">
        <div className="col-12 mt-3 mb-1">
          <h4 className="section-title text-uppercase">Groups</h4>
        </div>
      </div>
      <div className="row match-height">
        <div className="col-12">
          <div className="card-group">
            <div className="card">
              <div className="card-content">
                <img
                  className="card-img-top img-fluid"
                  src="assets/static/images/samples/1.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <small className="text-muted">Last updated 3 mins ago.</small>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <img
                  className="card-img-top img-fluid"
                  src="assets/static/images/samples/2.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <small className="text-muted">Last updated 3 mins ago.</small>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <img
                  className="card-img-top img-fluid"
                  src="assets/static/images/samples/3.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <small className="text-muted">Last updated 3 mins ago.</small>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <img
                  className="card-img-top img-fluid"
                  src="assets/static/images/samples/4.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <small className="text-muted">Last updated 3 mins ago.</small>
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

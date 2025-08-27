<>
  {"{"}% set title = 'GLightbox' %{"}"}
  {"{"}% set filename = 'extra-component-glightbox.html' %{"}"}
  {"{"}% extends 'src/layouts/master.html' %{"}"}
  {"{"}% block content %{"}"}
  <div className="page-heading">
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>GLightbox</h3>
          <p className="text-subtitle text-muted">
            {" "}
            A touchable Pure Javascript lightbox with mobile and video support.
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
                GLightbox
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Simple Image Gallery</h4>
            </div>
            <div className="card-body">
              <ul className="box-container three-cols">
                <li className="box">
                  <div className="inner">
                    <a
                      href="assets/static/images/glightbox/large/gm1.jpg"
                      className="glightbox"
                    >
                      <img
                        src="assets/static/images/glightbox/small/gm1.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a
                      href="assets/static/images/glightbox/large/gm2.jpg"
                      className="glightbox"
                    >
                      <img
                        src="assets/static/images/glightbox/small/gm2.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a
                      href="assets/static/images/glightbox/large/gm3.jpg"
                      className="glightbox"
                    >
                      <img
                        src="assets/static/images/glightbox/small/gm3.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a
                      href="assets/static/images/glightbox/large/gm4.jpg"
                      className="glightbox"
                    >
                      <img
                        src="assets/static/images/glightbox/small/gm4.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a
                      href="assets/static/images/glightbox/large/gm5.jpg"
                      className="glightbox"
                    >
                      <img
                        src="assets/static/images/glightbox/small/gm5.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a
                      href="assets/static/images/glightbox/large/gm6.jpg"
                      className="glightbox"
                    >
                      <img
                        src="assets/static/images/glightbox/small/gm6.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Images with Description</h4>
              <p>
                You can add descriptions to your slides, the description
                position can be set globally for all slides or you can set a
                different position for each slide. options are: top, bottom,
                left or right. You can adjust the style the way you want with
                basic CSS.
                <strong>The description can display html code</strong>.
              </p>
            </div>
            <div className="card-body">
              <ul className="box-container three-cols">
                <li className="box">
                  <div className="inner">
                    <a
                      href="assets/static/images/glightbox/large/gm7.jpg"
                      className="glightbox2"
                      data-glightbox='title:Description Bottom; description: You can set the position of the description <a href="http://google.com">with a link to Google</a>'
                    >
                      <img
                        src="assets/static/images/glightbox/small/gm7.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a
                      href="assets/static/images/glightbox/large/gm8.jpg"
                      className="glightbox2"
                      data-glightbox="title: Description Right; description: .custom-desc1; descPosition: right;"
                    >
                      <img
                        src="assets/static/images/glightbox/small/gm8.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="glightbox-desc custom-desc1">
                      <p>
                        You can set the position of the description in different
                        ways for example
                        <strong style={{ textDecoration: "underline" }}>
                          top, bottom, left or right
                        </strong>
                      </p>
                      <p>
                        <a
                          href="http://google.com"
                          target="_blank"
                          style={{
                            textDecoration: "underline",
                            fontWeight: "bold"
                          }}
                        >
                          Example Google link
                        </a>
                        ipsum vehicula eros ultrices lacinia Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae Duis quis ipsum vehicula eros ultrices
                        lacinia. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                      <p>
                        Primis pharetra facilisis lorem quis penatibus ad nulla
                        inceptos, dui per tempor taciti aliquet consequat
                        sodales, curae tristique gravida auctor interdum
                        malesuada sagittis. Felis pretium eros ligula natoque ad
                        ante rutrum himenaeos, adipiscing urna mauris porta quam
                        efficitur odio, sagittis morbi tellus nisi molestie mus
                        faucibus.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a
                      href="assets/static/images/glightbox/large/gm9.jpg"
                      className="glightbox2"
                      data-glightbox="title: Description Left; description: .custom-desc2; descPosition: left;"
                    >
                      <img
                        src="assets/static/images/glightbox/small/gm9.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="glightbox-desc custom-desc2">
                      <p>
                        You can set the position of the description in different
                        ways for example top, bottom, left or right
                      </p>
                      <p>
                        Duis quis ipsum vehicula eros ultrices lacinia.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Videos Gallery</h4>
              <p>
                You can add videos with optional autoplay for
                <strong>Vimeo</strong>,<strong>Youtube</strong>
                and
                <strong>self hosted videos</strong>. You can specify a default
                width for the videos or set different widths to each video in
                your gallery. The videos are 100% responsive and will play
                correctly on mobile devices.
              </p>
            </div>
            <div className="card-body">
              <ul className="box-container three-cols">
                <li className="box">
                  <div className="inner">
                    <a
                      href="https://vimeo.com/115041822"
                      className="glightbox3"
                    >
                      <img
                        src="assets/static/images/glightbox/small/gm10.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a
                      href="https://www.youtube-nocookie.com/embed/Ga6RYejo6Hk"
                      className="glightbox3"
                    >
                      <img
                        src="assets/static/images/glightbox/small/gm11.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a
                      href="assets/static/videos/glightbox/pexels-video-1550080.mp4"
                      className="glightbox3"
                    >
                      <img
                        src="assets/static/images/glightbox/small/gm12.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Iframes and Inline Elements</h4>
              <p>
                You can easily add iframes by simply entering the url, it could
                be a web page, a video, google maps, etc. also you can display
                any div of your page by entering the ID in the href attribute.
              </p>
            </div>
            <div className="card-body">
              <ul className="box-container three-cols">
                <li className="box">
                  <div className="inner">
                    <a
                      href="#inline-example"
                      className="glightbox4"
                      data-glightbox="width: 700; height: auto;"
                    >
                      <img
                        src="assets/static/images/glightbox/small/gm14.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a
                      href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12085.977306439116!2d-73.96648875371474!3d40.77314541916876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258bf08488f6b%3A0x618706a9142daa0d!2sUpper+East+Side%2C+Nueva+York%2C+EE.+UU.!5e0!3m2!1ses-419!2smx!4v1511830027642"
                      className="glightbox4"
                    >
                      <img
                        src="assets/static/images/glightbox/small/gm15.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </li>
                <li className="box">
                  <div className="inner">
                    <a
                      href="assets/static/videos/glightbox/pexels-video-1550080.mp4"
                      className="glightbox4"
                    >
                      <img
                        src="assets/static/images/glightbox/small/gm16.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div id="inline-example" style={{ display: "none" }}>
    <div className="inline-inner">
      <h4 className="text-center">Example of inline content</h4>
      <div className="text-center">
        <p>
          Duis quis ipsum vehicula eros ultrices lacinia. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Donec nec sollicitudin felis. Donec vel nulla vel leo varius tempor.
          Duis suscipit pharetra quam id imperdiet. Praesent vitae eros metus.
          Donec placerat sagittis rhoncus. In condimentum eleifend ante et
          ornare. Curabitur pharetra nibh non purus gravida.
        </p>
      </div>
      <a className="gtrigger-close inline-close-btn" href="#">
        Close Box
      </a>
    </div>
  </div>
  {"{"}% endblock %{"}"}
  {"{"}% block styles %{"}"}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css"
  />
  <link rel="stylesheet" href="assets/scss/pages/glightbox.scss" />
  {"{"}% endblock %{"}"}
  {"{"}% block js %{"}"}
  {"{"}% endblock %{"}"}
</>

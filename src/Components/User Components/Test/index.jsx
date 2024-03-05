import React from 'react';


import './plainFooter.css'
function MyHTMLComponent() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Your Generated Website</title>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        <link href="css/styles.css" rel="stylesheet" />
      </head>
      <body id="page-top">
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="#page-top">Your Name Goes Here</a>
            <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#skills">Skills</a></li>
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead bg-primary text-white text-center">
          <div className="container d-flex align-items-center flex-column">
            {/* Your Photo/Image Goes here - Change the dummy image below with your own photo */}
            <img className="img-fluid rounded-circle m-5" src="https://dummyimage.com/200x200/6c757d/dee2e6.jpg" alt="..." />
            {/* Masthead Heading*/}
            <h1 className="masthead-heading text-uppercase mb-4">Your name/company</h1>
            {/* Masthead Subheading*/}
            <h3 className="masthead-subheading font-weight-light m-4">- Your job title goes here -</h3>
          </div>
        </header>

        <section className="page-section bg-primary text-white mb-0" id="about">
          <div className="container">
            {/* About Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-white mb-5">About</h2>

            {/* About Section Content*/}
            <div className="row">
              <div className="col-lg-4 ms-auto"><p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ab omnis deserunt libero porro repellendus voluptatibus consequatur nisi quaerat, quos, aspernatur nobis autem beatae, officiis quae accusantium culpa accusamus cum?</p></div>
              <div className="col-lg-4 me-auto"><p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eveniet reprehenderit qui? Architecto, nostrum id sunt ducimus dolorem ea, iste fugiat temporibus ratione veritatis veniam itaque corrupti aut quod possimus!</p></div>
            </div>
          </div>
        </section>


        <section className="bg-primary text-white mb-4" id="skills">
          <div className="container">
            {/* Skills Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-white mb-5">Skills</h2>

            {/* Skills Section Content*/}
            <div className="row">
              <div className="col-lg ms-auto mx-auto text-center"><p className="lead">Skills Go Here</p></div>
            </div>
          </div>
        </section>
        <section className="page-section portfolio" id="portfolio">
          <div className="container">
            {/* Portfolio Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-5">Portfolio</h2>

            {/* Portfolio Grid Items*/}
            <div className="row justify-content-center">
              {/* Portfolio Item 1*/}
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="src\Assets\placeholder-image.png" alt="..." />
                </div>
              </div>
              {/* Portfolio Item 2*/}
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="src\Assets\placeholder-image.png" alt="..." />
                </div>
              </div>
              {/* Portfolio Item 3*/}
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="src\Assets\placeholder-image.png" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section" id="contact">
          <div className="container">
            {/* Contact Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-5">Contact Me</h2>
            {/* Contact Section Form*/}
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-7">
                {/* SB Forms Contact Form */}
                {/* This form is pre-integrated with SB Forms.*/}
                {/* To make this form functional, sign up at*/}
                {/* https://startbootstrap.com/solution/contact-forms*/}
                {/* to get an API token!*/}
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                  {/* Name input*/}
                  <div className="form-floating mb-3">
                    <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                    <label htmlFor="name">Full name</label>
                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                  </div>
                  {/* Email address input*/}
                  <div className="form-floating mb-3">
                    <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                    <label htmlFor="email">Email address</label>
                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                  </div>
                  {/* Phone number input*/}
                  <div className="form-floating mb-3">
                    <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                    <label htmlFor="phone">Phone number</label>
                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                  </div>
                  {/* Message input*/}
                  <div className="form-floating mb-3">
                    <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: "10rem" }} data-sb-validations="required"></textarea>
                    <label htmlFor="message">Message</label>
                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                  </div>
                  {/* Submit success message*/}
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">Form submission successful!</div>
                      To activate this form, sign up at
                      <br />
                      <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                  </div>
                  {/* Submit error message*/}
                  <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                  {/* Submit Button*/}
                  <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="row justify-content-center">
              {/* Footer Social Icons*/}
              <h4 className="text-uppercase mb-4 text-center">Pick the ones you want</h4>
              <div className="col-lg-4 mb-5 mb-lg-0 justify-content-center align-items-center text-center">
                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-github"></i></a>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright py-4 text-center text-white">
          <div className="container"><small>Copyright &copy; Your Website 2024</small></div>
        </div>


        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby='portfolioModal1' aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Portfolio Modal - Title*/}
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-4">title</h2>

                      {/* Portfolio Modal - Image*/}
                      <img className="img-fluid rounded mb-5" src="src\Assets\placeholder-image.png" alt="..." />
                      {/* Portfolio Modal - Text*/}
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" data-bs-dismiss="modal">
                        <i className="fas fa-xmark fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" aria-labelledby='portfolioModal2' aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Portfolio Modal - Title*/}
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-4">title</h2>

                      {/* Portfolio Modal - Image*/}
                      <img className="img-fluid rounded mb-5" src="src\Assets\placeholder-image.png" alt="..." />
                      {/* Portfolio Modal - Text*/}
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" data-bs-dismiss="modal">
                        <i className="fas fa-xmark fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" aria-labelledby='portfolioModal3' aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Portfolio Modal - Title*/}
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-4">title</h2>

                      {/* Portfolio Modal - Image*/}
                      <img className="img-fluid rounded mb-5" src="src\Assets\placeholder-image.png" alt="..." />
                      {/* Portfolio Modal - Text*/}
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" data-bs-dismiss="modal">
                        <i className="fas fa-xmark fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="js/scripts.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
      </body>
    </html>
  );
}

export default MyHTMLComponent;
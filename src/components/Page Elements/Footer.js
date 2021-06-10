import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
      <div className="row px-xl-5 pt-5">
        <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
          <a href="#!" className="text-decoration-none">
            <h1 className="mb-4 display-5 font-weight-semi-bold">GlassRep</h1>
          </a>
          <p>Find the best products and services at the comfort of your home</p>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt text-primary mr-3" />
            India
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope text-primary mr-3" />
            support@glassrep.com
          </p>
          <p className="mb-0">
            <i className="fa fa-phone-alt text-primary mr-3" />
            +011 4627245
          </p>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Navigate</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-dark mb-2" href="index.html">
                  <i className="fa fa-angle-right mr-2" />
                  Home
                </a>
                <a className="text-dark mb-2" href="shop.html">
                  <i className="fa fa-angle-right mr-2" />
                  Our Shop
                </a>
                <a className="text-dark mb-2" href="detail.html">
                  <i className="fa fa-angle-right mr-2" />
                  Shop Detail
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              {/* <h5 className="font-weight-bold text-dark mb-4" /> */}
              <div className="d-flex flex-column justify-content-start">
                <br />
                <a className="text-dark mb-2" href="cart.html">
                  <i className="fa fa-angle-right mr-2" />
                  Shopping Cart
                </a>
                <a className="text-dark mb-2" href="checkout.html">
                  <i className="fa fa-angle-right mr-2" />
                  Checkout
                </a>
                <a className="text-dark" href="contact.html">
                  <i className="fa fa-angle-right mr-2" />
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">
                Win Exciting Offers
              </h5>
              <form action="POST">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control border-0 py-4"
                    placeholder="Your Name"
                    required={true}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control border-0 py-4"
                    placeholder="Your Email"
                    required={true}
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary btn-block border-0 py-3"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-top border-light mx-xl-5 py-4">
        <div className="col-md-6 px-xl-0">
          <p className="mb-md-0 text-center text-md-left text-dark">
            ©{" "}
            <a className="text-dark font-weight-semi-bold" href="#!">
              GlassRep
            </a>
            . All Rights Reserved.
          </p>
        </div>
        <div className="col-md-6 px-xl-0 text-center text-md-right">
          {/* <img class="img-fluid" src="img/payments.png" alt=""> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

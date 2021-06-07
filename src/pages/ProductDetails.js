import React from "react";
import { Link } from "react-router-dom";
import Description from "../components/Product Details/Description";
import Information from "../components/Product Details/Information";
import Overview from "../components/Product Details/Overview";
import Reviews from "../components/Product Details/ReviewSection";

const ProductDetailsPage = (props) => {
  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300 }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Product Detail
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shop Detail</p>
          </div>
        </div>
      </div>
      {/* Header end */}
      <div className="container-fluid py-5">
        <Overview />
        <div className="row px-xl-5">
          <div className="col">
            <div className="nav nav-tabs justify-content-center border-secondary mb-4">
              <a
                className="nav-item nav-link active"
                data-toggle="tab"
                href="#tab-pane-1"
              >
                Description
              </a>
              <a
                className="nav-item nav-link"
                data-toggle="tab"
                href="#tab-pane-2"
              >
                Information
              </a>
              <a
                className="nav-item nav-link"
                data-toggle="tab"
                href="#tab-pane-3"
              >
                Reviews (2)
              </a>
            </div>
            <div className="tab-content">
              <Description />
              <Information />
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;

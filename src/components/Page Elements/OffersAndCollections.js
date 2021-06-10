import React from "react";

class OffersAndCollections extends React.Component {
  render() {
    return (
      <div className="container-fluid offer pt-5">
        <div className="row px-xl-5">
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
              <img
                src="https://imgs7.luluandsky.com/fit-in/707x1000/c46a684c-ab42-4e06-b225-5637924b47b3/catalog/product/8/9/8904288495980_2.jpg-make_first_image.jpg"
                style={{ marginBottom: 10, marginLeft: 20 }}
                alt=""
              />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h5 className="text-uppercase text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 className="mb-4 font-weight-semi-bold">
                  Summer Collection
                </h1>
                <a
                  href="#!"
                  className="btn btn-outline-primary py-md-2 px-md-3"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
              <img
                src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Flarryolmsted%2Ffiles%2F2017%2F10%2FTom-Cruise-Oblivion.jpg"
                style={{ marginRight: 20, marginBottom: 10 }}
                alt=""
              />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h5 className="text-uppercase text-primary mb-3">
                  10% off the all order
                </h5>
                <h1 className="mb-4 font-weight-semi-bold">
                  Winter Collection
                </h1>
                <a
                  href="#!"
                  className="btn btn-outline-primary py-md-2 px-md-3"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OffersAndCollections;

import React from "react";

const Reviews = (props) => {
  return (
    <div className="tab-pane fade" id="tab-pane-3">
      <div className="row">
        <div className="col-md-6">
          <h4 className="mb-4">2 reviews for "Rayban Aviators"</h4>
          <div className="media mb-4">
            <img
              src="https://asset20.ckassets.com/thegoodlookbook/wp-content/uploads/sites/2/2019/02/11522841877307-Carrera-Unisex-Square-Sunglasses-1006S-06J-60EZ-7321522841877285-6-e1549090933554.jpg"
              alt="Image1"
              className="img-fluid mr-3 mt-1"
              style={{ width: 45 }}
            />
            <div className="media-body">
              <h6>
                Sanchit Narang
                <small>
                  {" "}
                  - <i>01 May 2021</i>
                </small>
              </h6>
              <div className="text-primary mb-2">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <i className="far fa-star" />
              </div>
              <p>
                Diam amet duo labore stet elitr ea clita ipsum, tempor labore
                accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
                sed eirmod ipsum.
              </p>
            </div>
          </div>
          <div className="media mb-4">
            <img
              src="https://assets.burberry.com/is/image/Burberryltd/6c2c5e07253066381c8755182172b1d3573839dc.jpg?$BBY_V2_ML_3x4$&wid=1278&hei=1700"
              alt="Image"
              className="img-fluid mr-3 mt-1"
              style={{ width: 45 }}
            />
            <div className="media-body">
              <h6>
                Mark Stone
                <small>
                  {" "}
                  - <i>11 Feb 2021</i>
                </small>
              </h6>
              <div className="text-primary mb-2">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
              <p>
                Diam amet duo labore stet elitr ea clita ipsum, tempor labore
                accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
                sed eirmod ipsum.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4 className="mb-4">Leave a review</h4>
          <small>Required fields are marked *</small>
          <div className="d-flex my-3">
            <p className="mb-0 mr-2">Your Rating * :</p>
            <div className="text-primary">
              <i className="far fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
            </div>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="message">Your Review *</label>
              <textarea
                id="message"
                cols={30}
                rows={5}
                className="form-control"
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email *</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group mb-0">
              <input
                type="submit"
                defaultValue="Leave Your Review"
                className="btn btn-primary px-3"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

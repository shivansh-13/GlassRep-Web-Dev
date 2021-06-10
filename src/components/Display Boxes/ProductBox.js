import React from "react";

//TODO: Implement add to cart and view details
/**
 * Display the product
 * @param {Object} props
 * @param {string} props.name Name of the product to display
 * @param {string} props.realPrice The higher price which will be striked through
 * @param {string} props.discountedPrice The lower price at which it will be sold
 * @param {string} props.id I think there is a unique id for each product
 * @param {string} props.imageURL Image URL to display
 * @returns JSX
 */
const ProductBox = ({ realPrice, discountedPrice, name, id, imageURL }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src={imageURL} alt="img" />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">{name}</h6>
          <div className="d-flex justify-content-center">
            <h6>{discountedPrice}</h6>
            <h6 className="text-muted ml-2">
              <del>{realPrice}</del>
            </h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <a href="#!" className="btn btn-sm text-dark p-0">
            <i className="fas fa-eye text-primary mr-1" />
            View Detail
          </a>
          <a href="#!" className="btn btn-sm text-dark p-0">
            <i className="fas fa-shopping-cart text-primary mr-1" />
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;

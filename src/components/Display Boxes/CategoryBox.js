import React from "react";
import { Link } from "react-router-dom";
/**
 *
 * @param {Object} props
 * @param {string} props.imageURL
 * @param {string} props.onClickLink Link to direct to on click
 * @param {number} props.numberOfProducts
 * @param {string} props.categoryName The category name to display
 * @returns JSX
 */
const CategoryBox = ({
  imageURL,
  onClickLink,
  numberOfProducts,
  categoryName,
}) => {
  return (
    <div className="col-lg-4 col-md-6 pb-1">
      <div
        className="cat-item d-flex flex-column border mb-4"
        style={{ padding: 30 }}
      >
        <p className="text-right">{numberOfProducts} Products</p>
        <Link
          to={onClickLink}
          className="cat-img position-relative overflow-hidden mb-3"
        >
          <img className="img-fluid" src={imageURL} alt="" />
        </Link>
        <h5 className="font-weight-semi-bold m-0">{categoryName}</h5>
      </div>
    </div>
  );
};

export default CategoryBox;

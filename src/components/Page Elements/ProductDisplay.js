import React from "react";
import ProductBox from "../Display Boxes/ProductBox";

class ProductDisplay extends React.Component {
  firstWord = ["Stylish", "New", "Hot", "Colorful", "Colorful"];
  secondWord = ["Glasses", "Shades", "Collection", "Sunglasses", "Sunglasses"];
  imageURLs = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunglesses-index-1590778931.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    "https://5.imimg.com/data5/FK/IO/MY-11896129/best-mens-sunglasses-500x500.jpg",
    "https://cwcdn.coolwinks.com/mobile/mobile-prod-images-lite/S66C6624-1.jpg",
    "https://cwcdn.coolwinks.com/mobile/mobile-prod-images-lite/S66C6624-1.jpg",
  ];
  getProductDisplays = () => {
    let theList = [];
    for (let i = 0; i < 7; i++) {
      var name =
        this.firstWord[
          Math.floor(Math.random() * (this.firstWord.length - 1))
        ] +
        " " +
        this.secondWord[
          Math.floor(Math.random() * (this.secondWord.length - 1))
        ];
      theList.push(
        <ProductBox
          key={i}
          id="1"
          name={name}
          realPrice={"Rs." + (70 + Math.floor(Math.random() * 50)).toString()}
          discountedPrice={
            "Rs. " + (50 + Math.floor(Math.random() * 20)).toString()
          }
          imageURL={
            this.imageURLs[
              Math.floor(Math.random() * (this.imageURLs.length - 1))
            ]
          }
        />
      );
    }
    return theList;
  };
  render() {
    return (
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">The New Wear</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">
          {this.getProductDisplays()}
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src="https://5.imimg.com/data5/FK/IO/MY-11896129/best-mens-sunglasses-500x500.jpg"
                  alt="img"
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">New Collection</h6>
                <div className="d-flex justify-content-center">
                  <h6>$300.00</h6>
                  <h6 className="text-muted ml-2">
                    <del>$160.00</del>
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
        </div>
      </div>
    );
  }
}

export default ProductDisplay;

import React from "react";
import CategoryBox from "../Display Boxes/CategoryBox";

class Categories extends React.Component {
  render() {
    return (
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <CategoryBox
            categoryName="Men's Glasses"
            numberOfProducts={1 + Math.floor(Math.random() * 19)}
            imageURL="https://m.media-amazon.com/images/I/31Rb0NwDiFL._SL500_.jpg"
            onClickLink="#!"
          />
          <CategoryBox
            categoryName="Women's Glasses"
            numberOfProducts={1 + Math.floor(Math.random() * 19)}
            imageURL="https://m.media-amazon.com/images/I/31Rb0NwDiFL._SL500_.jpg"
            onClickLink="#!"
          />
          <CategoryBox
            categoryName="Baby's Glasses"
            numberOfProducts={1 + Math.floor(Math.random() * 19)}
            imageURL="https://m.media-amazon.com/images/I/31Rb0NwDiFL._SL500_.jpg"
            onClickLink="#!"
          />
          <CategoryBox
            categoryName="Crizal Lens"
            numberOfProducts={1 + Math.floor(Math.random() * 19)}
            imageURL="https://pimcore.cdnsbg.com/essiloruvlenses.png"
            onClickLink="#!"
          />
          <CategoryBox
            categoryName="Anti Glares"
            numberOfProducts={1 + Math.floor(Math.random() * 19)}
            imageURL="https://www.essilorusa.com/content/dam/essilor-redesign/2.2/SP_Crizal%20Tray.jpg"
            onClickLink="#!"
          />
          <CategoryBox
            categoryName="Reflecting Optics"
            numberOfProducts={1 + Math.floor(Math.random() * 19)}
            imageURL="https://www.essilorpakistan.com/sites/default/files/2018-08/BlueLight_website_0_0.png"
            onClickLink="#!"
          />
        </div>
      </div>
    );
  }
}

export default Categories;

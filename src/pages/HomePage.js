import React from "react";
import Featured from "../components/Page Elements/Featured";
import Categories from "../components/Page Elements/Categories";
import OffersAndCollections from "../components/Page Elements/OffersAndCollections";
import ProductDisplay from "../components/Page Elements/ProductDisplay";
import Subscribe from "../components/Page Elements/Subscribe";
import Sponsers from "../components/Page Elements/Sponsers";

const HomePage = (props) => {
  return (
    <>
      <Featured />
      <Categories />
      <OffersAndCollections />
      <ProductDisplay />
      <Subscribe />
      <ProductDisplay />
      <Sponsers />
    </>
  );
};

export default HomePage;

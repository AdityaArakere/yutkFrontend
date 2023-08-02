import React, {useEffect } from "react";
import ThreeZipperBag from "./3ZipperBags";
import TwoZipperBag from "./2ZipperBags";

function AllProducts() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ThreeZipperBag />
      <TwoZipperBag />
    </div>
  );
}

export default AllProducts;

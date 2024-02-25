import React, { useEffect } from "react";
import { productData} from "../../../static/data";
import styles from "../../../styles/style";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
   
  return (
    <div>
        <div className={`${styles.section}`}>
            <div className={`${styles.heading}`}>
              <h1> featured products </h1>
            </div>
            <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
                {
                   productData && productData.map((i,index) => <ProductCard data={i} key={index}/>)
                }
            </div>
        </div>
    </div>
  );
};

export default FeaturedProduct;
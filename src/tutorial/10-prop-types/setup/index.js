import React from "react";
import Product from "./Product";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";
import Testing from "./testing";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
        {/* <Testing /> */}
      </section>
    </div>
  );
};

export default Index;

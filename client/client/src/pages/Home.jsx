import React from "react";
import Hero from "../pages/Hero"; 
import BurgerSession from "../layouts/BurgerSession"; 
import Products from "../layouts/Products";

const Home = ({ handleAddToCart }) => {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <BurgerSession />
      </div>
      <div>
        <Products handleAddToCart={handleAddToCart} />
      </div>
    </>
  );
};

export default Home;

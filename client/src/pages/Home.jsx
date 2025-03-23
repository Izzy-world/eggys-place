import React from "react";
import Hero from "../pages/Hero"; 
import Products from "../layouts/Products";

const Home = ({ handleAddToCart }) => {
  return (
    <>
    <main className='bg-[#2F2F2F]'>
    <article className='wrapper'>
      <section>
      <div>
        <Hero />
      </div>
      <div>
        {/* <BurgerSession /> */}
      </div>
      <div>
        <Products handleAddToCart={handleAddToCart} />
      </div>
      </section>

    </article>

    
   </main>
    </>
  );
};

export default Home;

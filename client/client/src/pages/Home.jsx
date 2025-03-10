import React from 'react';
import Hero from '../pages/Hero'; 
import BurgerSession from '../layouts/BurgerSession';
import Products from '../layouts/Products';


const Home = () => {
  return (
    <>
    <div>
    <Hero />
    </div>
    <div>
    <BurgerSession />
    </div>
    <div>
      <Products />
    </div>
  
       
    </>
  );
};

export default Home;

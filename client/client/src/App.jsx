import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Cart from "./pages/Cart";
import { Home } from "./routes/routes";
import Footer from "./layouts/Footer";
import LoadingRing from "./utils/Loader";
import Product from "./pages/Product";
import { Toaster, toast } from 'sonner';


function App() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error parsing cart data:", error);
        setCart([]);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  console.log(cart);

  // Function to handle adding items to the cart
  const handleAddToCart = (product) => {
    const productSelected = cart.find((item) => item._id === product._id);
    if (productSelected) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <LoadingRing />
          </div>
        }
      >
        <Navbar cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="cart" element={<Cart cart={cart} setCart={setCart}/>}/>
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
    <Toaster/>
    </>
    

  );
}

export default App;

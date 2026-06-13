import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar cartItems={cartItems} />

     <Hero cartItems={cartItems} />

     <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
      />

      <FeaturedProducts
        setCartItems={setCartItems}
      />

      

      <Footer />
    </>
  );
}

export default App;
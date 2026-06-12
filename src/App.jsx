import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Hero cartCount={cartCount} />

      <FeaturedProducts
        cartCount={cartCount}
        setCartCount={setCartCount}
      />

      <Footer />
    </>
  );
}

export default App;
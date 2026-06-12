function Hero({ cartCount }) {
  return (
    <section>
      <h1>Welcome to Megersa Store</h1>
      <p>Find amazing products at great prices.</p>
<p>
  You have added {cartCount} products to your cart
</p>
      <button>Shop Now</button>
    </section>
  );
}

export default Hero;
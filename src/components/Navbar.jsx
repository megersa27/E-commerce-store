function Navbar({ cartItems }) {
  return (
    <nav>
      <h2>Megersa Store</h2>

      <p>Cart ({cartItems.length})</p>
    </nav>
  );
}

export default Navbar;
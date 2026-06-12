function Navbar({ cartCount }) {
  return (
    <nav>
      <h2>Megersa Store</h2>

      <p>Cart ({cartCount})</p>
    </nav>
  );
}

export default Navbar;
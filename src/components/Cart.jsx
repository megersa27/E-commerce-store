function Cart({ cartItems, setCartItems }) {
  function removeItem(indexToRemove) {
    const updatedCart = cartItems.filter(
      (_, index) => index !== indexToRemove
    );

    setCartItems(updatedCart);
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Cart Items</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Cart Items</h2>
<div className="cart-items">
      {cartItems.map((item, index) => (
        <div
          className="cart-item"
          key={index}
        >
          <h4>{item.title}</h4>

          <p>${item.price}</p>

          <button
            className="remove-btn"
            onClick={() => removeItem(index)}
          >
            Remove
          </button>
        </div>
        
      ))}
      </div>
    </div>
  );
}

export default Cart;
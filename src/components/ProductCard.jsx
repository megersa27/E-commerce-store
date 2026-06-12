function ProductCard({
  title,
  price,
  rating,
  image,
  cartCount,
  setCartCount,
}) {
  function handleAddToCart() {
    setCartCount((previousCount) => previousCount + 1);
  }
    function handleRemoveFromCart() {
        if (cartCount > 0) {
    setCartCount((previousCount) => previousCount - 1);
  }
}

  return (
    <div className="product">
      <img
        src={image}
        alt={title}
        className="product-image"
      />

      <h3>{title}</h3>

      <p className="rating">
        ⭐ {rating}
      </p>

      <p className="price">
        ${price}
      </p>

      <button onClick={handleAddToCart}>
        Add To Cart
      </button>
      <button onClick={handleRemoveFromCart}>
        Remove Cart
      </button>
    </div>
  );
}

export default ProductCard;
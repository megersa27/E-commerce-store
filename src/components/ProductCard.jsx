function ProductCard({
  product,
  setCartItems,
}) {
  function handleAddToCart() {
    setCartItems((prevItems) => [
      ...prevItems,
      product,
    ]);
  }

  return (
    <div className="product">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <h3>{product.title}</h3>

      <p>⭐ {product.rating}</p>

      <p>${product.price}</p>

      <button
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
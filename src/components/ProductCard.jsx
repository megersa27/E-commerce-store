function ProductCard(props) {
  return (
    <div className="product">

      <img
        src={props.image}
        alt={props.title}
        className="product-image"
      />

      <h3>{props.title}</h3>
      <p>{props.category}</p>

      <p className="rating">
        ⭐ {props.rating}
      </p>

      <p className="price">
        ${props.price}
      </p>

      <button>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;
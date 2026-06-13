import ProductCard from "./ProductCard";
import products from "../data/products";

function FeaturedProducts({
  setCartItems,
}) {
  return (
    <section>
      <h2>Featured Products</h2>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
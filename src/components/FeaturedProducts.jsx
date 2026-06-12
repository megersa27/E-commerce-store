import ProductCard from "./ProductCard";
import products from "../data/products";

function FeaturedProducts({ cartCount, setCartCount }) {
  return (
    <section>
      <h2>Featured Products</h2>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
            cartCount={cartCount}
            setCartCount={setCartCount}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
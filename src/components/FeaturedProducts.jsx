import ProductCard from "./ProductCard";
import products from "../data/products";

function FeaturedProducts() {
  return (
    <section>
      <h2>Featured Products</h2>

      <div className="products">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            rating={product.rating}
            image={product.image}
          />
        ))}

      </div>
    </section>
  );
}

export default FeaturedProducts;
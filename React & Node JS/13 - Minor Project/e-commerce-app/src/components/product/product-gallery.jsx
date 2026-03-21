import ProductCard from "./product-card";
import "./product-gallery.css";
export default function ProductGallery({ products, onAdd }) {
  return products?.length ? (
    <section className="product-gallery">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} onAddToCartClick={onAdd} />
      ))}
    </section>
  ) : (
    "No products found"
  );
}

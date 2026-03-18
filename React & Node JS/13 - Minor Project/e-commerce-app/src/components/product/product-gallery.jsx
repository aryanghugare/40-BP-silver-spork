import ProductCard from "./product-card";
import "./product-gallery.css";
export default function ProductGallery({ products }) {
  return products?.length ? (
    <section className="product-gallery">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  ) : (
    "No products found"
  );
}

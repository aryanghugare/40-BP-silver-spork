import "./product-gallery.css";
export default function ProductGallery({ products }) {
  return products?.length
    ? products.map((product) => <span key={product.id}>{product.title}</span>)
    : "No products found";
}

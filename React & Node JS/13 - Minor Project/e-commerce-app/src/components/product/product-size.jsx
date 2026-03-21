export default function ProductSize({ sizeList, onSizeSelect }) {
  return (
    <section className="product-sizes">
      <label>Size: </label>
      {sizeList.map((size) => (
        <button key={size} onClick={() => onSizeSelect(size)}>
          {size}
        </button>
      ))}
    </section>
  );
}

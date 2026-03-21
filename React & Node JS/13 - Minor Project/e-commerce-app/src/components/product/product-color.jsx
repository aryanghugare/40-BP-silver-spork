export default function ProductColor({ colorList, onColorSelect }) {
  return (
    <section className="product-colors">
      {colorList?.map((color) => (
        <button key={color} onClick={() => onColorSelect(color)} style={{ backgroundColor: color }}></button>
      ))}
    </section>
  );
}

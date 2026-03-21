export default function ProductColor({ colorList, onColorSelect }) {
  const colorPallete = new Map([
    ["red", "#EF4444"],
    ["blue", "#3b82f6"],
    ["green", "#10B981"],
    ["black", "#2f3d5b"],
    ["white", "#F9FAFB"],
  ]);
  return (
    <section className="product-colors">
      {colorList?.map((color) => (
        <button
          key={color}
          onClick={() => onColorSelect(color)}
          style={{ backgroundColor: colorPallete.get(color) }}
        ></button>
      ))}
    </section>
  );
}

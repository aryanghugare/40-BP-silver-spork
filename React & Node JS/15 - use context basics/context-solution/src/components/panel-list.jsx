import PanelItem from "./panel-item";

export default function PanelList() {
  const items = [
    {
      id: 1,
      image: "https://placecats.com/neo/200/200",
      description: `Meow! I'm a 🐈`,
    },
    {
      id: 2,
      image: "https://placecats.com/millie/200/200",
      description: `Meow! I'm a 🐈`,
    },
    {
      id: 3,
      image: "https://placecats.com/bella/200/200",
      description: `Meow! I'm a 🐈`,
    },
    {
      id: 4,
      image: "https://placecats.com/200/200",
      description: `Meow! I'm a 🐈`,
    },
  ];
  return (
    <section className="panel-list">
      {items.map((item) => (
        <PanelItem key={item.id} item={item} />
      ))}
    </section>
  );
}

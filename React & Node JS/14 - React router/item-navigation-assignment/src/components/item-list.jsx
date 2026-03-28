import React from "react";
import { Link } from "react-router";
export default function ItemList() {
  const items = [
    {
      id: 1,
      name: "item1",
    },
    {
      id: 2,
      name: "item2",
    },
    {
      id: 3,
      name: "item3",
    },
  ];
  return (
    <>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

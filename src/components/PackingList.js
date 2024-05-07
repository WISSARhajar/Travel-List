import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItems,
  onClearList,
}) {
  const [sortby, setSortBy] = useState("input");
  let sortedItems;
  if (sortby === "input") sortedItems = items;
  if (sortby === "descreption")
    sortedItems = items
      .slice()
      .sort((a, b) => a.descreption.localeCompare(b.descreption));
  if (sortby === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onToggleItems={onToggleItems}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="descreption">Sort by descreption</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

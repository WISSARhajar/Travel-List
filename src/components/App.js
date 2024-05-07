import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import  Stats  from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleItems(item) {
    setItems((items) => [...items, item]);
  }
  function handDeleteleItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    console.log(id);
  }
  function handlleToggleIstem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearlist() {
    const confirmed = window.confirm(
      "Are you sure you want to delet all the list items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        onToggleItems={handlleToggleIstem}
        onDeleteItem={handDeleteleItem}
        items={items}
        onClearList={clearlist}
      />
      <Stats items={items} />
    </div>
  );
}


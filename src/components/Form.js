import { useState } from "react";

export default function Form({ onAddItems }) {
  const [descreption, setDescreption] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handelSubmit(e) {
    //for no reload
    if (!descreption) return;
    e.preventDefault();
    const newItem = { descreption, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    console.log(newItem);
    setDescreption("");
    setQuantity(1);
  }

  return (
    <form onSubmit={handelSubmit} className="add-form">
      <h3>What do you need for your 😍 trip?</h3>{" "}
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={descreption}
        onChange={(e) => setDescreption(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

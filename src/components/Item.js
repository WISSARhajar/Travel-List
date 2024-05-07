export default function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      {" "}
      <input type="checkbox" onChange={() => onToggleItems(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.descreption}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

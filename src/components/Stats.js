export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to youre list 🚀</em>
      </p>
    );
  const total = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((totalPacked / total) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : ` 💼You have ${total} items on your list, you already packed ${totalPacked}
        (${percentage}%)`}
      </em>
    </footer>
  );
}

// src/components/Card.jsx
function Card({ title, value }) {
  return (
    <div className="bg-white shadow p-4 rounded-xl text-center">
      <h3 className="text-gray-600">{title }</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
export default Card;

export default function Card({ title, body }) {
  return (
    <div className="bg-gray-800 dark:bg-gray-700 text-gray-100 rounded-xl shadow-lg p-6 mb-6 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{body}</p>
    </div>
  );
}

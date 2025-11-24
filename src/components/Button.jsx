export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5"
    >
      {text}
    </button>
  );
}

export default function Header() {
  return (
    <header className="bg-gray-900 dark:bg-gray-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
        <h1 className="text-2xl font-bold tracking-tight">Mon Site React</h1>
        <nav className="space-x-6 text-gray-300">
          <a href="#home" className="hover:text-indigo-400 transition-colors">Accueil</a>
          <a href="#posts" className="hover:text-indigo-400 transition-colors">Posts</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}

import React from "react";
import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import useFetch from "../hooks/useFetch.js";
import { POSTS_URL } from "../api/posts.js";

export default function Home() {
  const { data, loading, error } = useFetch(POSTS_URL);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-100">Posts récents</h2>

        {loading && <p className="text-gray-300">Chargement...</p>}
        {error && <p className="text-red-500">{error.message}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.slice(0, 6).map(post => (
            <Card key={post.id} title={post.title} body={post.body} />
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button text="Voir plus" onClick={() => alert("Action du bouton")} />
        </div>
      </main>
    </div>
  );
}

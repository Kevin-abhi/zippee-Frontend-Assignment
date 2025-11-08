import React, { useState } from 'react';
import { usePeople } from './hooks/usePeople';
import CharacterCard from './components/CharacterCard';
import CharacterModal from './components/CharacterModal';
import Pagination from './components/Pagination';
import SearchFilter from './components/SearchFilter';

export default function App() {
  const { data, loading, error, setUrl } = usePeople();
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');

  async function onSearch() {
    const url = query.trim()
      ? `https://swapi.dev/api/people/?search=${encodeURIComponent(query.trim())}`
      : 'https://swapi.dev/api/people/';
    setUrl(url);
  }

  // Function to handle clicking the title
  const handleHomeClick = () => {
    setQuery('');
    setUrl('https://swapi.dev/api/people/'); // reload the default data
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow cursor-pointer">
        <div className="container py-6">
          <h1
            className="text-3xl font-bold text-blue-700 hover:underline"
            onClick={handleHomeClick}
          >
            Star Wars Characters
          </h1>
        </div>
      </header>

      <main className="container py-6">
        <div className="mb-4">
          <SearchFilter query={query} onChange={setQuery} onSearch={onSearch} />
        </div>

        {loading && <p>Loading characters...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
        {!loading && data && data.results.length === 0 && <p>No characters found.</p>}

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.results.map((p) => (
            <CharacterCard key={p.url} person={p} onOpen={(d) => setSelected(d)} />
          ))}
        </section>

        <Pagination
          next={data?.next ?? null}
          previous={data?.previous ?? null}
          onChangeUrl={(u) => setUrl(u)}
        />

        <CharacterModal character={selected} onClose={() => setSelected(null)} />
      </main>
    </div>
  );
}

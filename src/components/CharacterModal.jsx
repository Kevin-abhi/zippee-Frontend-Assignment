import React, { useEffect, useState } from 'react';
import { fetchResource } from '../api/swapi';
import { heightCmToMeters, formatDateIsoToDDMMYYYY } from '../utils/format';

export default function CharacterModal({ character, onClose }){
  const [homeworld, setHomeworld] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if (!character) return;
    let mounted = true;
    setLoading(true);
    fetchResource(character.homeworld)
      .then(hw => { if (!mounted) setHomeworld(hw); })
      .catch(()=> { if (!mounted) setHomeworld(null); })
      .finally(()=> { if (mounted) setLoading(false); });
    return ()=> mounted = false;
  }, [character]);

  if (!character) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white max-w-2xl w-full rounded-lg shadow-lg overflow-auto z-10 p-6">
        <button className="absolute top-3 right-3 text-gray-600" onClick={onClose}>Close</button>
        <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><strong>Height:</strong> {heightCmToMeters(character.height)}</p>
            <p><strong>Mass:</strong> {character.mass === 'unknown' ? 'Unknown' : `${character.mass} kg`}</p>
            <p><strong>Birth Year:</strong> {character.birth_year}</p>
            <p><strong>Date added:</strong> {formatDateIsoToDDMMYYYY(character.created)}</p>
            <p><strong>Films:</strong> {character.films.length}</p>
            <p><strong>Species:</strong> {(character.speciesNames ?? []).join(', ')}</p>
          </div>
          <div>
            <h3 className="font-semibold">Homeworld</h3>
            {loading && <p>Loading homeworld...</p>}
            {!loading && homeworld && (
              <div>
                <p><strong>Name:</strong> {homeworld.name}</p>
                <p><strong>Terrain:</strong> {homeworld.terrain}</p>
                <p><strong>Climate:</strong> {homeworld.climate}</p>
                <p><strong>Population:</strong> {homeworld.population}</p>
              </div>
            )}
            {!loading && !homeworld && <p>Homeworld details not available.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

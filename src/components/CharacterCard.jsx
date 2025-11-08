import React, { useEffect, useState } from 'react';
import { fetchResource } from '../api/swapi';

function speciesColor(name){
  const map = {
    Human: 'bg-blue-50 border-blue-200',
    Droid: 'bg-yellow-50 border-yellow-200',
    Wookiee: 'bg-red-50 border-red-200',
    "Twi'lek": 'bg-purple-50 border-purple-200',
  };
  return map[name] ?? 'bg-gray-50 border-gray-200';
}

export default function CharacterCard({ person, onOpen }){
  const [speciesNames, setSpeciesNames] = useState([]);
  const [accentClass, setAccentClass] = useState('bg-gray-50');

  useEffect(()=>{
    let mounted = true;
    async function load(){
      if (!person.species || person.species.length === 0){
        if (!mounted) return;
        setSpeciesNames(['Human']);
        setAccentClass(speciesColor('Human'));
        return;
      }
      try {
        const names = await Promise.all(person.species.map(async url => (await fetchResource(url)).name));
        if (!mounted) return;
        setSpeciesNames(names);
        setAccentClass(speciesColor(names[0]));
      } catch {
        if (!mounted) return;
        setSpeciesNames(['Unknown']);
        setAccentClass(speciesColor('Unknown'));
      }
    }
    load();
    return ()=> mounted = false;
  }, [person]);

  const idHash = Math.abs(
    person.url.split('/').filter(Boolean).slice(-1)[0].split('').reduce((a,c)=>a + c.charCodeAt(0),0)
  );
  const imageUrl = `https://picsum.photos/seed/${idHash}/400/250`;

  return (
    <div className={`border rounded-lg overflow-hidden shadow-sm cursor-pointer ${accentClass}`} onClick={()=>onOpen({...person, speciesNames})}>
      <img src={imageUrl} alt={person.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{person.name}</h3>
        <p className="text-sm mt-1">Species: {speciesNames.join(', ')}</p>
        <p className="text-sm mt-1">Birth Year: {person.birth_year}</p>
      </div>
    </div>
  );
}

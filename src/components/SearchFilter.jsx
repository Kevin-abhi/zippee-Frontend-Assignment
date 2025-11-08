import React from 'react';
export default function SearchFilter({ query, onChange, onSearch }){
  return (
    <div className="flex gap-2 items-center">
      <input value={query} onChange={(e)=>onChange(e.target.value)} onKeyDown={(e)=>e.key==='Enter' && onSearch()} placeholder="Search by name" className="border rounded px-3 py-2 w-full" aria-label="search" />
      <button onClick={onSearch} className="px-3 py-2 border rounded">Search</button>
    </div>
  );
}

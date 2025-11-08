import React from 'react';
export default function Pagination({ next, previous, onChangeUrl }){
  return (
    <div className="flex gap-2 justify-center items-center mt-4">
      <button disabled={!previous} onClick={()=>previous && onChangeUrl(previous)} className="px-3 py-1 rounded border disabled:opacity-50">Previous</button>
      <button disabled={!next} onClick={()=>next && onChangeUrl(next)} className="px-3 py-1 rounded border disabled:opacity-50">Next</button>
    </div>
  );
}

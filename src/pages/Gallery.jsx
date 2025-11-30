import React, { useEffect, useState } from "react";
import { loadCollection, removeFromCollection } from "../utils/localStore";

export default function Gallery(){
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(loadCollection());
  }, []);

  function removeItem(index) {
    removeFromCollection(index);
    setItems(loadCollection());
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Local Gallery</h2>
      {items.length === 0 ? (
        <p className="text-gray-300">No saved quotes yet. Save one from the Studio.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((it, idx) => (
            <div key={idx} className="p-4 neon-box rounded-lg">
              <pre className="whitespace-pre-wrap text-lg">{it.text}</pre>
              <div className="mt-3 flex gap-2">
                <button onClick={() => navigator.clipboard.writeText(it.text)} className="btn-modern px-3 py-1 rounded bg-indigo-600 text-white">Copy</button>
                <button onClick={() => removeItem(idx)} className="btn-modern px-3 py-1 rounded bg-red-600 text-white">Delete</button>
                <a href={`https://wa.me/?text=${encodeURIComponent(it.text)}`} target="_blank" rel="noreferrer" className="btn-modern px-3 py-1 rounded bg-green-600 text-white">Share</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

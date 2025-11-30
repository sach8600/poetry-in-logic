import React from "react";
import { Link } from "react-router-dom";

export default function Landing(){
  return (
    <div className="text-center py-20">
      <h1
        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight 
                   bg-gradient-to-r from-indigo-400 to-purple-300 text-transparent bg-clip-text"
        style={{fontFamily: "'Playfair Display', serif"}}
      >
        Code Poetry Studio
      </h1>

      <p className="max-w-2xl mx-auto text-gray-300 mb-8">
        Turn keystrokes into art — type, style, add emojis and export Instagram-ready images.
      </p>

      <div className="flex justify-center gap-4">
        <Link to="/studio" className="btn-modern px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 shadow-lg">
          Open Studio
        </Link>
        <Link to="/gallery" className="btn-modern px-7 py-3 rounded-xl border border-white/10 backdrop-blur-sm">
          View Gallery
        </Link>
      </div>
    </div>
  );
}

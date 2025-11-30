import React from "react";

export default function About(){
  return (
    <div className="prose prose-invert max-w-3xl mx-auto animate-fadeIn">
      <div className="neon-box p-6 rounded-lg">
        <h2>About</h2>
        <p>Code Poetry Studio is a frontend-only app that lets you craft stylish quotes and download them as images for social media.</p>
        <p>Built with React, Tailwind, and html2canvas. No backend required.</p>
      </div>
    </div>
  );
}

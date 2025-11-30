import React, { useState } from "react";
import TypingPreview from "./components/TypingPreview";
import QuoteEditor from "./components/QuoteEditor";

export default function App() {
  const [text, setText] = useState(
    "Sometimes I don’t write code… I write poetry in logic. 🌌💻✨"
  );
  const [speed, setSpeed] = useState(90);
  const [delayBetweenLines, setDelayBetweenLines] = useState(800);
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white p-8">
      
      <h1 className="text-3xl font-bold text-center mb-8">
        Code Poetry Studio ✨
      </h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* LEFT: PREVIEW */}
        <div className="p-6 bg-black/40 rounded-2xl shadow-2xl">
          <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
          <TypingPreview 
            text={text} 
            speed={speed} 
            delayBetweenLines={delayBetweenLines} 
          />

          <div className="mt-4 flex gap-2 items-center">
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 transition"
            >
              Copy
            </button>

            {copied && <span className="ml-2 text-indigo-300">Copied 📋</span>}
          </div>
        </div>

        {/* RIGHT: EDITOR */}
        <div className="p-6 bg-black/40 rounded-2xl shadow-2xl">
          <h2 className="text-xl font-semibold mb-4">Editor</h2>

          <QuoteEditor
            text={text}
            onChange={setText}
            speed={speed}
            setSpeed={setSpeed}
            delayBetweenLines={delayBetweenLines}
            setDelayBetweenLines={setDelayBetweenLines}
          />
        </div>

      </div>
    </div>
  );
}

import React, { useState } from "react";
import TypingPreview from "../components/TypingPreview";
import QuoteEditor from "../components/QuoteEditor";
import DownloadImage from "../components/DownloadImage";
import { saveToCollection } from "../utils/localStore";
import { Link } from "react-router-dom";

export default function Studio(){
  const [text, setText] = useState("Sometimes I don’t write code… I write poetry in logic. 🌌💻✨");
  const [speed, setSpeed] = useState(90);
  const [delayBetweenLines, setDelayBetweenLines] = useState(800);
  const [copied, setCopied] = useState(false);
  const [savedMsg, setSavedMsg] = useState(null);

  function copyToClipboard() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function saveLocal() {
    saveToCollection({ text, createdAt: new Date().toISOString() });
    setSavedMsg("Saved to local gallery");
    setTimeout(() => setSavedMsg(null), 2000);
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="neon-box p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>

        <div id="capture-area" className="rounded-lg overflow-hidden">
          <TypingPreview text={text} speed={speed} delayBetweenLines={delayBetweenLines} />
        </div>

        <div className="mt-4 flex gap-2 items-center">
          <button onClick={copyToClipboard} className="btn btn-primary">
            Copy
          </button>

          <DownloadImage elementId="capture-area" filename="code-poetry.png" />

          <button onClick={saveLocal} className="btn btn-success">
            Save to Gallery
          </button>

          <Link to="/gallery" className="btn btn-outline ml-auto">
            Open Gallery
          </Link>
        </div>

        {copied && <div className="mt-3 text-indigo-300">Copied 📋</div>}
        {savedMsg && <div className="mt-3 text-green-300">{savedMsg}</div>}
      </div>

      <div className="neon-box p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Editor</h2>

        <QuoteEditor
          text={text}
          onChange={setText}
          speed={speed}
          setSpeed={setSpeed}
          delayBetweenLines={delayBetweenLines}
          setDelayBetweenLines={setDelayBetweenLines}
        />

        <div className="mt-6 text-sm text-gray-300">
          <p>
            Share:
            <a
              className="btn btn-outline ml-2"
              href={`https://wa.me/?text=${encodeURIComponent(text)}`}
              target="_blank" 
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

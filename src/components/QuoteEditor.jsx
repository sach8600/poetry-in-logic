import React from "react";

const emojiPresets = ["🌌", "💻", "✨", "🎧", "💛", "⚡", "🖋️", "🔥"];

export default function QuoteEditor({
  text,
  onChange,
  speed,
  setSpeed,
  delayBetweenLines,
  setDelayBetweenLines
}) {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-sm">Quote / Lyrics</label>
      <textarea
        value={text}
        onChange={(e) => onChange(e.target.value)}
        rows={6}
        className="w-full p-4 rounded-xl bg-white/10 border border-white/10 focus:border-indigo-400 outline-none backdrop-blur-xl transition resize-none"
      />

      <div>
        <label className="text-sm">Add Emoji</label>
        <div className="flex gap-2 mt-2 flex-wrap">
          {emojiPresets.map((e) => (
            <button
              type="button"
              key={e}
              onClick={() => onChange(text ? text.trim() + " " + e : e)}
              className="px-3 py-1 bg-white/10 rounded cursor-pointer hover:bg-white/20 transition"
            >
              {e}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <label className="text-sm">Typing Speed</label>
        <input
          type="range"
          min="20"
          max="200"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full accent-indigo-500"
        />
        <span className="text-xs text-gray-300">{speed}ms</span>
      </div>

      <div className="flex gap-3 items-center">
        <label className="text-sm">Delay between lines</label>
        <input
          type="range"
          min="200"
          max="2000"
          value={delayBetweenLines}
          onChange={(e) => setDelayBetweenLines(Number(e.target.value))}
          className="w-full accent-indigo-500"
        />
        <span className="text-xs text-gray-300">{delayBetweenLines}ms</span>
      </div>

      <div className="text-sm text-gray-300">
        Tip: Save to Gallery to keep this quote locally for later.
      </div>
    </div>
  );
}

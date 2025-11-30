import React, { useEffect, useState, useRef } from "react";

export default function TypingPreview({ text, speed = 90, delayBetweenLines = 800 }) {
  const [display, setDisplay] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const textRef = useRef("");

  useEffect(() => {
    let alive = true;
    async function runTyping() {
      setIsTyping(true);
      setDisplay("");
      textRef.current = "";

      const lines = text.split("\n");

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        for (let ch of line) {
          if (!alive) return;
          textRef.current += ch;
          setDisplay(textRef.current);
          await new Promise((r) => setTimeout(r, speed));
        }
        if (i < lines.length - 1) {
          textRef.current += "\n";
          setDisplay(textRef.current);
        }
        await new Promise((r) => setTimeout(r, delayBetweenLines));
      }

      setIsTyping(false);
    }

    runTyping();
    return () => { alive = false; };
  }, [text, speed, delayBetweenLines]);

  return (
    <pre
      className={`whitespace-pre-wrap text-lg leading-relaxed p-6 rounded-xl neon-box font-medium ${isTyping ? "typing-cursor" : ""} animate-fadeIn`}
    >
      {display}
    </pre>
  );
}

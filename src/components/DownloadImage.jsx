import React, { useState } from "react";
import html2canvas from "html2canvas";

export default function DownloadImage({ elementId = "capture-area", filename = "poem.png" }) {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    try {
      setLoading(true);
      const el = document.getElementById(elementId);
      if (!el) throw new Error("Capture element not found");
      const canvas = await html2canvas(el, { scale: 2, backgroundColor: null });
      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (e) {
      console.error(e);
      alert("Could not export image.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button onClick={handleDownload} disabled={loading} className="btn-modern px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-400 font-semibold">
      {loading ? "Preparing..." : "Download PNG"}
    </button>
  );
}

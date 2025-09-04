import { useState, useEffect } from "react";

export default function UrlShortener() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrls, setShortUrls] = useState([]);

  // Load saved URLs from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("shortUrls")) || [];
    setShortUrls(saved);
  }, []);

  const handleShorten = () => {
    if (!longUrl) return;

    // Create a simple short code (first 6 chars of base64)
    const shortCode = btoa(longUrl).slice(0, 6);
    const shortUrl = `${window.location.origin}/${shortCode}`;

    const newEntry = { longUrl, shortUrl };
    const updated = [...shortUrls, newEntry];

    setShortUrls(updated);
    localStorage.setItem("shortUrls", JSON.stringify(updated));
    setLongUrl("");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h1>URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
      />
      <button onClick={handleShorten} style={{ padding: "0.5rem 1rem" }}>
        Shorten
      </button>

      <div style={{ marginTop: "1rem" }}>
        {shortUrls.map((item, index) => (
          <div key={index} style={{ marginBottom: "0.5rem" }}>
            <a href={item.longUrl} target="_blank" rel="noreferrer">
              {item.shortUrl}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

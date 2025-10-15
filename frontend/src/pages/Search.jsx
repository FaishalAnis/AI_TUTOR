import { useState } from "react";
import { API } from "../api";
import "./search.css";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post("/nlp/search", { query });
      setResults(res.data.recommendations || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`search-container ${results.length === 0 ? "no-results" : ""}`}>
      <h1>AI Tutor Search</h1>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a topic or question..."
        />
        <button
          type="submit"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <div className="search-results">
        {results.length > 0 ? (
          results.map((r, i) => (
            <div  className="search-result-card" key={i}>
              <h2>{r.title}</h2>
              <p>Score: {r.score}</p>
              <a
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Resource
              </a>
            </div>
          ))
        ) : (
          <p className="search-placeholder">No results found yet.</p>
        )}
      </div>
    </div>
  );
}

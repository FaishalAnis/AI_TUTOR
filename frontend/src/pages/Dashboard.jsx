import { useState } from "react";
import { API } from "../api";
import "./dashboard.css";

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchAI = async (e) => {
    e.preventDefault();
    const res = await API.post("/nlp/search", { query });
    setResults(res.data.recommendations);
  };

  return (
    <div className={`dashboard-container ${results.length === 0 ? "no-results" : ""}`}>
      <h1>AI Tutor Dashboard</h1>
      <form className="dashboard-search-form" onSubmit={searchAI}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a topic to learn..."
        />
        <button>Search</button>
      </form>

      <div  className="dashboard-results">
        {results.map((r, i) => (
          <div className="dashboard-result-card" key={i}>
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
        ))}
      </div>
    </div>
  );
}

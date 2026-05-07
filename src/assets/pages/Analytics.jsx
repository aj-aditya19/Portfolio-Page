import React, { useEffect, useState } from "react";
import { getCount, getVisits } from "../../utils/tracker";

const Analytics = () => {
  const [count, setCount] = useState(null);
  const [visits, setVisits] = useState([]);
  const [secret, setSecret] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    getCount().then((data) => {
      if (data && data.count !== undefined) setCount(data.count);
    });
  }, []);

  const loadVisits = async () => {
    setError(null);
    const res = await getVisits(secret);
    if (res && res.visits) setVisits(res.visits);
    else setError(res.error || "failed");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Site Analytics</h2>
      <p>Total visits recorded: {count ?? "loading..."}</p>

      <div style={{ marginTop: 20 }}>
        <label>Admin secret (required to view visitors): </label>
        <input value={secret} onChange={(e) => setSecret(e.target.value)} />
        <button onClick={loadVisits} style={{ marginLeft: 8 }}>
          Load visitors
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: 20 }}>
        <h3>Recent visitors</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>IP</th>
              <th>Path</th>
              <th>User agent</th>
              <th>When</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((v) => (
              <tr key={v.id}>
                <td style={{ borderTop: "1px solid #ddd" }}>{v.id}</td>
                <td style={{ borderTop: "1px solid #ddd" }}>{v.ip}</td>
                <td style={{ borderTop: "1px solid #ddd" }}>{v.path}</td>
                <td style={{ borderTop: "1px solid #ddd" }}>{v.ua}</td>
                <td style={{ borderTop: "1px solid #ddd" }}>
                  {new Date(v.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics;

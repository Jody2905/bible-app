import { useEffect, useState } from "react";

export default function App() {
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/health")
      .then((r) => r.json())
      .then((d) => setStatus(d.status))
      .catch(() => setStatus("backend not reachable"));
  }, []);

  return (
    <main style={{ fontFamily: "Georgia, serif", textAlign: "center", marginTop: "4rem" }}>
      <h1>Bible App</h1>
      <p>Backend status: {status}</p>
    </main>
  );
}
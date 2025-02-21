import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5010/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Entrepreneur Assistant MVP</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;

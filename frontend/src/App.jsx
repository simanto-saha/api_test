import { useEffect, useState } from "react";


function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/items/")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h1>Message from API:</h1>
      <p>{message || "Loading..."}</p>
    </div>
  );
}

export default App;
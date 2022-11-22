import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch('/api')
    .then(res => res.text())
    .then(data => setMessage(data));
  }, []);
  return (
    <div className="App">
      Message from the backend: {message}
    </div>
  );
}

export default App;
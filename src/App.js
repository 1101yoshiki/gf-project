import "./App.css";
import { useEffect, useState } from "react";
import Main from "./components/Main";

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
      <Main />
    </div>
  );
}

export default App;
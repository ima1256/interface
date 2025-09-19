import { useState } from "react";
import "./App.css";
import ShareGlucoses from "./components/ShareGlucoses";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShareGlucoses />
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./pages/Demo";
import AgressorFoods from "./components/AgressorFoods";
import Outreach from "./pages/Outreach";
import Main from "./pages/Main";
import Diabetes from "./pages/Diabetes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<Main />} />

          {/* Otras rutas */}
          <Route path="/demo" element={<Demo />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/diabetes" element={<Diabetes />} />
          <Route path="/foods" element={<AgressorFoods />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

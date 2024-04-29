import { Route, Routes } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import PokeList from "./components/PokeList";
import PokeDetail from "./components/PokeDetail";
import PokeAvatar from "./components/PokeAvatar";
import pokeLogo from "./assets/pokeapi_logo.png";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <aside className="aside col-lg-4 col-md-12">
          <img className="logo" src={pokeLogo} alt="" />
          <PokeAvatar />
        </aside>
        <main className="col-lg-8 col-md-12">
          <Routes>
            <Route path="/" element={<PokeList />} />
            <Route path="/:id" element={<PokeDetail />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;

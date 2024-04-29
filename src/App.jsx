import { Route, Routes } from "react-router-dom";
import PokeList from "./components/PokeList";
import PokeAvatar from "./components/PokeAvatar";
import pokeLogo from "./assets/pokeapi_logo.png";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <aside className="aside col-4">
          <img className="logo" src={pokeLogo} alt="" />
          <PokeAvatar />
        </aside>
        <main className="col-8">
          <Routes>
            <Route path="/" element={<PokeList />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;

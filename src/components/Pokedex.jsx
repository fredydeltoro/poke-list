import React from "react";
import PokeAvatar from "./PokeAvatar";
import PokeList from "./PokeList";

export default function Pokedex() {
  return (
    <div className="container-fluid">
      <div className="row">
        <aside className="col-3">
          <PokeAvatar />
        </aside>
        <main className="col-9">
          <PokeList />
        </main>
      </div>
    </div>
  );
}

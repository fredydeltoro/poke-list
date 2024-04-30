import React from "react";
import { useSelector } from "react-redux";

export default function PokeAvatar() {
  const pokemon = useSelector((state) => state.pokemon.currentPokemon);

  return (
    <div className="avatar">
      <img
        style={{ width: "100%" }}
        src={pokemon?.sprites?.other.home.front_default}
        alt=""
      />
    </div>
  );
}

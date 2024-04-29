import React from "react";
import { useDispatch } from "react-redux";
import { fetchPokemon } from "../redux/pokemonSlice";

function PokeItem({ pokemon }) {
  const dispatch = useDispatch();
  const handleClick = (url) => {
    dispatch(fetchPokemon(url));
  };

  return (
    <li
      key={pokemon.name}
      className="poke-item list-group-item"
      onClick={() => handleClick(pokemon.url)}
    >
      {pokemon.name}
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
        alt=""
      />
    </li>
  );
}

export default PokeItem;

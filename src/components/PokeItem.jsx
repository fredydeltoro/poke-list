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
      className="list-group-item"
      onClick={() => handleClick(pokemon.url)}
    >
      {pokemon.name}
    </li>
  );
}

export default PokeItem;

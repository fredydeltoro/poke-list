import React from "react";
import { useDispatch } from "react-redux";
import { fetchPokemon } from "../redux/pokemonSlice";
import { useNavigate } from "react-router-dom";

function PokeItem({ pokemon }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (url) => {
    dispatch(fetchPokemon(url));
  };
  const handleDoubleClick = () => {
    navigate(`/${pokemon.name}`);
  };

  return (
    <li
      key={pokemon.name}
      className="poke-item list-group-item"
      onClick={() => handleClick(pokemon.url)}
      onDoubleClick={handleDoubleClick}
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

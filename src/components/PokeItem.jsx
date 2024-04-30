import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../redux/pokemonSlice";
import { useNavigate } from "react-router-dom";

const PokeItem = ({ pokemon }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeItemRef = useRef(null);
  const handleClick = (url) => {
    dispatch(fetchPokemon(url));
  };
  const handleDoubleClick = () => {
    navigate(`/${pokemon.name}`);
  };
  const currentPokemon = useSelector((state) => state.pokemon.currentPokemon);

  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [currentPokemon]);

  return (
    <li
      key={pokemon.name}
      ref={currentPokemon.name === pokemon.name ? activeItemRef : null}
      className={`poke-item list-group-item ${
        currentPokemon.name === pokemon.name && "active"
      }`}
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
};

export default PokeItem;

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../redux/pokemonSlice";
import PokeItem from "./PokeItem";

export default function PokeList() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <div className="poke-list">
      <ul className="list-group">
        {pokemons?.map((pokemon, index) => (
          <PokeItem key={index} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
}

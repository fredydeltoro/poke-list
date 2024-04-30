import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPokemons,
  fetchPokemon,
  nextPage,
  previousPage,
} from "../redux/pokemonSlice";
import PokeItem from "./PokeItem";

export default function PokeList() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const currentPokemon = useSelector((state) => state.pokemon.currentPokemon);
  const currentPage = useSelector((state) => state.pokemon.currentPage);
  const paginatedPokemons = useSelector(
    (state) => state.pokemon.paginatedPokemons
  );

  const handleNextClick = () => {
    dispatch(nextPage());
  };

  const handlePreviousClick = () => {
    dispatch(previousPage());
  };

  const showPreviousButton = currentPage > 0;
  const showNextButton = currentPage < paginatedPokemons.length - 1;
  const isInCurrentPage = (name) =>
    pokemons.find((pokemon) => pokemon.name === name);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  useEffect(() => {
    if (
      pokemons.length &&
      (!currentPokemon.name || !isInCurrentPage(currentPokemon.name))
    ) {
      const randomIndex = Math.floor(Math.random() * pokemons.length);
      dispatch(fetchPokemon(pokemons[randomIndex].url));
    }
  }, [pokemons, currentPokemon]);

  return (
    <div className="poke-list">
      <ul className="list-group">
        {pokemons?.map((pokemon, index) => (
          <PokeItem key={index} pokemon={pokemon} />
        ))}
      </ul>

      <div className="paginator">
        {showPreviousButton && (
          <button className="btn btn-secondary" onClick={handlePreviousClick}>
            Previous
          </button>
        )}
        {showNextButton && (
          <button className="btn btn-secondary" onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

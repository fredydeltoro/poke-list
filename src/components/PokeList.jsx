import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons, nextPage, previousPage } from "../redux/pokemonSlice";
import PokeItem from "./PokeItem";

export default function PokeList() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.pokemons);
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

      <div className="paginator">
        <button
          className="btn btn-secondary"
          onClick={handlePreviousClick}
          style={{ display: `${currentPage === 0 ? "none" : "block"}` }}
        >
          Previous
        </button>
        <button
          onClick={handleNextClick}
          style={{
            display: `${
              currentPage === paginatedPokemons.length - 1 ? "none" : "block"
            }`,
          }}
          className="btn btn-secondary"
        >
          Next
        </button>
      </div>
    </div>
  );
}

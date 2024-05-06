import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../redux/pokemonSlice";
import PokeStats from "./PokeStats";

function PokeDetail() {
  const pokemon = useSelector((state) => state.pokemon.currentPokemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const handleClick = () => {
    navigate("/");
  };

  const getSeparator = (array, index) =>
    array.length > 1 && index < array.length - 1 ? ", " : "";

  useEffect(() => {
    if (!pokemon.name || pokemon.name !== id) {
      dispatch(fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`));
    }
  }, []);

  return (
    <div className="poke-detail">
      <button onClick={handleClick}>Go Back</button>
      <div className="row type">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <div className="mb-2">
            <b>Type</b>
          </div>
          <div className="mb-3">
            {pokemon?.types?.map((type, index) => (
              <b key={`${type.slot}-${index}`} className="text-capitalize">
                {`${type.type.name}${getSeparator(pokemon.types, index)}`}
              </b>
            ))}
          </div>
        </div>
      </div>
      <div className="row general mb-5">
        <div className="d-flex justify-content-around">
          <b>Number: {pokemon.id}</b>
          <b className="text-capitalize">Name: {pokemon.name}</b>
          <b>Height: {pokemon.height}</b>
          <b>Weight: {pokemon.weight}</b>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div>
            <b>Stats</b>
            <PokeStats stats={pokemon.stats} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-center">
            <b>Abilities</b>
            <div className="d-flex flex-column">
              {pokemon.abilities?.map((ability, index) => (
                <span key={`type-${index}`} className="text-capitalize">
                  {ability.ability.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeDetail;

import { useEffect, useSyncExternalStore } from "react";
import { getState, subscribe, fetchPokemons } from "./pokemonStore";

export const SyncExternalStoreExample = () => {
  const { pokemons } = useSyncExternalStore(subscribe, getState);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.length === 0 ? (
          <li>Loading...</li>
        ) : (
          pokemons.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)
        )}
      </ul>
    </div>
  );
};

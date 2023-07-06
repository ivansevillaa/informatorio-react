import Artist from "../../components/Artist";
import Search from "../../components/Search";
import styles from "./styles.module.css";
import { useQuery } from "react-query";

const QUERY_KEY_CHARACTERS = "characters";

const fetchCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const json = await res.json();

  if (json.error) {
    throw new Error(json.error);
  }

  return json.results;
};

function Home() {
  const { data, status, error } = useQuery(
    QUERY_KEY_CHARACTERS,
    fetchCharacters
  );

  return (
    <main>
      <h1 className={styles.container}>Music Home</h1>
      <Search />
      {status === "loading" && <h1>Cargando...</h1>}
      {status === "error" && <h1>Error: {error.message}</h1>}
      {status === "success" &&
        data.map((character) => {
          return (
            <Artist
              key={character.id}
              id={character.id}
              name={character.name}
              song={character.status}
              views={character.episode.length}
            />
          );
        })}
    </main>
  );
}

export default Home;

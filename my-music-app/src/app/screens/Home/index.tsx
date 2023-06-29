import { createContext, useEffect, useState } from "react";
import Artist from "../../components/Artist";
import Search from "../../components/Search";
import styles from "./styles.module.css";

const ThemeContext = createContext(undefined);

function Home() {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    requestCharacters();
  }, []);

  async function requestCharacters() {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character`);
      const json = await res.json();

      setCharacters(json.results);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <ThemeContext.Provider value="dark">
      <main>
        <h1 className={styles.container}>Music Home</h1>
        <Search />
        {characters ? (
          characters.map((character) => {
            return (
              <Artist
                key={character.id}
                id={character.id}
                name={character.name}
                song={character.status}
                views={character.episode.length}
              />
            );
          })
        ) : (
          <h1>Cargando...</h1>
        )}
      </main>
    </ThemeContext.Provider>
  );
}

export default Home;

import { useState } from "react";
import { GENRES } from "./constants";

function Search() {
  const [song, setSong] = useState("CHAUUUU");
  const [genre, setGenre] = useState("");
  const [busquedas, setBusquedas] = useState([]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setBusquedas([...busquedas, { song, genre }]);
      }}
    >
      <div>
        <label htmlFor="song">Buscar Canción</label>
        <input
          type="text"
          id="song"
          placeholder="Sorry Justin Bieber"
          value={song}
          onChange={(event) => {
            console.log(event.target.value);
            setSong(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="genre">Seleccionar un género</label>
        <select
          id="genre"
          value={genre}
          onChange={(event) => {
            setGenre(event.target.value);
          }}
        >
          <option />
          {GENRES.map((element) => {
            return (
              <option key={element} value={element}>
                {element}
              </option>
            );
          })}
        </select>
      </div>
      {genre ? <button type="submit">Buscar</button> : <p>Selecioná algo</p>}
    </form>
  );
}

export default Search;

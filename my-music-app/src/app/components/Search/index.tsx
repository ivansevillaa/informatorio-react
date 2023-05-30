import { useState } from "react";

function Search() {
  const [song, setSong] = useState("holaaaa");

  return (
    <form>
      <div>
        <label htmlFor="song">Buscar Canción</label>
        <input
          type="text"
          id="song"
          placeholder="Sorry Justin Bieber"
          value={song}
          onChange={(event) => setSong(event.target.value)}
        />
      </div>
      <button type="submit">Buscar</button>
      <h2>{song}</h2>
    </form>
  );
}

export default Search;

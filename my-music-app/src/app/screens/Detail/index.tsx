import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [character, setCharacter] = useState();
  const [error, setError] = useState();
  const { id } = useParams();

  useEffect(() => {
    requestCharacter();
  }, []);

  async function requestCharacter() {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setCharacter(data);
      }
    } catch (e) {
      console.error("error", e);
    }
  }

  if (error) {
    return (
      <>
        <h1>Error en la petición!!</h1>
        <p>{error}</p>
      </>
    );
  }

  return (
    <div>
      {character ? (
        <>
          <h1>Detalle {character.name} !!!!</h1>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.type}</p>
          <p>{character.gender}</p>
        </>
      ) : (
        <h1>Cargando.....</h1>
      )}
    </div>
  );
}

export default Detail;

import { useParams } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import { useQuery } from "react-query";

interface Character {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

function Detail() {
  const { id } = useParams();
  const { data, error, loading } = useGetData<Character>(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  if (loading) {
    return <h1>Cargando...</h1>;
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
      {data && (
        <>
          <h1>Detalle {data.name} !!!!</h1>
          <p>{data.status}</p>
          <p>{data.species}</p>
          <p>{data.type}</p>
          <p>{data.gender}</p>
        </>
      )}
    </div>
  );
}

export default Detail;

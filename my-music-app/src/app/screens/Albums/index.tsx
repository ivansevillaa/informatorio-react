import { useEffect, useState } from "react";
import Artist from "../../components/Artist";

function Albums({ token }) {
  const [albumsData, setAlbumsData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://api.spotify.com/v1/browse/new-releases", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await data.json();
    setAlbumsData(json);
  };

  return (
    <>
      <h1>Albums</h1>
      {albumsData &&
        albumsData.albums.items.map((album) => {
          return (
            <Artist
              key={album.id}
              id={album.id}
              name={album.name}
              song={album.artists[0].name}
              views={album.totalTrack}
              img={album.images[0].url}
            />
          );
        })}
    </>
  );
}

export default Albums;

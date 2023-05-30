import { useState } from "react";
import styles from "./styles.module.css";

type ArtistProps = {
  name: string;
  song: string;
  views: number;
  isFav?: boolean;
};

function Artist(props: ArtistProps) {
  const [views, setViews] = useState(props.views);
  const [isFav, setIsFav] = useState(props.isFav);

  function handlePlay() {
    setViews(views + 1);
  }

  function handleFav() {
    setIsFav(!isFav);
  }

  return (
    <div className={styles.container}>
      <h2>{props.name}</h2>
      <p className="song">{props.song}</p>
      <p>{views}</p>
      <button onClick={handlePlay} type="button">
        Play
      </button>
      <button onClick={handleFav} type="button">
        {isFav ? "Remover de favoritos" : "Añadir a favoritos"}
      </button>
    </div>
  );
}

export default Artist;

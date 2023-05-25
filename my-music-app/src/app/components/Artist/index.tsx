import styles from "./styles.module.css";

type ArtistProps = {
  name: string;
  song: string;
  views: number;
};

function Artist(props: ArtistProps) {
  return (
    <div className={styles.container}>
      <h2>{props.name}</h2>
      <p className="song">{props.song}</p>
      <p>{props.views}</p>
    </div>
  );
}

export default Artist;

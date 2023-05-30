import Artist from "../../components/Artist";
import Search from "../../components/Search";
import styles from "./styles.module.css";

function Home() {
  return (
    <main>
      <h1 className={styles.container}>Music Home</h1>
      <Search />
      <Artist name="Justin Bieber" song="Sorry" views={9} isFav />
      <Artist name="Dua Lipa" song="Sorry" views={8} />
      <Artist name="Dillom" song="Sorry" views={10} />
    </main>
  );
}

export default Home;

import Artist from "../../components/Artist";
import "./styles.css";

function App() {
  return (
    <main>
      <h1 className="title">Music App</h1>
      <Artist name="Justin Bieber" song="Sorry" views={9} />
      <Artist name="Dua Lipa" song="Sorry" views={8} />
      <Artist name="Dillom" song="Sorry" views={10} />
    </main>
  );
}

export default App;

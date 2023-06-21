import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>404 !!!</h1>
      <p>Esta página no existe</p>
      <Link to="/">Volver al home</Link>
    </>
  );
}

export default NotFound;

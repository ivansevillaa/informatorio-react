import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import NotFound from "./screens/NotFound";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

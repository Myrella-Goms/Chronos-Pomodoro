import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";

import "./styles/global.css";
import "./styles/theme.css";
import { NotFound } from "./pages/error/NotFound";

//primeiro componente renderizado pelo index, pois o index possui uma div root e um script que referencia o arquivo main que busca o id root e renderiza o app
function OldApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="notfound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default OldApp;


import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './page/Home'

import './styles/global.css'
import './styles/theme.css'

//primeiro componente renderizado pelo index, pois o index possui uma div root e um script que referencia o arquivo main que busca o id root e renderiza o app
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

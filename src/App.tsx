import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './page/Home'
import './styles/global.css'
import './styles/theme.css'

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

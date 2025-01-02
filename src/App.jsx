import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/1" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
        <Route path="/3" element={<Page3 />} />
        <Route path="/4" element={<Page4 />} />
        <Route path="/5" element={<Page5 />} />
        <Route path="/6" element={<Page6 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

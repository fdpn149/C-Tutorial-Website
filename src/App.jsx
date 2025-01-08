import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'
import Page8 from './pages/Page8'
import Page9 from './pages/Page9'
import Page10 from './pages/Page10'
import Page11 from './pages/Page11'
import Page12 from './pages/Page12'
import Page13 from './pages/Page13'
import Page14 from './pages/Page14'
import Page15 from './pages/Page15'
import Page16 from './pages/Page16'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/1' element={<Page1 />} />
        <Route path='/2' element={<Page2 />} />
        <Route path='/3' element={<Page3 />} />
        <Route path='/4' element={<Page4 />} />
        <Route path='/5' element={<Page5 />} />
        <Route path='/6' element={<Page6 />} />
        <Route path='/7' element={<Page7 />} />
        <Route path='/8' element={<Page8 />} />
        <Route path='/9' element={<Page9 />} />
        <Route path='/10' element={<Page10 />} />
        <Route path='/11' element={<Page11 />} />
        <Route path='/12' element={<Page12 />} />
        <Route path='/13' element={<Page13 />} />
        <Route path='/14' element={<Page14 />} />
        <Route path='/15' element={<Page15 />} />
        <Route path='/16' element={<Page16 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App

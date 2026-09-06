import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Portofolio from './pages/Portofolio/Portofolio'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
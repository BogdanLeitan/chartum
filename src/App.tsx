import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import NewChat from './pages/NewChat/NewChat'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<NewChat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import NewChat from './pages/NewChat/NewChat'
import Insights from './pages/Insights/Insights'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<NewChat />} />
            <Route path="/insights" element={<Insights />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
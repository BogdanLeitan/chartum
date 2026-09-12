import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import NewChat from './pages/NewChat/NewChat'
import Discover from './pages/Discover/Discover'
import Finance from './pages/Finance/Finance'
import Stock from './pages/Finance/Stock'
import Extensions from './pages/Extension/Extensions'
import { Answer } from './Static'
import Landing from './pages/Landing/Landing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<NewChat />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/finance/:ticker" element={<Stock />} />
          <Route path="/insights" element={<Navigate to="/finance" replace />} />
          <Route path="/overview" element={<Navigate to="/finance" replace />} />
          <Route path="/calendar" element={<Navigate to="/finance" replace />} />
          <Route path="/transcripts" element={<Navigate to="/finance" replace />} />
          <Route path="/portfolio" element={<Navigate to="/finance" replace />} />
          <Route path="/tools/*" element={<Navigate to="/finance" replace />} />
          <Route path="/answer" element={<Answer />} />
          <Route path="/extensions" element={<Extensions />} />
          <Route path="/settings" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

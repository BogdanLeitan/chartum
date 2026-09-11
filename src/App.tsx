import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import NewChat from './pages/NewChat/NewChat'
import Discover from './pages/Discover/Discover'
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
          <Route path="/finance/*" element={<Navigate to="/" replace />} />
          <Route path="/overview" element={<Navigate to="/" replace />} />
          <Route path="/calendar" element={<Navigate to="/" replace />} />
          <Route path="/transcripts" element={<Navigate to="/" replace />} />
          <Route path="/portfolio" element={<Navigate to="/" replace />} />
          <Route path="/tools/*" element={<Navigate to="/" replace />} />
          <Route path="/answer" element={<Answer />} />
          <Route path="/extensions" element={<Extensions />} />
          <Route path="/settings" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

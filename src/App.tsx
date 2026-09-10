import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import NewChat from './pages/NewChat/NewChat'
//import Insights, { Search, Watchlist, Stock } from './extensions/Insights/Insights'
//import Overview from './extensions/Overview/Overview'
//import { Tools, Transcripts, Portfolio } from './extensions/Tools/Tools'
import { Discover, Answer, Extensions, Settings } from './Static'
import Landing from './pages/Landing/Landing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<NewChat />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/answer" element={<Answer />} />
          <Route path="/extensions" element={<Extensions />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

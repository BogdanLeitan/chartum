import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import NewChat from './pages/NewChat/NewChat'
import Insights from './pages/Insights/Insights'
import { Discover, Overview, Answer, Stock, Tools, Transcripts, Search, Watchlist, Portfolio, Landing } from './Static'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<NewChat />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/watchlist" element={<Watchlist />} />
          <Route path="/insights/search" element={<Search />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/answer" element={<Answer />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/transcripts" element={<Transcripts />} />
          <Route path="/tools/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

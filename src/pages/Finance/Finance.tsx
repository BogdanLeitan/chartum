import "./Finance.css"
import InsightsSection from "./sections/InsightsSection"
import ChartingSection from "./sections/ChartingSection"
import CalendarSection from "./sections/CalendarSection"
import TranscriptsSection from "./sections/TranscriptsSection"
import DcfSection from "./sections/DcfSection"
import PortfolioSection from "./sections/PortfolioSection"

function Finance() {
  return (
    <>
      <input type="radio" name="fin-tab" id="fin-insights" className="fin-radio" defaultChecked />
      <input type="radio" name="fin-tab" id="fin-charting" className="fin-radio" />
      <input type="radio" name="fin-tab" id="fin-calendar" className="fin-radio" />
      <input type="radio" name="fin-tab" id="fin-transcripts" className="fin-radio" />
      <input type="radio" name="fin-tab" id="fin-dcf" className="fin-radio" />
      <input type="radio" name="fin-tab" id="fin-portfolio" className="fin-radio" />

      <header className="page-head finance-head">
        <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
        </label>
        <span className="ph-title">Finance</span>
        <nav className="ph-nav">
          <label className="ph-link" htmlFor="fin-insights">Insights</label>
          <label className="ph-link" htmlFor="fin-charting">Charting</label>
          <label className="ph-link" htmlFor="fin-calendar">Calendar</label>
          <label className="ph-link" htmlFor="fin-transcripts">Transcripts</label>
          <label className="ph-link" htmlFor="fin-dcf">DCF Calculator</label>
          <label className="ph-link" htmlFor="fin-portfolio">Portfolio</label>
        </nav>
      </header>

      <div className="content">
        <div className="fin-panel fin-insights">
          <InsightsSection />
        </div>

        <div className="fin-panel fin-charting">
          <ChartingSection />
        </div>

        <div className="fin-panel fin-calendar">
          <CalendarSection />
        </div>

        <div className="fin-panel fin-transcripts">
          <TranscriptsSection />
        </div>

        <div className="fin-panel fin-dcf">
          <DcfSection />
        </div>

        <div className="fin-panel fin-portfolio">
          <PortfolioSection />
        </div>
      </div>
    </>
  )
}

export default Finance

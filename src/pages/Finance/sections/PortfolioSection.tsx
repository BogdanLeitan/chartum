import BrandLogo from "../../../components/BrandLogo/BrandLogo"

function PortfolioSection() {
  return (
    <div className="pf-wrap">
      <div className="pf-head">
        <h1 className="page-title">Portfolio</h1>
      </div>

      <div className="pf-kpis">
        <div className="pf-kpi">
          <span className="pf-kpi-k">Market value</span>
          <span className="pf-kpi-v">$233,018</span>
          <span className="pf-kpi-sub"><span className="up">+$1,863</span> · +0.80% today</span>
        </div>
        <div className="pf-kpi">
          <span className="pf-kpi-k">Year to date</span>
          <span className="pf-kpi-v up">+18.4%</span>
          <span className="pf-kpi-sub">vs S&amp;P 500 +12.1%</span>
        </div>
        <div className="pf-kpi">
          <span className="pf-kpi-k">Top 5</span>
          <span className="pf-kpi-v">67.4%</span>
          <span className="pf-kpi-sub">10 names</span>
        </div>
      </div>

      <div className="pf-stage">
        <div className="pf-chart-card">
          <h2>Allocation</h2>
          <div className="pf-donut-wrap">
            <div className="pf-donut pf-donut-hold"></div>
            <div className="pf-hole"><strong>10</strong><span>holdings</span></div>
          </div>
        </div>

        <div className="pf-comp">
          <div className="pf-comp-head">
            <h2>Holdings</h2>
          </div>
          <div className="pf-cols"><span>Name</span><span>Weight</span><span>Profit</span></div>

          <a className="pf-row" href="/finance/NVDA">
            <span className="pf-stock"><span className="pf-pill w-nvda"><BrandLogo ticker="NVDA" className="pf-logo-img" /> Nvidia</span></span>
            <span className="pf-w">18.6%</span>
            <span className="pf-gl up"><span className="pf-sum">+$729</span><span className="pf-pct">+1.80%</span></span>
          </a>
          <a className="pf-row" href="/finance/AVGO">
            <span className="pf-stock"><span className="pf-pill w-avgo"><BrandLogo ticker="AVGO" className="pf-logo-img" /> Broadcom</span></span>
            <span className="pf-w">14.4%</span>
            <span className="pf-gl up"><span className="pf-sum">+$282</span><span className="pf-pct">+0.90%</span></span>
          </a>
          <a className="pf-row" href="/finance/MSFT">
            <span className="pf-stock"><span className="pf-pill w-msft"><BrandLogo ticker="MSFT" className="pf-logo-img" /> Microsoft</span></span>
            <span className="pf-w">13.0%</span>
            <span className="pf-gl up"><span className="pf-sum">+$113</span><span className="pf-pct">+0.40%</span></span>
          </a>
          <a className="pf-row" href="/finance/AAPL">
            <span className="pf-stock"><span className="pf-pill w-aapl"><BrandLogo ticker="AAPL" className="pf-logo-img" /> Apple</span></span>
            <span className="pf-w">11.7%</span>
            <span className="pf-gl down"><span className="pf-sum">−$77</span><span className="pf-pct">−0.30%</span></span>
          </a>
          <a className="pf-row" href="/finance/GOOGL">
            <span className="pf-stock"><span className="pf-pill w-googl"><BrandLogo ticker="GOOGL" className="pf-logo-img" /> Alphabet</span></span>
            <span className="pf-w">9.7%</span>
            <span className="pf-gl up"><span className="pf-sum">+$234</span><span className="pf-pct">+1.11%</span></span>
          </a>
          <a className="pf-row" href="/finance/AMZN">
            <span className="pf-stock"><span className="pf-pill w-amzn"><BrandLogo ticker="AMZN" className="pf-logo-img" /> Amazon</span></span>
            <span className="pf-w">8.2%</span>
            <span className="pf-gl up"><span className="pf-sum">+$107</span><span className="pf-pct">+0.60%</span></span>
          </a>
          <a className="pf-row" href="/finance/META">
            <span className="pf-stock"><span className="pf-pill w-meta"><BrandLogo ticker="META" className="pf-logo-img" /> Meta</span></span>
            <span className="pf-w">7.5%</span>
            <span className="pf-gl down"><span className="pf-sum">−$129</span><span className="pf-pct">−0.79%</span></span>
          </a>
          <a className="pf-row" href="/finance/TSM">
            <span className="pf-stock"><span className="pf-pill w-tsm"><BrandLogo ticker="TSM" className="pf-logo-img" /> TSMC</span></span>
            <span className="pf-w">6.3%</span>
            <span className="pf-gl up"><span className="pf-sum">+$293</span><span className="pf-pct">+2.14%</span></span>
          </a>
          <a className="pf-row" href="/finance/ASML">
            <span className="pf-stock"><span className="pf-pill w-asml"><BrandLogo ticker="ASML" className="pf-logo-img" /> ASML</span></span>
            <span className="pf-w">5.7%</span>
            <span className="pf-gl up"><span className="pf-sum">+$64</span><span className="pf-pct">+0.51%</span></span>
          </a>
          <a className="pf-row" href="/finance/TSLA">
            <span className="pf-stock"><span className="pf-pill w-tsla"><BrandLogo ticker="TSLA" className="pf-logo-img" /> Tesla</span></span>
            <span className="pf-w">4.9%</span>
            <span className="pf-gl up"><span className="pf-sum">+$247</span><span className="pf-pct">+2.31%</span></span>
          </a>
        </div>
      </div>

      <div className="pf-splits">
        <div className="pf-split">
          <h3>Industry</h3>
          <div className="pf-mini pf-mini-sec"></div>
          <div className="pf-legend">
            <span className="pf-leg lg-semi">Semiconductors <em>39.3%</em></span>
            <span className="pf-leg lg-inet">Internet <em>25.4%</em></span>
            <span className="pf-leg lg-soft">Software <em>13.0%</em></span>
            <span className="pf-leg lg-ce">Consumer elec. <em>11.7%</em></span>
            <span className="pf-leg lg-eqp">Equipment <em>5.7%</em></span>
            <span className="pf-leg lg-auto">Auto <em>4.9%</em></span>
          </div>
        </div>
        <div className="pf-split">
          <h3>Geography</h3>
          <div className="pf-mini pf-mini-geo"></div>
          <div className="pf-legend">
            <span className="pf-leg lg-us">United States <em>88.0%</em></span>
            <span className="pf-leg lg-tw">Taiwan <em>6.3%</em></span>
            <span className="pf-leg lg-nl">Netherlands <em>5.7%</em></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection

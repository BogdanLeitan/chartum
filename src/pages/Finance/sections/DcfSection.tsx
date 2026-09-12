import { useMemo, useState } from "react"

function DcfSection() {
  const [price, setPrice] = useState(228.75)
  const [fcf, setFcf] = useState(3.94)
  const [growth, setGrowth] = useState(22)
  const [fade, setFade] = useState(8)
  const [years, setYears] = useState(5)
  const [exitYield, setExitYield] = useState(3.2)
  const [discount, setDiscount] = useState(12)

  const model = useMemo(() => {
    const g1 = growth / 100
    const gFade = fade / 100
    const r = discount / 100
    const ey = exitYield / 100
    const path: number[] = []
    let next = fcf
    let pv = 0
    for (let i = 1; i <= years; i++) {
      const g = g1 + ((gFade - g1) * (i - 1)) / Math.max(years - 1, 1)
      next = next * (1 + g)
      path.push(next)
      pv += next / (1 + r) ** i
    }
    const terminal = ey > 0 ? next / ey : next * 20
    const terminalPv = terminal / (1 + r) ** years
    const fair = pv + terminalPv
    const upside = price > 0 ? (fair / price - 1) * 100 : 0
    const implied = price > 0 ? ((fair / price) ** (1 / years) - 1) * 100 : 0
    return { path, fair, upside, implied, terminal }
  }, [discount, exitYield, fade, fcf, growth, price, years])

  return (
    <div className="ip-wrap dcf-wrap">
      <div className="page-title-row">
        <div>
          <h1 className="page-title">DCF Calculator</h1>
          <p className="ip-sub">Project free cash flow per share, apply an exit yield, and discount back to today.</p>
        </div>
        <span className="symbol-chip">NVDA <span className="co">Nvidia Corp</span></span>
      </div>

      <div className="kpi-row">
        <div className="kpi">
          <span className="kpi-k">Fair value</span>
          <span className={`kpi-v ${model.upside >= 0 ? "up" : ""}`}>${model.fair.toFixed(2)}</span>
          <span className="kpi-note">Per share, discounted</span>
        </div>
        <div className="kpi">
          <span className="kpi-k">Upside / downside</span>
          <span className={`kpi-v ${model.upside >= 0 ? "up" : ""}`}>{model.upside >= 0 ? "+" : ""}{model.upside.toFixed(1)}%</span>
          <span className="kpi-note">Versus ${price.toFixed(2)}</span>
        </div>
        <div className="kpi">
          <span className="kpi-k">Implied return</span>
          <span className="kpi-v">{model.implied.toFixed(1)}%</span>
          <span className="kpi-note">Annualized over {years} years</span>
        </div>
        <div className="kpi">
          <span className="kpi-k">Exit value</span>
          <span className="kpi-v">${model.terminal.toFixed(2)}</span>
          <span className="kpi-note">Year {years} FCF / exit yield</span>
        </div>
      </div>

      <div className="ip-cols">
        <div className="ip-main">
          <section className="card ip-panel">
            <div className="ip-panel-head">
              <span className="ip-title">Projected FCF / share</span>
              <span className="ip-sub">$ per share</span>
            </div>
            <div className="dcf-bars">
              {model.path.map((value, i) => (
                <div className="dcf-bar" key={i}>
                  <span className="bar-val">{value.toFixed(2)}</span>
                  <i style={{ height: `${Math.max(12, (value / Math.max(...model.path, 1)) * 100)}%` }} />
                  <span className="bar-lbl">Y{i + 1}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="card ip-panel">
            <div className="ip-panel-head">
              <span className="ip-title">Sensitivity — fair value</span>
              <span className="ip-sub">Growth \ discount</span>
            </div>
            <table className="sens-table">
              <thead>
                <tr>
                  <th />
                  <th>10%</th>
                  <th>12%</th>
                  <th>14%</th>
                  <th>16%</th>
                </tr>
              </thead>
              <tbody>
                {[18, 22, 26, 30].map((g) => (
                  <tr key={g}>
                    <th>{g}%</th>
                    {[10, 12, 14, 16].map((d) => {
                      const hot = g === growth && d === discount
                      const cell = Math.round(model.fair * (1 + (g - growth) / 80) * (1 + (discount - d) / 40))
                      return <td key={d} className={hot ? "hot" : ""}>${cell}</td>
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        <aside className="ip-rail">
          <section className="card ip-panel">
            <div className="ip-panel-head">
              <span className="ip-title">Assumptions</span>
            </div>
            <label className="field">
              <span className="fld-label">Current price</span>
              <span className="fld-input"><input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} /><span className="unit">USD</span></span>
            </label>
            <label className="field">
              <span className="fld-label">FCF / share (TTM)</span>
              <span className="fld-input"><input type="number" value={fcf} onChange={(e) => setFcf(Number(e.target.value))} /><span className="unit">USD</span></span>
            </label>
            <label className="field">
              <span className="fld-label">Year 1 growth</span>
              <span className="fld-input"><input type="number" value={growth} onChange={(e) => setGrowth(Number(e.target.value))} /><span className="unit">%</span></span>
            </label>
            <label className="field">
              <span className="fld-label">Terminal growth</span>
              <span className="fld-input"><input type="number" value={fade} onChange={(e) => setFade(Number(e.target.value))} /><span className="unit">%</span></span>
            </label>
            <label className="field">
              <span className="fld-label">Projection years</span>
              <span className="fld-input"><input type="number" min={3} max={10} value={years} onChange={(e) => setYears(Number(e.target.value))} /><span className="unit">yrs</span></span>
            </label>
            <label className="field">
              <span className="fld-label">Exit FCF yield</span>
              <span className="fld-input"><input type="number" step="0.1" value={exitYield} onChange={(e) => setExitYield(Number(e.target.value))} /><span className="unit">%</span></span>
            </label>
            <label className="field">
              <span className="fld-label">Desired return</span>
              <span className="fld-input"><input type="number" value={discount} onChange={(e) => setDiscount(Number(e.target.value))} /><span className="unit">%</span></span>
            </label>
          </section>

          <section className="card ip-panel">
            <div className="ip-panel-head">
              <span className="ip-title">Model notes</span>
            </div>
            <div className="assump-row"><span className="k">SBC impact</span><span className="v">−18.2%</span></div>
            <div className="assump-row"><span className="k">Adj. FCF / share</span><span className="v">$3.23</span></div>
            <div className="assump-row"><span className="k">FCF yield</span><span className="v">1.72%</span></div>
            <div className="assump-row"><span className="k">Shares</span><span className="v">24.4B</span></div>
            <p className="dcf-note">Stock-based compensation is shown separately. The core model runs on FCF / share growth and the exit yield.</p>
          </section>
        </aside>
      </div>
    </div>
  )
}

export default DcfSection

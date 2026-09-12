import BrandLogo from "../../../components/BrandLogo/BrandLogo"

function TranscriptsSection() {
  return (
    <div className="ip-wrap tx-wrap">
      <label className="ph-search tx-search">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" /></svg>
        <input type="search" placeholder="Search stocks…" autoComplete="off" />
        <svg className="tx-search-ico" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
      </label>

      <div className="tx-stage">
        <input className="tx-radio" type="radio" name="txq" id="txq-q2" defaultChecked />
        <input className="tx-radio" type="radio" name="txq" id="txq-q1" />
        <input className="tx-radio" type="radio" name="txq" id="txq-q4" />
        <input className="tx-radio" type="radio" name="txq" id="txq-q3" />
        <input className="tx-radio" type="radio" name="txv" id="txv-sum" defaultChecked />
        <input className="tx-radio" type="radio" name="txv" id="txv-full" />

        <aside className="tx-rail card">
          <div className="tx-co">
            <BrandLogo ticker="NVDA" className="logo-box" />
            <div>
              <div className="tx-co-name">NVIDIA Corporation</div>
              <div className="tx-co-tick">NVDA · NASDAQ</div>
            </div>
          </div>
          <label className="tx-item" htmlFor="txq-q2">
            <span className="tx-q">Q2</span>
            <span className="tx-item-text">
              <strong>NVDA — 2026, Q2</strong>
              <em>Aug 28, 2026</em>
            </span>
          </label>
          <label className="tx-item" htmlFor="txq-q1">
            <span className="tx-q">Q1</span>
            <span className="tx-item-text">
              <strong>NVDA — 2026, Q1</strong>
              <em>May 28, 2026</em>
            </span>
          </label>
          <label className="tx-item" htmlFor="txq-q4">
            <span className="tx-q">Q4</span>
            <span className="tx-item-text">
              <strong>NVDA — 2025, Q4</strong>
              <em>Feb 26, 2026</em>
            </span>
          </label>
          <label className="tx-item" htmlFor="txq-q3">
            <span className="tx-q">Q3</span>
            <span className="tx-item-text">
              <strong>NVDA — 2025, Q3</strong>
              <em>Nov 19, 2025</em>
            </span>
          </label>
        </aside>

        <section className="tx-panel card">
          <div className="tx-tabs">
            <label className="tx-tab" htmlFor="txv-sum">Transcript Summary</label>
            <label className="tx-tab" htmlFor="txv-full">Full Transcript</label>
          </div>

          <div className="tx-body">
            <article className="tx-doc doc-q2-sum">
              <h2>Data center and Rubin demand</h2>
              <ul>
                <li>Data-center revenue was the quarter’s engine. Management said Rubin Ultra is shipping to first hyperscalers and that 2027 supply is effectively sold out.</li>
                <li>The constraint is not demand. Jensen: the limiting factor is how fast supply can be brought up, not the customer list.</li>
                <li>Networking (Spectrum-X, InfiniBand) grew with the GPU attach, which management framed as a multi-year systems story rather than a chip cycle.</li>
              </ul>
              <h2>Gross margin and supply</h2>
              <ul>
                <li>Gross margin held in the mid-70s as Blackwell mix ramped. CoWoS and HBM remain the bottlenecks into the first half of next year.</li>
                <li>TSMC and memory partners were cited as on track, with incremental capacity still the swing factor for the print.</li>
              </ul>
              <h2>Guidance and capital return</h2>
              <ul>
                <li>Q3 guide implied another sequential step-up. Full-year commentary stayed above Street going into the print.</li>
                <li>Buybacks continued; the board left the authorization in place. No change to the dividend.</li>
              </ul>
              <h2>China and export controls</h2>
              <ul>
                <li>China remains a rounding error versus the U.S. and Europe hyperscaler book. Management would not size a 2027 recovery.</li>
                <li>H20 / successor SKUs were described as demand-limited by license, not by the product roadmap.</li>
              </ul>
            </article>

            <article className="tx-doc doc-q2-full">
              <p className="tx-spk"><span>Operator</span> Good afternoon. Welcome to NVIDIA’s second quarter fiscal 2027 earnings call.</p>
              <p className="tx-spk"><span>Colette Kress</span> Revenue was $46.7 billion, up sequentially on data center. Gross margin was 75.1%. We return excess cash through buybacks; $15 billion was executed in the quarter.</p>
              <p className="tx-spk"><span>Jensen Huang</span> Demand for Rubin is sold out through the middle of next year. The limiting factor is not customers — it is how fast we can bring up supply. Every major cloud is building AI factories. This is a new computing platform, not a replacement cycle for the last GPU.</p>
              <p className="tx-spk"><span>Analyst</span> Can you talk about networking attach and whether Spectrum-X is keeping pace with GPU shipments?</p>
              <p className="tx-spk"><span>Jensen Huang</span> The AI factory is a system. GPUs, NVLink, Spectrum-X, software. Attach is rising because the cluster is the product. We are not selling a chip into a vacant slot.</p>
            </article>

            <article className="tx-doc doc-q1-sum">
              <h2>First-quarter print</h2>
              <ul>
                <li>Revenue beat on data center; gaming was flattish. Automotive remained small but grew off a low base.</li>
                <li>Blackwell was still ramping. Management said the transition from Hopper would be largely complete by year-end.</li>
              </ul>
              <h2>Margins</h2>
              <ul>
                <li>Gross margin dipped slightly on mix as new-node costs hit before full yields. The path back to the mid-70s was reiterated.</li>
              </ul>
              <h2>Outlook</h2>
              <ul>
                <li>Q2 guide assumed another step-up in data-center GPUs and a larger networking contribution.</li>
              </ul>
            </article>

            <article className="tx-doc doc-q1-full">
              <p className="tx-spk"><span>Colette Kress</span> First-quarter revenue was $44.1 billion. Data center was $39.2 billion. We returned $10 billion to shareholders.</p>
              <p className="tx-spk"><span>Jensen Huang</span> Blackwell is in volume. The world is short of AI infrastructure. We will ship every chip we can make.</p>
            </article>

            <article className="tx-doc doc-q4-sum">
              <h2>Year-end wrap</h2>
              <ul>
                <li>FY2026 closed with data center still above 85% of revenue. Full-year growth remained triple-digit on that line.</li>
                <li>Management introduced the Rubin naming and a 2027 supply envelope that Street treated as a raise.</li>
              </ul>
              <h2>Capital and returns</h2>
              <ul>
                <li>A larger buyback authorization was approved after the print. Cash generation more than covered it.</li>
              </ul>
            </article>

            <article className="tx-doc doc-q4-full">
              <p className="tx-spk"><span>Jensen Huang</span> We are at the beginning of the AI industrial revolution. FY2026 was the year the factory got built. FY2027 is the year it runs at scale.</p>
              <p className="tx-spk"><span>Colette Kress</span> Full-year data-center revenue was $184 billion. We ended with $18 billion in cash after buybacks.</p>
            </article>

            <article className="tx-doc doc-q3-sum">
              <h2>Hopper still in the mix</h2>
              <ul>
                <li>Q3 was the last quarter where Hopper was a meaningful slice of data-center GPUs. Blackwell wafers were rising fast.</li>
                <li>Networking lagged GPU growth by a quarter — a known lag that management said would close in Q4.</li>
              </ul>
              <h2>Competition</h2>
              <ul>
                <li>Custom silicon at hyperscalers was acknowledged. NVIDIA’s answer was the full stack: CUDA, networking, and systems.</li>
              </ul>
            </article>

            <article className="tx-doc doc-q3-full">
              <p className="tx-spk"><span>Jensen Huang</span> CUDA is the operating system of AI. Custom ASICs will exist. They will not replace a general-purpose AI computer.</p>
              <p className="tx-spk"><span>Colette Kress</span> Q3 revenue was $39.3 billion. We continue to expect Blackwell to be the majority of data-center GPUs by Q1.</p>
            </article>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TranscriptsSection

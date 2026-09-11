import type { ReactNode } from "react"
import Chat from "../../components/Chat/Chat"
import ChatHeader from "../../components/Header/ChatHeader/ChatHeader"
import "./NewChat.css"

const NEWS = [
  ["/assets/news/news-nvidia.png", "Nvidia's Rubin Ultra ships early — Wall Street rewrites 2027 AI capex", "15 sources · 4 hours ago"],
  ["/assets/news/news-fed.png", "Fed officials split on an October cut as core inflation cools to 2.4%", "12 sources · 2 hours ago"],
  ["/assets/news/news-apple.png", "Apple's foldable iPhone enters mass production ahead of spring launch", "8 sources · Today"],
  ["/assets/news/news-oil.png", "Oil slides 3% after OPEC+ signals a larger November output hike", "11 sources · 6 hours ago"],
  ["/assets/news/news-btc.png", "Bitcoin retreats from $128K as spot ETF inflows pause for a week", "16 sources · 5 hours ago"],
  ["/assets/news/news-chip.png", "Europe's chip act 2.0: can subsidies buy a place in the AI supply chain?", "6 sources · Yesterday"],
  ["/assets/news/news-openai.png", "OpenAI locks a multi-year custom-silicon deal as GPU lead times stretch", "7 sources · Yesterday"],
  ["/assets/news/news-sov.png", "Inside the sovereign-AI race: 14 national compute deals and counting", "9 sources · 2 days ago"],
]

const TOPICS = [
  ["/assets/topics/topic-academics.png", "Academics"],
  ["/assets/topics/topic-finance.png", "Finance"],
  ["/assets/topics/topic-math.png", "Math"],
  ["/assets/topics/topic-tech.png", "Technology and computer science"],
  ["/assets/topics/topic-politics.png", "Political science and economics"],
]

function chunk<T>(items: T[], size: number) {
  const pages: T[][] = []
  for (let i = 0; i < items.length; i += size) pages.push(items.slice(i, i + size))
  return pages
}

function Carousel({
  name,
  pages,
  kind,
  children,
}: {
  name: string
  pages: number
  kind: string
  children: ReactNode
}) {
  return (
    <div className={`hc-carousel ${kind}`}>
      {Array.from({ length: pages }, (_, i) => (
        <input
          key={`${name}-${i}`}
          type="radio"
          name={name}
          id={`${name}-${i}`}
          className="hc-page"
          defaultChecked={i === 0}
        />
      ))}
      <div className="hc-viewport">
        <div className="hc-track">{children}</div>
      </div>
      {Array.from({ length: pages - 1 }, (_, i) => (
        <label className={`hc-arrow next n-${i}`} htmlFor={`${name}-${i + 1}`} title="Next" key={`n-${i}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
        </label>
      ))}
      {Array.from({ length: pages - 1 }, (_, i) => (
        <label className={`hc-arrow prev p-${i + 1}`} htmlFor={`${name}-${i}`} title="Previous" key={`p-${i}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 6 9 12 15 18" /></svg>
        </label>
      ))}
    </div>
  )
}

function NewChat() {
  const newsPages = chunk(NEWS, 4)
  const topicPages = chunk(TOPICS, 4)

  return (
    <div className="nc-shell">
      <input type="checkbox" id="nc-custom" className="nc-cb" />
      <input type="radio" name="nc-bg" id="nc-bg-none" className="nc-cb" defaultChecked />
      <input type="radio" name="nc-bg" id="nc-bg-scene" className="nc-cb" />
      <input type="radio" name="nc-bg" id="nc-bg-dusk" className="nc-cb" />
      <input type="radio" name="nc-bg" id="nc-bg-grove" className="nc-cb" />
      <input type="radio" name="nc-bg" id="nc-bg-ember" className="nc-cb" />
      <input type="radio" name="nc-bg" id="nc-bg-mist" className="nc-cb" />
      <input type="checkbox" id="nc-show-topics" className="nc-cb" defaultChecked />
      <input type="checkbox" id="nc-show-stories" className="nc-cb" defaultChecked />

      <ChatHeader />
      <div className="content hc-content">
        <div className="hc-wrap">
          <section className="hc-top">
            <p className="hc-greet">Good evening, Bogdan</p>
            <h1 className="hc-title">What would you like to research?</h1>
            <Chat />
          </section>

          <section className="hc-topics-block" aria-label="Search topics">
            <div className="hc-head">
              <h2>Search topics</h2>
            </div>
            <Carousel name="hc-topics" pages={topicPages.length} kind="topics">
              {topicPages.map((page, i) => (
                <div className="hc-slide" key={`topics-${i}`}>
                  {page.map(([src, title]) => (
                    <a className="hc-topic" href="/answer" key={title}>
                      <img src={src} alt="" />
                      <span>{title}</span>
                    </a>
                  ))}
                </div>
              ))}
            </Carousel>
          </section>

          <section className="hc-block" aria-label="Stories">
            <div className="hc-head">
              <h2>Interesting stories</h2>
              <a href="/discover">Discover</a>
            </div>
            <Carousel name="hc-news" pages={newsPages.length} kind="news">
              {newsPages.map((page, i) => (
                <div className="hc-slide" key={`news-${i}`}>
                  {page.map(([src, title, meta]) => (
                    <a className="hc-story" href="/answer" key={title}>
                      <img className="hc-photo" src={src} alt="" />
                      <div className="hc-story-copy">
                        <h3>{title}</h3>
                        <p>{meta}</p>
                      </div>
                    </a>
                  ))}
                </div>
              ))}
            </Carousel>
          </section>
        </div>
      </div>

      <label className="nc-overlay" htmlFor="nc-custom"></label>
      <aside className="nc-panel" aria-label="Customize New Chat">
        <div className="nc-panel-head">
          <strong>Customize</strong>
          <label className="nc-close" htmlFor="nc-custom" title="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </label>
        </div>

        <p className="nc-panel-label">Background</p>
        <div className="nc-bgs">
          <label htmlFor="nc-bg-none" className="nc-swatch nc-swatch-none" title="Default">
            <span>None</span>
          </label>
          <label htmlFor="nc-bg-scene" className="nc-swatch nc-swatch-scene" title="Landscape"></label>
          <label htmlFor="nc-bg-dusk" className="nc-swatch nc-swatch-dusk" title="Dusk"></label>
          <label htmlFor="nc-bg-grove" className="nc-swatch nc-swatch-grove" title="Grove"></label>
          <label htmlFor="nc-bg-ember" className="nc-swatch nc-swatch-ember" title="Ember"></label>
          <label htmlFor="nc-bg-mist" className="nc-swatch nc-swatch-mist" title="Mist"></label>
        </div>

        <p className="nc-panel-label">Sections</p>
        <div className="nc-toggle-row">
          <div className="nc-toggle-copy">
            <strong>Search topics</strong>
            <span>Topic cards under the chat</span>
          </div>
          <label className="nc-switch" htmlFor="nc-show-topics">
            <span className="nc-knob"></span>
          </label>
        </div>
        <div className="nc-toggle-row">
          <div className="nc-toggle-copy">
            <strong>Interesting stories</strong>
            <span>News carousel on the page</span>
          </div>
          <label className="nc-switch" htmlFor="nc-show-stories">
            <span className="nc-knob"></span>
          </label>
        </div>
      </aside>
    </div>
  )
}

export default NewChat

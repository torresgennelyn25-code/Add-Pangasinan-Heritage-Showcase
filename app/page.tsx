import { Button } from "../components/Button";
import { HeritageGrid } from "../components/HeritageGrid";
import { SearchForm } from "../components/SearchForm";
export default function Home() {
  return <>
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Pangasinan • Philippines</span>
          <h1>Stories of place, <em>made to explore.</em></h1>
          <p>Discover iconic landscapes and heritage destinations through a lightweight digital showcase designed for every screen and every connection.</p>
          <div className="actions"><Button href="#heritage">Explore heritage</Button><Button href="#about" variant="ghost">Our approach</Button></div>
        </div>
        <div className="hero-art" aria-label="Decorative landscape illustration">
          <div className="sun"></div><div className="mountain mountain-a"></div><div className="mountain mountain-b"></div><div className="water"></div>
        </div>
      </section>

      <section className="section" id="heritage">
        <div className="section-head"><div><span className="eyebrow">Featured destinations</span><h2>Start with the icons.</h2></div><p>Three places that represent Pangasinan’s mix of nature, history, and local character.</p></div>
        <SearchForm/><HeritageGrid/>
      </section>

      <section className="about" id="about">
        <div><span className="eyebrow">Designed for access</span><h2>Fast, focused, and welcoming.</h2></div>
        <p>The interface uses a modular component system, responsive layouts, semantic HTML, visible focus states, readable contrast, descriptive image alternatives, and a static-first deployment approach.</p>
      </section>

      <section className="visit" id="visit">
        <span className="eyebrow">Plan a visit</span><h2>Take the story beyond the screen.</h2>
        <p>Use this showcase as a starting point for discovering Pangasinan’s destinations, then confirm current schedules, access rules, and local travel information before visiting.</p>
      </section>
    </main>
    <footer><strong>Pangasinan Heritage</strong><span>Digital Showcase • Activity 1</span></footer>
  </>;
}

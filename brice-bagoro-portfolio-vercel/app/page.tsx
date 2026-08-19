export default function Home() {
  return (
    <main className="nc-site">
      <nav className="nc-nav nc-wrap">
        <a className="nc-logo" href="#top">BB.</a>
        <div className="nc-navlinks">
          <a href="#expertise">Expertise</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">À propos</a>
        </div>
        <a className="nc-contact" href="#contact">Me contacter ↗</a>
      </nav>

      <header className="nc-hero nc-wrap" id="top">
        <div className="nc-status">DISPONIBLE POUR DES MISSIONS FREELANCE À DISTANCE</div>
        <h1>Des mots plus justes.<span>Des offres plus convaincantes.</span></h1>
        <div className="nc-hero-bottom">
          <p>Stratégie de conversion, rédaction persuasive et optimisation Shopify pour mieux présenter vos offres et faciliter la décision.</p>
          <div className="nc-hero-actions">
            <a className="nc-primary" href="#portfolio">Découvrir les réalisations <b>↗</b></a>
            <a className="nc-secondary" href="#about">Consulter le profil ↗</a>
          </div>
        </div>
      </header>

      <section className="nc-method">
        <div className="nc-method-inner">
          <div className="nc-method-kicker">UNE APPROCHE FONDÉE SUR CE QUI PRÉCÈDE LA DÉCISION</div>
          <div className="nc-method-grid">
            <article><small>01 · DIAGNOSTIQUER</small><h3>Marché & audience</h3><p>Niveau de conscience · sophistication · scepticisme · objections</p></article>
            <span>→</span>
            <article className="active"><small>02 · CLARIFIER</small><h3>Positionnement & message</h3><p>Valeur · promesse · angles · preuves · narration</p></article>
            <span>→</span>
            <article><small>03 · DÉPLOYER</small><h3>Contenus de conversion</h3><p>Le message décliné selon le canal, le format et la maturité de l’audience.</p></article>
          </div>
          <div className="nc-method-tags"><span>PAGES & TUNNELS</span><span>EMAILS</span><span>SCRIPTS & PUBLICITÉS</span></div>
        </div>
      </section>

      <section className="nc-expertise nc-wrap" id="expertise">
        <div className="nc-section-intro">
          <span>AU SERVICE DE LA DÉCISION</span>
          <h2>De l’attention à la compréhension, de la conviction à l’action.</h2>
        </div>
        <div className="nc-service-list">
          <article><b>01</b><h3>Copywriting e-commerce</h3><p>Pages produits, landing pages, propositions de valeur, tunnels et séquences de conversion.</p></article>
          <article><b>02</b><h3>Shopify & conversion</h3><p>Structure de boutique, parcours, navigation, présentation de l’offre et optimisation CRO.</p></article>
          <article><b>03</b><h3>Emails & tunnels de conversion</h3><p>Séquences de bienvenue, nurturing, relance, lancement et contenus orientés passage à l’action.</p></article>
          <article><b>04</b><h3>Copywriting publicitaire</h3><p>Angles, accroches, textes publicitaires et scripts conçus selon le canal, le format et le niveau de maturité du prospect.</p></article>
        </div>
      </section>

      <section className="nc-portfolio" id="portfolio">
        <div className="nc-wrap">
          <div className="nc-section-intro dark">
            <span>PROJETS SÉLECTIONNÉS</span>
            <h2>La réflexion derrière chaque livrable.</h2>
          </div>
          <div className="nc-project-list">
            <a className="nc-project nc-project-featured" href="/projects/aisia/shopify-page">
              <div className="nc-project-visual mint"><div className="paper"><small>01 · SHOPIFY · CRO</small><h4>Aisia</h4><span>APERÇU</span></div></div>
              <div className="nc-project-copy"><small>SHOPIFY · CONVERSION · CRO</small><h3>Aisia : Construire une offre e-commerce crédible</h3><p>Un travail de positionnement et de clarification de l’offre pensé pour une page e-commerce qui rassure, explique et accompagne la décision.</p><div className="tags"><span>STRATÉGIE</span><span>SHOPIFY</span><span>CRO</span></div><strong>Découvrir l’étude de cas <span>→</span></strong></div>
            </a>
            <a className="nc-project" href="/projects/cap-clair/email-sequence">
              <div className="nc-project-visual blue"><div className="paper"><small>02 · EMAIL MARKETING</small><h4>Cap Clair</h4><span>APERÇU</span></div></div>
              <div className="nc-project-copy"><small>EMAIL MARKETING · NURTURING</small><h3>Cap Clair : Faire progresser une décision, un email à la fois</h3><p>Une séquence pensée pour faire avancer le prospect progressivement : compréhension, intérêt, confiance puis passage à l’action.</p><div className="tags"><span>EMAILS</span><span>NURTURING</span><span>CONVERSION</span></div><strong>Voir l’étude de cas <span>→</span></strong></div>
            </a>
            <a className="nc-project" href="/projects/horizon-90/creative-strategy">
              <div className="nc-project-visual peach"><div className="paper"><small>03 · COPYWRITING PUBLICITAIRE</small><h4>Horizon 90</h4><span>APERÇU</span></div></div>
              <div className="nc-project-copy"><small>COPYWRITING PUBLICITAIRE · ADS</small><h3>Horizon 90 : Un même programme, trois raisons d’y croire</h3><p>Trois concepts publicitaires construits à partir de motivations distinctes, sans dénaturer la promesse centrale de l’offre.</p><div className="tags"><span>ANGLES</span><span>HOOKS</span><span>SCRIPTS</span></div><strong>Voir l’étude de cas <span>→</span></strong></div>
            </a>
            <a className="nc-project" href="/projects/avant-le-oui/decision-framework">
              <div className="nc-project-visual lilac"><div className="paper"><small>04 · OUVRAGE · NEUROCONVERT</small><h4>Avant le Oui</h4><span>139 PAGES</span></div></div>
              <div className="nc-project-copy"><small>OUVRAGE · STRATÉGIE · CONVERSION</small><h3>Avant le Oui : Comprendre ce qui précède la décision</h3><p>Un ouvrage de référence qui rend visible le travail avant le message : marché, audience, diagnostic, positionnement, angles, créatives et tests.</p><div className="tags"><span>MARCHÉ</span><span>STRATÉGIE</span><span>MESSAGE</span></div><strong>Découvrir le livre <span>→</span></strong></div>
            </a>
          </div>
        </div>
      </section>

      <section className="nc-about nc-wrap" id="about">
        <div className="nc-about-title"><span>À PROPOS</span><h2>Stratégique dans l’analyse.<br/>Concret dans l’exécution.</h2></div>
        <div className="nc-about-copy">
          <p>Spécialiste e-commerce et Shopify, j’interviens de la recherche marché jusqu’aux contenus de conversion : construction d’offre, pages Shopify, emails et copywriting publicitaire.</p>
          <p>Chaque mission commence par une analyse de l’audience, du niveau de conscience, de la sophistication du marché et des objections. Cette compréhension guide ensuite le message, la structure et les livrables.</p>
          <div className="nc-stats"><div><b>03+</b><span>domaines clés</span></div><div><b>FR</b><span>français</span></div><div><b>EN</b><span>anglais</span></div></div>
          <div className="nc-skills"><span>POSITIONNEMENT</span><span>COPYWRITING</span><span>SHOPIFY</span><span>CONVERSION</span><span>ADS</span></div>
        </div>
      </section>

      <section className="nc-cta" id="contact">
        <span>UNE DÉCISION PRÉCISE ?</span>
        <h2>Parlons de votre prochaine mission.</h2>
        <p>Ouvert aux collaborations freelance et contractuelles, 100 % remote.</p>
        <a href="https://wa.me/14389422904" target="_blank" rel="noreferrer">Échanger sur WhatsApp ↗</a>
      </section>

      <footer className="nc-footer"><span>© 2026 Brice Bagoro</span><span>Stratégie · Copywriting · Conversion</span><span>Montréal</span></footer>
      <a className="nc-whatsapp" href="https://wa.me/14389422904" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M19.11 17.21c-.23-.12-1.34-.66-1.55-.74-.21-.08-.36-.12-.52.12-.15.23-.59.74-.72.9-.13.15-.27.17-.5.06-.23-.12-.97-.36-1.84-1.14-.68-.61-1.14-1.36-1.28-1.59-.13-.23-.01-.35.1-.47.1-.1.23-.27.35-.41.12-.13.15-.23.23-.39.08-.15.04-.29-.02-.41-.06-.12-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4h-.44c-.15 0-.41.06-.62.29-.21.23-.81.79-.81 1.93 0 1.14.83 2.24.95 2.4.12.15 1.63 2.49 3.95 3.49.55.24.98.38 1.32.49.55.18 1.05.15 1.45.09.44-.07 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.15-.44-.27Z"/><path fill="currentColor" d="M16.02 3.2c-7.05 0-12.78 5.73-12.78 12.78 0 2.25.59 4.45 1.7 6.38L3.13 28.8l6.6-1.73a12.72 12.72 0 0 0 6.28 1.6h.01c7.05 0 12.78-5.73 12.78-12.78S23.07 3.2 16.02 3.2Zm0 23.31h-.01a10.57 10.57 0 0 1-5.39-1.48l-.39-.23-3.92 1.03 1.05-3.82-.25-.39a10.55 10.55 0 1 1 8.91 4.89Z"/></svg>
      </a>
    </main>
  );
}

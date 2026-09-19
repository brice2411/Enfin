export default function Home() {
  return (
    <main className="nc-site">
      <nav className="nc-nav nc-wrap">
        <a className="nc-logo" href="#top">BB.</a>
        <div className="nc-navlinks">
          <a href="#offre">Offre</a>
          <a href="#portfolio">Réalisations</a>
          <a href="/ressources">Ressources</a>
          <a href="#about">À propos</a>
        </div>
        <a className="nc-contact" href="#contact">Parler du projet ↗</a>
      </nav>

      <header className="nc-hero nc-wrap" id="top">
        <div className="nc-status">CREATIVE STRATEGY & COPYWRITING · E-COMMERCE</div>
        <h1>Trouvez de nouveaux angles.<span>Transformez-les en concepts publicitaires.</span></h1>
        <div className="nc-hero-bottom">
          <p>J’aide les marques e-commerce actives sur Meta à trouver de nouvelles façons de vendre leur offre — puis à les transformer en concepts, hooks, textes publicitaires, scripts et briefs prêts à produire.</p>
          <div className="nc-hero-actions">
            <a className="nc-primary" href="#portfolio">Voir les réalisations <b>↗</b></a>
            <a className="nc-secondary" href="#offre">Découvrir l’approche ↗</a>
          </div>
        </div>
      </header>

      <section className="nc-method">
        <div className="nc-method-inner">
          <div className="nc-method-kicker">DE LA RECHERCHE À LA CRÉATIVE À TESTER</div>
          <div className="nc-method-grid">
            <article><small>01 · RECHERCHER</small><h3>Marché & audience</h3><p>Clients · objections · désirs · usages · concurrents · langage · preuves.</p></article>
            <span>→</span>
            <article className="active"><small>02 · CONCEVOIR</small><h3>Angles & concepts</h3><p>Insights · promesses · mécanismes · hooks · messages · concepts publicitaires.</p></article>
            <span>→</span>
            <article><small>03 · PRÉPARER</small><h3>Copy & production</h3><p>Scripts · textes publicitaires · headlines · briefs · priorités de test.</p></article>
          </div>
          <div className="nc-method-tags"><span>RESEARCH</span><span>ANGLES</span><span>CONCEPTS</span><span>COPY</span><span>BRIEFS</span></div>
        </div>
      </section>

      <section className="nc-expertise nc-wrap" id="offre">
        <div className="nc-section-intro">
          <span>L’OFFRE</span>
          <h2>Pas plus de contenu. De meilleures idées à tester.</h2>
        </div>
        <div className="nc-service-list">
          <article><b>01</b><h3>Recherche créative</h3><p>Lecture du marché, des clients, des concurrents et des créatives existantes pour repérer les motivations, objections et opportunités encore peu exploitées.</p></article>
          <article><b>02</b><h3>Angles & concepts</h3><p>Transformation des insights en angles publicitaires clairs, puis en concepts suffisamment développés pour être produits et testés sur Meta.</p></article>
          <article><b>03</b><h3>Hooks & copy publicitaire</h3><p>Hooks, textes principaux, headlines et messages adaptés à chaque concept pour donner une direction claire à la créative.</p></article>
          <article><b>04</b><h3>Scripts & briefs de production</h3><p>Scripts vidéo, structure des scènes, éléments de preuve, texte à l’écran, CTA et indications utiles au créateur, au vidéaste ou à l’équipe interne.</p></article>
          <article><b>05</b><h3>Priorisation des tests</h3><p>Une sélection structurée des concepts à tester en priorité, avec l’hypothèse derrière chaque idée et ce que le test doit permettre d’apprendre.</p></article>
        </div>
      </section>

      <section className="nc-portfolio" id="portfolio">
        <div className="nc-wrap">
          <div className="nc-section-intro dark">
            <span>RÉALISATIONS</span>
            <h2>Des idées construites autour d’un raisonnement, pas d’une liste de hooks.</h2>
          </div>
          <div className="nc-project-list">
            <a className="nc-project nc-project-featured" href="/projects/horizon-90/creative-strategy">
              <div className="nc-project-visual peach"><div className="paper"><small>01 · CREATIVE STRATEGY</small><h4>Horizon 90</h4><span>3 ANGLES</span></div></div>
              <div className="nc-project-copy"><small>ADS · ANGLES · SCRIPTS</small><h3>Une même offre, plusieurs raisons d’y croire.</h3><p>Trois concepts publicitaires construits autour de motivations distinctes pour ouvrir plusieurs portes d’entrée vers la même offre.</p><div className="tags"><span>ANGLES</span><span>HOOKS</span><span>SCRIPTS</span></div><strong>Voir l’étude de cas <span>→</span></strong></div>
            </a>

            <a className="nc-project" href="/projects/aisia/shopify-page">
              <div className="nc-project-visual mint"><div className="paper"><small>02 · E-COMMERCE</small><h4>Aisia</h4><span>PAGE PRODUIT</span></div></div>
              <div className="nc-project-copy"><small>POSITIONNEMENT · COPYWRITING · CRO</small><h3>Rendre une offre plus claire et plus crédible.</h3><p>Un travail de positionnement et de hiérarchie de l’information pour aider une audience sceptique à comprendre, croire puis agir.</p><div className="tags"><span>STRATÉGIE</span><span>SHOPIFY</span><span>COPYWRITING</span></div><strong>Découvrir l’étude de cas <span>→</span></strong></div>
            </a>

            <a className="nc-project" href="/projects/cap-clair/email-sequence">
              <div className="nc-project-visual blue"><div className="paper"><small>03 · COPYWRITING</small><h4>Cap Clair</h4><span>7 EMAILS</span></div></div>
              <div className="nc-project-copy"><small>EMAIL · NURTURING · CONVERSION</small><h3>Faire progresser une décision, un message à la fois.</h3><p>Une séquence pensée pour faire évoluer progressivement la perception du prospect : reconnaissance, intérêt, compréhension, confiance et passage à l’action.</p><div className="tags"><span>EMAILS</span><span>NURTURING</span><span>MESSAGING</span></div><strong>Voir l’étude de cas <span>→</span></strong></div>
            </a>

            <a className="nc-project" href="https://www.dropbox.com/scl/fi/49b17znfkal8rtjomyvej/Copywriting-et-Strategie.pdf?rlkey=aqfieo537sw0exwmu8ot4m1bl&st=ghf0qazf&dl=0" target="_blank" rel="noreferrer">
              <div className="nc-project-visual book"><div className="paper"><small>04 · GUIDE · NEUROCONVERT</small><h4>Persuasion,<em>psychologie d’achat</em> & structures de copywriting</h4><span>14 PAGES</span></div></div>
              <div className="nc-project-copy"><small>GUIDE · STRATÉGIE · COPYWRITING</small><h3>Comprendre avant d’écrire.</h3><p>Un guide qui relie conscience, sophistication, scepticisme, positionnement et structures de persuasion pour choisir le bon message avant de chercher les bons mots.</p><div className="tags"><span>PSYCHOLOGIE D’ACHAT</span><span>AIDA</span><span>PAS</span></div><strong>Ouvrir le guide <span>↗</span></strong></div>
            </a>
          </div>
        </div>
      </section>

      <section className="nc-about nc-wrap" id="about">
        <div className="nc-about-title"><span>À PROPOS</span><h2>Stratégique dans la recherche.<br/>Concret dans la conception.</h2></div>
        <div className="nc-about-copy">
          <p>NeuroConvert se concentre sur l’amont de la publicité : comprendre le marché, trouver un angle pertinent et donner à l’équipe de production une idée suffisamment claire pour être exécutée et testée.</p>
          <p>Pas de montage vidéo. Pas de promesse de ROAS. Le travail porte sur ce qui vient avant : les insights, les angles, les concepts et les mots qui donnent une direction à la créative.</p>
          <div className="nc-stats"><div><b>01</b><span>offre centrale</span></div><div><b>FR</b><span>copywriting francophone</span></div><div><b>100%</b><span>à distance</span></div></div>
          <div className="nc-skills"><span>CREATIVE RESEARCH</span><span>ANGLES</span><span>CONCEPTS ADS</span><span>HOOKS</span><span>SCRIPTS</span><span>AD COPY</span></div>
        </div>
      </section>

      <section className="nc-cta" id="contact">
        <span>VOUS AVEZ DÉJÀ DES CRÉATIVES EN CIRCULATION ?</span>
        <h2>Voyons ce qu’il reste à tester.</h2>
        <p>Envoyez votre boutique, vos publicités actuelles ou simplement votre offre.</p>
        <a href="https://wa.me/14389422904" target="_blank" rel="noreferrer">Parler du projet sur WhatsApp ↗</a>
      </section>

      <footer className="nc-footer"><span>© 2026 Brice Bagoro</span><span>Creative Strategy · Copywriting · E-commerce</span><span>Montréal</span></footer>
      <a className="nc-whatsapp" href="https://wa.me/14389422904" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M19.11 17.21c-.23-.12-1.34-.66-1.55-.74-.21-.08-.36-.12-.52.12-.15.23-.59.74-.72.9-.13.15-.27.17-.5.06-.23-.12-.97-.36-1.84-1.14-.68-.61-1.14-1.36-1.28-1.59-.13-.23-.01-.35.1-.47.1-.1.23-.27.35-.41.12-.13.15-.23.23-.39.08-.15.04-.29-.02-.41-.06-.12-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4h-.44c-.15 0-.41.06-.62.29-.21.23-.81.79-.81 1.93 0 1.14.83 2.24.95 2.4.12.15 1.63 2.49 3.95 3.49.55.24.98.38 1.32.49.55.18 1.05.15 1.45.09.44-.07 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.15-.44-.27Z"/><path fill="currentColor" d="M16.02 3.2c-7.05 0-12.78 5.73-12.78 12.78 0 2.25.59 4.45 1.7 6.38L3.13 28.8l6.6-1.73a12.72 12.72 0 0 0 6.28 1.6h.01c7.05 0 12.78-5.73 12.78-12.78S23.07 3.2 16.02 3.2Zm0 23.31h-.01a10.57 10.57 0 0 1-5.39-1.48l-.39-.23-3.92 1.03 1.05-3.82-.25-.39a10.55 10.55 0 1 1 8.91 4.89Z"/></svg>
      </a>
    </main>
  );
}

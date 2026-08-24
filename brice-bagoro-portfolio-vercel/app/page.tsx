export default function Home() {
  return (
    <main className="nc-site">
      <nav className="nc-nav nc-wrap">
        <a className="nc-logo" href="#top">BB.</a>
        <div className="nc-navlinks">
          <a href="#expertise">Expertise</a>
          <a href="#portfolio">Portfolio</a>
          <a href="/ressources">Ressources</a>
          <a href="#about">À propos</a>
        </div>
        <a className="nc-contact" href="#contact">Me contacter ↗</a>
      </nav>

      <header className="nc-hero nc-wrap" id="top">
        <div className="nc-status">DISPONIBLE POUR DES MISSIONS FREELANCE À DISTANCE</div>
        <h1>Des mots plus justes.<span>Des offres plus convaincantes.</span></h1>
        <div className="nc-hero-bottom">
          <p>Stratégie de conversion, copywriting et optimisation Shopify pour transformer une offre en expérience plus claire, plus crédible et plus facile à acheter.</p>
          <div className="nc-hero-actions">
            <a className="nc-primary" href="#portfolio">Découvrir les réalisations <b>↗</b></a>
            <a className="nc-secondary" href="#expertise">Voir mes expertises ↗</a>
          </div>
        </div>
      </header>

      <section className="nc-method">
        <div className="nc-method-inner">
          <div className="nc-method-kicker">UNE APPROCHE QUI COMMENCE AVANT LE PREMIER MOT</div>
          <div className="nc-method-grid">
            <article><small>01 · DIAGNOSTIQUER</small><h3>Marché & audience</h3><p>Conscience · sophistication · scepticisme · objections · contexte d’achat.</p></article>
            <span>→</span>
            <article className="active"><small>02 · CLARIFIER</small><h3>Positionnement & message</h3><p>Valeur · promesse · mécanisme · angles · preuves · narration.</p></article>
            <span>→</span>
            <article><small>03 · DÉPLOYER</small><h3>Expérience de conversion</h3><p>Shopify · landing pages · emails · publicités · scripts, adaptés au canal et à la maturité du prospect.</p></article>
          </div>
          <div className="nc-method-tags"><span>SHOPIFY & CRO</span><span>PAGES & TUNNELS</span><span>EMAILS</span><span>ADS & SCRIPTS</span></div>
        </div>
      </section>

      <section className="nc-expertise nc-wrap" id="expertise">
        <div className="nc-section-intro">
          <span>EXPERTISES</span>
          <h2>Le message, la structure et l’expérience qui entourent la décision d’achat.</h2>
        </div>
        <div className="nc-service-list">
          <article><b>01</b><h3>Shopify & conversion</h3><p>Architecture de boutique, pages produit, collections, hiérarchie de l’information, parcours, navigation et optimisation CRO orientée achat.</p></article>
          <article><b>02</b><h3>Copywriting e-commerce</h3><p>Positionnement, propositions de valeur, pages de vente, landing pages, argumentaires et messages conçus pour rendre l’offre plus compréhensible et convaincante.</p></article>
          <article><b>03</b><h3>Email marketing</h3><p>Séquences de bienvenue, nurturing, relance, lancement et contenus qui construisent progressivement compréhension, confiance et passage à l’action.</p></article>
          <article><b>04</b><h3>Publicités & scripts</h3><p>Angles, hooks, textes publicitaires et scripts vidéo pour Meta, TikTok et YouTube selon le canal, le format et le niveau de maturité de l’audience.</p></article>
          <article><b>05</b><h3>Stratégie de message</h3><p>Recherche audience, conscience, sophistication, scepticisme, objections, mécanisme, promesse et preuves avant la rédaction.</p></article>
        </div>
      </section>

      <section className="nc-portfolio" id="portfolio">
        <div className="nc-wrap">
          <div className="nc-section-intro dark">
            <span>PROJETS SÉLECTIONNÉS</span>
            <h2>Voir le résultat. Comprendre le raisonnement derrière.</h2>
          </div>
          <div className="nc-project-list">
            <a className="nc-project nc-project-featured" href="/projects/aisia/shopify-page">
              <div className="nc-project-visual mint"><div className="paper"><small>01 · SHOPIFY · CRO</small><h4>Aisia</h4><span>ÉTUDE DE CAS</span></div></div>
              <div className="nc-project-copy"><small>SHOPIFY · CONVERSION · CRO</small><h3>Aisia : rendre une offre e-commerce plus claire et plus crédible</h3><p>Positionnement, hiérarchie de l’information et conception d’une page produit pensée pour une audience sceptique qui doit comprendre, croire puis agir.</p><div className="tags"><span>STRATÉGIE</span><span>SHOPIFY</span><span>CRO</span></div><strong>Découvrir l’étude de cas <span>→</span></strong></div>
            </a>

            <a className="nc-project" href="/projects/cap-clair/email-sequence">
              <div className="nc-project-visual blue"><div className="paper"><small>02 · EMAIL MARKETING</small><h4>Cap Clair</h4><span>7 EMAILS</span></div></div>
              <div className="nc-project-copy"><small>EMAIL MARKETING · NURTURING</small><h3>Cap Clair : faire progresser une décision, un email à la fois</h3><p>Une séquence conçue pour faire évoluer progressivement la perception du prospect : reconnaissance, intérêt, compréhension, confiance et passage à l’action.</p><div className="tags"><span>EMAILS</span><span>NURTURING</span><span>CONVERSION</span></div><strong>Voir l’étude de cas <span>→</span></strong></div>
            </a>

            <a className="nc-project" href="/projects/horizon-90/creative-strategy">
              <div className="nc-project-visual peach"><div className="paper"><small>03 · COPYWRITING PUBLICITAIRE</small><h4>Horizon 90</h4><span>3 ANGLES</span></div></div>
              <div className="nc-project-copy"><small>ADS · ANGLES · SCRIPTS</small><h3>Horizon 90 : une même offre, plusieurs raisons d’y croire</h3><p>Trois concepts publicitaires construits autour de motivations distinctes pour tester différentes portes d’entrée sans diluer la promesse centrale.</p><div className="tags"><span>ANGLES</span><span>HOOKS</span><span>SCRIPTS</span></div><strong>Voir l’étude de cas <span>→</span></strong></div>
            </a>

            <a className="nc-project" href="https://www.dropbox.com/scl/fi/49b17znfkal8rtjomyvej/Copywriting-et-Strategie.pdf?rlkey=aqfieo537sw0exwmu8ot4m1bl&st=ghf0qazf&dl=0" target="_blank" rel="noreferrer">
              <div className="nc-project-visual book"><div className="paper"><small>04 · GUIDE · NEUROCONVERT</small><h4>Persuasion,<em>psychologie d’achat</em>& structures de copywriting</h4><span>14 PAGES</span></div></div>
              <div className="nc-project-copy"><small>GUIDE · STRATÉGIE · COPYWRITING</small><h3>Comprendre avant d’écrire.</h3><p>Un guide qui relie conscience, sophistication, scepticisme, positionnement et structures de persuasion pour montrer comment choisir le bon message avant de chercher les bons mots.</p><div className="tags"><span>PSYCHOLOGIE D’ACHAT</span><span>AIDA</span><span>PAS</span><span>BAB</span></div><strong>Ouvrir le guide <span>↗</span></strong></div>
            </a>
          </div>
        </div>
      </section>

      <section className="nc-about nc-wrap" id="about">
        <div className="nc-about-title"><span>À PROPOS</span><h2>Stratégique dans l’analyse.<br/>Concret dans l’exécution.</h2></div>
        <div className="nc-about-copy">
          <p>J’interviens à l’intersection du copywriting, de Shopify et de la conversion : comprendre ce qui freine une décision, clarifier l’offre puis traduire cette réflexion dans une expérience e-commerce cohérente.</p>
          <p>Chaque mission commence par une lecture du marché et de l’audience : niveau de conscience, sophistication, scepticisme et objections. Cette compréhension guide ensuite le positionnement, la structure et les livrables.</p>
          <div className="nc-stats"><div><b>05</b><span>expertises complémentaires</span></div><div><b>FR</b><span>français</span></div><div><b>EN</b><span>anglais</span></div></div>
          <div className="nc-skills"><span>SHOPIFY</span><span>CRO</span><span>POSITIONNEMENT</span><span>COPYWRITING</span><span>EMAIL</span><span>ADS</span></div>
        </div>
      </section>

      <section className="nc-cta" id="contact">
        <span>UN PROJET À CLARIFIER ?</span>
        <h2>Parlons de votre prochaine mission.</h2>
        <p>Collaborations freelance et contractuelles à distance.</p>
        <a href="https://wa.me/14389422904" target="_blank" rel="noreferrer">Échanger sur WhatsApp ↗</a>
      </section>

      <footer className="nc-footer"><span>© 2026 Brice Bagoro</span><span>E-commerce · Shopify · Copywriting · Conversion</span><span>Montréal</span></footer>
      <a className="nc-whatsapp" href="https://wa.me/14389422904" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M19.11 17.21c-.23-.12-1.34-.66-1.55-.74-.21-.08-.36-.12-.52.12-.15.23-.59.74-.72.9-.13.15-.27.17-.5.06-.23-.12-.97-.36-1.84-1.14-.68-.61-1.14-1.36-1.28-1.59-.13-.23-.01-.35.1-.47.1-.1.23-.27.35-.41.12-.13.15-.23.23-.39.08-.15.04-.29-.02-.41-.06-.12-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4h-.44c-.15 0-.41.06-.62.29-.21.23-.81.79-.81 1.93 0 1.14.83 2.24.95 2.4.12.15 1.63 2.49 3.95 3.49.55.24.98.38 1.32.49.55.18 1.05.15 1.45.09.44-.07 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.15-.44-.27Z"/><path fill="currentColor" d="M16.02 3.2c-7.05 0-12.78 5.73-12.78 12.78 0 2.25.59 4.45 1.7 6.38L3.13 28.8l6.6-1.73a12.72 12.72 0 0 0 6.28 1.6h.01c7.05 0 12.78-5.73 12.78-12.78S23.07 3.2 16.02 3.2Zm0 23.31h-.01a10.57 10.57 0 0 1-5.39-1.48l-.39-.23-3.92 1.03 1.05-3.82-.25-.39a10.55 10.55 0 1 1 8.91 4.89Z"/></svg>
      </a>
    </main>
  );
}

export default function CopywritingStrategie() {
  return (
    <main className="nc-site">
      <nav className="nc-nav nc-wrap">
        <a className="nc-logo" href="/">BB.</a>
        <div className="nc-navlinks"><a href="/#portfolio">Portfolio</a><a href="/#expertise">Expertise</a></div>
        <a className="nc-contact" href="/#contact">Me contacter ↗</a>
      </nav>

      <header className="nc-hero nc-wrap" style={{minHeight:"610px"}}>
        <div className="nc-status">GUIDE · STRATÉGIE · COPYWRITING</div>
        <h1 style={{maxWidth:"1080px"}}>Persuasion, psychologie d’achat<span>& structures de copywriting.</span></h1>
        <div className="nc-hero-bottom">
          <p>Comprendre le prospect. Positionner le bon message. Structurer une persuasion claire, crédible et adaptée au niveau de maturité de l’audience.</p>
          <div className="nc-hero-actions"><a className="nc-primary" href="#contenu">Explorer le contenu <b>↓</b></a><a className="nc-secondary" href="/#portfolio">Retour au portfolio ↗</a></div>
        </div>
      </header>

      <section className="nc-method" id="contenu">
        <div className="nc-method-inner">
          <div className="nc-method-kicker">LE FIL DIRECTEUR DU GUIDE</div>
          <div className="nc-method-grid">
            <article><small>01 · COMPRENDRE</small><h3>Le contexte mental</h3><p>Conscience · sophistication · scepticisme · déclencheurs · objections.</p></article>
            <span>→</span>
            <article className="active"><small>02 · POSITIONNER</small><h3>La perception recherchée</h3><p>Audience · tension · différence · mécanisme · promesse · preuve · angle.</p></article>
            <span>→</span>
            <article><small>03 · STRUCTURER</small><h3>La progression persuasive</h3><p>AIDA · PAS · BAB, choisis selon le problème de persuasion et le canal.</p></article>
          </div>
        </div>
      </section>

      <section className="nc-expertise nc-wrap">
        <div className="nc-section-intro"><span>CE QUE LE GUIDE MONTRE</span><h2>Le copywriting ne commence pas avec une jolie phrase.</h2></div>
        <div className="nc-service-list">
          <article><b>01</b><h3>Avant les mots</h3><p>Le message doit faire progresser une décision : remarquer, se reconnaître, désirer, croire puis agir.</p></article>
          <article><b>02</b><h3>Le diagnostic</h3><p>Que sait déjà le prospect ? Qu’a-t-il déjà entendu ? Qu’hésite-t-il encore à croire ?</p></article>
          <article><b>03</b><h3>Conscience & sophistication</h3><p>La profondeur et la nature du message changent selon la maturité du prospect et du marché.</p></article>
          <article><b>04</b><h3>AIDA, PAS & BAB</h3><p>Chaque structure est expliquée dans sa logique, ses limites et son comportement selon l’email, la landing page, la publicité ou le script UGC.</p></article>
          <article><b>05</b><h3>Du raisonnement à l’exécution</h3><p>Comprendre → Positionner → Structurer → Écrire : choisir la structure en fonction du problème de persuasion, pas par habitude.</p></article>
        </div>
      </section>

      <section className="nc-cta">
        <span>PRINCIPE DE TRAVAIL</span>
        <h2>Comprendre → Positionner → Structurer → Écrire.</h2>
        <p>Le bon texte arrive avec le bon angle, au bon niveau de maturité et avec suffisamment de raisons de croire.</p>
        <a href="/#contact">Parler d’un projet ↗</a>
      </section>
      <footer className="nc-footer"><span>© 2026 Brice Bagoro</span><span>Copywriting · E-commerce · Conversion</span><a href="/">Retour à l’accueil</a></footer>
    </main>
  );
}

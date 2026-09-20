export default function Home() {
  return (
    <main className="nc-site">
      <nav className="nc-nav">
        <div className="nc-nav-inner">
          <a className="nc-logo" href="#top">NeuroConvert</a>
          <div className="nc-navlinks">
            <a href="#demo">Démonstration</a>
            <a href="#method">Méthode</a>
            <a href="#livrables">Livrables</a>
          </div>
          <a className="nc-contact" href="#contact">Réserver un appel</a>
        </div>
      </nav>

      <header className="nc-hero nc-wrap" id="top">
        <div className="nc-status">CREATIVE STRATEGY × E-COMMERCE</div>
        <h1>Le problème n’est pas de créer plus.<br />C’est de trouver <em>la prochaine raison</em> d’acheter.</h1>
        <p className="nc-hero-copy">NeuroConvert cherche ce que votre marque n’a pas encore dit à ses acheteurs — et le transforme en angles, concepts, hooks et scripts prêts à tester.</p>
        <div className="nc-hero-actions">
          <a className="nc-primary" href="#method">Voir comment ça fonctionne</a>
          <a className="nc-secondary" href="#demo">Voir un exemple concret</a>
        </div>
        <div className="nc-hero-meta">Recherche · Stratégie · Création <span>— pas de montage, pas de media buying</span></div>
      </header>

      <section className="nc-section nc-diagnostic">
        <div className="nc-wrap nc-two-col">
          <div>
            <span className="nc-kicker">AVANT LA CRÉATIVE</span>
            <h2>Vous changez vos créatives. Mais est-ce que vous changez vraiment de raison ?</h2>
          </div>
          <div className="nc-copy">
            <p><strong>Un hook fatigue avant que l’angle ne soit épuisé.</strong> C’est pour ça que changer le montage, le créateur ou le format ne suffit pas toujours : l’audience se lasse du message, pas de l’exécution.</p>
            <p>Le travail créatif commence avant le hook. Avant le script. Avant la production.</p>
          </div>
        </div>
        <div className="nc-wrap nc-callout">
          <span>LA QUESTION QUI PRÉCÈDE L’ÉCRITURE</span>
          <strong>Qu’est-ce que votre marché n’a pas encore suffisamment entendu ?</strong>
          <small>C’est la question qui peut ouvrir une nouvelle piste.</small>
        </div>
      </section>

      <section className="nc-section nc-demo" id="demo">
        <div className="nc-wrap">
          <span className="nc-kicker">UNE OFFRE · PLUSIEURS PORTES D’ENTRÉE</span>
          <h2>Le produit ne change pas.<br />La raison d’acheter peut changer.</h2>
          <p className="nc-lead">Exemple illustratif — Horizon 90. Sur ce projet, le produit est identique du début à la fin. Ce qui change, c’est la porte d’entrée proposée au prospect.</p>
          <div className="nc-branches">
            <article><span>Angle A</span><b>Insight</b><p>« [à compléter — ce que la recherche a révélé] »</p><strong>Angle</strong><p>[la raison formulée]</p><em>« Hook A — placeholder »</em></article>
            <article className="highlight"><span>Angle B</span><b>Insight</b><p>« [à compléter] »</p><strong>Angle</strong><p>[la raison formulée]</p><em>« Hook B — placeholder »</em></article>
            <article><span>Angle C</span><b>Insight</b><p>« [à compléter] »</p><strong>Angle</strong><p>[la raison formulée]</p><em>« Hook C — placeholder »</em></article>
          </div>
          <p className="nc-demo-close"><strong>Une offre peut contenir plusieurs raisons d’acheter.</strong> Notre travail, c’est de trouver lesquelles n’ont pas encore été dites — et lesquelles méritent d’être testées en premier.</p>
        </div>
      </section>

      <section className="nc-section nc-method" id="method">
        <div className="nc-wrap">
          <span className="nc-kicker">DE L’INSIGHT AU SCRIPT</span>
          <h2>Une créative ne commence pas par un hook.</h2>
          <div className="nc-steps">
            <div><b>01</b><strong>Insight</strong><p>Ce que le marché, les avis et les concurrents révèlent — avant toute idée créative.</p></div>
            <div><b>02</b><strong>Angle</strong><p>La raison qui n’a pas encore été dite à ce public.</p></div>
            <div><b>03</b><strong>Concept</strong><p>La scène qui rend cette raison regardable.</p></div>
            <div><b>04</b><strong>Hook</strong><p>La phrase qui ouvre l’idée dans les trois premières secondes.</p></div>
            <div><b>05</b><strong>Script / Brief</strong><p>La direction assez claire pour être produite par votre équipe.</p></div>
          </div>
          <p className="nc-signature">On ne commence pas par écrire. On commence par chercher ce qui n’a pas encore été dit.</p>
        </div>
      </section>

      <section className="nc-section nc-output" id="livrables">
        <div className="nc-wrap">
          <span className="nc-kicker">CE QUI PASSE EN PRODUCTION</span>
          <h2>Pas des prestations séparées. Un même processus, en quatre livrables.</h2>
          <div className="nc-output-grid">
            <article><b>01</b><h3>Recherche créative</h3><p>Marché, concurrents, avis, publicités déjà en circulation, objections et motivations.</p></article>
            <article><b>02</b><h3>Angles & concepts</h3><p>Les insights transformés en nouvelles hypothèses à tester, pas en variations du même message.</p></article>
            <article><b>03</b><h3>Hooks & copy</h3><p>Les accroches et les messages publicitaires qui portent chaque concept.</p></article>
            <article><b>04</b><h3>Scripts & briefs</h3><p>Des directions claires pour être produites avec votre équipe ou vos créateurs UGC.</p></article>
          </div>
          <p className="nc-output-close">On ne filme pas, on ne monte pas. <strong>On construit ce qui doit exister avant que la caméra ne s’allume.</strong></p>
        </div>
      </section>

      <section className="nc-platform">
        <div className="nc-wrap nc-platform-row">
          <div>
            <h2>Meta. TikTok.<br />Même question.</h2>
          </div>
          <div className="nc-tags">
            <span>Meta Ads</span><span>TikTok Ads</span><span>UGC</span><span>Short-form</span><span>Static</span><span>Video</span>
          </div>
        </div>
      </section>

      <section className="nc-about">
        <div className="nc-about-inner">
          <h2>Comprendre ce qui mérite d’être dit.<br />Puis lui donner une forme.</h2>
          <p>« Qu’est-ce que le prospect n’a pas encore entendu, compris ou cru ? »</p>
          <div>Brice — NeuroConvert</div>
        </div>
      </section>

      <section className="nc-cta" id="contact">
        <div className="nc-wrap nc-cta-inner">
          <div>
            <h2>Vous avez déjà des créatives en circulation ?</h2>
            <p>Diagnostic de vos angles actuels — envoyez vos 3 dernières créatives. On regarde ce qu’elles disent déjà, et ce qu’il reste à dire.</p>
            <a href="https://wa.me/14389422904" target="_blank" rel="noreferrer">Parler de mes prochaines créatives</a>
          </div>
        </div>
      </section>

      <footer className="nc-footer">
        <span>© 2026 NeuroConvert</span>
        <span>Creative strategy pour marques e-commerce</span>
      </footer>
    </main>
  );
}

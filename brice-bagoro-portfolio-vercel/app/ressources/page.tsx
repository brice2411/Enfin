const resources = [
  {
    id: "email-copywriting",
    type: "EMAIL",
    title: "Email Copywriting",
    meta: "9 pages · Français",
    cover: "Recueil d’emails — e-commerce & offres digitales",
    detail: "Séquences e-commerce et offres digitales",
    download: "",
  },
  {
    id: "paid-ads",
    type: "ADS",
    title: "Paid Ads & Angles",
    meta: "10 pages · Français",
    cover: "Recueil de hooks, angles & textes publicitaires",
    detail: "Hooks · Angles · Meta Ads",
    download: "",
  },
  {
    id: "creative-scripts",
    type: "SCRIPTS",
    title: "Creative Scripts / UGC",
    meta: "10 pages · Français",
    cover: "Recueil de scripts courts, tournables et orientés conversion",
    detail: "UGC · Face caméra · Démonstration",
    download: "",
  },
  {
    id: "copywriting-strategie",
    type: "GUIDE",
    title: "Persuasion, psychologie d’achat & structures de copywriting",
    meta: "14 pages · Français",
    cover: "Comprendre le prospect. Positionner le bon message. Structurer une persuasion claire.",
    detail: "AIDA · PAS · BAB · Psychologie d’achat",
    download: "https://www.dropbox.com/scl/fi/49b17znfkal8rtjomyvej/Copywriting-et-Strategie.pdf?rlkey=aqfieo537sw0exwmu8ot4m1bl&st=ghf0qazf&dl=1",
  },
];

export default function Ressources() {
  return (
    <main className="nc-site nc-resources-page">
      <nav className="nc-nav nc-wrap">
        <a className="nc-logo" href="/">BB.</a>
        <div className="nc-navlinks">
          <a href="/#expertise">Expertise</a>
          <a href="/#portfolio">Portfolio</a>
          <a href="/ressources">Ressources</a>
          <a href="/#about">À propos</a>
        </div>
        <a className="nc-contact" href="/#contact">Me contacter ↗</a>
      </nav>

      <header className="nc-library-head nc-wrap">
        <div>
          <span>RESSOURCES</span>
          <h1>Bibliothèque de travaux.</h1>
        </div>
        <p>Sélection de documents en copywriting, email, publicité et scripts.</p>
      </header>

      <section className="nc-doc-library nc-wrap">
        {resources.map((resource, i) => (
          <article className="nc-doc-card" key={resource.id}>
            <a className="nc-doc-thumb" href={`#preview-${resource.id}`} aria-label={`Prévisualiser ${resource.title}`}>
              <div className="nc-doc-paper">
                <small>DOCUMENT {String(i + 1).padStart(2, "0")}</small>
                <h2>{resource.title}</h2>
                <p>{resource.cover}</p>
                <div className="nc-doc-line" />
                <strong>Ipéné Brice Bagoro</strong>
                <em>Copywriting · E-commerce · Conversion</em>
                <span>neuroconvert.co</span>
              </div>
              <div className="nc-doc-hover">Aperçu</div>
            </a>
            <div className="nc-doc-label">
              <div><h3>{resource.title}</h3><p>{resource.meta}</p></div>
              <span>{resource.type}</span>
            </div>

            <div className="nc-doc-modal" id={`preview-${resource.id}`}>
              <a className="nc-doc-modal-bg" href="/ressources" aria-label="Fermer" />
              <div className="nc-doc-modal-panel">
                <div className="nc-doc-modal-top">
                  <div><small>{resource.type}</small><h2>{resource.title}</h2></div>
                  <a href="/ressources">Fermer ×</a>
                </div>
                <div className="nc-doc-modal-body">
                  <div className="nc-doc-large">
                    <small>DOCUMENT {String(i + 1).padStart(2, "0")}</small>
                    <h2>{resource.title}</h2>
                    <p>{resource.cover}</p>
                    <div className="nc-doc-line" />
                    <strong>Ipéné Brice Bagoro</strong>
                    <em>Copywriting · E-commerce · Conversion</em>
                    <span>{resource.detail}</span>
                  </div>
                  <div className="nc-doc-modal-actions">
                    <p>{resource.meta}</p>
                    {resource.download ? <a className="nc-primary" href={resource.download} target="_blank" rel="noreferrer">Télécharger le PDF <b>↓</b></a> : <span>PDF prêt — lien public à connecter</span>}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer className="nc-footer"><span>© 2026 Brice Bagoro</span><span>Ressources · Copywriting · Conversion</span><a href="/">Retour à l’accueil</a></footer>
    </main>
  );
}

const resources = [
  {
    id: "email-copywriting",
    index: "01",
    type: "EMAIL COPYWRITING",
    title: "Email Copywriting",
    meta: "9 pages · E-commerce · Offres digitales · Français",
    description: "Une sélection de séquences pensées pour différents niveaux de conscience, objections et moments de décision.",
    previewTitle: "Quand le produit n’est pas encore le sujet",
    previewKicker: "E-COMMERCE · AISIA · EMAIL 01",
    previewLines: [
      "Objet · Vos pieds ne devraient pas décider de la fin de votre journée",
      "Preview · Quand chaque pas devient plus présent au fil des heures…",
      "CTA · Découvrir l’approche Aisia",
    ],
    download: "",
  },
  {
    id: "paid-ads",
    index: "02",
    type: "PAID ADS & ANGLES",
    title: "Paid Ads & Angles",
    meta: "10 pages · Hooks · Angles · Meta Ads · Français",
    description: "Hooks, angles et textes publicitaires construits autour de différentes raisons d’écouter, de croire et d’agir.",
    previewTitle: "Le café à 6 € que vous n’aviez pas prévu",
    previewKicker: "E-COMMERCE · CAFÉ PORTABLE · ANGLE 01",
    previewLines: [
      "Angle · Économie quotidienne / autonomie",
      "Conscience · Problem Aware",
      "Headline · Votre expresso, où vous voulez",
    ],
    download: "",
  },
  {
    id: "creative-scripts",
    index: "03",
    type: "CREATIVE SCRIPTS / UGC / VIDEO",
    title: "Creative Scripts / UGC",
    meta: "10 pages · UGC · Face caméra · Démonstration · Français",
    description: "Des scripts courts, tournables et orientés conversion : UGC, démonstration, storytelling et traitement d’objections.",
    previewTitle: "Le moment où vous vérifiez votre sac sans raison",
    previewKicker: "E-COMMERCE · SAC ANTI-VOL · SCRIPT 01",
    previewLines: [
      "Format · UGC face caméra",
      "Durée · 25–30 sec",
      "Angle · Sécurité sans dramatisation",
    ],
    download: "",
  },
  {
    id: "copywriting-strategie",
    index: "04",
    type: "GUIDE · STRATÉGIE · COPYWRITING",
    title: "Persuasion, psychologie d’achat & structures de copywriting",
    meta: "14 pages · AIDA · PAS · BAB · Français",
    description: "Conscience, sophistication, scepticisme, positionnement et structures de persuasion réunis dans une même logique de travail.",
    previewTitle: "Le diagnostic avant d’écrire",
    previewKicker: "02 · LE DIAGNOSTIC AVANT D’ÉCRIRE",
    previewLines: [
      "Que sait-il déjà ? · Conscience",
      "Qu’a-t-il déjà entendu ? · Sophistication",
      "Qu’est-ce qu’il hésite encore à croire ? · Scepticisme",
    ],
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

      <header className="nc-resources-hero nc-wrap">
        <div className="nc-status">RESSOURCES · TRAVAUX SÉLECTIONNÉS</div>
        <h1>Voir le travail.<span>Avant de télécharger.</span></h1>
        <div className="nc-resources-intro">
          <p>Une bibliothèque de travaux rédactionnels et stratégiques. Chaque document peut être parcouru visuellement avant d’être ouvert ou téléchargé.</p>
          <div className="nc-resource-count"><b>04</b><span>documents sélectionnés</span></div>
        </div>
      </header>

      <section className="nc-resources-grid nc-wrap">
        {resources.map((resource) => (
          <article className="nc-resource-card" id={resource.id} key={resource.id}>
            <div className="nc-resource-preview">
              <div className="nc-doc-back" />
              <div className="nc-doc-sheet">
                <small>{resource.previewKicker}</small>
                <h3>{resource.previewTitle}</h3>
                <div className="nc-doc-rule" />
                {resource.previewLines.map((line) => <p key={line}>{line}</p>)}
                <div className="nc-doc-footer">Ipéné Brice Bagoro · neuroconvert.co</div>
              </div>
              <div className="nc-preview-chip">APERÇU</div>
            </div>

            <div className="nc-resource-copy">
              <small>{resource.index} · {resource.type}</small>
              <h2>{resource.title}</h2>
              <div className="nc-resource-meta">{resource.meta}</div>
              <p>{resource.description}</p>
              <div className="nc-resource-actions">
                <a className="nc-primary" href={`#preview-${resource.id}`}>Prévisualiser <b>↘</b></a>
                {resource.download ? (
                  <a className="nc-resource-download" href={resource.download} target="_blank" rel="noreferrer">Télécharger le PDF ↓</a>
                ) : (
                  <span className="nc-resource-pending">Téléchargement à connecter</span>
                )}
              </div>
            </div>

            <div className="nc-resource-expanded" id={`preview-${resource.id}`}>
              <div className="nc-resource-expanded-head">
                <span>PRÉVISUALISATION</span>
                <a href={`#${resource.id}`}>Réduire ↑</a>
              </div>
              <div className="nc-expanded-pages">
                <div className="nc-expanded-sheet">
                  <small>{resource.previewKicker}</small>
                  <h3>{resource.previewTitle}</h3>
                  {resource.previewLines.map((line) => <p key={line}>{line}</p>)}
                  <blockquote>Extrait représentatif du document. La version complète conserve la mise en page et le développement du contenu.</blockquote>
                </div>
                <div className="nc-expanded-info">
                  <span>{resource.meta}</span>
                  <h3>Un aperçu avant l’ouverture du fichier complet.</h3>
                  <p>{resource.description}</p>
                  {resource.download && <a href={resource.download} target="_blank" rel="noreferrer">Télécharger le document complet ↓</a>}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="nc-cta">
        <span>AU-DELÀ DES LIVRABLES</span>
        <h2>Le raisonnement derrière les mots.</h2>
        <p>Copywriting · E-commerce · Shopify · Email · Publicités · Conversion.</p>
        <a href="/#portfolio">Voir les études de cas ↗</a>
      </section>

      <footer className="nc-footer"><span>© 2026 Brice Bagoro</span><span>Ressources · Copywriting · Conversion</span><a href="/">Retour à l’accueil</a></footer>
    </main>
  );
}

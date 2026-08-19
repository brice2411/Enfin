import styles from "./avant-case.module.css";

const themes = [
  "Recherche marché et compréhension client",
  "Positionnement, offre et message",
  "Angles, hooks et stratégie créative",
  "Diagnostic et arbitrages",
  "Testing et apprentissage"
];

export default function AvantLeOuiBookPage() {
  return (
    <main className={styles.case}>
      <nav className={`${styles.top} ${styles.wrap}`}>
        <a className={styles.brand} href="/">BB. / NEUROCONVERT</a>
        <a className={styles.back} href="/#portfolio">Retour au portfolio ↗</a>
      </nav>

      <header className={`${styles.hero} ${styles.wrap}`}>
        <div className={styles.bookStage} aria-hidden="true">
          <div className={styles.bookCover}>
            <div className={styles.bookTitle}>AVANT<br/>LE OUI</div>
            <div className={styles.bookRule} />
            <div className={styles.bookSubtitle}>COMPRENDRE CE QUI<br/>PRÉCÈDE LA DÉCISION</div>
            <div className={styles.compass}><span>◆</span></div>
            <div className={styles.bookAuthor}>BRICE BAGORO<br/><small>NEUROCONVERT</small></div>
          </div>
        </div>

        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>OUVRAGE · STRATÉGIE · COPYWRITING · CONVERSION</span>
          <h1>Avant le Oui</h1>
          <h2>Comprendre ce qui précède la décision.</h2>
          <p>Un ouvrage de 139 pages sur le travail qui précède le message : comprendre un marché, lire une audience, diagnostiquer, choisir un angle, construire une créative et transformer les tests en apprentissages.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="/avant-le-oui">Lire le livre en ligne ↗</a>
            <a className={styles.secondary} href="/#portfolio">Voir les autres projets</a>
          </div>
          <div className={styles.meta}><span>139 PAGES</span><span>BRICE BAGORO</span><span>NEUROCONVERT</span></div>
        </div>
      </header>

      <section className={styles.statement}>
        <div className={`${styles.wrap} ${styles.statementGrid}`}>
          <span className={styles.eyebrow}>CE QUE L’OUVRAGE DÉMONTRE</span>
          <div>
            <h2>Le message ne commence pas avec les mots.</h2>
            <p>Le livre rend visible ma manière de travailler : partir du marché et de l’audience, comparer plusieurs chemins possibles, arbitrer, puis traduire le diagnostic en positionnement, message, créatives et tests.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.contents} ${styles.wrap}`}>
        <div className={styles.contentsHead}>
          <span className={styles.eyebrow}>DANS LE LIVRE</span>
          <h2>De la compréhension du marché à l’apprentissage.</h2>
        </div>
        <div className={styles.themeList}>
          {themes.map((theme, index) => (
            <article key={theme}><b>0{index + 1}</b><p>{theme}</p><span>→</span></article>
          ))}
        </div>
      </section>

      <section className={styles.method}>
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>LA LOGIQUE</span>
          <div className={styles.flow}>
            {['Observer','Comprendre','Diagnostiquer','Choisir','Formuler','Exécuter','Tester','Apprendre'].map((step, index) => (
              <article key={step}><b>{String(index + 1).padStart(2,'0')}</b><span>{step}</span></article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>AVANT LE OUI</span>
          <h2>Entrer dans la réflexion derrière le message.</h2>
          <p>Marché, audience, offre, positionnement, angles, créatives, diagnostic et testing : le livre rassemble la méthode dans un seul parcours.</p>
          <a href="/avant-le-oui">Commencer la lecture ↗</a>
        </div>
      </section>
    </main>
  );
}

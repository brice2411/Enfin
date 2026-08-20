import styles from "./reader.module.css";

const downloadUrl = "https://www.dropbox.com/scl/fi/egbefj2s38jpnbws5489p/Avant_le_Oui_Brice_Bagoro_NeuroConvert.pdf?rlkey=vzegfiq4a82s5lfteodtjmja9&st=y8mgp5qx&dl=1";

const discoveries = [
  {
    n: "01",
    title: "Lire un marché avant d’écrire",
    text: "Identifier ce que les prospects veulent vraiment, ce qu’ils comprennent déjà, les solutions qu’ils comparent et les tensions qui structurent leur décision."
  },
  {
    n: "02",
    title: "Transformer l’observation en diagnostic",
    text: "Passer des données, verbatims et signaux du marché à une lecture exploitable : problème prioritaire, niveau de conscience, sophistication et objections."
  },
  {
    n: "03",
    title: "Choisir avant de formuler",
    text: "Comparer plusieurs directions possibles, arbitrer entre promesse, mécanisme, preuve et angle, puis retenir le chemin le plus cohérent avec le contexte."
  },
  {
    n: "04",
    title: "Construire le message et la créative",
    text: "Traduire le diagnostic en positionnement, hooks, arguments, scripts et formats sans diluer l’idée stratégique qui doit porter la conversion."
  },
  {
    n: "05",
    title: "Tester pour apprendre",
    text: "Construire des tests qui répondent à une hypothèse précise, lire les signaux avec prudence et transformer chaque résultat en apprentissage utile."
  }
];

const steps = ["Observer", "Comprendre", "Diagnostiquer", "Choisir", "Formuler", "Exécuter", "Tester", "Apprendre"];

export const dynamic = "force-static";

export default function AvantLeOuiPage() {
  return (
    <main className={styles.reader}>
      <nav className={styles.nav}>
        <a href="/" className={styles.brand}>BB. / NEUROCONVERT</a>
        <a href="/#portfolio">Retour au portfolio ↗</a>
      </nav>

      <header className={styles.hero}>
        <div className={styles.cover} aria-hidden="true">
          <small>NEUROCONVERT</small>
          <h1>AVANT<br/>LE OUI</h1>
          <span className={styles.rule} />
          <p>COMPRENDRE CE QUI<br/>PRÉCÈDE LA DÉCISION</p>
          <div className={styles.mark}>◇</div>
          <footer>BRICE BAGORO</footer>
        </div>

        <div className={styles.heroCopy}>
          <span>OUVRAGE · 139 PAGES</span>
          <h1>Avant le Oui</h1>
          <p>Comprendre ce qui précède la décision.</p>
          <div className={styles.intro}>
            Un message convaincant n’est pas d’abord une question de mots. Il est le résultat d’un diagnostic juste : comprendre le marché, lire l’audience, choisir une direction et savoir ce que chaque test doit apprendre.
          </div>
          <div className={styles.actions}>
            <a href="/#portfolio">Retour au portfolio ←</a>
            <a className={styles.download} href={downloadUrl} target="_blank" rel="noreferrer">Télécharger le livre en PDF ↓</a>
          </div>
        </div>
      </header>

      <div className={styles.bookMeta}>
        <span>BRICE BAGORO</span>
        <span>NEUROCONVERT</span>
        <span>STRATÉGIE · COPYWRITING · CONVERSION</span>
      </div>

      <section className={styles.statement}>
        <div className={styles.statementGrid}>
          <span className={styles.eyebrow}>CE QUE L’OUVRAGE DÉMONTRE</span>
          <div>
            <h2>La stratégie commence bien avant la créative.</h2>
            <p>Avant le Oui rend visible le travail qui précède l’écriture : observer, comprendre, diagnostiquer, comparer plusieurs chemins, arbitrer, puis seulement formuler. Le livre montre comment cette logique se prolonge jusqu’aux créatives, aux tests et à l’apprentissage.</p>
          </div>
        </div>
      </section>

      <section className={styles.discovery}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>CE QUE VOUS ALLEZ DÉCOUVRIR</span>
          <h2>Du marché au message, puis du message à l’apprentissage.</h2>
        </div>
        <div className={styles.discoveryGrid}>
          {discoveries.map((item) => (
            <article key={item.n}>
              <b>{item.n}</b>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.method}>
        <div className={styles.methodInner}>
          <span className={styles.eyebrow}>LA LOGIQUE NEUROCONVERT</span>
          <h2>Une méthode pour réduire les décisions prises au hasard.</h2>
          <div className={styles.flow}>
            {steps.map((step, index) => (
              <article key={step}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span>{step}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.forWho}>
        <div>
          <span className={styles.eyebrow}>À QUI S’ADRESSE CE LIVRE</span>
          <h2>À ceux qui veulent comprendre pourquoi un message fonctionne avant de chercher une meilleure formulation.</h2>
        </div>
        <div className={styles.forWhoCopy}>
          <p>Pour les fondateurs, marketeurs, copywriters et créateurs qui veulent mieux relier recherche marché, positionnement, message, créative et testing.</p>
          <p>Le but n’est pas de fournir une collection de formules. Le but est de construire une manière de penser reproductible.</p>
        </div>
      </section>

      <section className={styles.finalCta}>
        <span className={styles.eyebrow}>AVANT LE OUI</span>
        <h2>Entrer dans la réflexion derrière le message.</h2>
        <p>139 pages pour comprendre ce qui se passe avant la formulation, avant la créative et avant la conversion.</p>
        <div className={styles.finalActions}>
          <a className={styles.primary} href={downloadUrl} target="_blank" rel="noreferrer">Télécharger le livre en PDF ↓</a>
          <a href="/#portfolio">Retour au portfolio ↗</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <strong>Avant le Oui</strong>
        <span>Brice Bagoro · NeuroConvert</span>
        <a href="/#portfolio">Portfolio ↗</a>
      </footer>
    </main>
  );
}

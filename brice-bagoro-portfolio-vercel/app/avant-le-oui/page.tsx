import part0 from "./book-part0";
import part1 from "./book-part1";
import part2 from "./book-part2";
import part3 from "./book-part3";
import styles from "./reader.module.css";

const bookHtml = [part0, part1, part2, part3].join("");
const downloadUrl = "https://www.dropbox.com/scl/fi/e0tlrlcznt0b4xg3ben3c/avant-le-oui-download.pdf?rlkey=rhpmnhfo58sk2nl7rnwf3mx6b&st=wedb9zw5&dl=1";

export const dynamic = "force-static";

export default function AvantLeOuiReader() {
  return (
    <main className={styles.reader}>
      <nav className={styles.nav}>
        <a href="/" className={styles.brand}>BB. / NEUROCONVERT</a>
        <div className={styles.navLinks}>
          <a href="/projects/avant-le-oui/decision-framework">Présentation</a>
          <a href="/#portfolio">Portfolio ↗</a>
        </div>
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
          <div className={styles.actions}>
            <a href="#lecture">Commencer la lecture ↓</a>
            <a
              className={styles.download}
              href={downloadUrl}
              target="_blank"
              rel="noreferrer"
            >
              Télécharger le livre en PDF ↓
            </a>
          </div>
        </div>
      </header>

      <div className={styles.bookMeta}>
        <span>BRICE BAGORO</span>
        <span>NEUROCONVERT</span>
        <span>STRATÉGIE · COPYWRITING · CONVERSION</span>
      </div>

      <article
        id="lecture"
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: bookHtml }}
      />

      <footer className={styles.footer}>
        <strong>Avant le Oui</strong>
        <span>Brice Bagoro · NeuroConvert</span>
        <div className={styles.footerLinks}>
          <a href={downloadUrl} target="_blank" rel="noreferrer">Télécharger le PDF ↓</a>
          <a href="/#portfolio">Retour au portfolio ↗</a>
        </div>
      </footer>
    </main>
  );
}

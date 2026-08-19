import { inflateSync } from "node:zlib";
import part0 from "./book-part0";
import part1 from "./book-part1";
import part2 from "./book-part2";
import part3 from "./book-part3";
import rest0 from "./rest0";
import rest1 from "./rest1";
import rest2 from "./rest2";
import rest3 from "./rest3";
import rest4 from "./rest4";
import styles from "./reader.module.css";

const compressed = [rest0, rest1, rest2, rest3, rest4].join("");
const remainingHtml = inflateSync(Buffer.from(compressed, "base64")).toString("utf8");
const bookHtml = [part0, part1, part2, part3, remainingHtml].join("");

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
          <a href="#lecture">Commencer la lecture ↓</a>
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
        <a href="/#portfolio">Retour au portfolio ↗</a>
      </footer>
    </main>
  );
}

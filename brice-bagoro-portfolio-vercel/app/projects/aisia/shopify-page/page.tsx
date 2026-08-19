import styles from "./aisia-case.module.css";

export default function AisiaShopifyPage() {
  return (
    <main className={styles.case}>
      <nav className={`${styles.top} ${styles.wrap}`}>
        <a className={styles.brand} href="/">BB. / AISIA</a>
        <a className={styles.back} href="/#portfolio">Retour au portfolio ↗</a>
      </nav>

      <section className={`${styles.hero} ${styles.wrap}`}>
        <span className={styles.eyebrow}>ÉTUDE DE CAS · SHOPIFY · CRO</span>
        <h1>Aisia <span>Construire une offre e-commerce crédible.</span></h1>
        <p className={styles.lead}>De l’analyse concurrentielle à l’architecture de l’offre et de la page produit, un projet D2C construit autour du niveau de conscience, des objections et du parcours de décision.</p>
        <div className={styles.tags}><span>RECHERCHE MARCHÉ</span><span>POSITIONNEMENT</span><span>PAGE PRODUIT</span><span>STRUCTURE D’OFFRE</span><span>CRO</span></div>
      </section>

      <section className={styles.challenge}>
        <div className={`${styles.wrap} ${styles.challengeGrid}`}>
          <div><span className={styles.eyebrow}>LE DÉFI</span><h2>Le problème n’était pas l’absence de solutions.</h2></div>
          <p>Le marché des semelles est déjà chargé de produits proches et de promesses similaires. L’enjeu n’était donc pas de simplement “vendre plus fort”, mais de rendre l’offre plus crédible, plus claire et plus facile à évaluer pour un prospect déjà exposé à de nombreuses alternatives.</p>
        </div>
      </section>

      <section className={`${styles.paths} ${styles.wrap}`}>
        <div className={styles.intro}>
          <span>LES CHEMINS POSSIBLES</span>
          <h2 className={styles.sectionTitle}>Avant de choisir une direction, plusieurs stratégies pouvaient fonctionner.</h2>
        </div>
        <div className={styles.pathGrid}>
          <article className={styles.path}><small>CHEMIN 01</small><h3>Amplifier la promesse</h3><p>Mettre fortement en avant le soulagement et la transformation attendue.</p><strong>Avantage : impact immédiat.</strong><p>Risque : ressembler aux offres déjà présentes et renforcer le scepticisme.</p></article>
          <article className={styles.path}><small>CHEMIN 02</small><h3>Dominer par la technicité</h3><p>Construire la vente autour des matériaux, zones de soutien et caractéristiques produit.</p><strong>Avantage : crédibilité rationnelle.</strong><p>Risque : produire une page informative mais peu engageante.</p></article>
          <article className={`${styles.path} ${styles.chosen}`}><small>CHEMIN 03 · RETENU</small><h3>Construire la décision autour de la compréhension</h3><p>Partir du problème vécu, expliquer progressivement le fonctionnement, réduire les objections puis introduire l’offre.</p><strong>Pourquoi : le prospect connaît déjà la catégorie, mais cherche une raison crédible de choisir cette offre.</strong></article>
        </div>
      </section>

      <section className={`${styles.decision} ${styles.wrap}`}>
        <div className={styles.decisionBox}>
          <span className={styles.eyebrow}>L’ARBITRAGE</span>
          <h3>Moins de promesse spectaculaire. Plus de raisons de croire.</h3>
          <p>L’analyse a conduit à privilégier une persuasion progressive : rendre le mécanisme visible, expliquer l’usage, réduire l’incertitude et présenter les compléments comme des extensions cohérentes de la routine plutôt que comme de simples ajouts au panier.</p>
          <div className={styles.decisionList}>
            <div><b>01</b><span>Promesse volontairement mesurée</span></div>
            <div><b>02</b><span>Mécanisme produit rendu visible</span></div>
            <div><b>03</b><span>Protocole intégré pour réduire l’incertitude</span></div>
            <div><b>04</b><span>Upsells reliés à une routine cohérente</span></div>
          </div>
        </div>
      </section>

      <section className={styles.result}>
        <div className={styles.wrap}>
          <div className={styles.resultIntro}><span className={styles.eyebrow}>LE RÉSULTAT</span><h2 className={styles.sectionTitle}>Traduire le raisonnement en page produit.</h2><p>Plutôt qu’une capture interminable, trois extraits montrent comment les décisions stratégiques se matérialisent concrètement dans l’expérience.</p></div>
          <div className={styles.resultGrid}>
            <article className={styles.resultCard}><div className={styles.visual}><img src="https://brice-bagoro-portfolio.brice24.chatgpt.site/aisia-brand-hero.png" alt="Hero de la page produit Aisia" /></div><div className={styles.resultCopy}><small>01 · PROMESSE & HIÉRARCHIE</small><h3>Une entrée en matière volontairement crédible</h3><p>Le hero privilégie un bénéfice compréhensible, une structure claire et une présentation mesurée du produit plutôt qu’une transformation spectaculaire.</p></div></article>
            <article className={styles.resultCard}><div className={styles.visual}><img src="https://brice-bagoro-portfolio.brice24.chatgpt.site/aisia-product.png" alt="Présentation du mécanisme Aisia" /></div><div className={styles.resultCopy}><small>02 · MÉCANISME</small><h3>Expliquer avant de pousser la décision</h3><p>Les zones de soutien, la construction et l’usage servent à donner au prospect des raisons concrètes de comprendre ce qu’il achète.</p></div></article>
            <article className={styles.resultCard}><div className={styles.visual}><img src="https://brice-bagoro-portfolio.brice24.chatgpt.site/aisia-guide-mockup.png" alt="Guide et offre Aisia" /></div><div className={styles.resultCopy}><small>03 · OFFRE & CONTINUITÉ</small><h3>Transformer le produit en système cohérent</h3><p>Le protocole et les compléments prolongent la logique d’usage. Ils ne sont pas présentés comme des accessoires isolés, mais comme une continuité naturelle de l’offre principale.</p></div></article>
          </div>
        </div>
      </section>

      <section className={`${styles.summary} ${styles.wrap}`}>
        <p>RECHERCHE MARCHÉ · POSITIONNEMENT · ARCHITECTURE DE L’OFFRE · COPYWRITING · CRO</p>
        <h2>Une page produit n’est que la partie visible d’une série de décisions en amont.</h2>
        <a className={styles.cta} href="/#portfolio">Voir les autres projets ↗</a>
      </section>

      <a className={styles.wa} href="https://wa.me/14389422904" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M19.11 17.21c-.23-.12-1.34-.66-1.55-.74-.21-.08-.36-.12-.52.12-.15.23-.59.74-.72.9-.13.15-.27.17-.5.06-.23-.12-.97-.36-1.84-1.14-.68-.61-1.14-1.36-1.28-1.59-.13-.23-.01-.35.1-.47.1-.1.23-.27.35-.41.12-.13.15-.23.23-.39.08-.15.04-.29-.02-.41-.06-.12-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4h-.44c-.15 0-.41.06-.62.29-.21.23-.81.79-.81 1.93 0 1.14.83 2.24.95 2.4.12.15 1.63 2.49 3.95 3.49.55.24.98.38 1.32.49.55.18 1.05.15 1.45.09.44-.07 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.15-.44-.27Z"/><path fill="currentColor" d="M16.02 3.2c-7.05 0-12.78 5.73-12.78 12.78 0 2.25.59 4.45 1.7 6.38L3.13 28.8l6.6-1.73a12.72 12.72 0 0 0 6.28 1.6h.01c7.05 0 12.78-5.73 12.78-12.78S23.07 3.2 16.02 3.2Zm0 23.31h-.01a10.57 10.57 0 0 1-5.39-1.48l-.39-.23-3.92 1.03 1.05-3.82-.25-.39a10.55 10.55 0 1 1 8.91 4.89Z"/></svg>
      </a>
    </main>
  );
}

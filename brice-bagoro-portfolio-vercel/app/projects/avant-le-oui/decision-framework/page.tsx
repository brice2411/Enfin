import styles from "./avant-case.module.css";

const lenses = [
  {
    n: "01",
    title: "Conscience",
    question: "Que sait déjà la personne ?",
    text: "Avant d’expliquer, il faut situer le prospect : ignore-t-il encore le problème, cherche-t-il une solution, compare-t-il déjà des offres ou attend-il simplement une raison de choisir ?"
  },
  {
    n: "02",
    title: "Sophistication",
    question: "Qu’a-t-elle déjà trop entendu ?",
    text: "Plus un marché a entendu les mêmes promesses, moins une nouvelle formulation suffit. Le message doit alors préciser le mécanisme, la différence ou la preuve au lieu d’augmenter artificiellement l’intensité."
  },
  {
    n: "03",
    title: "Scepticisme",
    question: "Que refuse-t-elle encore de croire ?",
    text: "Une promesse peut être désirable et malgré tout échouer si elle dépasse le niveau de crédibilité accepté. Le rôle du message devient alors de réduire le risque perçu et de reconstruire la croyance."
  }
];

const decisions = [
  {label:"POSITIONNEMENT", from:"Parler de tout ce que l’offre sait faire", to:"Choisir la place que l’offre doit occuper dans l’esprit du prospect"},
  {label:"PROMESSE", from:"Rendre le résultat plus spectaculaire", to:"Rendre le résultat plus précis, crédible et contextualisé"},
  {label:"PREUVE", from:"Ajouter des preuves partout", to:"Relier chaque preuve au doute précis qu’elle doit réduire"},
  {label:"CTA", from:"Pousser l’action le plus tôt possible", to:"Demander l’action lorsque compréhension, désir et confiance sont suffisamment alignés"}
];

export default function AvantLeOuiCasePage() {
  return (
    <main className={styles.case}>
      <nav className={`${styles.top} ${styles.wrap}`}>
        <a className={styles.brand} href="/">BB. / AVANT LE OUI</a>
        <a className={styles.back} href="/#portfolio">Retour au portfolio ↗</a>
      </nav>

      <header className={`${styles.hero} ${styles.wrap}`}>
        <span className={styles.eyebrow}>ÉTUDE DE CAS · MÉTHODE · PSYCHOLOGIE DE DÉCISION</span>
        <h1>Avant le Oui <em>Comprendre ce qui doit devenir vrai avant qu’une personne choisisse.</em></h1>
        <div className={styles.heroGrid}>
          <p>Le projet part d’un constat simple : beaucoup de contenus de conversion commencent trop tard. Ils cherchent immédiatement le bon hook, la bonne structure ou le bon CTA, alors que la décision dépend souvent de ce qui précède ces éléments : ce que la personne sait déjà, ce qu’elle a trop entendu, ce qu’elle croit encore possible et le risque qu’elle associe au choix.</p>
          <div className={styles.meta}><span>STRATÉGIE</span><span>PSYCHOLOGIE</span><span>POSITIONNEMENT</span><span>MESSAGE</span></div>
        </div>
      </header>

      <section className={styles.problem}>
        <div className={`${styles.wrap} ${styles.problemGrid}`}>
          <div><span className={styles.eyebrow}>LE PROBLÈME DE DÉPART</span><h2>Le copywriting devient fragile quand il commence par les mots.</h2></div>
          <div className={styles.problemCopy}>
            <p>Deux messages peuvent être parfaitement rédigés et produire des effets opposés selon le contexte mental du prospect. Une promesse peut sembler claire mais arriver trop tôt. Une preuve peut être solide mais répondre au mauvais doute. Une objection peut être traitée alors que le prospect n’a même pas encore compris pourquoi l’offre mérite son attention.</p>
            <strong>La question du projet : que faut-il comprendre avant de choisir quoi dire ?</strong>
          </div>
        </div>
      </section>

      <section className={`${styles.lenses} ${styles.wrap}`}>
        <div className={styles.sectionHead}><span>LES 3 LENTILLES</span><h2>Trois variables pour éviter de parler au bon prospect avec le mauvais message.</h2></div>
        <div className={styles.lensGrid}>
          {lenses.map((lens) => (
            <article key={lens.n}>
              <b>{lens.n}</b>
              <small>{lens.title}</small>
              <h3>{lens.question}</h3>
              <p>{lens.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.crossing}>
        <div className={styles.wrap}>
          <div className={styles.crossHead}><span>LE CROISEMENT</span><h2>Une variable seule ne suffit pas.</h2><p>Le vrai diagnostic apparaît lorsqu’on croise conscience, sophistication et scepticisme. C’est ce croisement qui détermine ce qu’il faut expliquer, ce qu’il faut éviter et ce qu’il faut prouver.</p></div>
          <div className={styles.matrix}>
            <div className={styles.matrixTop}><span>CONSCIENCE</span><span>SOPHISTICATION</span><span>SCEPTICISME</span></div>
            <div className={styles.matrixBody}>
              <article><small>CAS A</small><h3>Peu conscient + marché peu sophistiqué</h3><p>Priorité : rendre le problème visible et compréhensible avant de parler longuement de l’offre.</p></article>
              <article><small>CAS B</small><h3>Solution aware + marché saturé</h3><p>Priorité : montrer pourquoi cette approche est différente, sans recycler une promesse déjà banalisée.</p></article>
              <article><small>CAS C</small><h3>Très conscient + scepticisme élevé</h3><p>Priorité : réduire le risque, préciser la preuve et faciliter la décision plutôt que rééduquer le prospect.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.arbitrage} ${styles.wrap}`}>
        <div className={styles.sectionHead}><span>LES ARBITRAGES</span><h2>La profondeur du raisonnement apparaît dans ce qu’on choisit de ne pas faire.</h2></div>
        <div className={styles.decisionList}>
          {decisions.map((decision) => (
            <article key={decision.label}>
              <small>{decision.label}</small>
              <div><span>CHEMIN FACILE</span><p>{decision.from}</p></div>
              <b>→</b>
              <div><span>CHOIX RETENU</span><p>{decision.to}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.system}>
        <div className={styles.wrap}>
          <div className={styles.systemHead}><span>DU DIAGNOSTIC AU MESSAGE</span><h2>Transformer une réflexion abstraite en système utilisable.</h2></div>
          <div className={styles.flow}>
            <article><b>01</b><h3>Observer</h3><p>Situation, langage du marché, déclencheurs, désirs et résistances.</p></article>
            <i>→</i>
            <article><b>02</b><h3>Diagnostiquer</h3><p>Conscience, sophistication, scepticisme, risque perçu.</p></article>
            <i>→</i>
            <article><b>03</b><h3>Structurer</h3><p>Positionnement, proposition de valeur, promesse, mécanisme, preuve.</p></article>
            <i>→</i>
            <article><b>04</b><h3>Déployer</h3><p>Angles, hooks, pages, emails, scripts, objections et CTA.</p></article>
          </div>
        </div>
      </section>

      <section className={`${styles.tools} ${styles.wrap}`}>
        <div className={styles.toolsIntro}><span>LE RÉSULTAT ÉDITORIAL</span><h2>Pas seulement un livre : une méthode de travail.</h2><p>Le contenu est organisé pour faire passer le lecteur de la compréhension à l’application : scènes, diagnostics, cartes, ateliers, mini-cas, checklists et décisions de stratège.</p></div>
        <div className={styles.toolGrid}>
          <article><small>CANVAS 01</small><h3>Diagnostic d’audience</h3><p>Ce qu’elle sait · ce qu’elle a trop entendu · ce qu’elle refuse de croire.</p></article>
          <article><small>CANVAS 02</small><h3>Architecture de l’offre</h3><p>Valeur · promesse · USP · mécanisme · preuve · risque · CTA.</p></article>
          <article><small>CANVAS 03</small><h3>Plan de message</h3><p>Tension · désir · angle · hook · objection · preuve · prochaine information utile.</p></article>
          <article><small>CANVAS 04</small><h3>Boucle d’apprentissage</h3><p>Hypothèse · test · signal · interprétation · décision suivante.</p></article>
        </div>
      </section>

      <section className={styles.takeaway}>
        <div className={styles.wrap}>
          <span>CE QUE LE PROJET DÉMONTRE</span>
          <h2>La persuasion ne commence pas avec la phrase. Elle commence avec le diagnostic.</h2>
          <p>Avant le Oui rassemble la psychologie de décision, le positionnement et le copywriting dans une même logique : comprendre ce qui doit devenir plus clair, plus désirable, plus crédible ou moins risqué avant de demander l’action.</p>
          <a href="/#portfolio">Voir les autres projets ↗</a>
        </div>
      </section>
    </main>
  );
}

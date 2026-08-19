import styles from "./horizon-case.module.css";

const concepts = [
  {
    n: "01",
    label: "ANGLE IDENTITÉ",
    title: "Vous n’avez pas besoin de devenir quelqu’un d’autre.",
    hook: "Vous avez surtout besoin de retrouver une version de vous que vos habitudes ont mise en pause.",
    belief: "Le changement peut commencer par une reconnexion à soi, pas par une discipline extrême.",
    why: "Cet angle parle au prospect qui ne se reconnaît plus dans son niveau d’énergie, sa routine ou son rapport à son corps.",
    cta: "Reprendre le contrôle en 90 jours"
  },
  {
    n: "02",
    label: "ANGLE FRICTION",
    title: "Le problème n’est peut-être pas votre motivation.",
    hook: "Un plan trop difficile à tenir échoue même avec de bonnes intentions.",
    belief: "La constance dépend autant de la structure du programme que de la volonté du participant.",
    why: "Cet angle cible la fatigue des méthodes trop ambitieuses, des reprises brutales et des routines impossibles à maintenir.",
    cta: "Voir une méthode plus tenable"
  },
  {
    n: "03",
    label: "ANGLE MÉCANISME",
    title: "90 jours. Trois phases. Une progression qui s’adapte.",
    hook: "Repartir, construire, stabiliser : chaque phase demande un effort différent.",
    belief: "Une transformation crédible devient plus facile à croire lorsqu’on comprend comment elle se construit.",
    why: "Cet angle répond au prospect plus rationnel qui veut comprendre le chemin avant d’adhérer à la promesse.",
    cta: "Découvrir les 3 phases"
  }
];

export default function Horizon90CasePage() {
  return (
    <main className={styles.case}>
      <nav className={`${styles.top} ${styles.wrap}`}>
        <a className={styles.brand} href="/">BB. / HORIZON 90</a>
        <a className={styles.back} href="/#portfolio">Retour au portfolio ↗</a>
      </nav>

      <header className={`${styles.hero} ${styles.wrap}`}>
        <span className={styles.eyebrow}>ÉTUDE DE CAS · STRATÉGIE CRÉATIVE · COPYWRITING PUBLICITAIRE</span>
        <h1>Une offre.<br/><em>Trois raisons différentes d’y croire.</em></h1>
        <div className={styles.heroGrid}>
          <p>Horizon 90 est un programme de remise en forme sur 90 jours pensé pour des personnes qui ont déjà essayé de reprendre une routine sans réussir à la maintenir. La promesse n’est donc pas simplement « se remettre en forme », mais rendre la progression suffisamment réaliste pour qu’elle puisse durer. Le travail créatif part de cette tension : une même offre peut devenir pertinente pour des raisons très différentes. Plutôt que de concentrer identité, frustration et méthode dans une seule publicité, l’étude isole trois hypothèses de persuasion pour observer laquelle crée le plus d’attention, de croyance et d’intention.</p>
          <div className={styles.meta}><span>ANGLES</span><span>HOOKS</span><span>CREATIVE STRATEGY</span><span>ADS</span></div>
        </div>
      </header>

      <section className={styles.brief}>
        <div className={`${styles.wrap} ${styles.briefGrid}`}>
          <div><span className={styles.eyebrow}>LE BRIEF</span><h2>Le même programme peut être pertinent pour plusieurs raisons.</h2></div>
          <div className={styles.briefCopy}>
            <p>Une seule promesse publicitaire aurait forcé tous les prospects à entrer par la même porte. Or un prospect peut vouloir retrouver confiance, un autre chercher enfin une routine qu’il tient, et un troisième avoir besoin de comprendre la méthode avant de croire au résultat.</p>
            <strong>La question stratégique : quel motif mérite d’être isolé dans une créative au lieu d’être noyé dans un message qui essaie de tout dire ?</strong>
          </div>
        </div>
      </section>

      <section className={`${styles.map} ${styles.wrap}`}>
        <div className={styles.sectionHead}><span>LA CARTE DES MOTIVATIONS</span><h2>Trois tensions. Trois croyances à faire évoluer.</h2></div>
        <div className={styles.motives}>
          <article><b>01</b><small>IDENTITÉ</small><h3>« Je ne me reconnais plus. »</h3><p>Le désir principal n’est pas uniquement physique : retrouver une sensation de maîtrise et de cohérence avec soi.</p></article>
          <article><b>02</b><small>FRICTION</small><h3>« Je recommence, puis j’abandonne. »</h3><p>Le problème perçu n’est plus le manque d’information, mais l’incapacité à tenir les méthodes déjà essayées.</p></article>
          <article><b>03</b><small>MÉCANISME</small><h3>« Pourquoi cette fois serait différente ? »</h3><p>Le prospect veut une raison concrète de croire qu’un programme de 90 jours ne reproduira pas les mêmes échecs.</p></article>
        </div>
      </section>

      <section className={styles.lab}>
        <div className={styles.wrap}>
          <div className={styles.labHead}><span>LE LABO CRÉATIF</span><h2>Un angle n’est pas un synonyme. Il change la raison de s’arrêter.</h2><p>Chaque concept garde la même offre, mais change la tension d’entrée, la croyance travaillée et la manière de formuler la promesse.</p></div>
          <div className={styles.concepts}>
            {concepts.map((concept) => (
              <article className={styles.concept} key={concept.n}>
                <div className={styles.strategy}>
                  <small>{concept.n} · {concept.label}</small>
                  <h3>{concept.title}</h3>
                  <div><span>TENSION / HOOK</span><p>{concept.hook}</p></div>
                  <div><span>CROYANCE À CRÉER</span><p>{concept.belief}</p></div>
                  <div><span>POURQUOI CET ANGLE</span><p>{concept.why}</p></div>
                </div>
                <div className={`${styles.ad} ${styles[`ad${concept.n}`]}`}>
                  <div className={styles.adTop}><span>HORIZON 90</span><small>PROGRAMME · 90 JOURS</small></div>
                  <div className={styles.adBody}>
                    <span className={styles.adLabel}>{concept.label}</span>
                    <h4>{concept.title}</h4>
                    <p>{concept.hook}</p>
                    <div className={styles.adProof}><b>90</b><span>jours pour construire une progression plus tenable</span></div>
                    <button type="button">{concept.cta} ↗</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.test} ${styles.wrap}`}>
        <div className={styles.testHead}><span>PLAN DE TEST</span><h2>Je ne choisirais pas le « plus beau » concept. Je chercherais le signal.</h2></div>
        <div className={styles.testGrid}>
          <article><small>01 · LANCER</small><h3>Un seul changement majeur : l’angle.</h3><p>Même offre, même destination, niveau de production comparable. On réduit les variables pour mieux lire ce qui fait bouger l’attention.</p></article>
          <article><small>02 · LIRE</small><h3>Observer avant de conclure.</h3><p>Hook rate, clic, coût et qualité du trafic servent à distinguer un message qui attire d’un message qui attire les bonnes personnes.</p></article>
          <article><small>03 · DÉVELOPPER</small><h3>Transformer le gagnant en famille créative.</h3><p>Le meilleur signal devient ensuite plusieurs hooks, scripts et formats. On développe un territoire, pas une publicité isolée.</p></article>
        </div>
      </section>

      <section className={styles.takeaway}>
        <div className={styles.wrap}>
          <span>CE QUE LE PROJET DÉMONTRE</span>
          <h2>Recherche d’insights → tension → angle → hook → concept créatif → plan de test.</h2>
          <p>Le résultat n’est pas trois formulations différentes de la même publicité. Ce sont trois hypothèses de persuasion distinctes, construites pour apprendre du marché.</p>
          <a href="/#portfolio">Voir les autres projets ↗</a>
        </div>
      </section>
    </main>
  );
}

import styles from "./cap-clair-case.module.css";

const emails = [
  ["01", "Créer le contexte", "Faire comprendre le problème avant de parler de l’offre."],
  ["02", "Rendre l’enjeu personnel", "Relier le sujet à une situation concrète vécue par le prospect."],
  ["03", "Introduire une nouvelle lecture", "Faire évoluer la manière dont le prospect comprend sa situation."],
  ["04", "Installer la crédibilité", "Apporter des raisons de croire sans transformer l’email en argumentaire lourd."],
  ["05", "Traiter les résistances", "Répondre aux objections qui peuvent encore bloquer la décision."],
  ["06", "Rapprocher l’offre", "Présenter la solution comme la continuité logique du raisonnement précédent."],
  ["07", "Faciliter la décision", "Rendre le passage à l’action clair, simple et cohérent avec la séquence."],
];

export default function CapClairEmailCasePage() {
  return (
    <main className={styles.case}>
      <nav className={`${styles.top} ${styles.wrap}`}>
        <a className={styles.brand} href="/">BB. / CAP CLAIR</a>
        <a className={styles.back} href="/#portfolio">Retour au portfolio ↗</a>
      </nav>

      <section className={`${styles.hero} ${styles.wrap}`}>
        <span className={styles.eyebrow}>ÉTUDE DE CAS · EMAIL MARKETING · NURTURING</span>
        <h1>Cap Clair <span>Faire progresser une décision, un email à la fois.</span></h1>
        <p className={styles.lead}>Une séquence de sept emails pensée non comme une répétition d’arguments commerciaux, mais comme une progression : compréhension, intérêt, confiance, traitement des résistances puis décision.</p>
        <div className={styles.tags}><span>STRATÉGIE EMAIL</span><span>NURTURING</span><span>COPYWRITING</span><span>OBJECTIONS</span><span>CONVERSION</span></div>
      </section>

      <section className={styles.challenge}>
        <div className={`${styles.wrap} ${styles.challengeGrid}`}>
          <div><span className={styles.eyebrow}>LE DÉFI</span><h2>Le problème n’était pas d’envoyer plus d’emails.</h2></div>
          <p>Un prospect qui n’est pas prêt à acheter au premier contact ne devient pas nécessairement plus convaincu parce qu’on répète la même offre plusieurs fois. L’enjeu était de faire évoluer sa perception entre chaque message, sans casser la confiance ni donner l’impression d’une pression commerciale continue.</p>
        </div>
      </section>

      <section className={`${styles.paths} ${styles.wrap}`}>
        <div className={styles.intro}>
          <span>LES CHEMINS POSSIBLES</span>
          <h2 className={styles.sectionTitle}>Trois façons de construire la séquence. Trois effets très différents sur la décision.</h2>
        </div>
        <div className={styles.pathGrid}>
          <article className={styles.path}><small>CHEMIN 01</small><h3>Répéter l’offre</h3><p>Chaque email reformule la promesse, les bénéfices et l’appel à l’action.</p><strong>Avantage : vente directe.</strong><p>Risque : fatigue rapide et impression de pression si le prospect n’est pas encore prêt.</p></article>
          <article className={styles.path}><small>CHEMIN 02</small><h3>Nourrir sans vendre</h3><p>Privilégier uniquement le contenu utile et repousser la proposition commerciale.</p><strong>Avantage : confiance.</strong><p>Risque : créer de l’intérêt sans construire suffisamment de mouvement vers la décision.</p></article>
          <article className={`${styles.path} ${styles.chosen}`}><small>CHEMIN 03 · RETENU</small><h3>Faire évoluer l’état d’esprit</h3><p>Donner à chaque email une fonction différente dans la progression mentale du prospect.</p><strong>Pourquoi : la séquence devait faire avancer la décision, pas simplement multiplier les contacts.</strong></article>
        </div>
      </section>

      <section className={`${styles.decision} ${styles.wrap}`}>
        <div className={styles.decisionBox}>
          <span className={styles.eyebrow}>L’ARBITRAGE</span>
          <h3>Un email, une fonction. Une séquence, une progression.</h3>
          <p>La logique retenue consiste à éviter que les sept messages se concurrencent entre eux. Chaque email prépare le suivant : d’abord comprendre, puis se reconnaître, croire davantage, lever les résistances et enfin rendre l’action naturelle.</p>
          <div className={styles.decisionList}>
            <div><b>01</b><span>Une seule fonction stratégique par email</span></div>
            <div><b>02</b><span>Valeur avant intensification commerciale</span></div>
            <div><b>03</b><span>Objections traitées au bon moment</span></div>
            <div><b>04</b><span>CTA renforcé à mesure que la conviction monte</span></div>
          </div>
        </div>
      </section>

      <section className={styles.result}>
        <div className={styles.wrap}>
          <div className={styles.resultIntro}><span className={styles.eyebrow}>LE RÉSULTAT</span><h2 className={styles.sectionTitle}>Une séquence construite comme un parcours de décision.</h2><p>Plutôt qu’afficher sept longs emails, l’architecture ci-dessous montre le rôle précis de chaque message et la logique qui relie l’ensemble.</p></div>
          <div className={styles.sequence}>
            {emails.map(([n,title,copy]) => (
              <article key={n}><b>{n}</b><div><h3>{title}</h3><p>{copy}</p></div><span>→</span></article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.fullResult} ${styles.wrap}`}>
        <div className={styles.fullIntro}><span className={styles.eyebrow}>VUE D’ENSEMBLE</span><h2>La séquence complète, sans transformer l’étude de cas en mur de texte.</h2><p>Le prospect peut parcourir les sept étapes dans une fenêtre compacte et comprendre la construction du système d’un seul regard.</p></div>
        <div className={styles.emailFrame}>
          <div className={styles.mailTop}><span>CAP CLAIR</span><small>SÉQUENCE · 7 EMAILS</small></div>
          <div className={styles.mailBody}>
            {emails.map(([n,title,copy]) => (
              <section key={n}><small>EMAIL {n}</small><h3>{title}</h3><p>{copy}</p><div className={styles.fakeLines}><i/><i/><i/></div></section>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.summary} ${styles.wrap}`}>
        <p>STRATÉGIE EMAIL · NURTURING · COPYWRITING · OBJECTIONS · CONVERSION</p>
        <h2>Une bonne séquence ne répète pas le même message. Elle fait évoluer la décision.</h2>
        <a className={styles.cta} href="/#portfolio">Voir les autres projets ↗</a>
      </section>
    </main>
  );
}

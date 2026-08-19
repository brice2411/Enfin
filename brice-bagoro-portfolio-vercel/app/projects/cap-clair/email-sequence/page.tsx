import styles from "./cap-clair-case.module.css";

const emails = [
  {
    n:"01",
    role:"Créer le contexte",
    summary:"Faire comprendre le problème avant de parler de l’offre.",
    subject:"Et si le problème n’était pas le manque de motivation ?",
    preheader:"Avant d’ajouter une nouvelle méthode, il faut parfois clarifier ce qui brouille déjà la décision.",
    body:[
      "On pense souvent qu’avancer demande davantage de discipline, davantage d’énergie ou une meilleure organisation.",
      "Mais quand plusieurs priorités se concurrencent, le vrai problème est parfois plus simple : tout semble important en même temps. On agit beaucoup, sans savoir clairement ce qui mérite d’être traité en premier.",
      "Cap Clair part de cette idée : avant d’accélérer, il faut rendre la situation lisible. Identifier ce qui compte, ce qui bloque et ce qui peut attendre.",
    ],
    cta:"Commencer par faire le point"
  },
  {
    n:"02",
    role:"Rendre l’enjeu personnel",
    summary:"Relier le sujet à une situation concrète vécue par le prospect.",
    subject:"Le signe discret qu’une priorité n’est pas vraiment claire",
    preheader:"Ce n’est pas toujours l’inaction. Parfois, c’est l’accumulation.",
    body:[
      "Vous ouvrez une tâche, puis une autre. Une idée arrive, une urgence s’ajoute, et la journée avance sans qu’une direction nette se dégage.",
      "Le problème n’est pas forcément que vous ne faites rien. Il peut être que votre attention est répartie entre trop de décisions non tranchées.",
      "Quand une priorité devient réellement claire, elle élimine aussi des options. Elle dit autant ce que vous allez faire que ce que vous choisissez de ne pas poursuivre maintenant.",
    ],
    cta:"Voir ce qui brouille ma priorité"
  },
  {
    n:"03",
    role:"Introduire une nouvelle lecture",
    summary:"Faire évoluer la manière dont le prospect comprend sa situation.",
    subject:"La clarté ne consiste pas à tout savoir",
    preheader:"Elle consiste à savoir quelle décision mérite votre attention maintenant.",
    body:[
      "Attendre d’avoir toutes les réponses peut devenir une forme d’immobilité. Plus on cherche à supprimer toute incertitude, plus la décision paraît lourde.",
      "Une approche plus utile consiste à réduire la question : quelle est la prochaine décision qui rendra les suivantes plus simples ?",
      "C’est ce changement de perspective qui structure Cap Clair. On ne cherche pas un plan parfait. On construit une hiérarchie suffisamment nette pour remettre le mouvement dans le bon ordre.",
    ],
    cta:"Découvrir cette approche"
  },
  {
    n:"04",
    role:"Installer la crédibilité",
    summary:"Apporter des raisons de croire sans transformer l’email en argumentaire lourd.",
    subject:"Pourquoi une bonne décision commence avant la liste des tâches",
    preheader:"L’exécution devient plus simple quand le raisonnement en amont est plus propre.",
    body:[
      "Une liste peut organiser des actions. Elle ne peut pas, à elle seule, décider lesquelles méritent votre énergie.",
      "C’est pourquoi la méthode sépare d’abord trois éléments : ce que vous voulez réellement obtenir, ce qui empêche aujourd’hui d’y arriver et la décision qui crée le plus de levier.",
      "Cette structure évite de confondre activité et progression. Elle transforme un ensemble de choses à faire en un chemin plus lisible.",
    ],
    cta:"Voir la méthode Cap Clair"
  },
  {
    n:"05",
    role:"Traiter les résistances",
    summary:"Répondre aux objections qui peuvent encore bloquer la décision.",
    subject:"“Je n’ai pas le temps de prendre du recul”",
    preheader:"C’est précisément quand tout paraît urgent que le tri devient le plus utile.",
    body:[
      "Prendre du recul peut sembler contre-intuitif quand la charge est déjà élevée. Pourtant, continuer sans hiérarchie coûte aussi du temps : changements de contexte, décisions repoussées et efforts dispersés.",
      "Cap Clair n’a pas été pensé comme une nouvelle couche d’organisation à entretenir. Le but est inverse : réduire le nombre de décisions ouvertes et rendre la prochaine action plus évidente.",
      "Il ne s’agit donc pas de travailler davantage sur son système. Il s’agit de retirer ce qui empêche de décider clairement.",
    ],
    cta:"Réduire le bruit"
  },
  {
    n:"06",
    role:"Rapprocher l’offre",
    summary:"Présenter la solution comme la continuité logique du raisonnement précédent.",
    subject:"Voici ce que Cap Clair vous aide à mettre à plat",
    preheader:"Une méthode pour passer du brouillard à une direction exploitable.",
    body:[
      "À ce stade, la question n’est plus de savoir s’il faut mieux s’organiser. Elle est de savoir comment transformer plusieurs priorités concurrentes en une direction utilisable.",
      "Cap Clair guide ce passage étape par étape : clarifier l’objectif, identifier les tensions, hiérarchiser les choix, puis traduire la décision retenue en prochaines actions concrètes.",
      "La valeur de la méthode n’est pas d’ajouter davantage d’informations. Elle est de vous aider à retirer assez de bruit pour que l’essentiel redevienne visible.",
    ],
    cta:"Explorer Cap Clair"
  },
  {
    n:"07",
    role:"Faciliter la décision",
    summary:"Rendre le passage à l’action clair, simple et cohérent avec la séquence.",
    subject:"Vous n’avez pas besoin de tout résoudre aujourd’hui",
    preheader:"Seulement de choisir ce qui mérite d’être clarifié en premier.",
    body:[
      "Pendant cette séquence, nous n’avons pas essayé de vous convaincre sept fois avec le même argument.",
      "Nous avons avancé par étapes : reconnaître le brouillard, comprendre d’où il vient, changer de lecture, lever les résistances puis rendre la solution plus concrète.",
      "Si cette approche correspond à votre situation, la prochaine étape est volontairement simple : ouvrir Cap Clair et commencer par la première décision qui mérite vraiment votre attention.",
    ],
    cta:"Commencer avec Cap Clair"
  },
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
        <div className={styles.intro}><span>LES CHEMINS POSSIBLES</span><h2 className={styles.sectionTitle}>Trois façons de construire la séquence. Trois effets très différents sur la décision.</h2></div>
        <div className={styles.pathGrid}>
          <article className={styles.path}><small>CHEMIN 01</small><h3>Répéter l’offre</h3><p>Chaque email reformule la promesse, les bénéfices et l’appel à l’action.</p><strong>Avantage : vente directe.</strong><p>Risque : fatigue rapide et impression de pression si le prospect n’est pas encore prêt.</p></article>
          <article className={styles.path}><small>CHEMIN 02</small><h3>Nourrir sans vendre</h3><p>Privilégier uniquement le contenu utile et repousser la proposition commerciale.</p><strong>Avantage : confiance.</strong><p>Risque : créer de l’intérêt sans construire suffisamment de mouvement vers la décision.</p></article>
          <article className={`${styles.path} ${styles.chosen}`}><small>CHEMIN 03 · RETENU</small><h3>Faire évoluer l’état d’esprit</h3><p>Donner à chaque email une fonction différente dans la progression mentale du prospect.</p><strong>Pourquoi : la séquence devait faire avancer la décision, pas simplement multiplier les contacts.</strong></article>
        </div>
      </section>

      <section className={`${styles.decision} ${styles.wrap}`}>
        <div className={styles.decisionBox}>
          <span className={styles.eyebrow}>L’ARBITRAGE</span><h3>Un email, une fonction. Une séquence, une progression.</h3>
          <p>La logique retenue consiste à éviter que les sept messages se concurrencent entre eux. Chaque email prépare le suivant : d’abord comprendre, puis se reconnaître, croire davantage, lever les résistances et enfin rendre l’action naturelle.</p>
          <div className={styles.decisionList}><div><b>01</b><span>Une seule fonction stratégique par email</span></div><div><b>02</b><span>Valeur avant intensification commerciale</span></div><div><b>03</b><span>Objections traitées au bon moment</span></div><div><b>04</b><span>CTA renforcé à mesure que la conviction monte</span></div></div>
        </div>
      </section>

      <section className={styles.result}>
        <div className={styles.wrap}>
          <div className={styles.resultIntro}><span className={styles.eyebrow}>LE RÉSULTAT</span><h2 className={styles.sectionTitle}>Une séquence construite comme un parcours de décision.</h2><p>L’architecture ci-dessous montre le rôle précis de chaque message avant de laisser place aux emails eux-mêmes.</p></div>
          <div className={styles.sequence}>{emails.map((email) => <article key={email.n}><b>{email.n}</b><div><h3>{email.role}</h3><p>{email.summary}</p></div><span>→</span></article>)}</div>
        </div>
      </section>

      <section className={`${styles.fullResult} ${styles.wrap}`}>
        <div className={styles.fullIntro}><span className={styles.eyebrow}>LES EMAILS</span><h2>La stratégie, cette fois, dans le texte.</h2></div>
        <div className={styles.emailFrame}>
          <div className={styles.mailTop}><span>CAP CLAIR</span><small>SÉQUENCE · 7 EMAILS</small></div>
          <div className={styles.mailBody}>
            {emails.map((email) => (
              <article className={styles.email} key={email.n}>
                <div className={styles.emailMeta}><small>EMAIL {email.n}</small><span>{email.role}</span></div>
                <h3>{email.subject}</h3>
                <p className={styles.preheader}>{email.preheader}</p>
                <div className={styles.emailCopy}>{email.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
                <button type="button">{email.cta} →</button>
              </article>
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

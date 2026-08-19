import styles from "./cap-clair-case.module.css";

const emails = [
  {
    n:"01", timing:"J-10", role:"Bienvenue", summary:"Créer l’adhésion et installer le problème avant toute vente.",
    subject:"Bienvenue dans Cap Clair : on commence par enlever le bruit",
    preheader:"Avant de chercher une meilleure méthode, il faut d’abord voir ce qui brouille la décision.",
    body:[
      "Bonjour,",
      "Si vous êtes ici, ce n’est probablement pas parce que vous manquez d’idées. Le problème est souvent l’inverse : trop de pistes, trop de priorités, trop de décisions ouvertes en même temps.",
      "Et quand tout semble important, l’énergie se disperse. On avance, mais sans vraiment sentir qu’on progresse dans la bonne direction.",
      "Cap Clair a été construit pour résoudre précisément ce point. Pas en ajoutant une nouvelle couche d’organisation, mais en vous aidant à distinguer ce qui mérite réellement votre attention de ce qui peut attendre.",
      "Dans les prochains jours, je vais vous montrer comment cette logique fonctionne et pourquoi une bonne décision commence souvent avant la liste des tâches.",
      "À très vite,\nL’équipe Cap Clair"
    ], cta:"Découvrir le point de départ"
  },
  {
    n:"02", timing:"J-8", role:"Éducation", summary:"Reformuler le problème pour modifier la manière dont le prospect l’interprète.",
    subject:"Vous n’avez peut-être pas un problème de discipline",
    preheader:"Parfois, le vrai frein est simplement que trop de décisions restent ouvertes.",
    body:[
      "Bonjour,",
      "Quand une semaine se termine avec cette impression d’avoir beaucoup fait sans avoir vraiment avancé, la conclusion la plus facile est : “je dois être plus discipliné”.",
      "Mais imaginez l’inverse. Et si le problème n’était pas votre capacité à agir, mais le nombre de directions entre lesquelles votre attention est divisée ?",
      "Une décision non tranchée continue de consommer de l’énergie : est-ce que je lance ceci ? est-ce que je termine cela ? est-ce vraiment prioritaire ? Chaque question reste en arrière-plan et concurrence les autres.",
      "La clarté ne consiste donc pas à trouver la motivation parfaite. Elle consiste d’abord à réduire le nombre de choses qui réclament votre attention en même temps.",
      "C’est le premier principe de Cap Clair : avant d’accélérer, on simplifie le terrain de décision.",
      "À bientôt,\nL’équipe Cap Clair"
    ], cta:"Voir le principe en détail"
  },
  {
    n:"03", timing:"J-6", role:"Invitation", summary:"Faire passer de l’intérêt intellectuel à une première implication dans l’offre.",
    subject:"Et si vous pouviez voir votre vraie priorité en 30 minutes ?",
    preheader:"Pas un planning de plus. Une décision plus nette sur ce qui mérite votre énergie maintenant.",
    body:[
      "Bonjour,",
      "Jusqu’ici, nous avons parlé du bruit : les tâches, les idées et les décisions qui restent ouvertes et finissent par se concurrencer.",
      "La question suivante est plus utile : comment passer de ce brouillard à une direction suffisamment claire pour agir ?",
      "C’est exactement le rôle du premier travail dans Cap Clair. Vous partez de votre situation réelle, vous faites apparaître les tensions entre vos priorités, puis vous identifiez la décision qui simplifie le plus les suivantes.",
      "Le but n’est pas d’obtenir un plan parfait pour les six prochains mois. Le but est beaucoup plus concret : savoir ce qui mérite votre attention maintenant, et pourquoi.",
      "Les inscriptions ouvrent bientôt. Si cette façon de travailler correspond à ce que vous cherchez, vous pourrez découvrir le programme complet à l’ouverture.",
      "À très vite,\nL’équipe Cap Clair"
    ], cta:"Découvrir Cap Clair"
  },
  {
    n:"04", timing:"J-4", role:"Anticipation", summary:"Rendre le résultat mentalement concret avant d’intensifier la vente.",
    subject:"Ce qui change quand une décision devient enfin nette",
    preheader:"La valeur n’est pas seulement de savoir quoi faire. C’est aussi de savoir quoi ignorer.",
    body:[
      "Bonjour,",
      "Une priorité réellement claire produit un effet assez particulier : elle ne vous donne pas seulement une action à faire. Elle élimine aussi plusieurs actions qui n’ont plus besoin d’être décidées aujourd’hui.",
      "Vous savez ce que vous poursuivez. Vous savez ce que vous reportez. Vous savez pourquoi certaines opportunités, même intéressantes, ne méritent pas votre énergie maintenant.",
      "C’est à ce moment que l’organisation devient beaucoup plus légère. Non parce que votre agenda contient moins de choses, mais parce que votre attention n’a plus à renégocier la même priorité toute la journée.",
      "Cap Clair est conçu autour de cette progression : clarifier l’objectif, faire apparaître les conflits, choisir, puis traduire ce choix en actions concrètes.",
      "Dans le prochain email, je répondrai à l’objection qui revient le plus souvent : “Je n’ai déjà pas le temps. Pourquoi en consacrer à prendre du recul ?”",
      "À bientôt,\nL’équipe Cap Clair"
    ], cta:"Voir comment la méthode fonctionne"
  },
  {
    n:"05", timing:"J-2", role:"Objections", summary:"Traiter la résistance principale avant le moment de décision.",
    subject:"“Je n’ai pas le temps de prendre du recul”",
    preheader:"C’est précisément quand tout paraît urgent que le coût du flou devient le plus élevé.",
    body:[
      "Bonjour,",
      "C’est probablement l’objection la plus logique : si la charge est déjà élevée, pourquoi consacrer du temps à réfléchir au lieu d’avancer ?",
      "Parce que l’absence de décision coûte également du temps. Changer de priorité en cours de journée. Recommencer une tâche abandonnée. Dire oui à une nouvelle idée puis se demander trois jours plus tard si elle avait vraiment sa place. Réouvrir les mêmes questions encore et encore.",
      "Cap Clair n’a pas été conçu comme un système supplémentaire à entretenir. L’objectif est inverse : fermer suffisamment de boucles mentales pour que l’exécution redevienne plus simple.",
      "Vous n’avez pas besoin d’avoir toutes les réponses. Vous avez besoin d’une prochaine décision suffisamment solide pour rendre les suivantes plus faciles.",
      "Les inscriptions ferment dans deux jours. Si votre problème ressemble davantage à un manque de clarté qu’à un manque de volonté, Cap Clair a été pensé pour vous.",
      "À bientôt,\nL’équipe Cap Clair"
    ], cta:"Voir le programme"
  },
  {
    n:"06", timing:"J-1", role:"Décision", summary:"Rassembler la proposition de valeur et rendre le choix explicite.",
    subject:"Cap Clair ferme demain : voici exactement ce que vous venez chercher",
    preheader:"Une méthode pour transformer plusieurs priorités concurrentes en une direction exploitable.",
    body:[
      "Bonjour,",
      "Demain, les inscriptions à Cap Clair ferment.",
      "Si vous avez suivi cette séquence, vous avez déjà vu l’idée centrale : le problème n’est pas toujours de faire plus. Il est souvent de décider plus proprement en amont.",
      "Cap Clair vous accompagne à travers quatre mouvements : rendre la situation visible, identifier les tensions, hiérarchiser les choix, puis transformer la décision retenue en prochaines actions concrètes.",
      "Ce programme n’est donc pas destiné à remplir davantage votre agenda. Il sert à vous aider à savoir ce qui mérite d’y rester.",
      "Si vous sentez que vos efforts sont aujourd’hui répartis entre trop de directions, c’est le moment de choisir si vous voulez continuer à gérer ce brouillard ou prendre le temps de le clarifier.",
      "Les inscriptions restent ouvertes jusqu’à demain soir.",
      "À bientôt,\nL’équipe Cap Clair"
    ], cta:"Rejoindre Cap Clair"
  },
  {
    n:"07", timing:"J0", role:"Clôture", summary:"Créer une dernière décision nette sans réintroduire toute l’argumentation.",
    subject:"Dernier jour : les inscriptions à Cap Clair ferment ce soir",
    preheader:"Après ce soir, la prochaine session commencera avec les participants inscrits.",
    body:[
      "Bonjour,",
      "Petit rappel : les inscriptions à Cap Clair ferment ce soir.",
      "Je ne vais pas vous refaire toute la démonstration dans ce dernier message. À ce stade, la décision est plus simple.",
      "Si vous avez besoin d’un nouveau système pour faire davantage de choses, Cap Clair n’est probablement pas ce que vous cherchez.",
      "En revanche, si vous avez déjà beaucoup de possibilités devant vous et que votre vrai besoin est de retrouver une direction claire, de hiérarchiser vos choix et d’avancer sans renégocier vos priorités chaque jour, alors le programme a été construit pour cela.",
      "Les portes ferment ce soir. La formation commencera ensuite avec les personnes inscrites.",
      "À bientôt,\nL’équipe Cap Clair"
    ], cta:"Rejoindre la session"
  },
];

export default function CapClairEmailCasePage() {
  return (
    <main className={styles.case}>
      <nav className={`${styles.top} ${styles.wrap}`}><a className={styles.brand} href="/">BB. / CAP CLAIR</a><a className={styles.back} href="/#portfolio">Retour au portfolio ↗</a></nav>
      <section className={`${styles.hero} ${styles.wrap}`}>
        <span className={styles.eyebrow}>ÉTUDE DE CAS · EMAIL MARKETING · NURTURING</span>
        <h1>Cap Clair <span>Faire progresser une décision, un email à la fois.</span></h1>
        <p className={styles.lead}>Une séquence de lancement en sept emails pensée comme une progression : bienvenue, éducation, invitation, anticipation, objections, décision puis clôture.</p>
        <div className={styles.tags}><span>STRATÉGIE EMAIL</span><span>NURTURING</span><span>COPYWRITING</span><span>OBJECTIONS</span><span>CONVERSION</span></div>
      </section>
      <section className={styles.challenge}><div className={`${styles.wrap} ${styles.challengeGrid}`}><div><span className={styles.eyebrow}>LE DÉFI</span><h2>Le problème n’était pas d’envoyer plus d’emails.</h2></div><p>Un prospect qui n’est pas prêt à acheter au premier contact ne devient pas nécessairement plus convaincu parce qu’on répète la même offre plusieurs fois. L’enjeu était de faire évoluer sa perception entre chaque message, puis d’intensifier la décision à mesure que la clôture approchait.</p></div></section>
      <section className={`${styles.paths} ${styles.wrap}`}><div className={styles.intro}><span>LES CHEMINS POSSIBLES</span><h2 className={styles.sectionTitle}>Trois façons de construire la séquence. Trois effets très différents sur la décision.</h2></div><div className={styles.pathGrid}><article className={styles.path}><small>CHEMIN 01</small><h3>Répéter l’offre</h3><p>Chaque email reformule la promesse, les bénéfices et l’appel à l’action.</p><strong>Avantage : vente directe.</strong><p>Risque : fatigue rapide et pression commerciale prématurée.</p></article><article className={styles.path}><small>CHEMIN 02</small><h3>Nourrir sans vendre</h3><p>Privilégier le contenu utile et repousser la proposition commerciale.</p><strong>Avantage : confiance.</strong><p>Risque : créer de l’intérêt sans mouvement suffisant vers la décision.</p></article><article className={`${styles.path} ${styles.chosen}`}><small>CHEMIN 03 · RETENU</small><h3>Faire évoluer l’état d’esprit</h3><p>Donner à chaque email une fonction différente et augmenter progressivement l’intensité commerciale.</p><strong>Pourquoi : la séquence devait préparer la décision avant de demander la décision.</strong></article></div></section>
      <section className={`${styles.decision} ${styles.wrap}`}><div className={styles.decisionBox}><span className={styles.eyebrow}>L’ARBITRAGE</span><h3>Un email, une fonction. Une séquence, une montée en conviction.</h3><p>La logique retenue évite que les sept messages se concurrencent. Les premiers installent le problème et la nouvelle lecture. Les suivants rendent l’offre concrète, traitent les résistances puis utilisent la temporalité réelle de la fermeture pour faciliter le choix.</p><div className={styles.decisionList}><div><b>01</b><span>Éducation avant intensification</span></div><div><b>02</b><span>Une fonction stratégique par email</span></div><div><b>03</b><span>Objections avant la clôture</span></div><div><b>04</b><span>Urgence uniquement quand elle devient réelle</span></div></div></div></section>
      <section className={styles.result}><div className={styles.wrap}><div className={styles.resultIntro}><span className={styles.eyebrow}>LE RÉSULTAT</span><h2 className={styles.sectionTitle}>Une vraie séquence de lancement, organisée dans le temps.</h2><p>L’architecture montre le rôle de chaque message et son emplacement dans la période qui précède la fermeture des inscriptions.</p></div><div className={styles.sequence}>{emails.map((email) => <article key={email.n}><b>{email.n}</b><div><h3>{email.role} · {email.timing}</h3><p>{email.summary}</p></div><span>→</span></article>)}</div></div></section>
      <section className={`${styles.fullResult} ${styles.wrap}`}><div className={styles.fullIntro}><span className={styles.eyebrow}>LES 7 EMAILS</span><h2>La séquence complète.</h2></div><div className={styles.emailFrame}><div className={styles.mailTop}><span>CAP CLAIR</span><small>LANCEMENT · J-10 → J0</small></div><div className={styles.mailBody}>{emails.map((email) => <article className={styles.email} key={email.n}><div className={styles.emailMeta}><small>EMAIL {email.n} · {email.timing}</small><span>{email.role}</span></div><h3>{email.subject}</h3><p className={styles.preheader}>{email.preheader}</p><div className={styles.emailCopy}>{email.body.map((paragraph,index) => <p key={index}>{paragraph}</p>)}</div><button type="button">{email.cta} →</button></article>)}</div></div></section>
      <section className={`${styles.summary} ${styles.wrap}`}><p>STRATÉGIE EMAIL · NURTURING · COPYWRITING · OBJECTIONS · CONVERSION</p><h2>Une bonne séquence ne répète pas le même message. Elle prépare progressivement le moment où le prospect doit choisir.</h2><a className={styles.cta} href="/#portfolio">Voir les autres projets ↗</a></section>
    </main>
  );
}

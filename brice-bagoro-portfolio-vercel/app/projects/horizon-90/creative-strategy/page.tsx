import styles from "./horizon-case.module.css";

const concepts = [
  {
    n: "01",
    label: "ANGLE IDENTITÉ",
    title: "Vous n’avez pas besoin de devenir quelqu’un d’autre.",
    hook: "Vous avez surtout besoin de retrouver une version de vous que vos habitudes ont mise en pause.",
    belief: "Le changement peut commencer par une reconnexion à soi, pas par une discipline extrême.",
    tension: "Le prospect ne se reconnaît plus vraiment dans son énergie, sa routine ou son rapport à son corps.",
    alternatives: ["Transformation physique", "Discipline", "Reconnexion à soi"],
    choice: "Reconnexion à soi",
    why: "La transformation physique est immédiatement compréhensible mais très utilisée. La discipline peut provoquer, mais elle risque de culpabiliser. La reconnexion à soi permet de parler de forme sans réduire le désir au physique et crée un territoire plus distinctif.",
    cta: "Reprendre le contrôle en 90 jours",
    script: [
      "HOOK : Vous n’avez pas besoin de devenir quelqu’un d’autre.",
      "Vous connaissez probablement déjà les exercices, les applications et les conseils. Ce qui manque n’est pas forcément une nouvelle méthode à apprendre.",
      "Horizon 90 vous aide à reprendre une routine progressivement : d’abord retrouver du mouvement, ensuite construire de la constance, puis stabiliser ce qui fonctionne réellement dans votre quotidien.",
      "Pas pour devenir une autre personne. Pour retrouver une version de vous qui se sent plus forte, plus présente et plus cohérente avec ses propres habitudes.",
      "CTA : Découvrez Horizon 90."
    ]
  },
  {
    n: "02",
    label: "ANGLE FRICTION",
    title: "Le problème n’est peut-être pas votre motivation.",
    hook: "Un plan trop difficile à tenir échoue même avec de bonnes intentions.",
    belief: "La constance dépend autant de la structure du programme que de la volonté du participant.",
    tension: "Le prospect a déjà recommencé plusieurs fois et interprète chaque abandon comme un manque de volonté.",
    alternatives: ["Manque de motivation", "Manque de temps", "Programme trop difficile à tenir"],
    choice: "Programme trop difficile à tenir",
    why: "Accuser la motivation répète ce que le prospect se reproche déjà. Le manque de temps est réel mais générique. La friction du programme déplace la faute vers la structure et ouvre naturellement la porte à une progression plus tenable.",
    cta: "Voir une méthode plus tenable",
    script: [
      "HOOK : Le problème n’est peut-être pas votre motivation.",
      "Vous commencez fort. Quatre séances. Nouveau plan. Nouvelle énergie. Puis une semaine chargée arrive, le rythme casse et tout semble à recommencer.",
      "Ce scénario ne prouve pas que vous manquez de volonté. Il peut simplement révéler qu’un programme exige trop, trop vite.",
      "Horizon 90 répartit la progression en trois phases pour que l’effort évolue avec votre capacité à tenir la routine.",
      "Moins de tout-ou-rien. Plus de continuité.",
      "CTA : Découvrez une progression conçue pour durer."
    ]
  },
  {
    n: "03",
    label: "ANGLE MÉCANISME",
    title: "90 jours. Trois phases. Une progression qui s’adapte.",
    hook: "Repartir, construire, stabiliser : chaque phase demande un effort différent.",
    belief: "Une transformation crédible devient plus facile à croire lorsqu’on comprend comment elle se construit.",
    tension: "Le prospect a déjà entendu des promesses de transformation et veut comprendre pourquoi cette approche serait différente.",
    alternatives: ["Promesse avant/après", "Preuve sociale", "Mécanisme en 3 phases"],
    choice: "Mécanisme en 3 phases",
    why: "L’avant/après attire mais demande beaucoup de crédibilité. La preuve sociale rassure mais ne différencie pas le système. Le mécanisme donne une raison concrète de croire avant même de demander au prospect de croire au résultat final.",
    cta: "Découvrir les 3 phases",
    script: [
      "HOOK : 90 jours. Trois phases. Pas le même effort du début à la fin.",
      "Les premières semaines ne devraient pas ressembler aux dernières. Au départ, l’objectif est de reprendre. Ensuite seulement, on augmente la régularité et l’intensité.",
      "Phase 1 : repartir sans surcharge. Phase 2 : construire une constance réelle. Phase 3 : stabiliser les habitudes qui doivent survivre au programme.",
      "C’est la logique d’Horizon 90 : ne pas demander au jour 1 la discipline que l’on cherche justement à construire pendant 90 jours.",
      "CTA : Découvrez comment fonctionnent les trois phases."
    ]
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
          <p>Horizon 90 est un programme de remise en forme sur 90 jours pensé pour des personnes qui ont déjà essayé de reprendre une routine sans réussir à la maintenir. La promesse n’est donc pas simplement « se remettre en forme », mais rendre la progression suffisamment réaliste pour qu’elle puisse durer. Le travail créatif part de cette tension : une même offre peut devenir pertinente pour des raisons très différentes.</p>
          <div className={styles.meta}><span>ANGLES</span><span>HOOKS</span><span>CREATIVE STRATEGY</span><span>ADS</span></div>
        </div>
      </header>

      <section className={styles.brief}>
        <div className={`${styles.wrap} ${styles.briefGrid}`}>
          <div><span className={styles.eyebrow}>LE BRIEF</span><h2>Le même programme peut être pertinent pour plusieurs raisons.</h2></div>
          <div className={styles.briefCopy}>
            <p>Une seule promesse publicitaire aurait forcé tous les prospects à entrer par la même porte. Or l’un peut vouloir retrouver confiance, l’autre chercher enfin une routine qu’il tient, et un troisième avoir besoin de comprendre la méthode avant de croire au résultat.</p>
            <strong>Le travail créatif consiste donc moins à produire trois formulations qu’à isoler trois hypothèses de persuasion réellement différentes.</strong>
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
          <div className={styles.labHead}><span>LE LABO CRÉATIF</span><h2>Un angle n’est pas un synonyme. Il change la raison de s’arrêter.</h2><p>Pour chaque tension, plusieurs directions étaient crédibles. L’expertise se joue dans l’arbitrage : ce que l’on choisit de dire, mais aussi ce que l’on décide volontairement de ne pas dire.</p></div>
          <div className={styles.concepts}>
            {concepts.map((concept) => (
              <article className={styles.concept} key={concept.n}>
                <div className={styles.strategy}>
                  <small>{concept.n} · {concept.label}</small>
                  <h3>{concept.title}</h3>
                  <div><span>TENSION OBSERVÉE</span><p>{concept.tension}</p></div>
                  <div className={styles.routes}><span>DIRECTIONS POSSIBLES</span><div>{concept.alternatives.map((item) => <i key={item} className={item === concept.choice ? styles.routeChosen : ""}>{item}</i>)}</div></div>
                  <div><span>CHOIX RETENU : {concept.choice.toUpperCase()}</span><p>{concept.why}</p></div>
                  <div><span>CROYANCE À CRÉER</span><p>{concept.belief}</p></div>
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
                <div className={styles.script}>
                  <div className={styles.scriptTop}><span>SCRIPT VIDÉO · 25–35 SEC</span><small>{concept.label}</small></div>
                  {concept.script.map((line, index) => <p key={index}>{line}</p>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.production} ${styles.wrap}`}>
        <div className={styles.sectionHead}><span>DÉCLINAISONS</span><h2>Un angle fort doit pouvoir vivre dans plusieurs formats.</h2></div>
        <div className={styles.productionGrid}>
          <article><small>STATIC / CARROUSEL</small><h3>Hook lisible en 2 secondes.</h3><p>Une créative statique par angle, puis un carrousel qui développe la tension, la nouvelle croyance et la méthode.</p></article>
          <article><small>UGC / FACE CAM</small><h3>Le script porte l’argument.</h3><p>Ouverture très courte, situation reconnaissable, reframing, mécanisme Horizon 90 puis CTA. Chaque vidéo conserve une seule idée dominante.</p></article>
          <article><small>VARIATIONS</small><h3>Tester le hook avant de réécrire tout le concept.</h3><p>Chaque angle peut produire plusieurs ouvertures, formulations et premières scènes sans perdre son hypothèse stratégique de départ.</p></article>
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
          <h2>Insight → options → arbitrage → angle → hook → script → créative → test.</h2>
          <p>Le résultat n’est pas trois formulations différentes de la même publicité. Ce sont trois hypothèses de persuasion distinctes, chacune traduite en concept, en script et en logique de test.</p>
          <a href="/#portfolio">Voir les autres projets ↗</a>
        </div>
      </section>
    </main>
  );
}

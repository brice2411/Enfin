"use client";

import { useState } from "react";
import styles from "./cap-clair-case.module.css";

// Clean JSX checkpoint for production deployment.
const emails = [
  {
    n: "01",
    role: "Identification",
    summary: "Vous n’avez probablement pas besoin d’une nouvelle idée",
    subject: "Vous n’avez probablement pas besoin d’une nouvelle idée",
    preheader: "Le problème se trouve souvent entre ce que vous savez faire et ce que votre prospect comprend.",
    body: [
      "Bonjour {{prenom}} ,",
      "Quand une offre ne trouve pas sa place, le premier réflexe consiste souvent à ajouter : un nouveau bonus, une nouvelle promesse, un nouveau canal ou même une nouvelle offre.",
      "Pourtant, le problème n’est pas toujours ce qui manque. Il se trouve parfois entre la valeur que vous savez apporter et la manière dont cette valeur est comprise.",
      "Votre prospect peut regarder votre offre et penser : « intéressant… mais est-ce vraiment pour moi ? » Ce petit doute suffit à ralentir toute la décision.",
      "Dans les prochains emails, nous allons explorer ce passage : partir de votre expertise, identifier ce qui compte réellement pour votre prospect et construire une offre qu’il peut comprendre sans effort inutile.",
      "Nous commencerons par une question simple : qu’essaie réellement de résoudre votre client lorsqu’il vient vers vous ?"
    ],
    cta: "Commencer par le diagnostic"
  },
  {
    n: "02",
    role: "Éducation",
    summary: "Pourquoi une bonne expertise reste parfois difficile à vendre",
    subject: "Pourquoi une bonne expertise reste parfois difficile à vendre",
    preheader: "La qualité de votre travail ne suffit pas si le prospect doit lui-même en deviner la valeur.",
    body: [
      "Bonjour {{prenom}} ,",
      "Une expertise peut être solide, utile et même rare, tout en restant difficile à choisir.",
      "Cela arrive lorsque le prospect entend ce que vous faites, mais ne voit pas clairement ce que cela change pour lui. Il reçoit des informations sur votre méthode, vos services ou votre expérience, sans parvenir à relier ces éléments à sa propre situation.",
      "La solution n’est pas nécessairement d’en dire davantage. Elle consiste à organiser le message autour de ce qu’il cherche à comprendre : où il se trouve, ce qui le bloque, le résultat qu’il peut viser et pourquoi votre approche constitue un chemin crédible.",
      "C’est cette traduction de l’expertise en valeur perçue que nous travaillons pendant Cap Clair."
    ],
    cta: "Comprendre la méthode Cap Clair"
  },
  {
    n: "03",
    role: "Ouverture",
    summary: "5 jours pour rendre votre offre plus simple à comprendre",
    subject: "5 jours pour rendre votre offre plus simple à comprendre",
    preheader: "Un programme court pour clarifier votre valeur, votre promesse et la manière de les présenter.",
    body: [
      "Bonjour {{prenom}} ,",
      "Cap Clair est un programme intensif de cinq jours conçu pour transformer une expertise difficile à résumer en une offre plus facile à comprendre et à choisir.",
      "Nous partirons de votre marché et des situations concrètes de vos prospects. Vous identifierez ensuite la valeur centrale de votre offre, les objections qui ralentissent la décision et les preuves qui rendent votre promesse crédible.",
      "À la fin du programme, vous disposerez d’un message central, d’une proposition de valeur et d’une structure d’offre que vous pourrez appliquer à votre page, vos emails ou vos conversations commerciales.",
      "Il ne s’agit pas de rendre votre activité simpliste. Il s’agit de retirer ce qui oblige encore votre prospect à faire lui-même le travail de compréhension."
    ],
    cta: "Rejoindre Cap Clair"
  },
  {
    n: "04",
    role: "Méthode",
    summary: "Ce que nous allons clarifier : et dans quel ordre",
    subject: "Ce que nous allons clarifier : et dans quel ordre",
    preheader: "Promesse, objections, preuves, mécanisme : chaque élément arrive à un moment précis.",
    body: [
      "Bonjour {{prenom}} ,",
      "Une erreur fréquente consiste à travailler directement sur les mots : le titre, le CTA, les bullets, les emails.",
      "Mais un texte ne peut pas réparer une stratégie encore floue.",
      "Dans Cap Clair, l’ordre est volontaire. D’abord : qui essaie de décider ? Ensuite : que sait déjà cette personne ? Puis : qu’a-t-elle trop entendu ? Que refuse-t-elle encore de croire ? Enfin seulement : quelle promesse, quelle preuve et quel angle peuvent réellement faire avancer sa décision ?",
      "Cet ordre change la qualité du message parce qu’il empêche de rédiger à partir de ce que nous voulons dire. Nous rédigeons à partir de ce que le prospect a besoin de comprendre maintenant.",
      "Le copywriting devient alors la conséquence d’un raisonnement, pas une collection de formules."
    ],
    cta: "Voir la méthode Cap Clair"
  },
  {
    n: "05",
    role: "Objections",
    summary: "« Mon activité est trop différente pour suivre une méthode »",
    subject: "« Mon activité est trop différente pour suivre une méthode »",
    preheader: "Une méthode stratégique ne standardise pas votre offre : elle standardise les bonnes questions.",
    body: [
      "Bonjour {{prenom}} ,",
      "Peut-être que vous pensez : « D’accord, mais mon activité est particulière. Mes clients ne réagissent pas comme ceux des autres. »",
      "Et vous avez raison sur un point : le message final ne devrait pas être identique.",
      "Cap Clair ne vous demande pas d’utiliser la même promesse, le même angle ou le même tunnel que tout le monde. La méthode fournit plutôt un ordre de diagnostic : niveau de conscience, sophistication du marché, scepticisme, objections, désir, preuve et risque perçu.",
      "Deux entreprises peuvent donc suivre exactement les mêmes questions et arriver à deux messages complètement différents.",
      "La structure n’efface pas votre singularité. Elle évite simplement de confondre singularité et improvisation."
    ],
    cta: "Vérifier si Cap Clair me correspond"
  },
  {
    n: "06",
    role: "Décision",
    summary: "Ce que vous repartez avec à la fin de Cap Clair",
    subject: "Ce que vous repartez avec à la fin de Cap Clair",
    preheader: "Pas plus d’idées : des décisions plus nettes sur votre offre et votre message.",
    body: [
      "Bonjour {{prenom}} ,",
      "Cap Clair ferme demain.",
      "Avant que vous décidiez, voici ce que le programme cherche réellement à produire.",
      "Pas cinquante nouveaux angles. Pas un document rempli de jargon. Mais une lecture plus précise de votre marché, une proposition de valeur mieux hiérarchisée, les objections qui méritent réellement une réponse, les preuves qui doivent porter votre promesse et une direction de message suffisamment claire pour être déployée sur une page, un email ou une publicité.",
      "Autrement dit : moins de décisions prises au hasard quand vient le moment de rédiger.",
      "Si aujourd’hui vous sentez que votre expertise est plus claire dans votre tête que dans celle de vos prospects, Cap Clair peut vous aider à réduire cet écart."
    ],
    cta: "Rejoindre Cap Clair avant demain"
  },
  {
    n: "07",
    role: "Clôture",
    summary: "Les inscriptions ferment ce soir : voici comment décider",
    subject: "Les inscriptions ferment ce soir : voici comment décider",
    preheader: "Une dernière question pour savoir si Cap Clair est réellement le bon choix pour vous.",
    body: [
      "Bonjour {{prenom}} ,",
      "Les inscriptions à Cap Clair ferment ce soir.",
      "Je pourrais terminer en ajoutant une nouvelle liste de bénéfices. Mais ce serait précisément l’inverse de ce que nous avons défendu pendant cette séquence.",
      "Alors voici une seule question : votre problème actuel vient-il d’un manque réel de valeur dans votre offre… ou du fait que cette valeur n’est pas encore assez simple à comprendre, à croire et à choisir ?",
      "Si la valeur elle-même manque, Cap Clair ne la fabriquera pas artificiellement.",
      "Mais si votre expertise existe déjà et que vous avez besoin d’un raisonnement plus solide pour la transformer en positionnement, promesse, preuves et message de conversion, alors vous êtes exactement au bon endroit.",
      "Les portes ferment ce soir. Après cela, nous commençons le travail avec les participants inscrits."
    ],
    cta: "Rejoindre Cap Clair"
  }
];

export default function CapClairEmailCasePage() {
  const [active, setActive] = useState(0);
  const email = emails[active];

  return (
    <main className={styles.case}>
      <nav className={`${styles.top} ${styles.wrap}`}>
        <a className={styles.brand} href="/">BB. / CAP CLAIR</a>
        <a className={styles.back} href="/#portfolio">Retour au portfolio ↗</a>
      </nav>

      <section className={`${styles.hero} ${styles.wrap}`}>
        <span className={styles.eyebrow}>ÉTUDE DE CAS · EMAIL MARKETING · NURTURING</span>
        <h1>Cap Clair <span>Faire progresser une décision, un email à la fois.</span></h1>
        <p className={styles.lead}>Une séquence pensée pour une offre de clarification stratégique : chaque email déplace une croyance, répond à une résistance ou rapproche le prospect d’une décision.</p>
        <div className={styles.tags}>
          <span>STRATÉGIE EMAIL</span><span>NURTURING</span><span>COPYWRITING</span><span>OBJECTIONS</span><span>CONVERSION</span>
        </div>
      </section>

      <section className={styles.challenge}>
        <div className={`${styles.wrap} ${styles.challengeGrid}`}>
          <div><span className={styles.eyebrow}>LE DÉFI</span><h2>Ne pas simplement “envoyer 7 emails”.</h2></div>
          <p>Le vrai enjeu était de construire une progression. Le prospect devait d’abord reconnaître le problème, comprendre pourquoi il existe, découvrir une nouvelle manière de le résoudre, puis seulement rencontrer l’offre et décider.</p>
        </div>
      </section>

      <section className={`${styles.paths} ${styles.wrap}`}>
        <div className={styles.intro}><span>LES CHEMINS POSSIBLES</span><h2 className={styles.sectionTitle}>Trois séquences possibles. Une seule correspondait au niveau de maturité recherché.</h2></div>
        <div className={styles.pathGrid}>
          <article className={styles.path}><small>CHEMIN 01</small><h3>Promotion continue</h3><p>Promesse, bénéfices et CTA répétés dès le premier email.</p><strong>Avantage : immédiat.</strong><p>Risque : demander une décision avant d’avoir construit suffisamment de compréhension.</p></article>
          <article className={styles.path}><small>CHEMIN 02</small><h3>Contenu pur</h3><p>Donner beaucoup de valeur et repousser presque toute vente.</p><strong>Avantage : confiance.</strong><p>Risque : éduquer sans créer de transition naturelle vers l’offre.</p></article>
          <article className={`${styles.path} ${styles.chosen}`}><small>CHEMIN 03 · RETENU</small><h3>Progression de croyance</h3><p>Chaque email fait évoluer une question précise dans la tête du prospect.</p><strong>Pourquoi : préparer la décision avant de demander la décision.</strong></article>
        </div>
      </section>

      <section className={`${styles.decision} ${styles.wrap}`}>
        <div className={styles.decisionBox}>
          <span className={styles.eyebrow}>L’ARBITRAGE</span>
          <h3>Une séquence qui change de fonction au fil de la lecture.</h3>
          <p>Identification → éducation → ouverture → méthode → objections → décision → clôture. La pression commerciale augmente uniquement quand la compréhension et la croyance ont déjà progressé.</p>
          <div className={styles.decisionList}><div><b>01</b><span>Commencer par une tension familière</span></div><div><b>02</b><span>Créer une nouvelle lecture du problème</span></div><div><b>03</b><span>Faire entrer l’offre après la compréhension</span></div><div><b>04</b><span>Terminer par une décision nette</span></div></div>
        </div>
      </section>

      <section className={styles.result}>
        <div className={styles.wrap}>
          <div className={styles.resultIntro}>
            <span className={styles.eyebrow}>LE RÉSULTAT</span>
            <h2 className={styles.sectionTitle}>Une séquence que l’on peut réellement lire.</h2>
          </div>
          <div className={styles.reader}>
            <aside className={styles.readerNav}>
              {emails.map((item, index) => (
                <button key={item.n} className={index === active ? styles.readerActive : ""} onClick={() => setActive(index)} type="button">
                  <b>{item.n}</b>
                  <span><strong>{item.role}</strong><small>{item.summary}</small></span>
                </button>
              ))}
            </aside>
            <article className={styles.readerPane}>
              <div className={styles.readerChrome}><span>● ● ●</span><b>CAP CLAIR</b></div>
              <header>
                <small>EMAIL {email.n} · {email.role.toUpperCase()}</small>
                <h2>{email.subject}</h2>
                <p>{email.preheader}</p>
              </header>
              <div className={styles.readerCopy}>
                {email.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                <button type="button">{email.cta} →</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.summary} ${styles.wrap}`}>
        <p>STRATÉGIE EMAIL · NURTURING · COPYWRITING · OBJECTIONS · CONVERSION</p>
        <h2>Le but n’était pas d’écrire sept textes. C’était de construire sept étapes d’une même décision.</h2>
        <a className={styles.cta} href="/#portfolio">Voir les autres projets ↗</a>
      </section>
    </main>
  );
}

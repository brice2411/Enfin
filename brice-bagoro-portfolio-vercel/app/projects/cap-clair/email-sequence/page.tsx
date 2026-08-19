"use client";

import { useState } from "react";
import styles from "./cap-clair-case.module.css";

const emails = [
  {
    n:"01", role:"Identification", summary:"Vous n’avez probablement pas besoin d’une nouvelle idée",
    subject:"Vous n’avez probablement pas besoin d’une nouvelle idée",
    preheader:"Le problème se trouve souvent entre ce que vous savez faire et ce que votre prospect comprend.",
    body:[
      "Bonjour {{prenom}},",
      "Quand une offre ne trouve pas sa place, le premier réflexe consiste souvent à ajouter : un nouveau bonus, une nouvelle promesse, un nouveau canal ou même une nouvelle offre.",
      "Pourtant, le problème n’est pas toujours ce qui manque. Il se trouve parfois entre la valeur que vous savez apporter et la manière dont cette valeur est comprise.",
      "Votre prospect peut regarder votre offre et penser : « intéressant… mais est-ce vraiment pour moi ? » Ce petit doute suffit à ralentir toute la décision.",
      "Dans les prochains emails, nous allons explorer ce passage : partir de votre expertise, identifier ce qui compte réellement pour votre prospect et construire une offre qu’il peut comprendre sans effort inutile.",
      "Nous commencerons par une question simple : qu’essaie réellement de résoudre votre client lorsqu’il vient vers vous ?"
    ], cta:"Clarifier ce que mon client cherche"
  },
  {
    n:"02", role:"Éducation", summary:"Pourquoi une bonne expertise reste parfois difficile à vendre",
    subject:"Une bonne offre peut être difficile à acheter",
    preheader:"La valeur réelle et la valeur perçue ne se rencontrent pas toujours au premier regard.",
    body:[
      "Bonjour {{prenom}},",
      "Vous pouvez être excellent dans ce que vous faites et pourtant obliger votre prospect à travailler trop dur pour comprendre pourquoi il devrait vous choisir.",
      "Imaginez deux offres comparables. La première présente dix bénéfices, six bonus et une longue liste de fonctionnalités. La seconde répond immédiatement à trois questions : « Est-ce pour moi ? », « Qu’est-ce que cela va changer ? » et « Pourquoi cette approche plutôt qu’une autre ? »",
      "La seconde n’est pas nécessairement meilleure. Elle est simplement plus facile à évaluer.",
      "C’est là qu’une grande partie de la persuasion se joue : non pas dans la quantité d’arguments, mais dans l’ordre dans lequel le prospect reçoit les bonnes informations.",
      "Avant d’ajouter un argument, demandez-vous donc : quelle question reste encore sans réponse dans sa tête ?"
    ], cta:"Identifier la question qui bloque"
  },
  {
    n:"03", role:"Ouverture", summary:"5 jours pour rendre votre offre plus simple à comprendre",
    subject:"5 jours pour rendre votre offre plus simple à comprendre",
    preheader:"Cap Clair ouvre aujourd’hui : voici le travail que nous allons faire ensemble.",
    body:[
      "Bonjour {{prenom}},",
      "Les inscriptions à Cap Clair sont ouvertes.",
      "Pendant 5 jours, nous n’allons pas chercher à rendre votre offre plus bruyante. Nous allons chercher à la rendre plus évidente.",
      "Jour 1 : isoler le vrai problème que votre prospect veut résoudre. Jour 2 : repérer ce qu’il sait déjà et ce qu’il ne croit plus. Jour 3 : clarifier votre promesse et votre différence. Jour 4 : organiser les preuves et les objections. Jour 5 : transformer le tout en un message que l’on comprend rapidement.",
      "Le résultat attendu n’est pas une jolie phrase. C’est une architecture de décision : votre prospect doit savoir ce que vous proposez, pourquoi cela compte et pourquoi il devrait continuer à vous écouter.",
      "Si votre offre est solide mais que son message vous semble encore trop compliqué, Cap Clair a été construit précisément pour ce moment."
    ], cta:"Rejoindre Cap Clair"
  },
  {
    n:"04", role:"Méthode", summary:"Ce que nous allons clarifier : et dans quel ordre",
    subject:"On ne corrige pas une offre dans n’importe quel ordre",
    preheader:"Promesse, objections, preuves, mécanisme : chaque élément arrive à un moment précis.",
    body:[
      "Bonjour {{prenom}},",
      "Une erreur fréquente consiste à travailler directement sur les mots : le titre, le CTA, les bullets, les emails.",
      "Mais un texte ne peut pas réparer une stratégie encore floue.",
      "Dans Cap Clair, l’ordre est volontaire. D’abord : qui essaie de décider ? Ensuite : que sait déjà cette personne ? Puis : qu’a-t-elle trop entendu ? Que refuse-t-elle encore de croire ? Enfin seulement : quelle promesse, quelle preuve et quel angle peuvent réellement faire avancer sa décision ?",
      "Cet ordre change la qualité du message parce qu’il empêche de rédiger à partir de ce que nous voulons dire. Nous rédigeons à partir de ce que le prospect a besoin de comprendre maintenant.",
      "Le copywriting devient alors la conséquence d’un raisonnement, pas une collection de formules."
    ], cta:"Voir la méthode Cap Clair"
  },
  {
    n:"05", role:"Objections", summary:"« Mon activité est trop différente pour suivre une méthode »",
    subject:"« Mon activité est trop différente pour suivre une méthode »",
    preheader:"Une méthode stratégique ne standardise pas votre offre : elle standardise les bonnes questions.",
    body:[
      "Bonjour {{prenom}},",
      "Peut-être que vous pensez : « D’accord, mais mon activité est particulière. Mes clients ne réagissent pas comme ceux des autres. »",
      "Et vous avez raison sur un point : le message final ne devrait pas être identique.",
      "Cap Clair ne vous demande pas d’utiliser la même promesse, le même angle ou le même tunnel que tout le monde. La méthode fournit plutôt un ordre de diagnostic : niveau de conscience, sophistication du marché, scepticisme, objections, désir, preuve et risque perçu.",
      "Deux entreprises peuvent donc suivre exactement les mêmes questions et arriver à deux messages complètement différents.",
      "La structure n’efface pas votre singularité. Elle évite simplement de confondre singularité et improvisation."
    ], cta:"Vérifier si Cap Clair me correspond"
  },
  {
    n:"06", role:"Décision", summary:"Ce que vous repartez avec à la fin de Cap Clair",
    subject:"À la fin, vous ne repartez pas avec “plus d’idées”",
    preheader:"Vous repartez avec des décisions plus nettes sur votre offre et votre message.",
    body:[
      "Bonjour {{prenom}},",
      "Cap Clair ferme demain.",
      "Avant que vous décidiez, voici ce que le programme cherche réellement à produire.",
      "Pas cinquante nouveaux angles. Pas un document rempli de jargon. Mais une lecture plus précise de votre marché, une proposition de valeur mieux hiérarchisée, les objections qui méritent réellement une réponse, les preuves qui doivent porter votre promesse et une direction de message suffisamment claire pour être déployée sur une page, un email ou une publicité.",
      "Autrement dit : moins de décisions prises au hasard quand vient le moment de rédiger.",
      "Si aujourd’hui vous sentez que votre expertise est plus claire dans votre tête que dans celle de vos prospects, Cap Clair peut vous aider à réduire cet écart."
    ], cta:"Rejoindre Cap Clair avant demain"
  },
  {
    n:"07", role:"Clôture", summary:"Les inscriptions ferment ce soir : voici comment décider",
    subject:"Ce soir, Cap Clair ferme ses portes",
    preheader:"Une dernière question pour savoir si vous devez nous rejoindre.",
    body:[
      "Bonjour {{prenom}},",
      "Les inscriptions à Cap Clair ferment ce soir.",
      "Je pourrais terminer en ajoutant une nouvelle liste de bénéfices. Mais ce serait précisément l’inverse de ce que nous avons défendu pendant cette séquence.",
      "Alors voici une seule question : votre problème actuel vient-il d’un manque réel de valeur dans votre offre… ou du fait que cette valeur n’est pas encore assez simple à comprendre, à croire et à choisir ?",
      "Si la valeur elle-même manque, Cap Clair ne la fabriquera pas artificiellement.",
      "Mais si votre expertise existe déjà et que vous avez besoin d’un raisonnement plus solide pour la transformer en positionnement, promesse, preuves et message de conversion, alors vous êtes exactement au bon endroit.",
      "Les portes ferment ce soir. Après cela, nous commençons le travail avec les participants inscrits."
    ], cta:"Rejoindre Cap Clair"
  },
];

export default function CapClairEmailCasePage() {
  const [active, setActive] = useState(0);
  const email = emails[active];

  return (
    <main className={styles.case}>
      <nav className={`${styles.top} ${styles.wrap}`}><a className={styles.brand} href="/">BB. / CAP CLAIR</a><a className={styles.back} href="/#portfolio">Retour au portfolio ↗</a></nav>

      <section className={`${styles.hero} ${styles.wrap}`}>
        <span className={styles.eyebrow}>ÉTUDE DE CAS · EMAIL MARKETING · NURTURING</span>
        <h1>Cap Clair <span>Faire progresser une décision, un email à la fois.</span></h1>
        <p className={styles.lead}>Une séquence pensée pour une offre de clarification stratégique : chaque email déplace une croyance, répond à une résistance ou rapproche le prospect d’une décision.</p>
        <div className={styles.tags}><span>STRATÉGIE EMAIL</span><span>NURTURING</span><span>COPYWRITING</span><span>OBJECTIONS</span><span>CONVERSION</span></div>
      </section>

      <section className={styles.challenge}><div className={`${styles.wrap} ${styles.challengeGrid}`}><div><span className={styles.eyebrow}>LE DÉFI</span><h2>Ne pas simplement “envoyer 7 emails”.</h2></div><p>Le vrai enjeu était de construire une progression. Le prospect devait d’abord reconnaître le problème, comprendre pourquoi il existe, découvrir une nouvelle manière de le résoudre, puis seulement rencontrer l’offre et décider.</p></div></section>

      <section className={`${styles.paths} ${styles.wrap}`}><div className={styles.intro}><span>LES CHEMINS POSSIBLES</span><h2 className={styles.sectionTitle}>Trois séquences possibles. Une seule correspondait au niveau de maturité recherché.</h2></div><div className={styles.pathGrid}><article className={styles.path}><small>CHEMIN 01</small><h3>Promotion continue</h3><p>Promesse, bénéfices et CTA répétés dès le premier email.</p><strong>Avantage : immédiat.</strong><p>Risque : demander une décision avant d’avoir construit suffisamment de compréhension.</p></article><article className={styles.path}><small>CHEMIN 02</small><h3>Contenu pur</h3><p>Donner beaucoup de valeur et repousser presque toute vente.</p><strong>Avantage : confiance.</strong><p>Risque : éduquer sans créer de transition naturelle vers l’offre.</p></article><article className={`${styles.path} ${styles.chosen}`}><small>CHEMIN 03 · RETENU</small><h3>Progression de croyance</h3><p>Chaque email fait évoluer une question précise dans la tête du prospect.</p><strong>Pourquoi : préparer la décision avant de demander la décision.</strong></article></div></section>

      <section className={`${styles.decision} ${styles.wrap}`}><div className={styles.decisionBox}><span className={styles.eyebrow}>L’ARBITRAGE</span><h3>Une séquence qui change de fonction au fil de la lecture.</h3><p>Identification → éducation → ouverture → méthode → objections → décision → clôture. La pression commerciale augmente uniquement quand la compréhension et la croyance ont déjà progressé.</p><div className={styles.decisionList}><div><b>01</b><span>Commencer par une tension familière</span></div><div><b>02</b><span>Créer une nouvelle lecture du problème</span></div><div><b>03</b><span>Faire entrer l’offre après la compréhension</span></div><div><b>04</b><span>Terminer par une décision nette</span></div></div></div></section>

      <section className={styles.result}><div className={styles.wrap}><div className={styles.resultIntro}><span className={styles.eyebrow}>LE RÉSULTAT</span><h2 className={styles.sectionTitle}>Une séquence que l’on peut réellement lire.</h2><p>Le format reprend la logique de la version précédente : navigation à gauche, email complet à droite. Cliquez sur une étape pour lire le message correspondant.</p></div>
        <div className={styles.reader}>
          <aside className={styles.readerNav}>{emails.map((item,index)=><button key={item.n} className={index===active?styles.readerActive:""} onClick={()=>setActive(index)} type="button"><b>{item.n}</b><span><strong>{item.role}</strong><small>{item.summary}</small></span></button>)}</aside>
          <article className={styles.readerPane}>
            <div className={styles.readerChrome}><span>● ● ●</span><b>CAP CLAIR</b></div>
            <header><small>EMAIL {email.n} · {email.role.toUpperCase()}</small><h2>{email.subject}</h2><p>{email.preheader}</p></header>
            <div className={styles.readerCopy}>{email.body.map((paragraph,index)=><p key={index}>{paragraph}</p>)}<a href="#" onClick={(e)=>e.preventDefault()}>{email.cta} →</a></div>
          </article>
        </div>
      </section>

      <section className={`${styles.summary} ${styles.wrap}`}><p>STRATÉGIE EMAIL · NURTURING · COPYWRITING · OBJECTIONS · CONVERSION</p><h2>Le but n’était pas d’écrire sept textes. C’était de construire sept étapes d’une même décision.</h2><a className={styles.cta} href="/#portfolio">Voir les autres projets ↗</a></section>
    </main>
  );
}

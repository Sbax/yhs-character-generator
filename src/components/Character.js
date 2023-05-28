import React from "react";
import styles from "./character.module.scss";

function Character({ character }) {
  const {
    firstName,
    lastName,
    intro,
    profession,
    age,
    traits,
    past,
    goal,
    stats,
    items,
  } = character;

  const [firstTrait, secondTrait] = traits;

  const { courage, selfControl, sharpness, wisdom, hp, curseResistance } =
    stats;

  return (
    <section className={styles.container}>
      <h1>
        {firstName} {lastName}
      </h1>
      <section className={styles.description}>
        {intro} {profession} di {age} anni {firstTrait} e {secondTrait} che{" "}
        {past} e sta cercando {goal}.
      </section>
      <ul className={styles.stats}>
        <li>
          <b>Coraggio</b> {courage}
        </li>
        <li>
          <b>Autocontrollo</b> {selfControl}
        </li>
        <li>
          <b>Acume</b> {sharpness}
        </li>
        <li>
          <b>Saggezza</b> {wisdom}
        </li>
      </ul>
      <ul className={styles.stats}>
        <li>
          <b>PS</b> {hp}
        </li>
        <li>
          <b>Resistenza alle maledizioni</b> {curseResistance}
        </li>
      </ul>
      <section className={styles.items}>
        <h3>Equipaggiamento</h3>
        <ul>
          {items.map(({ name, description }, index) => (
            <li key={index}>
              <b>{name}</b>
              {description ? `. ${description}` : "."}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Character;

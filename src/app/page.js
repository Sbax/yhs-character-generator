"use client";

import Character from "@/components/Character";
import { getCharacter } from "@/generator";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

export default function Home() {
  const [character, setCharacter] = useState();

  useEffect(() => {
    setCharacter(getCharacter());
  }, []);

  if (!character) return;

  return (
    <main className={styles.main}>
      <Character character={character} />
      <button onClick={() => setCharacter(getCharacter())}>
        Genera un nuovo cacciatore
      </button>

      <footer>
        <section>
          Yokai Hunters Society © {new Date().getFullYear()}{" "}
          <a href="https://www.punkpadour.com/">Punkpadour</a>
        </section>
        <section>
          Traduzioni per la versione italiana a cura di{" "}
          <a href="https://www.nigredopress.it/">Nigredo Press</a>
        </section>
      </footer>
    </main>
  );
}

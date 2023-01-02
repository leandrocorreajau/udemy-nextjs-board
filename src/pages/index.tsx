import Head from "next/head";
import styles from "../styles/styles.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando suas Tarefas</title>
      </Head>
      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Ferramenta Board" />
        <section className={styles.callToAction}>
          <h1>
            Uma ferramenta para seu dia a dia. Escreva, planeje e orfanize-se...
          </h1>
          <p>
            <span>100% Gratuita</span> e online.
          </p>
        </section>
        <div className={styles.donaters}>
          <img src="https://sujeitoprogramador.com/steve.png" alt="Usuário 1" />
          <img src="https://sujeitoprogramador.com/steve.png" alt="Usuário 2" />
          <img src="https://sujeitoprogramador.com/steve.png" alt="Usuário 3" />
          <img src="https://sujeitoprogramador.com/steve.png" alt="Usuário 4" />
          <img src="https://sujeitoprogramador.com/steve.png" alt="Usuário 5" />
          <img src="https://sujeitoprogramador.com/steve.png" alt="Usuário 6" />
          <img src="https://sujeitoprogramador.com/steve.png" alt="Usuário 7" />
          <img src="https://sujeitoprogramador.com/steve.png" alt="Usuário 8" />
          <img src="https://sujeitoprogramador.com/steve.png" alt="Usuário 9" />
        </div>
      </main>
    </>
  );
}

import { Fragment } from "react";
import GifExpertApp from "./components/gif-expert-app/GifExpertApp";
import styles from "./App.module.scss";

function App() {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className={styles.title}>Gif Expert App</h1>
      </header>
      <main className={styles.container}>
        <GifExpertApp />
      </main>
      <footer></footer>
    </Fragment>
  );
}

export default App;

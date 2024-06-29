import * as React from "react";
import styles from "./app.module.css";

export default function App() {
  return (
    <div className={styles.question}>
      <h1 className={styles.text}>Vamos largar às 22h hoje?</h1>
      <div className={styles.display}>Não</div>
    </div>
  );
}

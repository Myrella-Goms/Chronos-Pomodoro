import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="" target="blank" className={styles.links}>
        Entenda como funciona a técnica pomodoro
      </a>
      <a href="" className={styles.links}>
        Chronos Pomodoro, {new Date().getFullYear()}
      </a>
    </footer>
  );
}

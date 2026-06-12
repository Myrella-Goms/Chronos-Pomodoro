import styles from './NotFound.module.css'
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <div className={styles.title}>
        Page Not Found
      </div>
      <div className={styles.subtitle}>
        This content no longer exists :(
      </div>
    </MainTemplate>
  );
}

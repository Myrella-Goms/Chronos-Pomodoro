import { useTaskContext } from "../../templates/contexts/TaskContext/useTaskContext";
import styles from "./Countdown.module.css";

export function CountDown() {
  const { state } = useTaskContext();
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}

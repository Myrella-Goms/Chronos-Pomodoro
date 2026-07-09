import { useTaskContext } from "../../templates/contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./Cycles.module.css";

export function Cycles() {
  const { state } = useTaskContext();
  //criando um array com o número de ciclos obtidos do state
  const cycleSteps = Array.from({ length: state.currentCycle });
  console.log(cycleSteps);

  const cycleDescription = {
    workTime: "foco",
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo'
  }

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        {cycleSteps.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycle}-{nextCycleType}`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ${cycleDescription[nextCycleType]}`}
              title={`Indicador de ${cycleDescription[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

//iteramos sobre o array pra pegar o index
//com o numero, obtemos o tipo de ciclo
//sempre que usarmos map para criar uma lista, esses elementos precisam de uma key que é identificador único daquele elemento
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Button } from "../Button/Button";
import { Cycles } from "../Cycles/Cycles";
import { Input } from "../Input/Input";
import styles from "./Form.module.css";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../templates/contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function Form() {
  //usando useRef para não re-renderizar o componente em tempo real
  const taskNameInput = useRef<HTMLInputElement>(null);
  const { state, setState } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle); //o currentCyle é 0, pegamos a propriedade pelo estado e jogamos na função pra validar
  const cycleType = getNextCycleType(nextCycle); //com o número do ciclo, podemos definir qual tipo de ciclo será

  const handleStopButton = () => {
    setState((prevState) => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: prevState.tasks.map((task) => {
          if (prevState.activeTask && prevState.activeTask.id == task.id)
            return { ...task, interruptDate: Date.now() };
          return task;
        }),
      };
    });
  };
  //capturando o evento de submit do formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //se o valor de taskNameInput for nulo ou for uma string vazia, barra o submit
    if (!taskNameInput.current || taskNameInput.current.value.trim() === "") {
      alert("Digite o nome da tarefa");
      return;
    }

    //sem espaços vazios
    const taskName = taskNameInput.current.value.trim();

    //criando nova task:
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[cycleType], //acessando o valor do config por meio da chave
      type: cycleType,
    };

    const secondsRemaining = newTask.duration * 60;
    const formattedSecondsRemaining = formatSecondsToMinutes(secondsRemaining);

    setState((prevState) => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining: secondsRemaining,
        formattedSecondsRemaining: formattedSecondsRemaining,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  console.log(state);

  return (
    <form onSubmit={handleSubmit} className={styles.form} action="">
      <div className={styles.formRow}>
        <Input
          labelText="Task"
          id="myInput"
          type="text"
          placeholder="Digite aqui"
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">Próximo intervalo é de 25min</div>

      <div className="formRow">
        {!state.activeTask && (
          <Button
            aria-label="Iniciar nova tarefa"
            title="Iniciar nova tarefa"
            type="submit"
            icon={<PlayCircleIcon />}
            key={"subButton"}
          />
        )}
        {state.activeTask && (
          <Button
            aria-label="Interromper tarefa"
            title="Interromper tarefa"
            onClick={handleStopButton}
            type="button"
            color="red"
            icon={<StopCircleIcon />}
            key={"nonFormButton"}
          />
        )}
      </div>
    </form>
  );
}

//se usar ternário para renderizar o mesmo componente com propriedades diferentes, é bacana usar key para evitar bug do react se confundir e reaproveitar qual botão estamos trabalhando, podendo usar valores do botão que está sendo renderizado primeiro
//se usar &&, geralmente sana o problema com qual tipo do botão

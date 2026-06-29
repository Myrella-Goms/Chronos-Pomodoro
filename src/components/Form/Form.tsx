import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button/Button";
import { Cycles } from "../Cycles/Cycles";
import { Input } from "../Input/Input";
import styles from "./Form.module.css";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../templates/contexts/TaskContext/useTaskContext";

export function Form() {
  //usando useRef para não re-renderizar o componente em tempo real
  const taskNameInput = useRef<HTMLInputElement>(null);
  const { state, setState } = useTaskContext();

  //capturando o evento de submit do formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //se o valor de taskNameInput for nulo ou for uma string vazia, barra o submit
    if (!taskNameInput.current || taskNameInput.current.value.trim() === "") {
      alert("Digite o nome da tarefa");
      return;
    }

    const taskName = taskNameInput.current.value.trim();

    //criando nova task:
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: "workTime",
    };

    const secondsRemaining =  newTask.duration * 60

    setState((prevState) => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: 1,
        secondsRemaining: secondsRemaining,
        formattedSecondsRemaining: '00:00',
        tasks: [...prevState.tasks, newTask]
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
        />
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <Button icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}

import {  useState } from "react";
import { initialTaskState } from "./initialTaskContext";
import { TaskContext } from "./TaskContext";

interface TaskContextProviderProps {
  children: React.ReactNode;
}
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  //provider provem o valor dentro das chaves para os componentes que estão dentro do contexto, nesse caso, estamos enviando o estado com valor inicial para dentro de todos os componentes
  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}

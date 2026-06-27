//contexto é formado por duas coisas

import React, { createContext, useContext, useState } from "react";
import type { TaskStateModel } from "../../../models/TaskStateModel";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "20:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

//contrato para controlar o estado da aplicação quando os dados atualizarem para renderizar o componente, simulando o hook useState
interface TaskContextProps {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

const initialContextValue = {
  state: initialState,
  setState: () => {},
};
//o parametro defaultValue de um contexto é o valor que eu quero que o contexto tenha quando não há nenhum provider na arvore acima lendo o contexto - um valor inicial se eu não provenho nada, QUASE NUNCA USADO
//preciso prover o contexto para os componentes que irão usar esse contexto, logo geralmente sempre vai haver um provider que vai prover um valor para os componentes que estão dentro desse provider, qu estão na arvore
export const TaskContext = createContext<TaskContextProps>(initialContextValue);

interface TaskContextProviderProps {
  children: React.ReactNode;
}
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialState);
  //provider provem o valor dentro das chaves para os componentes que estão dentro do contexto, nesse caso, estamos enviando o estado com valor inicial para dentro de todos os componentes
  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}

//hook personalizado que retorna o contexto que criamos com o tipo state e setSate, que contem o objeto inicial global da nossa aplicação. 
export function useTaskContext() {
  return useContext(TaskContext);
}

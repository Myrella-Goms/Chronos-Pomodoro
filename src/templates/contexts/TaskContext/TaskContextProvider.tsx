import {  useReducer, useState } from "react";
import { initialTaskState } from "./initialTaskContext";
import { TaskContext } from "./TaskContext";

interface TaskContextProviderProps {
  children: React.ReactNode;
}
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);
  const [stateReducer, dispatch] = useReducer((state, action) => { 
    switch(action){
      case 'increment': 
        return state + 1;
      case 'decrement':
        return state - 1;
    }
    return state
  }, 0)

  //provider provem o valor dentro das chaves para os componentes que estão dentro do contexto, nesse caso, estamos enviando o estado com valor inicial para dentro de todos os componentes
  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>Estado inicial usando reducer {stateReducer}</h1>
      <button onClick={() => dispatch('decrement')}>Incrementar</button>
      {children}
    </TaskContext.Provider>
  );
}

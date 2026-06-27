//contexto é formado por duas coisas

import { createContext } from "react";
import type { TaskStateModel } from "../../../models/TaskStateModel";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

//o parametro defaultValue de um contexto é o valor que eu quero que o contexto tenha quando não há nenhum provider na arvore acima lendo o contexto - um valor inicial se eu não provenho nada
//preciso prover o contexto para os componentes que irão usar esse contexto, logo geralmente sempre vai haver um provider que vai prover um valor para os componentes que estão dentro desse provider, qu estão na arvore
export const TaskContext = createContext({
    chave: 'valor',
})
import { createContext } from "react";
import type { TaskStateModel } from "../../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskContext";

//contrato para controlar o estado da aplicação quando os dados atualizarem para renderizar o componente, simulando o hook useState
interface TaskContextProps {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};
//ContextAPI usada para pra compartilhar dados globais entre componentes - toast
//o parametro defaultValue de um contexto é o valor que eu quero que o contexto tenha quando não há nenhum provider na arvore acima lendo o contexto - um valor inicial se eu não provenho nada, QUASE NUNCA USADO
//preciso prover o contexto para os componentes que irão usar esse contexto, logo geralmente sempre vai haver um provider que vai prover um valor para os componentes que estão dentro desse provider, qu estão na arvore
export const TaskContext = createContext<TaskContextProps>(initialContextValue);

//contexto é formado por duas coisas

import { useContext } from "react";
import { TaskContext } from "./TaskContext";
//hook personalizado que retorna o contexto que criamos com o tipo state e setSate, que contem o objeto inicial global da nossa aplicação.
export function useTaskContext() {
  return useContext(TaskContext);
}

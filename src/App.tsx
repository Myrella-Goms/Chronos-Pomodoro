
import { Home } from "./pages/home/Home";

import "./styles/global.css";
import "./styles/theme.css";
import { TaskContext } from "./templates/contexts/TaskContext";

function App() {

  return (
    //provider provem o valor dentro das chaves para os componentes que estão dentro do contexto
    <TaskContext.Provider value={{ chave: 'dadsf'}}>
      <Home />
    </TaskContext.Provider>
  );
}

export default App;

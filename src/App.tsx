import { Home } from "./pages/home/Home";

import "./styles/global.css";
import "./styles/theme.css";
import { TaskContextProvider } from "./templates/contexts/TaskContext/TaskContextProvider";


function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

export default App;

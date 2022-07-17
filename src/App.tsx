import DailyManger from "./layouts/DailyManger";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MontlyManger from "./layouts/MontlyManger";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DailyManger />;
      <MontlyManger />;
    </DndProvider>
  );
}

export default App;

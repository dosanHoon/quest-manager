import DailyManger from "./layouts/DailyManger";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DailyManger />;
    </DndProvider>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import MyRouter from "./MyRouter";
import NavigationPanel from "./Modules/NavigationPanel";
function App() {
  return (
    <>
      <BrowserRouter>
        <MyRouter />
        <NavigationPanel />
      </BrowserRouter>
    </>
  );
}

export default App;

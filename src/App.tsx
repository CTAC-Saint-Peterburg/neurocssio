import { BrowserRouter } from "react-router-dom";
import MyRouter from "./MyRouter";
import NavigationPanel from "./Modules/NavigationPanel";
import useClient from "./Store/store";

function App() {
  const { client }: any = useClient();
  return (
    <>
      <BrowserRouter>
        <MyRouter />
        {client?.login === "true" && <NavigationPanel />}
      </BrowserRouter>
    </>
  );
}

export default App;

import useClient from "../../Store/store";
import { Login } from "../Login";

const Editor = () => {
  const { client }: any = useClient();
  return !!client?.login ? <>Editor</> : <Login />;
};
export default Editor;

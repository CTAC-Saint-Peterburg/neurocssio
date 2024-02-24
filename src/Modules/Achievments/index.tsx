import useClient from "../../Store/store";
import { Login } from "../Login";

const Achievments = () => {
  const { client }: any = useClient();
  return !!client?.login ? <>Achievements</> : <Login />;
};
export default Achievments;

import { Button } from "@mui/material";
import useClient from "../../Store/store";
import { Login } from "../Login";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { client, resetClient }: any = useClient();
  const goToLink = useNavigate();
  return !!client?.login ? (
    <>
      <Button
        sx={{ backgroundColor: "green", color: "white" }}
        onClick={() => {
          resetClient();
          goToLink("/");
        }}
      >
        Выйти
      </Button>
    </>
  ) : (
    <Login />
  );
};
export default Settings;

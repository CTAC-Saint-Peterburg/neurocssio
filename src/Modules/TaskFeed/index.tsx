import { Box, Typography } from "@mui/material";
import useClient from "../../Store/store";
import { Login } from "../Login";
import { TaskBrowser } from "./components/TaskBrowser";

const TaskFeed = () => {
  const { client }: any = useClient();
  console.log(client);
  return !!client?.login ? (
    <>
      <Box>
        <Typography>TaskFeed</Typography>
        <TaskBrowser />
      </Box>
    </>
  ) : (
    <Login />
  );
};

export default TaskFeed;

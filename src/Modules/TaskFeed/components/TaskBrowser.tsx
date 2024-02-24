import { Box, Typography } from "@mui/material";
import { TaskUnit } from "./TaskUnit";

export const TaskBrowser = () => {
  return (
    <>
      <Box>
        <Box sx={{ backgroundColor: "red" }}>
          <Typography> элементы управления</Typography>
        </Box>
        <Box>
          {new Array(4).fill("test").map((_, index) => (
            <TaskUnit key={index} />
          ))}
        </Box>
      </Box>
    </>
  );
};

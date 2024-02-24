import { Box, Button, Typography } from "@mui/material";

export const TaskUnit = () => {
  return (
    <>
      <Box>
        <Box>
          <Typography>Задача: null</Typography>
          <Typography>Сложность: null</Typography>
          <Typography>Описание: null</Typography>
        </Box>
        <Box>
          <Button sx={{ backgroundColor: "green", color: "white" }}>
            Решить
          </Button>
        </Box>
      </Box>
    </>
  );
};

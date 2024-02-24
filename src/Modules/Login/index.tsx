import { Typography, Box, TextField, Button } from "@mui/material";
import useClient from "../../Store/store";

export const Login = () => {
  const { setLogin }: any = useClient();
  return (
    <>
      <Box
        sx={{
          marginTop: "40vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Войти</Typography>
        <Box>
          <Box>
            <Typography>Логин:</Typography>
            <TextField />
          </Box>
          <Box>
            <Typography>Пароль:</Typography>
            <TextField />
          </Box>
        </Box>
        <Box mt={1}>
          <Button
            sx={{ backgroundColor: "green", color: "white" }}
            onClick={() => setLogin("Test")}
          >
            войти
          </Button>
        </Box>
      </Box>
    </>
  );
};

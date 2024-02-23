import { Box, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Settings,
  AutoAwesomeMotion,
  EmojiEvents,
  DeveloperMode,
} from "@mui/icons-material";

const MainWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  position: "fixed",
  bottom: "10px",
});

const Main = styled(Box)({
  padding: "10px",
  display: "flex",
  maxWidth: "600px",
  minWidth: "390px",
  borderRadius: "12px",
  justifyContent: "center",
  gap: "10%",
});

const MenuUnit = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const NavigationPanel = () => {
  const goToLink = useNavigate();
  return (
    <>
      <MainWrapper>
        <Main
          sx={{
            backgroundColor: "#575050",
            minHeight: { sx: "10vh", md: "8vh" },
          }}
        >
          <MenuUnit onClick={() => goToLink("/")}>
            <AutoAwesomeMotion
              sx={{
                color: "white",
                width: { sx: "30px", md: "50px" },
                height: { sx: "30px", md: "50px" },
              }}
            />
          </MenuUnit>
          <MenuUnit onClick={() => goToLink("/b")}>
            <DeveloperMode
              sx={{
                color: "white",
                width: { sx: "30px", md: "50px" },
                height: { sx: "30px", md: "50px" },
              }}
            />
          </MenuUnit>
          <MenuUnit onClick={() => goToLink("/c")}>
            <EmojiEvents
              sx={{
                color: "white",
                width: { sx: "30px", md: "50px" },
                height: { sx: "30px", md: "50px" },
              }}
            />
          </MenuUnit>
          <MenuUnit onClick={() => goToLink("/d")}>
            <Settings
              sx={{
                color: "white",
                width: { sx: "30px", md: "50px" },
                height: { sx: "30px", md: "50px" },
              }}
            />
          </MenuUnit>
        </Main>
      </MainWrapper>
    </>
  );
};
export default NavigationPanel;

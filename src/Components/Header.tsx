import {
  Container,
  createTheme,
  ThemeProvider,
  Grid,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import myIcon from "../Assets/icon.png";

const customTheme = createTheme({
  palette: {
    primary: { main: "#D6CC99" },
    secondary: { main: "#445D48" },
  },
});

const Header = () => {
  const navigate = useNavigate();

  const handleClickHome = async () => {
    navigate("/");
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container
        sx={{
          height: "10vh",
          minWidth: "100%",
        }}
      >
        <Grid
          container
          direction="column"
          sx={{
            color: "white",
            height: "15vh",
          }}
        >
          <Grid
            item
            sx={{
              width: { xs: "1px", lg: "11px" },
              display: "flex",
              justifyContent: "left",
            }}
            alignItems="left"
          >
            <Button
              onClick={() => handleClickHome()}
              disableElevation
              disableRipple
              disableTouchRipple
              sx={{
                borderRadius: "1px",
                maxHeight: "0px",
                maxWidth: "0px",
                "&:hover": {
                  background: "none",
                },
              }}
            >
              <Box
                component="img"
                justifyContent="center"
                sx={{
                  paddingLeft: "4vh",
                  paddingTop: "11vh",
                  height: "100px",
                  width: "120px",
                  backgroundImage: myIcon,
                  alignItems: "left",
                }}
                src={myIcon}
              />
            </Button>
          </Grid>
          <Grid
            container
            alignItems="right"
            justifyContent="right"
            direction="row"
            sx={{
              paddingTop: "5vh",
            }}
          >
            <Grid
              item
              sx={{
                width: { xs: "200px", lg: "200px" },
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "right",
              }}
            >
              <Button onClick={() => handleClickHome()}>
                <Typography textTransform="none" color="primary" variant="h6">
                  •{" "}
                </Typography>
                <Typography color="inherit" noWrap>
                  &nbsp;
                </Typography>
                <Typography textTransform="none" color="secondary" variant="h6">
                  Projects
                </Typography>
              </Button>
            </Grid>
            <Grid
              item
              sx={{
                width: { xs: "200px", lg: "200px" },
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "right",
              }}
            >
              <Button onClick={() => handleClickHome()}>
                <Typography textTransform="none" color="primary" variant="h6">
                  •{" "}
                </Typography>
                <Typography color="inherit" noWrap>
                  &nbsp;
                </Typography>
                <Typography textTransform="none" color="secondary" variant="h6">
                  About Me
                </Typography>
              </Button>
            </Grid>
            <Grid
              item
              sx={{
                width: { xs: "200px", lg: "200px" },
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "right",
              }}
            >
              <Button onClick={() => handleClickHome()}>
                <Typography textTransform="none" color="primary" variant="h6">
                  •{" "}
                </Typography>
                <Typography color="inherit" noWrap>
                  &nbsp;
                </Typography>
                <Typography textTransform="none" color="secondary" variant="h6">
                  Contact
                </Typography>
              </Button>
            </Grid>
            <Grid
              item
              sx={{
                width: { xs: "200px", lg: "200px" },
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "right",
              }}
            >
              <Button
                color="primary"
                onClick={() => handleClickHome()}
                variant="outlined"
              >
                Resume
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Header;

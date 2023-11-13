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
import resumePDF from "../Assets/AdamDupuyJrResume2023.pdf";

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

  const handleClickAboutMe = async () => {
    navigate("/infoPage", { state: { pageType: "About Me" } });
    window.location.reload();
  };

  const handleClickContact = async () => {
    navigate("/infoPage", { state: { pageType: "Contact" } });
    window.location.reload();
  };

  const handleClickProjects = async () => {
    navigate("/projects");
  };

  customTheme.typography.h5 = {
    fontSize: "0.8rem",
    "@media (min-width:600px)": {
      fontSize: "0.5rem",
    },
    [customTheme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
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
                  paddingLeft: { xs: "2vh", lg: "4vh" },
                  paddingTop: "15vh",
                  height: { xs: "55px", lg: "100px" },
                  width: { xs: "75px", lg: "120px" },
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
              paddingTop: { xs: "4vh", lg: "5vh" },
            }}
          >
            <Grid
              item
              sx={{
                width: { xs: "80px", lg: "200px" },
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "right",
                paddingLeft: { xs: "70px" },
              }}
            >
              <Button onClick={() => handleClickProjects()}>
                <Typography textTransform="none" color="primary" variant="h5">
                  •{" "}
                </Typography>
                <Typography color="inherit" noWrap>
                  &nbsp;
                </Typography>
                <Typography textTransform="none" color="secondary" variant="h5">
                  Projects
                </Typography>
              </Button>
            </Grid>
            <Grid
              item
              sx={{
                width: { xs: "80px", lg: "200px" },
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "right",
                paddingLeft: { xs: "55px" },
              }}
            >
              <Button onClick={() => handleClickAboutMe()}>
                <Typography textTransform="none" color="primary" variant="h5">
                  •{" "}
                </Typography>
                <Typography color="inherit" noWrap>
                  &nbsp;
                </Typography>
                <Typography textTransform="none" color="secondary" variant="h5">
                  About Me
                </Typography>
              </Button>
            </Grid>
            <Grid
              item
              sx={{
                width: { xs: "80px", lg: "300px" },
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "right",
                paddingLeft: { xs: "50px" },
              }}
            >
              <Button onClick={() => handleClickContact()}>
                <Typography textTransform="none" color="primary" variant="h5">
                  •{" "}
                </Typography>
                <Typography color="inherit" noWrap>
                  &nbsp;
                </Typography>
                <Typography textTransform="none" color="secondary" variant="h5">
                  Contact Me
                </Typography>
              </Button>
            </Grid>
            <Grid
              item
              sx={{
                width: { xs: "100px", lg: "200px" },
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "right",
                paddingLeft: { xs: "25px" },
              }}
            >
              <Button
                href={resumePDF}
                target="_blank"
                rel="noreferrer"
                color="primary"
                variant="outlined"
                size="small"
                sx={{ textTransform: "none", padding: { xs: "0%" } }}
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

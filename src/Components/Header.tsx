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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import myIcon from "../Assets/icon.png";
import resumePDF from "../Assets/Adam Dupuy Resume 2024.pdf";
import HomeIcon from "@mui/icons-material/Home";

const customTheme = createTheme({
  palette: {
    primary: { main: "#0077C0" },
    secondary: {
      main: "#FAFAFA",
      light: "#C7EEFF",
    },
  },
});

interface infoType {
  pType: string;
}

const Header = (props: infoType) => {
  const [aboutMeColor, setAboutMeColor] = useState<string>("secondary");
  const [contactMeColor, setContactMeColor] = useState<string>("secondary");
  const [projectsColor, setProjectsColor] = useState<string>("secondary");
  const [pagePath, setPagePath] = useState<any>();
  const [changeNum, setChangeNum] = useState<number>();

  const navigate = useNavigate();

  const assignHomeColor = async () => {
    setAboutMeColor("secondary");
    setContactMeColor("secondary");
    setProjectsColor("secondary");
  };

  function handleClickHome() {
    assignHomeColor();
    navigate("/");
    assignHomeColor();
  }

  const assignAboutMeColor = async () => {
    setAboutMeColor("primary");
    setContactMeColor("secondary");
    setProjectsColor("secondary");
  };

  function handleClickAboutMe() {
    assignAboutMeColor();
    navigate("/infoPage", { state: { pageType: "About Me" } });
    assignAboutMeColor();
  }

  const assignContactColor = async () => {
    setAboutMeColor("secondary");
    setContactMeColor("primary");
    setProjectsColor("secondary");
  };

  function handleClickContact() {
    assignContactColor();
    navigate("/infoPage", { state: { pageType: "Contact" } });
    assignContactColor();
  }

  const assignProjectColor = async () => {
    setAboutMeColor("secondary");
    setContactMeColor("secondary");
    setProjectsColor("primary");
  };

  function handleClickProjects() {
    assignProjectColor();
    navigate("/projects");
    assignProjectColor();
  }

  const colorAssign = async () => {
    window.location.pathname === "/personalSite"
      ? assignHomeColor()
      : window.location.pathname === "/personalSite/projects"
      ? assignProjectColor()
      : window.location.pathname === "/personalSite/infoPage"
      ? props.pType === "About Me"
        ? assignAboutMeColor()
        : props.pType === "Contact"
        ? assignContactColor()
        : console.log("useless path 1")
      : console.log(window.location.pathname);
  };

  customTheme.typography.h5 = {
    fontSize: "0.5rem",
    "@media (min-width:600px)": {
      fontSize: "0.3rem",
    },
    [customTheme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
  };

  useEffect(() => {
    colorAssign();
  }, [window.location.pathname]);

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
              onClick={() => {
                handleClickHome();
              }}
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
              <HomeIcon
                sx={{
                  paddingTop: { xs: "13vh", lg: "15vh" },
                  paddingLeft: { xs: "0vh", lg: "5vh" },
                  color: "secondary",
                  width: { xs: "25px", lg: "50px" },
                  height: { xs: "25px", lg: "50px" },
                }}
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
              <Button
                onClick={() => handleClickProjects()}
                disableRipple
                disableTouchRipple
                sx={{
                  "&:hover": {
                    background: "none",
                  },
                }}
              >
                <Typography
                  textTransform="none"
                  color="secondary.light"
                  variant="h5"
                >
                  •{" "}
                </Typography>
                <Typography color="inherit" noWrap>
                  &nbsp;
                </Typography>
                <Typography
                  textTransform="none"
                  color={projectsColor}
                  variant="h5"
                  sx={{
                    "&:hover": {
                      color: "primary.light",
                    },
                  }}
                >
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
              <Button
                onClick={() => {
                  handleClickAboutMe();
                }}
                disableRipple
                disableTouchRipple
                sx={{
                  "&:hover": {
                    background: "none",
                  },
                }}
              >
                <Typography
                  textTransform="none"
                  color="secondary.light"
                  variant="h5"
                >
                  •{" "}
                </Typography>
                <Typography color="inherit" noWrap>
                  &nbsp;
                </Typography>
                <Typography
                  textTransform="none"
                  color={aboutMeColor}
                  variant="h5"
                  sx={{
                    "&:hover": {
                      color: "primary.light",
                    },
                  }}
                >
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
              <Button
                onClick={() => handleClickContact()}
                disableRipple
                disableTouchRipple
                sx={{
                  "&:hover": {
                    background: "none",
                  },
                }}
              >
                <Typography
                  textTransform="none"
                  color="secondary.light"
                  variant="h5"
                >
                  •{" "}
                </Typography>
                <Typography color="inherit" noWrap>
                  &nbsp;
                </Typography>
                <Typography
                  textTransform="none"
                  color={contactMeColor}
                  variant="h5"
                  sx={{
                    "&:hover": {
                      color: "primary.light",
                    },
                  }}
                >
                  Contact
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
                paddingTop: { xs: "8px" },
                paddingBottom: { lg: "10px" },
              }}
            >
              <Button
                href={resumePDF}
                target="_blank"
                rel="noreferrer"
                color="primary"
                variant="outlined"
                size="small"
                sx={{
                  width: { xs: "10px", lg: "75px" },
                  height: { xs: "20px", lg: "40px" },
                  textTransform: "none",
                  padding: { xs: "0%" },
                  paddingY: "0px",
                }}
              >
                Resumé
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Header;

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
import resumePDF from "../Assets/AdamDupuyJrResume2023.pdf";

const customTheme = createTheme({
  palette: {
    primary: { main: "#D6CC99" },
    secondary: {
      main: "#445D48",
      light: "#FDE5D4",
    },
  },
});

interface infoType {
  pType: string;
}

const Header = (props: infoType) => {
  const [aboutMeColor, setAboutMeColor] = useState<string>();
  const [contactMeColor, setContactMeColor] = useState<string>();
  const [projectsColor, setProjectsColor] = useState<string>();
  const [pagePath, setPagePath] = useState<string>();
  const [pageType, setPageType] = useState<string>();
  const [placeholder, setPlaceholder] = useState<string>();
  const navigate = useNavigate();

  const fetchPageInfo = async () => {
    setPagePath(window.location.pathname);
    pagePath === "/personalSite"
      ? (() => {
          setAboutMeColor("secondary");
          setContactMeColor("secondary");
          setProjectsColor("secondary");
        })()
      : pagePath === "/personalSite/projects"
      ? (() => {
          setAboutMeColor("secondary");
          setContactMeColor("secondary");
          setProjectsColor("primary");
        })()
      : pagePath === "/personalSite/infoPage"
      ? props.pType === "About Me"
        ? (() => {
            setAboutMeColor("primary");
            setContactMeColor("secondary");
            setProjectsColor("secondary");
            setPageType("About Me");
          })()
        : props.pType === "Contact"
        ? (() => {
            setAboutMeColor("secondary");
            setContactMeColor("primary");
            setProjectsColor("secondary");
            setPageType("Contact");
          })()
        : (() => {
            console.log("useless path 1");
          })()
      : (() => {
          setAboutMeColor("secondary");
          setContactMeColor("secondary");
          setProjectsColor("secondary");
          console.log("useless path 2, path: " + pagePath);
        })();
  };

  function handleClickHome() {
    navigate("/");
  }

  function handleClickAboutMe() {
    pagePath === "/personalSite/infoPage"
      ? pageType === "About Me"
        ? setPlaceholder("6")
        : (() => {
            setPageType("About Me");
            navigate("/infoPage", { state: { pageType: "About Me" } });
          })()
      : (() => {
          setPageType("About Me");
          navigate("/infoPage", { state: { pageType: "About Me" } });
        })();
  }

  function handleClickContact() {
    pagePath === "/personalSite/infoPage"
      ? pageType === "Contact"
        ? setPlaceholder("7")
        : (() => {
            setPageType("Contact");
            navigate("/infoPage", { state: { pageType: "Contact" } });
          })()
      : (() => {
          setPageType("Contact");
          navigate("/infoPage", { state: { pageType: "Contact" } });
        })();
  }

  function handleClickProjects() {
    navigate("/projects");
  }

  customTheme.typography.h5 = {
    fontSize: "0.8rem",
    "@media (min-width:600px)": {
      fontSize: "0.5rem",
    },
    [customTheme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  };

  useEffect(() => {
    fetchPageInfo();
  }, [aboutMeColor]);

  useEffect(() => {
    setPageType(props.pType);
  }, []);

  useEffect(() => {}, []);

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
              <Button onClick={() => handleClickContact()}>
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
                >
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

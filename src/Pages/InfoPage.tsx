import {
  Typography,
  Box,
  createTheme,
  ThemeProvider,
  Container,
  Grid,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import computerIcon from "../Assets/computerIcon.png";
import questionIcon from "../Assets/questionMarkIcon.png";

const customTheme = createTheme({
  palette: {
    primary: { main: "#D6CC99" },
    secondary: {
      main: "#445D48",
      light: "#FDE5D4",
    },
  },
});

const InfoPage = () => {
  const { state } = useLocation();
  const [body, setBody] = useState<String>("");
  const [pageTitle, setPageTitle] = useState<String>("");
  const [pageType, setPageType] = useState<string>();
  const [initialPageType, setInitialPageType] = useState<string>();
  const [placeholder, setPlaceholder] = useState<string>();

  const fetchAboutMe = async () => {
    setPageType("About Me");
    setBody(
      "Hello, my name is Adam! I started coding with python in 2017 making text based games, years later I aspire to be the best dev I can be. I'm an agile addict, always excited to work on projects new and old, and always working on improving my skillsets."
    );
  };

  const fetchContact = async () => {
    setPageType("Contact");
    setBody(
      "My inbox is always open and I am always happy to talk, find me at adupuybusiness@gmail.com."
    );
  };

  const checkPageReload = async () => {
    initialPageType !== pageType
      ? window.location.reload()
      : setPlaceholder("5");
  };

  const fetchPageInfo = async () => {
    state.pageType === "About Me"
      ? (() => {
          checkPageReload();
          fetchAboutMe();
        })()
      : state.pageType === "Contact"
      ? (() => {
          checkPageReload();
          fetchContact();
        })()
      : console.log("this thing is broken wow (InfoPage.tsx L.65)");
  };

  useEffect(() => {
    fetchPageInfo();
  }, [state.pageType]);

  useEffect(() => {
    setPageType(state.pageType);
  }, []);

  customTheme.typography.h5 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "0.7rem",
    },
    [customTheme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container disableGutters sx={{ minWidth: "100%", minHeight: "100vh" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sx={{ width: "100%" }}>
            <Header pType={state.pageType} />
          </Grid>
          <Grid
            item
            alignItems="center"
            sx={{ width: { xs: "250px", lg: "1000px" } }}
          >
            <Typography
              variant="h5"
              textAlign="center"
              paddingTop="30vh"
              color="secondary"
            >
              {body}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default InfoPage;

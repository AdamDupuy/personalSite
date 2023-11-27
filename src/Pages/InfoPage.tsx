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
    primary: { main: "#0077C0" },
    secondary: {
      main: "#FAFAFA",
      light: "#C7EEFF",
    },
  },
});

const InfoPage = () => {
  const { state } = useLocation();
  const [body, setBody] = useState<String>("");
  const [pageSelected, setPageSelected] = useState<any>();
  //yes
  const fetchAboutMe = async () => {
    console.log(pageSelected);
    setPageSelected("About Me");
    setBody(
      "Hello, my name is Adam! I started coding with python in 2017 making text based games. Years later, after graduating from LSU, I aspire to be the best dev I can be. I'm an agile addict, always excited to work on projects new and old, and always working on improving my skillsets."
    );
  };

  const fetchContact = async () => {
    setPageSelected("Contact");
    setBody("My inbox is always open and I am always happy to talk!");
    console.log("fetchContact");
  };

  const fetchPageInfo = async () => {
    state.pageType === "About Me"
      ? (() => {
          fetchAboutMe();
        })()
      : state.pageType === "Contact"
      ? (() => {
          fetchContact();
        })()
      : console.log("this thing is broken wow (InfoPage.tsx L.65)");
  };

  const renderEmailMeButton = () => {
    if (state.pageType === "Contact") {
      return (
        <Button
          color="primary"
          variant="outlined"
          size="large"
          sx={{
            height: "50px",
            width: "100px",
            textTransform: "none",
            padding: { xs: "0%" },
            paddingTop: "50px",
          }}
          onClick={() =>
            (window.location.href = "mailto:adupuybusiness@gmail.com")
          }
        >
          Email Me
        </Button>
      );
    } else {
    }
  };

  useEffect(() => {
    fetchPageInfo();
  }, [state.pageType]);

  useEffect(() => {
    setPageSelected(state.pageType);
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
          direction="column"
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
              paddingBottom="50px"
              color="secondary"
              sx={{ paddingTop: { xs: "15vh", lg: "30vh" } }}
            >
              {body}
            </Typography>
          </Grid>
          <Grid
            item
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            {renderEmailMeButton()}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default InfoPage;

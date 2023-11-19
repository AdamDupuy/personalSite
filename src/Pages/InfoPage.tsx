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
      "Hello, my name is Adam! I started coding python in 2017 making text based games on an iPad. After highschool, I decided I wanted to code professionally and started at LSU in 2019. The Software Engineering concentration of computer science had lots of project based classes where I gained valuable experience programming with Java, ReactJS, GitHub, TypeScript, CSS, HTML, SQL, and Flutter. In my two internships I learned a lot about Jira, Agile, Confluence, Java SpringBoot, and professional presentations. I graduated from LSU in 2023 and I am working to continue becoming the best dev I can be."
    );
  };

  const fetchContact = async () => {
    setPageType("Contact");
    setBody("Email: adupuybusiness@gmail.com");
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
          <Grid item alignItems="center" sx={{ width: "1000px" }}>
            <Typography
              variant="h5"
              textAlign="center"
              paddingTop="10vh"
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

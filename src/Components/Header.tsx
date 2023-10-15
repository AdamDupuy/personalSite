import { Container,  createTheme, ThemeProvider, Grid, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const customTheme = createTheme({
    palette: {
      primary: { main: "#6D5D6E" },
      secondary: { main: "#4F4557" },
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
                    height:"5vh",
                    minWidth: "100%"
                }}
            >
              <Grid
					container
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					sx={{
						color: "white",
						height: "10vh",
					}}
				>
                   <Grid item>
						<Button onClick={() => handleClickHome()}>
							<Typography textTransform='none' color="secondary">Home</Typography>
						</Button>
					</Grid> 
                    <Grid item>
						<Button onClick={() => handleClickHome()}>
							<Typography textTransform='none' color="secondary">About Me</Typography>
						</Button>
					</Grid> 
                    <Grid item>
						<Button onClick={() => handleClickHome()}>
							<Typography textTransform='none' color="secondary">Anime</Typography>
						</Button>
					</Grid> 
                </Grid>  
            </Container>
        </ThemeProvider>
    );
};

export default Header;
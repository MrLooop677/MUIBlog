import Home from "./pages/Home";
import Header from "./component/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";
import { Paper } from "@mui/material";
import { useState } from "react";
import About from "./component/SinglePage";
import { Outlet } from "react-router-dom";
function App() {
  const [darkMood, setDark] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMood ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper sx={{ maxWidth: "90%", mx: "auto", my: "2rem", p: 2 }}>
          <Header onChange={() => setDark(!darkMood)} />
          <Outlet />
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;

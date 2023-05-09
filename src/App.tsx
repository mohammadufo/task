import "./App.css";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Outlet />
      </ThemeProvider>
    </div>
  );
}

export default App;

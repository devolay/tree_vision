import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

const fontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Montserrat",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  "sans - serif",
].join(",");

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
      fontWeight: "200",
      fontFamily: fontFamily,
    },
    fontFamily: fontFamily,
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    background: { default: "#839788" },
  },
  overrides: {
    MuiInput: {
      root: {
        color: "white",
      },
    },
    MuiFormLabel: {
      root: {
        color: "white",
      },
    },
  },
});

const MaterialProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default MaterialProvider;

import { createTheme } from "@mui/material/styles";

// MUI theme object
let theme = createTheme({
  palette: {
    primary: {
      main: "#FF6600",
      contrastText: "#ffffff",
    },
    contrastThreshold: 4.5,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      "Roboto Condensed",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;

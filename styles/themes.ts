import { createTheme } from "@mui/material";
import { purple, grey, blue } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#14183D',
      main: '#0D0F27',
      dark: '#00011D',
    },
    secondary: {
      light: blue[500],
      main: purple[800],
      dark: blue[900],
    },
    text: {
      primary: "#EFF0FB",
      secondary: "#5B8CFF"
    },
    error: {
      light: '#DF0028',
      main: '#B50329'
    },
    success: {
      light: '#04BE2D',
      main: '#05882A'
    }
  },
  typography: {
    fontFamily: "DM Sans Regular, DM Sans Medium, Prompt Regular",
    h1: {
      fontFamily: "Prompt Regular",
      fontSize: 25
    },
    h2: {
      fontFamily: "Prompt Regular",
      fontSize: 20,
    },
    h3: {
      fontFamily: "Prompt Regular",
      fontSize: 16,
    },
    h4: {
      fontFamily: "Prompt Regular",
      fontSize: 15,
    },
    h5: {
      fontFamily: "Prompt Regular",
      fontSize: 14,
    },
    h6: {
      fontFamily: "Prompt Regular",
      fontSize: 14,
    },
    subtitle1: {
      fontFamily: "Prompt Regular",
      fontSize: 16,
      color: grey[500]
    },
  }
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: "DM Sans Regular, DM Sans Medium, Prompt Regular, ",
  }
});

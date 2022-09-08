import { createTheme } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'lato',
    button: {
      fontFamily: 'Lato',
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
};

export const theme = createTheme(themeOptions)
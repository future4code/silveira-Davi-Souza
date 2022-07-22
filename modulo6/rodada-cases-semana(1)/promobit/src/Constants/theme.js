import { createTheme } from '@mui/material';
import { mainColor, secondaryColor } from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: mainColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
});

export default theme;
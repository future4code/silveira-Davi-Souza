import { createTheme } from '@material-ui/core/styles';
import { mainColor, secondaryColor } from './colors';

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
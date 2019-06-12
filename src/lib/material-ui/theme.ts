import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
  typography: {
    h4: {
      textTransform: 'uppercase',
    },
    h5: {
      textTransform: 'uppercase',
    },
    fontFamily: `'Exo 2', Helvetica, sans-serif`,
  },
  palette: {
    primary: teal,
  }
});

export default theme;

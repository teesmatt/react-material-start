import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/purple';

// Theme Building Tool
// https://material-ui.com/style/color/#color-tool

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#43a047',
        },
        secondary: blue,
    },
});

export default theme;
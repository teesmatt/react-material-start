import React, { Component } from "react";
import "../style/App.css";
import Typography from "@material-ui/core/Typography";
import NavBar from "../components/NavBar";
import Grid from "@material-ui/core/Grid";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../style/theme";

const styles = {
  paper: {
    width: 200,
    height: 120
  },
  homeTitle: {
    marginTop: 20
  },
  scrollFix: {
    padding: 20
  }
};
class App extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <NavBar />
          <div className={classes.scrollFix}>
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.root}
              spacing={16}
            >
              <Grid item xs={3}>
                <Typography
                  className={classes.homeTitle}
                  align="center"
                  variant="h3"
                >
                  Title
                </Typography>
              </Grid>
            </Grid>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);

import React, { Component } from "react";
import "../style/App.css";
import Typography from "@material-ui/core/Typography";
import NavBar from "../components/NavBar";
import Grid from "@material-ui/core/Grid";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../style/theme";

const styles = {
  root: {
    height: '100%'
  },
};
class App extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <NavBar /> 
          <div>
            Content
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);

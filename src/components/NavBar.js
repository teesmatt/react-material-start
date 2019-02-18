import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  grow: {
    flexGrow: 1
  }
};

const NavBar = props => {
  const { classes } = props;
  console.log(classes);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.grow} variant="title" color="inherit">
            React & Material-UI Sample Application
          </Typography>
          <Button color="inherit">Link</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withStyles(styles)(NavBar);

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const styles = (theme) => ({
  root: {
    backgroundColor: "#24303c",
    color: "white",
    borderBottom: "0.1px solid grey",
    padding: "1em",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "0.5em",
  },
  text: {
    fontWeight: "bold",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginRight: "1em",
  },
});


const AdditionalInfo = ({ classes }) => (
  <div className={classes.root}>
  <div className={classes.item}>
    <FindInPageIcon className={classes.icon} />
    <span className={classes.text}>Query Results</span>
  </div>
  <div className={classes.item}>
    <FileCopyIcon className={classes.icon} />
    <span className={classes.text}>Schemas</span>
  </div>
</div>

);

export default withStyles(styles)(AdditionalInfo);

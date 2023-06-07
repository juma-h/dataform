import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import RightPanel from "../../Assets/rightpanel.png";
import LeftPanel from "../../Assets/leftpanel.png";
import BottomPanel from "../../Assets/bottompanel.png";
import IconButton from "@material-ui/core/IconButton";
import CommitIcn from "../../Assets/commit.png";
import { Button } from "@material-ui/core";
import SelectComponent from "../UI/Select/Select";
import OutlineSelect from "../UI/Select/OutlineSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    height: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    backgroundColor: "#24303c",
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    border: "none"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    // border: "solid green",
    height:"9vh"

  },
  selectContainer: {
    display: "flex",
    flexDirection:"row",
    marginRight: theme.spacing(2),
  },
  navBtn: {
    backgroundColor: "#547cd7",
    borderRadius: "4px",
    margin: "5px",
    fontFamily: "Geologica",
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    height:"2.5em"
  },
  icon: {
    marginRight: theme.spacing(1),
    height: 20,
    width: 20,
    color: "white",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // border: "solid green",
    marginRight: "1em",
  },
  image: {
    height: "30px",
    width: "30px",
    filter: "brightness(0) invert(1)",
    marginRight: theme.spacing(1),
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        {/* <Toolbar> */}
        <div className={classes.header}>
          {/* <div className={classes.selectContainer}> */}
            <SelectComponent />
            <OutlineSelect />
          {/* </div> */}
          <Button
            variant="contained"
            color="primary"
            className={classes.navBtn}
          >
            <img src={CommitIcn} alt="Commit Icon" className={classes.icon} />
            Commit (2 files)
          </Button>
        </div>
        {/* </Toolbar> */}
        <div className={classes.imageContainer}>
          <img alt="left-panel" src={LeftPanel} className={classes.image} />
          <img alt="bottom-panel" src={BottomPanel} className={classes.image} />
          <img alt="right-panel" src={RightPanel} className={classes.image} />
        </div>
      </AppBar>
    </div>
  );
}

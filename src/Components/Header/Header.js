import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import RightPanel from "../../Assets/rightpanel.png";
import LeftPanel from "../../Assets/leftpanel.png";
import BottomPanel from "../../Assets/bottompanel.png";
import IconButton from "@material-ui/core/IconButton";
import CommitIcn from "../../Assets/commit.png"
import { Button } from "@material-ui/core";
import SelectComponent from "../UI/Select/Select";
import OutlineSelect from "../UI/Select/OutlineSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "7vh",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: { backgroundColor: "#24303c", color: "#fff" },
  navBtn:{
    backgroundColor :"#547cd7", 
    borderRadius:"4px",
    margin: "5px",
    fontFamily:"Geologica", 
    textTransform:"Capitalize",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(1),
    height: 20,
    width: 20,
    color:"white"
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <SelectComponent />
            <OutlineSelect />
            <Button variant="contained" color="primary" className={classes.navBtn}>
            <img src={CommitIcn} alt="Commit Icon" className={classes.icon} />
             Commit( 2 files)
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <img
              alt="left-panel"
              src={LeftPanel}
              style={{
                height: "30px",
                width: "30px",
                filter: "brightness(0) invert(1)",
              }}
            />
            <img
              alt="bottom-panel"
              src={BottomPanel}
              style={{
                height: "30px",
                width: "30px",
                filter: "brightness(0) invert(1)",
              }}
            />
            <img
              alt="right-panel"
              src={RightPanel}
              style={{
                height: "30px",
                width: "30px",
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Collapse from "@material-ui/core/Collapse";
import RefreshIcon from '@material-ui/icons/Refresh';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    position: "relative",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  listItemText: {
    color: theme.palette.grey[500],
    margin:"10px",
  
  },
  listItemHeader:{
    color: theme.palette.grey[500],

  },
  refreshContainer: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.grey[500],
    marginBottom: theme.spacing(1),
    lineHeight: 0.5,
  },
  refreshText: {
    marginLeft: theme.spacing(2),
    color: "#7e8991",
    fontFamily:"Poppins"
  },
  refreshIcon: {
    color: theme.palette.grey[500],
  },
  eyeIcon: {
    color: "white",
    paddingLeft:"em"
  },
}));

const FileTree = () => {
  const [expanded, setExpanded] = useState(false);
  const datasets = ["dataset_1", "dataset_2", "dataset_3", "dataset_4", "dataset_5"];
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <List>
      <div className={classes.refreshContainer}>
        <span className={classes.refreshText}>Refresh</span>
        <RefreshIcon className={classes.refreshIcon} />
      </div>
      <ListItem
        button
        onClick={handleExpandClick}
        className={classes.listItem}
      >
        <ListItemIcon>
          <ExpandMoreIcon style={{ color: "grey" }} />
        </ListItemIcon>
        <ListItemText
          primary="datafrom_demo"
          classes={{ primary: classes.listItemHeader }}
        />
      </ListItem>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {datasets.map((dataset, index) => (
            <ListItem button style={{height:"40px"}} key={index} className={classes.listItem}>
              <ListItemIcon>
                <VisibilityIcon className={classes.eyeIcon} />
              </ListItemIcon>
              <ListItemText primary={dataset} className={classes.listItemText} />
            </ListItem>
          ))}
        </List>
      </Collapse>
      <ListItem
        button
        onClick={handleExpandClick}
        className={classes.listItem}
      >
        <ListItemIcon>
          <ExpandMoreIcon style={{ color: "grey" }} />
        </ListItemIcon>
        <ListItemText
          primary="datafrom_set2"
          classes={{ primary: classes.listItemHeader }}
        />
      </ListItem>
    </List>
  );
};

export default FileTree;

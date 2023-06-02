import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import {
  DeviceHub as DecisionTreeIcon,
  Layers as NeuralNetworkIcon,
  Assessment as DataAnalysisIcon,
  Functions as RegressionIcon,
  Category as ClassificationIcon,
  ScatterPlot as ClusteringIcon,
  Tune as FeatureExtractionIcon,
  BarChart as ModelEvaluationIcon,
  DonutSmall as DeepLearningIcon,
  ChatBubble as NLPIcon,
} from "@material-ui/icons";

const drawerWidth = 20;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: "50px",
    backgroundColor: "#202934",
    color: "#ffffff",
    overflowX: "hidden",
  },

  listItem: {
    color: "grey",
  },
  activeListItem: {
    color: "#ffffff",
  },
  listItemIcon: {
    color: "grey",
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      sx={{ width: "50px" }}
    >
      <List>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <DecisionTreeIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <NeuralNetworkIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <DataAnalysisIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <RegressionIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <ClassificationIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <ClusteringIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <FeatureExtractionIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <ModelEvaluationIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <DeepLearningIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <NLPIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <InboxIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <MailIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
}

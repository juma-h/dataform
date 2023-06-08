import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
  listItemIcon: {
    color: "grey",
  },
  activeListItem: {
    color: "#ffffff",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  firstDiv: {
    flex: 1,
  },
  secondDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  thirdDiv: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },

  hr: {
    borderTop: "1px solid lightgrey",
    margin: "5px",
    padding: 0,
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
      {/* <div className={classes.secondDiv}>

      </div> */}

      <div className={classes.firstDiv}>
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
        </List>
        <hr className={classes.hr} />
        <List>
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
        </List>
        <hr className={classes.hr} />
        <div>
          <List>
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
          </List>
        </div>
        <hr className={classes.hr} />
      </div>

      <div className={classes.thirdDiv}>
        <div>
          <List>
            <ListItem button className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <DeepLearningIcon />
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column-reverse",
            paddingBottom: "1em",
          }}
        >
                    <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <Avatar
                alt="Michelle Juma"
                src="https://avatars.dicebear.com/v2/female/2aa9525531c34ab1919876c534225f43.svg"
                className={classes.small}
              >
                {/* MJ */}
              </Avatar>
            </ListItemIcon>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <NLPIcon />
            </ListItemIcon>
          </ListItem>


        </div>
      </div>
    </Drawer>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AsideAccordion from '../Accordion/Accordion.js';
import Snackbars from '../SnackBar/Snackbar.js';
import "../FileStructure/filestructure.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#2e3a46",
  },
  appbarAcc: {
    backgroundColor: "#2e3a46",
  },
  indicator: {
    backgroundColor: "grey",
  },
  container: {
    display: "flex",
    alignItems: "center",
    padding:"2px"
  },
  button: {
    marginRight: theme.spacing(1),
  },
  text: {
    margin: 0,
    color: "lightgrey",
  },
}));


export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
    <Snackbars/>
    <div className={classes.container}>
      <button className="button-18">Table</button>
      <p className={classes.text}>dataset_2 with ref</p>
    </div>

      <AppBar position="static" className={classes.appbarAcc}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          classes={{
            indicator: classes.indicator, // Apply custom styles for the indicator
          }}
        >
          <LinkTab
            label="Outline"
            href="/outline"
            {...a11yProps(0)}
          />
          <LinkTab
            label="Documentation"
            href="/docs"
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AsideAccordion />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Documentation PAGE
      </TabPanel>
    </div>
  );
}

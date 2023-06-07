import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: 'orange',
    fontWeight:"thin",
    padding:"14px",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Snackbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HelpOutlineIcon className={classes.icon} />
      <span>No compilation issue</span>
    </div>
  );
}

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
    height: 300,
    backgroundColor: "#2e3a46",
    padding: theme.spacing(2),
    border: "none",
    borderBottom: "none",
    position: "relative",
    borderRight: "0.3px solid #96a0aa",
  },
  lineNumbers: {
    height: "100%",
    position: "absolute",
    left: 0,
    top: theme.spacing(2),
    bottom: theme.spacing(2),
    width: theme.spacing(4),
    color: "#96a0aa",
    fontFamily: "monospace",
    fontSize: "14px",
    lineHeight: "1.2",
    pointerEvents: "none",
    textAlign: "right",
    paddingRight: theme.spacing(1),
    margin: "10px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(0),
    borderBottom: "0.3px solid #96a0aa",
    borderRight: "0.3px solid #96a0aa",
  },
  fileName: {
    backgroundColor: "transparent",
    padding: theme.spacing(2),
    fontFamily: "monospace",
    fontSize: "18px",
  },
  textField: {
    width: "100%",
    height: "100%",
    color: "white",
    paddingLeft: theme.spacing(3),
    margin: "10px",
  },
  fileNameInput: {
    color: "#96a0aa",
    backgroundColor: "transparent",
  },
  fileNameInputText: {
    fontFamily: "monospace",
    fontSize: "14px",
    lineHeight: "1.5",
    padding: 0,
    margin: 0,
  },
  saveButton: {
    margin: theme.spacing(1),
    backgroundColor: "#505d6b",
    color: "lightgrey",
    fontFamily: "Poppins",
  },
}));

function SQLTerminal() {
  const classes = useStyles();
  const [sqlCommand, setSQLCommand] = useState(`-- learn more on https://docs.project.co/guides/tables/
  SELECT country as country,
  device_type as device_type,
  sum(revenue) as revenue,
  sum(sessions) as sessions,
  sum(pageviews) as pageviews
  
  FROM my_table
  
  WHERE country = 'FRANCE'
  
  GROUP BY 1, 2`);

  const handleCommand = (e) => {
    setSQLCommand(e.target.value);
  };

  return (
    <div>
      <div className={classes.header}>
        <TextField
          fullWidth
          className={classes.fileName}
          variant="filled"
          value="definitions/1_simple_examples/datasets.sql"
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.fileNameInput,
              input: classes.fileNameInputText,
            },
          }}
        />

        <Button variant="contained" className={classes.saveButton}>
          Save
        </Button>
      </div>
      <TextField
        multiline
        placeholder="Enter SQL command..."
        fullWidth
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.root,
            input: classes.textField,
          },
          startAdornment: (
            <div className={classes.lineNumbers}>
              {Array.from(Array(15).keys()).map((lineNumber) => (
                <div key={lineNumber}>{lineNumber + 1}</div>
              ))}
            </div>
          ),
        }}
        value={sqlCommand}
        onChange={handleCommand}
      />
    </div>
  );
}

export default SQLTerminal;

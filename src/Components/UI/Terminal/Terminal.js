import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 900,
    // height: ,
    backgroundColor: "#2e3a46",
    padding: theme.spacing(2),
    border: "none",
    position: "relative",
    borderRight: "0.3px solid #96a0aa",
    "& .MuiInputBase-input": {
      fontFamily: "monospace",
      fontSize: "14px",
      lineHeight: "1.5",
      paddingLeft: theme.spacing(6),
      position: "relative",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "white",
    },
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
  },
  command: {
    color: "#fff",
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

  keyword: {
    color: "#0000ff", // Blue
  },
  comment: {
    color: "#008000", // Green
    fontStyle: "italic",
  },
  function: {
    color: "#800080", // Purple
  },
  string: {
    color: "#a31515", // Orange
  },
  number: {
    color: "#000080", // Dark Blue
  },
  operator: {
    color: "#000000", // Black
  },
  sqlTerminal: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  sqlInput: {
    flex: 1,
    position: "relative",
    marginBottom: 0, /* Remove bottom margin */
    border: "none",
  },
  sqlInputFocus: {
    outline: "none", /* Remove default focus outline */
    border: "none", /* Remove default border */
    boxShadow: "none", /* Remove default box shadow */
  },
}));

function SQLTerminal() {
  const classes = useStyles();
  const [sqlCommand, setSQLCommand] = useState(
    `-- learn more on https://docs.project.co/guides/tables/
  SELECT country as country,
  device_type as device_type,
  sun(revenue) as revenue,
  sun(sessions) as sessions,
  sun(pageviews) as pageviews
  
  FROM my_table
  
  WHERE country = 'FRANCE'
  
  GROUP BY 1, 2`
  );
  const handleCommand = (e) => {
    setSQLCommand(e.target.value);
    // applySyntaxHighlighting(sqlCommand)
  };
  // Syntax highlighting regular expressions
  // const keywordRegex = /\b(SELECT|FROM|WHERE|GROUP BY|AS)\b/gi;
  // const commentRegex = /--.*$/gm;

  // // Function to apply syntax highlighting
  // const applySyntaxHighlighting = (text) => {
  //   return text
  //     .replace(
  //       keywordRegex,
  //       (match) => `<span class="${classes.keyword}">${match}</span>`
  //     )
  //     .replace(
  //       commentRegex,
  //       (match) => `<span class="${classes.comment}">${match}</span>`
  //     );
  // };
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
          className: classes.root,
          startAdornment: (
            <div className={classes.lineNumbers}>
              {Array.from(Array(15).keys()).map((lineNumber) => (
                <div key={lineNumber}>{lineNumber + 1}</div>
              ))}
            </div>
          ),
          inputProps: {
            className: classes.command,
          },
        }}
        value={sqlCommand}
        onChange={ handleCommand}
        InputLabelProps={{
          classes: {
            root: classes.command,
            focused: classes.command,
          },
        }}

      />
  
    </div>
  );
}

export default SQLTerminal;

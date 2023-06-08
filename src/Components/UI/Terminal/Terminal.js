import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 700,
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
    // left: theme.spacing(2),
    //  top: theme.spacing(2),
    // bottom: theme.spacing(2),
    width: "20px",
  
    color: "#96a0aa",
    fontSize: "16px",
     lineHeight: "1.5",
    pointerEvents: "none",
    paddingRight: theme.spacing(1),
    // margin: "10px",
    flex: "0 0 auto",
    marginRight: "10px",
    // backgroundColor: "#2e3a46",
    // padding: "10px",
    fontFamily: "Consolas, monospace",
    textAlign: "right",
    userSelect: "none",
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
  container: {
    position: "relative",
    height: "300px",
    display: "flex",
  },
  textarea: {
    flex: "1 1 auto",
    position: "absolute",
    color: "transparent",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "transparent",
    border: "none",
    resize: "none",
    outline: "none",
    zIndex: 2,
    fontFamily: "Consolas, monospace",
    paddingLeft: theme.spacing(3),
    margin: "10px",
  },
  editor: {
    display: "flex",
    flexDirection: "row",
    flex: "1 1 auto",
    position: "absolute",
    backgroundColor: "#2e3a46",
    color: "white",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    padding: "10px",
    fontFamily: "Consolas, monospace",
    zIndex: 1,
    textAlign: "left",
    lineHeight:1.5
  },
  command: {
    color: "#6a6b93",
    // flex: "1 1 auto",
    overflowY: "auto",
    lineHeight: "1.5",
    // paddingRight: theme.spacing(3),
    // paddingTop: theme.spacing(2),
    // paddingBottom: theme.spacing(2),
  },
}));

function SQLTerminal() {
  const classes = useStyles();

  const [sqlQuery, setSqlQuery] =
    useState(`-- learn more on https://docs.project.co/guides/tables/
  SELECT country as country,
  device_type as device_type,
  sum(revenue) as revenue,
  sum(sessions) as sessions,
  sum(pageviews) as pageviews
  
  FROM my_table
  
  WHERE country = 'FRANCE'
  
  GROUP BY 1, 2`);

  const handleInputChange = (e) => {
    setSqlQuery(e.target.value);
  };

  const renderHighlightedText = () => {
    const commands = [
      "SELECT",
      "FROM",
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "OUTER JOIN",
      "ON",
      "AS",
      "AND",
      "OR",
      "SUM",
    ];
  
    const colors = ["purple", "yellow", "lightgreen"];
  
    const formattedQuery = sqlQuery.replace(/\n/g, "<br>");
  
    let highlightedQuery = formattedQuery;
    commands.forEach((command) => {
      const regex = new RegExp(`\\b(${command})\\b`, "gi");
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      highlightedQuery = highlightedQuery.replace(
        regex,
        `<span class="${classes.command}" style="color: ${randomColor};">$&</span>`
      );
    });
  
    return { __html: highlightedQuery };
  };
  


  //incremental line numbers as you type
  const renderLineNumbers = () => {
    const lines = sqlQuery.split("\n");
    return lines.map((_, index) => <div key={index + 1}>{index + 1}</div>);
  };

  return (
    <div>
      <div className={classes.header}>
        <TextField
          fullWidth
          className={classes.fileName}
          variant="filled"
          value="definitions/1_simple_examples/dataset_2_with_ref_.sql"
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

      <div className={classes.root}>
        <div className={classes.editor}>
          <div className={classes.lineNumbers}>{renderLineNumbers()}</div>
          <textarea
            className={classes.textarea}
            value={sqlQuery}
            onChange={handleInputChange}
          />
          <div
            style={{ marginLeft: "30px" }}
            dangerouslySetInnerHTML={renderHighlightedText()}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default SQLTerminal;

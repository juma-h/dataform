import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import "../UI/FileStructure/filestructure.css";

const styles = (theme) => ({
  root: {
    backgroundColor: "#24303c",
    color: "white",
    border: "1px solid lightgrey",
    borderTop: "none",
    width: "100%",
    fontFamily: "Poppins",
    fontWeight:'bold',
    overflowY: "scroll",
  },
  headerCell: {
    color: "white",
    border: "1px solid lightgrey",
    fontWeight: "bold",
    margin: "3px",
  },

  headerMergedCell: {
    display: "flex",
    color: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width:"90%" ,
    border: "1px solid lightgrey",
    padding:"1em",
    fontSize:"1em",
    marginRight:"15em"
    
  },
  deleteButton: {
    color: "white",
  },
  cell: {
    border: "1px solid lightgrey",
    color: "white",
    fontFamily: "Poppins",
    fontWeight:'medium',
    borderTop: "none",
    width: "50%",
    height: "2em", // Adjust the cell height as desired
  },
  tableBody: {
    overflowY: "auto", // Enable vertical scrolling
    maxHeight: "calc(100vh - 300px)", // Adjust the max height as needed
  },
});

const data = [
  { menu: "menu 1", field: "date", type: "date" },
  { menu: "menu 2", field: "device_id", type: "character varying" },
  { menu: "menu 3", field: "country", type: "character varying" },
  { menu: "menu 4", field: "sessions", type: "integer" },
  { menu: "menu 5", field: "revenue", type: "integer" },
];

const CustomTable = ({ classes }) => (
  <>
    <div className={classes.headerMergedCell}>
      <div>
        <button className="button-18">View</button>
        dataform_from_dataset
      </div>
      <div>
        <span>X</span>
      </div>
    </div>

    <Table className={classes.root}>

      <TableHead>
        <TableRow>
          <TableCell className={classes.headerCell}>Field</TableCell>
          <TableCell className={classes.headerCell}>Type</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className={classes.cell}>{row.field}</TableCell>
            <TableCell className={classes.cell}>{row.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
);

export default withStyles(styles)(CustomTable);

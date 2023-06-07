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
    border: "1px solid lightgrey" ,
    borderTop:"none"
  },
  headerCell: {
    color: "white",
    border: "1px solid lightgrey",
        // borderTop:"none"
  },
  headerMergedCell: {
    display: "flex",
    color: "white",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  deleteButton: {
    color: "white"
  },
  cell: {
    border: "1px solid lightgrey" ,
    color:"white", 
    borderTop:"none"
  }
});

const data = [
  { menu: "menu 1", field: "date", type: "date" },
  { menu: "menu 2", field: "device id", type: "device something" },
  { menu: "menu 3", field: "country", type: "country" },
  { menu: "menu 4", field: "sessions", type: "sessions" },
  { menu: "menu 5", field: "revenue", type: "rev" }
];

const CustomTable = ({ classes }) => (
  <Table className={classes.root}>
    <TableHead>
      <TableRow>
        <TableCell className={classes.headerMergedCell} colSpan={2}>
          <div>
            {" "}
            <button className="button-18">View</button>
            dataform_from_datset
          </div>
          <div>
            <span>X</span>
          </div>
        </TableCell>
      </TableRow>
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
);

export default withStyles(styles)(CustomTable);

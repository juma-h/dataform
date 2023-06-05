import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none", 
        paddingRight: theme.spacing(1),
      },
      "&.Mui-focused fieldset": {
        borderColor: "green", // Change the outline border color when active (focused)
      },
      "& .MuiSelect-icon": {
        color: "lightgray",
        right: theme.spacing(1),
      },
    },
  },
  select: {
    height: "3em",

  },
  formLabel:{
    fontFamily:"Geologica", 
    color:"#737e86",
    
  }
}));

export default function SelectComponent() {
  const classes = useStyles();
  const [projectName, setProjectName] = React.useState("");

  const handleChange = (event) => {
    setProjectName(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label" className={classes.formLabel}>
          Project Name
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={projectName}
          onChange={handleChange}
          label="Project Name"
          className={classes.select}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Project 1</MenuItem>
          <MenuItem value={20}>Project 2</MenuItem>
          <MenuItem value={30}>Project 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

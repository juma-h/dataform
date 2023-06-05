import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#656e75",
        borderWidth: "0.3px",
      },
    },
    "& .MuiSelect-icon": {
      color: "lightgray",
    },
  },
  select: {
    height: "3em",
    color: "#fff",
  },
  formLabel: {
    fontFamily: "Geologica",
    color: "#fff",
  },
}));

export default function OutlineSelect() {
  const classes = useStyles();
  const [development, setDevelopment] = React.useState("");

  const handleChange = (event) => {
    setDevelopment(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          id="demo-simple-select-outlined-label"
          className={classes.formLabel}
        >
          Development
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={development}
          onChange={handleChange}
          label="Development"
          className={classes.select}
          IconComponent={ArrowDropDownIcon}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

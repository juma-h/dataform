import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  formControl: {
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
    width: "100%",
    height: "2.3em",
    color: "#fff",
  },
  formLabel: {
    fontFamily: "Geologica",
    color: "#737e86",
    marginBottom: "10px",
    transform: "translate(14px, 12px) scale(1)",
    background: "#24303c",
    paddingLeft: "4px",
    paddingRight: "4px",
  },
}));

export default function OutlineSelect() {
  const classes = useStyles();
  const [development, setDevelopment] = React.useState("");

  const handleChange = (event) => {
    setDevelopment(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          htmlFor="outlined-age-native-simple"
          className={classes.formLabel}
        >
          Development
        </InputLabel>
        <Select
          native
          value={development}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple",
          }}
          className={classes.select}
          IconComponent={ArrowDropDownIcon}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </div>
  );
}

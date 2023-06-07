// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Typography from "@material-ui/core/Typography";
// import FolderIcon from "@material-ui/icons/Folder";
import "./filestructure.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     backgroundColor: "#2e3a46",
//     color: "#96a0aa",
//   },
//   folderItem: {
//     paddingLeft: theme.spacing(4),
//   },
//   fileItem: {
//     paddingLeft: theme.spacing(8),
//   },
//   folderIcon: {
//     marginRight: theme.spacing(1),
//     color: "lightgrey",
//   },
//   headerText: {
//     color: "#fff",
//     fontSize: "24px",
//     fontWeight: "bold",
//     fontFamily: "Poppins, sans-serif",
//   },
//   textFolders: {
//     color: "#96a0aa",
//     fontFamily: "Poppins, sans-serif",
//     fontSize: "14px",
//   },
//   nestedText: {
//     fontSize: "16px",
//     color: "#96a0aa",
//     fontFamily: "Poppins, sans-serif",
//   },
//   folderH: {
//     color: "#96a0aa",
//     fontFamily: "Poppins, sans-serif",
//     fontSize: "14px",
//   },
//   treeLine: {
//     position: "absolute",
//     left: theme.spacing(2),
//     top: 0,
//     bottom: 0,
//     borderLeft: "1px solid #96a0aa",
//   },
// }));

// function NestedListItem({ item, classes }) {
//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <>
//       <ListItem button onClick={handleClick} className={classes.folderItem}>

//         {item.children.length > 0 && (
//           <>
//             <FolderIcon className={classes.folderIcon} />
//             <ListItemText
//               primary={
//                 <Typography className={classes.folderH} variant="body1">
//                   {item.name}
//                 </Typography>
//               }
//             />
//           </>
//         )}
//       </ListItem>
//       {item.buttons && (
//         <List disablePadding>
//           {item.buttons.map((button) => (
//             <ListItem key={button.name} button className={classes.fileItem}>
//               {/* <div className={classes.treeLine} /> */}
//               <button
//                 className="button-18"
//                 style={{ backgroundColor: button.color }}
//               >
//                 {button.name}
//               </button>
//               <ListItemText
//                 primary={
//                   <Typography variant="body2">{button.label}</Typography>
//                 }
//                 className={classes.nestedText}
//               />
//             </ListItem>
//           ))}
//         </List>
//       )}

//       {open && item.children.length > 0 && (
//         <List disablePadding>
//           {item.children.map((child) => (
//             <>
//              {/* <div className={classes.treeLine} /> */}
//             <NestedListItem key={child.name} item={child} classes={classes} />
//             </>

//           ))}
//         </List>
//       )}
//     </>
//   );
// }

// export default function FolderStructure({ items }) {
//   const classes = useStyles();

//   return (
//     <div className="side-panel">
//       <ListItemText className={classes.headerText}>Files</ListItemText>

//       {folderData.map((folder) => (
//         <ListItem key={folder.label} button className={classes.folderItem}>

//           <button className="button-18">{folder.name}</button>
//           <ListItemText
//             primary={
//               <Typography variant="body2" className={classes.textFolders}>
//                 {folder.label}
//               </Typography>
//             }
//           />
//         </ListItem>
//       ))}
//       <List component="nav" aria-label="Folder structure">
//         {items.map((item) => (
//           <NestedListItem key={item.name} item={item} classes={classes} />
//         ))}
//       </List>
//     </div>
//   );
// }

import React, { useState } from "react";
import List from "@material-ui/core/List";
import FolderIcon from "@material-ui/icons/Folder";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#2e3a46",
    color: "#96a0aa",
  },
    folderItem: {
    paddingLeft: theme.spacing(4),
    // border :"solid pink",
    height:"3em",
    color:"#758089",
    fontWeight:700,
  },
    headerText: {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif",
    paddingLeft:"30px",
  },

  listItem: {
    position: "relative",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    // border:"solid pink",
    padding:"3em",
    width:"100%"
  },
  listItemText: {
    // color: theme.palette.grey[500],
    color:"#758089",
    fontSize:"50px",
  },
  listItemHeader: {
    color: theme.palette.grey[500],
    fontWeight:600,
  },
  refreshContainer: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.grey[500],
    marginBottom: theme.spacing(1),
    lineHeight: 0.5,
  },
  refreshText: {
    marginLeft: theme.spacing(1),
    color: "grey",
  },
  refreshIcon: {
    color: theme.palette.grey[500],
  },
  eyeIcon: {
    color: "grey",
    paddingLeft: "1em",
  },
}));
const folderData = [
  { name: "Config", label: "dataform" },
  { name: "Config", label: "package-lock" },
  { name: "Config", label: "package" },
];

const FileTreeItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleExpandClick} className={classes.listItem}>
        <ListItemIcon>
          <FolderIcon style={{ color: "grey" }} />
        </ListItemIcon>
        <ListItemText
          primary={item.name}
          classes={{ primary: classes.listItemHeader }}
        />
      </ListItem>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.children &&
            item.children.map((child, index) => (
              <FileTreeItem key={index} item={child} />
            ))}
          {item.buttons &&
            item.buttons.map((button, index) => (
              <ListItem
                button
                key={index}
                className={classes.listItem}
              >
                <ListItemIcon>
                <button
                className="button-18"
                style={{ backgroundColor: button.color, width:"50px"}}
              >
                {button.name}
              </button>
                </ListItemIcon>
                <ListItemText
                  primary={button.label}
                  className={classes.listItemText}
                />
              </ListItem>
            ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

const FolderStructure = ({ items }) => {
  const classes = useStyles();

  return (
    <div className="side-panel">
      <ListItemText className={classes.headerText}>Files</ListItemText>

      {folderData.map((folder) => (
        <ListItem key={folder.label} button className={classes.folderItem}>
          <button className="button-18">{folder.name}</button>
          <ListItemText
            primary={
              <p variant="body2" className={classes.textFolders}>
                {folder.label}
              </p>
            }
          />
        </ListItem>
      ))}
      <List>
        {items.map((item, index) => (
          <FileTreeItem key={index} item={item} />
        ))}
      </List>
    </div>
  );
};

export default FolderStructure;

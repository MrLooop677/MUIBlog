import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { MenuItem, MenuList } from "@mui/material";
const styles = makeStyles({
  card: {
    marginBottom: "1rem",
  },
});
const Sidebar = (props) => {
  const classes = styles(props);
  return (
    <>
      <Card raised className={classes.card}>
        <CardContent>
          <Typography variant="h4" component="div" marginBottom={1}>
            About
          </Typography>

          <Typography variant="body2">
            lorem ipsum dolor sit amet, consectetufa-rotate-180 dolor sit amet,
            consectetur adipiscing elit sed diam lorem ipsum dolor sit amet,
            consectetufa-rotate-180 dolor sit amet, consectetur adipiscing elit
            sed diam lorem ipsum dolor sit amet, consectetufa-rotate-180 dolor
            sit amet, consectetur adipiscing elit sed diam
          </Typography>
        </CardContent>
      </Card>
      <Card raised>
        <CardContent>
          <Typography variant="h4" component="div" marginBottom={1}>
            Categories
          </Typography>
          <MenuList>
            <MenuItem>css</MenuItem>
            <MenuItem>Html</MenuItem>
            <MenuItem>Js</MenuItem>
            <MenuItem>React Js</MenuItem>
          </MenuList>
        </CardContent>
      </Card>
    </>
  );
};

export default Sidebar;

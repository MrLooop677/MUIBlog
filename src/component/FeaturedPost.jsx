import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const styles = makeStyles({
  root: {
    margin: "3rem auto",
    maxWidth: "70%",
    padding: "1rem",
    borderRadius: "2rem",
    backgroundColor: "#555",
    color: "#FFFFFF",
  },
});
const FeaturedPost = (props) => {
  const classes = styles(props);
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={4}>
        <Typography variant="h5" component="h5">
          Post Title goes here
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant="body1" component="p" gutterBottom>
          lorem ipsum dolor sit amet, consectetufa-rotate-180 dolor sit amet,
          consectetur adipiscing elit sed diam lorem ipsum dolor sit amet,
          consectetufa-rotate-180 dolor sit amet, consectetur adipiscing elit
          sed diam lorem ipsum dolor sit amet, consectetufa-rotate-180 dolor sit
          amet, consectetur adipiscing elit sed diam
        </Typography>
        <Button color="success" variant="contained">
          Learn more...
        </Button>
      </Grid>
    </Grid>
  );
};

export default FeaturedPost;

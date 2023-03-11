import React from "react";
import WindowIcon from "@mui/icons-material/Window";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = ({ onChange }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid
            container
            justifyContent={matches ? "center" : "space-around"}
            alignItems={matches ? "center" : "space-around"}
            direction={matches ? "column" : "row"}
          >
            <Grid item container alignItems="center" xs="auto">
              <IconButton
                color="inherit"
                sx={{ textDecoration: "none" }}
                as={Link}
                to="/"
              >
                {" "}
                <WindowIcon />
              </IconButton>
              <Typography variant="body1">Home</Typography>
            </Grid>
            <Grid
              item
              container
              flexWrap="wrap"
              alignItems="center"
              xs="auto"
              justifyContent={matches ? "center" : "start"}
            >
              <Button
                sx={{ textDecoration: "none" }}
                as={Link}
                to="/SinglePage"
                color="inherit"
              >
                About
              </Button>
              <Button sx={{ textDecoration: "none" }} as={Link} to="/addpost" color="inherit">Add Post</Button>
              <Button color="inherit">Contact Us</Button>
              <Button color="inherit">Contact me</Button>
              <Switch defaultChecked onChange={onChange} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
